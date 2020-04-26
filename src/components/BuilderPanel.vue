<template>
    <h2>{{ cake }}</h2>
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