<template>
    <div style="text-align: left;" class="row">
        <h2>{{ title }}</h2>
        <display-item v-for="displayItem in displayItems" :item="displayItem"></display-item>
    </div>
</template>

<script>
import DisplayItem from './DisplayItem';
export default {
    name: 'DisplayCategory',
    components: {
      DisplayItem,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      displayItems: {
        type: Array,
        required: true,
      }
    }
}
</script>