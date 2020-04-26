<template>
    <h1>yo</h1>
</template>

<script>
import cakes from '../data/cakes';
import fillings from '../data/fillings';
import frostings from '../data/frostings';
import toppings from '../data/toppings';

  export default {
    name: 'Estimate-Panel',
    data() {
      return {
        cakes: cakes,
        fillings: fillings,
        frostings: frostings,
        toppings: toppings,
      }
    },
  }
</script>