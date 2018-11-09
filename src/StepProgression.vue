<template>
  <div class="steps">
    <div class="steps-line"></div>
    <div 
      v-for="step in steps" 
      :key="step"
      :style="calculateStepColor(step)"
      :v-model="currentStep + step" 
      class="step">
    </div>
  </div>
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

  methods: {
    calculateStepColor(step) {
      if (step === this.currentStep) {
        return {
          backgroundColor: this.currentStepColor 
        }
      } else {
        return {
          backgroundColor: this.defaultColor
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
  background-color: #e8eaf1;
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
