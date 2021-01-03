<template>
    <div class="totalPanel">
        <p>Total: {{ total | formatCurrency }}</p>
    </div>
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
    total() {
      if (!this.cake.cakeFlavor || !this.cake.frosting) {
        return 0;
      }

      // Basics: cake + frosting
      let total = this.cake.cakeFlavor.price + this.cake.frosting.price;
      if (this.cake.filling) {
        total += this.cake.filling.price;
      }

      // Add up for each layer
      total *= this.cake.numLayers;

      // Add toppings if applicable
      for (let i = 0; i < this.cake.toppings.length; i++) {
        total += this.cake.toppings[i].price;
      }

      return total;
    },
  },
  filters: {
    formatCurrency: formatCurrency,
  },
}
</script>
