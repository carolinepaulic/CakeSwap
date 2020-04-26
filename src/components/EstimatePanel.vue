<template>
    <div>
        <display-category
            title="Cake"
            :display-items="cakes"
            :update-event-name="EVENTS.cakeUpdate"
            :is-single-select="true"
            :required="true"
        ></display-category>
        <display-category
            title="Frosting"
            :display-items="frostings"
            :update-event-name="EVENTS.frostingUpdate"
            :is-single-select="true"
            :required="true"
        ></display-category>
        <display-category
            title="Filling"
            :display-items="fillings"
            :update-event-name="EVENTS.fillingUpdate"
            :is-single-select="true"
            :required="false"
        ></display-category>
        <display-category
            title="Toppings"
            :display-items="toppings"
            :update-event-name="EVENTS.toppingUpdate"
            :is-single-select="false"
            :required="false"
        ></display-category>
    </div>
</template>

<script>
import { EventBus, EVENTS } from '../utils/event-bus';
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
            EVENTS: EVENTS,
        }
    },
}
</script>