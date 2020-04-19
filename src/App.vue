<template>
  <div id="app">
    <estimate-panel />
    <builder-panel />
  </div>
</template>

<script>
import EstimatePanel from './components/EstimatePanel';
import BuilderPanel from './components/BuilderPanel';

export default {
  name: 'app',
  components: {
    EstimatePanel,
    BuilderPanel,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import './resources/scss/app';
</style>
