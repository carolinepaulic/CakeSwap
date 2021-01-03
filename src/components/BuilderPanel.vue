<template>
    <div class="finalProductWrapper">
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <p>Toppings: <span v-for="(topping, index) in cake.toppings">{{ topping.displayName }}<span v-if="index !== cake.toppings.length -1">, </span></span></p>
            <CakeLayer  v-for="i in cake.numLayers" :cake="cake.cakeFlavor" :filling="cake.filling" :frosting="cake.frosting" />
        </div>
    </div>
</template>

<script>
import CakeLayer from './CakeLayer';

export default {
  name: 'BuilderPanel',
  components: {
    CakeLayer,
  },
  props: {
    cake: {
      required: true,
      type: Object,
    }
  },
  computed: {
    loading() {
      if (this.cake.cakeFlavor && this.cake.frosting) {
        return false;
      }
      return true;
    },
  }
};
</script>