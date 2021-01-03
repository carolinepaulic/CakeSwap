<template>
    <div>
        <div v-for="i in cake.numLayers" style="margin-bottom: 20px;">
            <p>Layer {{ i }}</p>
            <p>Cake flavor: {{ cake.cakeFlavor }}, Filling: {{ cake.filling || 'none'}}, Frosting: {{ cake.frosting }}</p>
        </div>
        <p>Toppings: <span v-for="(topping, index) in cake.toppings">{{ topping.displayName }}<span v-if="index !== cake.toppings.length -1">, </span></span></p>
    </div>
</template>

<script>
export default {
  name: 'BuilderPanel',
  props: {
    cake: {
      required: true,
      type: Object,
    }
  },
};
</script>