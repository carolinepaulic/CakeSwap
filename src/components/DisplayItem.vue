<template>
    <div class="col-xs-3">
        <div style="float: left;">
            <label>
                <input
                    type="checkbox"
                    v-model="item.isSelected"
                    :value="item.name"
                    v-on:click="onClick"
                    v-on:change="onChange"
                >{{ item.displayName }}
            </label>
        </div>
    </div>
</template>

<script>
  import DisplayItem from '../data/display-item';
  import { EventBus } from '../utils/event-bus';

  export default {
    name: 'DisplayItem',
    props: {
      allowUnselect: {
        default: true,
      },
      item: {
        required: true,
        type: DisplayItem,
      },
      onSelectEventName: {
        required: false,
        type: String,
      }
    },
    methods: {
      onChange() {
        EventBus.$emit(this.onSelectEventName, this.item);
      },
      onClick(e) {
        // If unselect is not allowed, and item is already selected, block this event
        if (!this.allowUnselect && this.item.isSelected) {
          e.preventDefault();
        }
      }
    }
  }
</script>