<template>
    <div style="text-align: left;" class="row">
        <h2>{{ title }}</h2>
        <display-item
            v-for="displayItem in displayItems"
            :item="displayItem"
            :allow-unselect="!isSingleSelect"
            :on-select-event-name="itemSelectEventName"
        ></display-item>
    </div>
</template>

<script>
import { EventBus } from '../utils/event-bus';
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
      },
      isSingleSelect: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        selectedItems: [],
      };
    },
    computed: {
      itemSelectEventName() {
        return `${this.title}:itemSelected`;
      },
      updateEventName() {
        return `${this.title}:update`;
      },
    },
    methods: {
      onDisplayItemSelect(item) {
        let selectedItems = [];

        if (this.isSingleSelect) {
          selectedItems = [ item ];
          // If this is single choice, unselect all other options
          this.displayItems.forEach(function(displayItem) {
            if (displayItem.name !== item.name) {
              displayItem.isSelected = false;
            }
          });
        } else {
          this.displayItems.forEach(function(displayItem) {
            if (displayItem.isSelected) {
              selectedItems.push(displayItem);
            }
          });
        }

        this.selectedItems = selectedItems;
        EventBus.$emit(this.updateEventName, this.selectedItems);
      },
    },
    mounted() {
      const vm = this;
      EventBus.$on(this.itemSelectEventName, function(payload) {
        vm.onDisplayItemSelect(payload);
      });
    },
}
</script>