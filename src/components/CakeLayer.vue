<template>
    <div class="cakeLayer" :style="{ backgroundColor: this.frosting.color }">
        <div class="layerInner" :style="{ backgroundColor: this.cake.color }">
            <p>Cake flavor: {{ cake.displayName }}, Filling: {{ filling ? filling.displayName : 'none' }}, Frosting: {{ frosting.displayName }}</p>
        </div>
    </div>
</template>

<script>
import DisplayItem from '../data/display-item';

export default {
  name: 'CakeLayer',
  props: {
    cake: {
      type: DisplayItem,
      required: true,
    },
    filling: {
      type: DisplayItem,
      required: false,
    },
    frosting: {
      type: DisplayItem,
      required: true,
    },
  },
}
</script>
