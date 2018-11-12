# vue-step-progression
[![NPM version](https://img.shields.io/npm/v/vue-step-progression.svg?style=flat)](https://npmjs.com/package/vue-step-progression) [![NPM downloads](https://img.shields.io/npm/dm/vue-step-progression.svg?style=flat)](https://npmjs.com/package/vue-step-progression)

Easily build a multi-step checkout process with the vue-step-progression component.

## Install

``` npm i vue-step-progression ```

## See the demo
[![Edit vue-step-progression demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m46n5rwy3j)

## Basic Usage

```vue
<template>
  <step-progression :steps="10" :currentStep="3" defaultColor="#000" currentStepColor="#ccc" />
</template>

<script>
import StepProgression from 'vue-step-progression'

export default {
  components: {
    StepProgression
  }
}
</script>
```

## Available Props

|Name|Type|Default|Description|
|---|---|---|---|
|steps|Number|3|Number of steps|
|currentStep|Number|1|Current step location within steps|
|currentStepColor|String|#1c61b2|Color of the current step|
|defaultColor|String|#e7eaf0|Default color of each step|

