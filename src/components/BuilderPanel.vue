<template>
    <div>
        <div v-for="i in cake.numLayers" style="margin-bottom: 20px;">
            <p>Layer {{ i }}</p>
            <p>Cake flavor: {{ cake.cakeFlavor }}, Filling: {{ cake.filling || 'none'}}, Frosting: {{ cake.frosting }}</p>
        </div>
        <p>Toppings: {{ cake.toppings }} </p>
    </div>
</template>

<script>
  import { EventBus, EVENTS } from '../utils/event-bus';

  export default {
    name: 'BuilderPanel',
    props: {
      cake: {
        required: true,
        type: Object,
      }
    },
    mounted() {
    }
  }
</script>