<template>
    <div class="cakeLayer" :style="cakeLayerStyle">
        <div class="filling" :style="fillingStyle"></div>
        <div class="layerInner" :style="layerInnerStyle">
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
    size: {
      type: DisplayItem,
      required: true,
    },
  },
  data() {
    return {
      fillingHeight: 10,
    };
  },
  computed: {
    cakeHeight() {
      return 60 + (this.widthInInches * 3);
    },
    cakeWidth() {
      return this.widthInInches * 10;
    },
    cakeLayerStyle() {
      return {
        backgroundColor: this.frosting.color,
        height: this.px(this.cakeHeight + this.fillingHeight + this.frostingHeight),
        margin: 'auto',
        paddingTop: this.px(this.frostingHeight),
        paddingLeft: this.px(this.frostingWidth),
        paddingRight: this.px(this.frostingWidth),
        paddingBottom: 0,
        width: `${this.cakeWidth}%`,
      };
    },
    fillingStyle() {
        return {
          backgroundColor: this.filling ? this.filling.color : 'transparent',
          height: this.px(this.fillingHeight),
        }
    },
    frostingHeight() {
      return this.frostingWidth * .6;
    },
    frostingWidth() {
        return 2 * this.widthInInches;
    },
    layerInnerStyle() {
        return {
          backgroundColor: this.cake.color,
          height: this.px(this.cakeHeight),
        };
    },
    widthInInches() {
      return this.size.name;
    },
  },
  methods: {
    px(number) {
      return `${number}px`;
    },
  }
}
</script>
