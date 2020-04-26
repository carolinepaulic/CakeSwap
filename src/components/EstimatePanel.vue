<template>
    <div>
        <display-category title="Cakes" :display-items="cakes"></display-category>
        <display-category title="Frostings" :display-items="frostings"></display-category>
        <display-category title="Fillings" :display-items="fillings"></display-category>
        <display-category title="Toppings" :display-items="toppings"></display-category>
    </div>
</template>

<script>
import DisplayCategory from './DisplayCategory';
import cakes from '../data/cakes';
import fillings from '../data/fillings';
import frostings from '../data/frostings';
import toppings from '../data/toppings';

export default {
    name: 'Estimate-Panel',
    components: {
        DisplayCategory,
    },
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