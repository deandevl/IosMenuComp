/**
 * Created by Rick on 2017-12-22.
 */


'use strict';
import AboutComp from './components/AboutComp.vue';
import CoinsComp from './components/CoinsComp.vue';
import HomeComp from './components/HomeComp.vue';

export const coin_routes = [
  {path: '/', component: HomeComp, name: 'Home', icon: '&#9751', heading: null},
  {path: '/bitcoin', component: CoinsComp, props: {coin_type:'bitcoin'}, name: 'Bitcoin', icon: '&#36', heading: 'Coin Types'},
  {path: '/ethereum', component: CoinsComp, props: {coin_type:'ethereum'}, name: 'Ethereum', icon: '&#36', heading: null},
  {path: '/about', component: AboutComp, name: 'About', icon: '&#63', heading: null}
];
