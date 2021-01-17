import Vue from 'vue';

const EventBus = new Vue();
const EVENTS = {
  cake: {
    itemSelected: 'Cake:itemSelected',
    update: 'Cake:update',
  },
  filling: {
    itemSelected: 'Filling:itemSelected',
    update: 'Filling:update',
  },
  frosting: {
    itemSelected: 'Frosting:itemSelected',
    update: 'Frosting:update',
  },
  size: {
    itemSelected: 'Size:itemSelected',
    update: 'Size:update',
  },
  toppings: {
    itemSelected: 'Toppings:itemSelected',
    update: 'Toppings:update',
  },
};


export { EventBus, EVENTS };