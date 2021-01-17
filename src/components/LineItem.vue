<template>
    <div class="flexRow">
        <div v-if="displayName">{{displayName}}</div>
        <div class="spacer"></div>
        <div>{{ price | currency}}</div>
    </div>
</template>

<script>
import formatCurrency from '../utils/format-currency';

export default {
  name: 'LineItem.vue',
  props: {
    displayName: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  filters: {
    currency: formatCurrency,
  },
}
</script>