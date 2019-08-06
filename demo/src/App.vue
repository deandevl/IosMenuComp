<template>
  <div>
    <ios-menu-comp
      :routes="coin_routes"
      :css_variables="css_variables">
    </ios-menu-comp>
  </div>
</template>

<script>
  import IosMenuComp from 'iosmenucomp';
  import VueRouter from 'vue-router'
  import {coin_routes} from './coin_routes';

  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: coin_routes
  });

  export default {
    name: 'App',
    router,
    data() {
      return {
        coin_routes: coin_routes,
        css_variables: {
          ios_menu_comp_trigger_color: 'gold',
          ios_menu_comp_menuitem_icon_color: 'green'
        }
      };
    },
    components: {
      IosMenuComp
    }
  }
</script>