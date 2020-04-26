<template>
    <div class="col-xs-3">
        <div style="float: left;">
            <input type="checkbox" :value="item.name">{{ item.displayName }}
        </div>
    </div>
</template>

<script>
  import DisplayItem from '../data/display-item';

  export default {
    name: 'DisplayItem',
    props: {
      item: {
        required: true,
        type: DisplayItem,
      },
    }
  }
</script>