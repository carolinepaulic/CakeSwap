<template>
    <PanelCollapsible class="totalPanel">
        <template slot="panelHeader">
            <p>Total: {{ total | currency }}</p>
        </template>
        <template slot="panelBody">
            <p>{{cake.cakeFlavor.displayName}} Cake .......................... {{ cake.cakeFlavor.price | currency}}</p>
            <p v-if="cake.filling">{{ cake.filling.displayName }} Filling ..................... {{ cake.filling.price | currency }}</p>
            <p>{{cake.frosting.displayName}} Buttercream .............. {{ cake.frosting.price | currency}}</p>
            <hr/>
            <p>.............................................. {{ this.layerPrice | currency }}</p>
            <p>........................................ x {{ cake.numLayers }} layers</p>
            <hr/>
            <p>............................................ {{ this.layerPrice * cake.numLayers | currency }}</p>
            <span v-if="cake.toppings.length > 0">
                <span v-for="topping in cake.toppings">
                    {{ topping.displayName }} Topping ......... {{ topping.price | currency }}
                </span>
            </span>
            <hr/>
            <p>Total ................................... {{ total | currency }}</p>
        </template>
    </PanelCollapsible>

</template>

<script>
import formatCurrency from '../utils/format-currency';
import PanelCollapsible from './PanelCollapsible';

export default {
  name: 'TotalPanel',
  components: {PanelCollapsible},
  props: {
    cake: {
      type: Object,
      required: true,
    },
  },
  computed: {
    layerPrice() {
      if (!this.cake.cakeFlavor || !this.cake.frosting) {
        return 0;
      }

      // Basics: cake + frosting
      let total = this.cake.cakeFlavor.price + this.cake.frosting.price;
      if (this.cake.filling) {
        total += this.cake.filling.price;
      }

      return total;
    },
    total() {
      // Add up for each layer
      let total = this.layerPrice * this.cake.numLayers;

      // Add toppings if applicable
      for (let i = 0; i < this.cake.toppings.length; i++) {
        total += this.cake.toppings[i].price;
      }

      return total;
    },
  },
  filters: {
    currency: formatCurrency,
  },
}
</script>
