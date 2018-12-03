//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'StepProgression',

  props: {
    steps: {
      type: Number,
      default: 3
    },
    currentStep: {
      type: Number,
      default: 1
    },
    currentStepColor: {
      type: String,
      default: '#1c61b2'
    },
    defaultColor: {
      type: String,
      default: '#e7eaf0'
    }
  },

  data: function data() {
    return {
      widthInPercent: ""
    }
  },

  methods: {
    calculateStepColor: function calculateStepColor(step) {
      if (step === this.currentStep || this.currentStep > step) {
        return {
          backgroundColor: this.currentStepColor
        }
      } else {
        return {
          backgroundColor: this.defaultColor 
        }
      }
      
    }
  },

  computed: {
    calculateStepPercentage: function calculateStepPercentage() {
      return 100 / (this.steps - 1)
    }
  },

  watch: {
    currentStep: function currentStep(currentStep$1, prevStep) {
      var intialWidth = this.calculateStepPercentage;

      // all use cases should start on step 1, so we can do first width increase here
      if ((prevStep + 1) === 2) {
          this.$refs.stepProgressionLine.style = "width: " + intialWidth + "%";
          // increase intialWidth by itself after first step change
          this.widthInPercent = intialWidth + intialWidth;
      } else {
        this.$refs.stepProgressionLine.style = "width: " + (this.widthInPercent) + "%";
        this.widthInPercent = this.widthInPercent + intialWidth;
      }
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", [
    _c(
      "div",
      { staticClass: "steps" },
      [
        _c(
          "div",
          {
            staticClass: "steps-line",
            style: { backgroundColor: _vm.defaultColor }
          },
          [
            _c("div", {
              ref: "stepProgressionLine",
              staticClass: "step-progression-line"
            })
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.steps, function(step) {
          return _c("div", {
            key: step,
            staticClass: "step",
            class: "step" + step,
            style: _vm.calculateStepColor(step),
            attrs: { "v-model": _vm.currentStep + step }
          })
        })
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-05083850_0", { source: "\n.steps[data-v-05083850] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.steps-line[data-v-05083850] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n.step-progression-line[data-v-05083850] {\n  position: absolute;\n  top: 50%;\n  width: 0%;\n  height: 2px;\n  background-color: #1c61b2;\n}\n.step[data-v-05083850] {\n  justify-content: center;\n  align-items: center;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  z-index: 2;\n}\n", map: {"version":3,"sources":["/Users/paytonburdette/Documents/projects/vue-step-progression/src/StepProgression.vue"],"names":[],"mappings":";AAuFA;EACA,mBAAA;EACA,cAAA;EACA,+BAAA;CACA;AAEA;EACA,mBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;CACA;AAEA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,0BAAA;CACA;AAEA;EACA,wBAAA;EACA,oBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;CACA","file":"StepProgression.vue","sourcesContent":["<template>\n  <section>\n    <div class=\"steps\">\n      <div class=\"steps-line\" :style=\"{backgroundColor: defaultColor}\">\n        <div ref=\"stepProgressionLine\" class=\"step-progression-line\"></div>\n      </div>\n      <div \n        v-for=\"step in steps\" \n        :key=\"step\"\n        :style=\"calculateStepColor(step)\"\n        :v-model=\"currentStep + step\" \n        :class=\"`step${step}`\"\n        class=\"step\">\n      </div>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  name: 'StepProgression',\n\n  props: {\n    steps: {\n      type: Number,\n      default: 3\n    },\n    currentStep: {\n      type: Number,\n      default: 1\n    },\n    currentStepColor: {\n      type: String,\n      default: '#1c61b2'\n    },\n    defaultColor: {\n      type: String,\n      default: '#e7eaf0'\n    }\n  },\n\n  data() {\n    return {\n      widthInPercent: \"\"\n    }\n  },\n\n  methods: {\n    calculateStepColor(step) {\n      if (step === this.currentStep || this.currentStep > step) {\n        return {\n          backgroundColor: this.currentStepColor\n        }\n      } else {\n        return {\n          backgroundColor: this.defaultColor \n        }\n      }\n      \n    }\n  },\n\n  computed: {\n    calculateStepPercentage() {\n      return 100 / (this.steps - 1)\n    }\n  },\n\n  watch: {\n    currentStep(currentStep, prevStep) {\n      let intialWidth = this.calculateStepPercentage\n\n      // all use cases should start on step 1, so we can do first width increase here\n      if ((prevStep + 1) === 2) {\n          this.$refs.stepProgressionLine.style = `width: ${intialWidth}%`\n          // increase intialWidth by itself after first step change\n          this.widthInPercent = intialWidth + intialWidth\n      } else {\n        this.$refs.stepProgressionLine.style = `width: ${this.widthInPercent}%`\n        this.widthInPercent = this.widthInPercent + intialWidth\n      }\n    }\n  }\n}\n</script>\n\n<style scoped>\n.steps {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n\n.steps-line {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n.step-progression-line {\n  position: absolute;\n  top: 50%;\n  width: 0%;\n  height: 2px;\n  background-color: #1c61b2;\n}\n\n.step {\n  justify-content: center;\n  align-items: center;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  z-index: 2;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-05083850";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/paytonburdette/Documents/projects/vue-step-progression/src/StepProgression.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('StepProgression', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
