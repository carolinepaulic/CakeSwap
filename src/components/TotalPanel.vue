<template>
    <PanelCollapsible class="totalPanel">
        <template slot="panelHeader">
            <LineItem
                :display-name="'Total'"
                :price="total" />
        </template>
        <template slot="panelBody">
            <div style="width: 100%;">
                <LineItem
                    v-if="cake.cakeFlavor"
                    :display-name="`${cake.cakeFlavor.displayName} Cake`"
                    :price="cake.cakeFlavor.price * this.sizeMultiplier" />
                <LineItem
                    v-if="cake.filling"
                    :display-name="`${cake.filling.displayName} Filling`"
                    :price="cake.filling.price * this.sizeMultiplier" />
                <LineItem
                    v-if="cake.frosting"
                    :display-name="`${cake.frosting.displayName} Buttercream`"
                    :price="cake.frosting.price * this.sizeMultiplier" />

                <hr/>
                <LineItem
                    :display-name="'Price per Layer'"
                    :price="this.layerPrice" />
                <LineItem
                    :display-name="`x ${cake.numLayers} layers`"
                    :price="baseTotal" />

                <hr v-if="cake.toppings.length > 0"/>
                <LineItem
                    v-for="topping in cake.toppings"
                    :display-name="`+ ${topping.displayName}`"
                    :price="topping.price" />

                <hr/>
            </div>
        </template>
    </PanelCollapsible>

</template>

<script>
import formatCurrency from '../utils/format-currency';
import LineItem from './LineItem';
import PanelCollapsible from './PanelCollapsible';

export default {
  name: 'TotalPanel',
  components: {
    LineItem,
    PanelCollapsible,
  },
  props: {
    cake: {
      type: Object,
      required: true,
    },
  },
  computed: {
    baseTotal() {
      return this.layerPrice * this.cake.numLayers;
    },
    layerPrice() {
      if (!this.cake.cakeFlavor || !this.cake.frosting) {
        return 0;
      }

      let total = this.cake.cakeFlavor.price + this.cake.frosting.price;
      if (this.cake.filling) {
        total += this.cake.filling.price;
      }

      return total * this.sizeMultiplier;
    },
    sizeMultiplier() {
      return this.cake.size.name * .1;
    },
    total() {
      let total = this.baseTotal;

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
