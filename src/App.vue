<template>
  <div id="app" class="row">
    <div class="col-md-5">
      <builder-panel :cake="finalProduct.cake"/>
    </div>
    <div class="col-md-7">
      <estimate-panel :cake="finalProduct.cake"/>
    </div>
  </div>
</template>

<script>
import { EventBus, EVENTS } from './utils/event-bus';
import BuilderPanel from './components/BuilderPanel';
import EstimatePanel from './components/EstimatePanel';
import FinalProduct from './data/final-product';

export default {
  name: 'app',
  components: {
    BuilderPanel,
    EstimatePanel,
  },
  data() {
    return {
      finalProduct: new FinalProduct(),
    };
  },
  beforeMount() {
    const vm = this;
    EventBus.$on(EVENTS.cake.update, function(selectedItems) {
      vm.finalProduct.cake.cakeFlavor = selectedItems[0];
    });

    EventBus.$on(EVENTS.frosting.update, function(selectedItems) {
      vm.finalProduct.cake.frosting = selectedItems[0];
    });

    EventBus.$on(EVENTS.filling.update, function(selectedItems) {
      // doing single select for now, can update to multi later
      const selectedItem = selectedItems[0];
      vm.finalProduct.cake.filling = selectedItem.isSelected ? selectedItem : null;
    });

    EventBus.$on(EVENTS.toppings.update, function(selectedItems) {
      vm.finalProduct.cake.toppings = selectedItems;
    });
  }
}
</script>

<style lang="scss">
  @import 'resources/css/bootstrap.css';
  @import 'resources/scss/app';
</style>
