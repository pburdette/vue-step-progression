<template>
  <section>
    <div class="steps">
      <div class="steps-line" :style="{backgroundColor: defaultColor}">
        <div ref="stepProgressionLine" class="step-progression-line"></div>
      </div>
      <div 
        v-for="step in steps" 
        :key="step"
        :style="calculateStepColor(step)"
        :v-model="currentStep + step" 
        :class="`step${step}`"
        class="step">
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

  data() {
    return {
      widthInPercent: ""
    }
  },

  methods: {
    calculateStepColor(step) {
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
    calculateStepPercentage() {
      return 100 / (this.steps - 1)
    }
  },

  watch: {
    currentStep(currentStep, prevStep) {
      let intialWidth = this.calculateStepPercentage

      // all use cases should start on step 1, so we can do first width increase here
      if ((prevStep + 1) === 2) {
          this.$refs.stepProgressionLine.style = `width: ${intialWidth}%`
          // increase intialWidth by itself after first step change
          this.widthInPercent = intialWidth + intialWidth
          console.log(currentStep, prevStep)
      } else {
        if(currentStep <= this.steps) {
          this.$refs.stepProgressionLine.style = `width: ${this.widthInPercent}%`
          this.widthInPercent = this.widthInPercent + intialWidth
        }
      }
    }
  }
}
</script>

<style scoped>
.steps {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.steps-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
}

.step-progression-line {
  position: absolute;
  top: 50%;
  width: 0%;
  height: 2px;
  background-color: #1c61b2;
}

.step {
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  z-index: 2;
}
</style>
