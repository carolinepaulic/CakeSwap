<template>
    <div class="panelCollapsible" :class="collapseClass">
        <div class="panelHeader">
            <span class="collapseTrigger" v-on:click="onCollapseTriggerClick" :class="collapseClass"></span>
            <div class="panelHeaderInner">
                <slot name="panelHeader" />
            </div>
        </div>
        <transition name="slide">
            <div v-if="!collapsed" class="panelBody">
                <slot name="panelBody" />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'PanelCollapsible',
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    collapseClass() {
      return this.collapsed ? 'collapsed' : 'open';
    },
  },
  methods: {
    onCollapseTriggerClick() {
      this.collapsed = !this.collapsed;
    },
  },
}
</script>
