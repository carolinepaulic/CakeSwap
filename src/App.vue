<template>
  <div id="app" class="row">
    <div class="col-md-5">
      <builder-panel />
    </div>
    <div class="col-md-7">
      <estimate-panel />
    </div>
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
}
</script>

<style lang="scss">
  @import 'resources/css/bootstrap.css';
  @import 'resources/scss/app';
</style>
