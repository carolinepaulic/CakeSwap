<template>
    <div>
        <display-category
            title="Size"
            :display-items="sizes"
            :is-single-select="true"
            :required="true"
        ></display-category>
        <display-category
            title="Cake"
            :display-items="cakes"
            :is-single-select="true"
            :required="true"
        ></display-category>
        <display-category
            title="Frosting"
            :display-items="frostings"
            :is-single-select="true"
            :required="true"
        ></display-category>
        <display-category
            title="Filling"
            :display-items="fillings"
            :is-single-select="true"
            :required="false"
        ></display-category>
        <display-category
            title="Toppings"
            :display-items="toppings"
            :is-single-select="false"
            :required="false"
            class="last"
        ></display-category>
        <total-panel
            :cake="cake"
            class="row col-md-8"/>
    </div>
</template>

<script>
import { EventBus, EVENTS } from '../utils/event-bus';
import DisplayCategory from './DisplayCategory';
import cakes from '../data/cakes';
import fillings from '../data/fillings';
import frostings from '../data/frostings';
import sizes from '../data/sizes';
import TotalPanel from './TotalPanel';
import toppings from '../data/toppings';

export default {
  name: 'Estimate-Panel',
  components: {
    TotalPanel,
    DisplayCategory,
  },
  props: {
    cake: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      cakes: cakes,
      fillings: fillings,
      frostings: frostings,
      sizes: sizes,
      toppings: toppings,
      EVENTS: EVENTS,
    }
  },
}
</script>