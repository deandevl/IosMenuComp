## ios-menu-comp

**ios-menu-comp** is a Vue.js (version >= 2.5) web component based on client-side navigation.  It provides an open/closed menu of local routing links to  an application's html pages. 

**ios-menu-comp** depends on the [vue.js](https://vuejs.org/ "Vue.js") framework and [vue-router](https://router.vuejs.org/en/vue-router) .  The dependencies can be installed via [npm install](https://docs.npmjs.com/cli/install.html "npm install") with the included `package.json` file. Three [webpack](https://webpack.js.org/concepts/) npm scripts are included for building  development, production, or hot recompile/execute of the demo.   `build-dev` and `build-prod` scripts produce  a `dist` folder containing the `index.html`.  The size of the `main.js` bundle using `build-prod` is 35 KiB along with calling a CDN for incorporating the Vue framework.

## Props

A prop in Vue.js is a custom attribute for passing information from a parent component hosting **ios-menu-comp** instance(s) to an **ios-menu-comp** as a child component.   **ios-menu-comp** has the following prop for a parent to bind and send information to:

`css_variables` -- defines the css variables for quick, easy styling of  **ios-menu-comp** (object, default: null)

`routes` -- an array of objects that defines the linkage/paths from the menu items to other local Vue.js web components (array, default: []).  Each object in the array defines a specific menu item with a specific path and is broken out as follows:

```
{
  path: '/bitcoin'		        //the local url path for the menu item
  component: CoinComp	        //the component to be displayed when the menu item is clicked
  props: {coin_type:'bitcoin'}  //any props that the component requires
  name: Bitcoin		           //the name of the menu item
  icon: '&#36'                 //the html character code icon positioned before the item's name
  heading: 'Coin Types'        //the heading to be placed above the menu item; can be null
}
```

At a minimum `path`, `component`, and `name` should be defined.

## Styling

The **css_variables** prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of  **ios-menu-comp** .  The following list is the css variable names along with their default values:

```
 {  
    ios_menu_comp_font_family: 'Verdana,serif',

    ios_menu_comp_trigger_icon: '\2630',
    ios_menu_comp_trigger_background_color: '#dfe5eb',
    ios_menu_comp_trigger_color: 'black'

    ios_menu_comp_background: 'transparent',
    ios_menu_comp_border: '1px solid black',

    ios_menu_comp_menuitem_color: 'black',
    ios_menu_comp_menuitem_font_size: '.7rem',
    ios_menu_comp_menuitem_icon_color: 'black',
    ios_menu_comp_menuitem_bar_color: 'black'
 }
```

As an example you could bind the following object to an instance of **ios-menu-comp** to set the menu's background and menu item color:

```
{ios_menu_comp_background: 'brown', ios_menu_comp_menuitem_color: 'gold'}
```

Note that multiple **ios-menu-comp**  children of the parent can each be bound to a unique set of `css_variable` prop objects. To enforce the same styling across all **ios-menu-comp**  children, simply  bind just one `css_variable` prop object to all the  **ios-menu-comp**  children.

## Events

There are no events defined for **ios-menu-comp** .

## Demonstration

A demonstration of **ios-menu-comp** is provided in the [IosMenuComp](https://github.com/deandevl/IosMenuComp) repository by hosting the `index.html` file under the `dist` folder.  The parent component (templated in the`App.vue` file) defines a menu with four menu items and their associated paths to Vue.js components `HomeComp`, `CoinsComp`(2), and`AboutComp`.  We can navigate among all four of the menu items from the main menu.  The application itself uses the javascript `fetch` method to get the current exchange rates for Bitcoin and Ethereum at the [coin market site]( https://coinmarketcap.com).

As a suggestion, install [http-server](https://www.npmjs.com/package/http-server "http-server") globally via [npm](https://www.npmjs.com/ "npm") then enter the command `http-server`in the **ios-menu-comp** `dist` directory.  From a browser enter the url: `localhost:8080/` to view the demo.

 Here is some example code for using **ios-menu-comp**  taken from the `App.vue` file :

```
import {IosMenuComp} from '../IosMenuComp.js';
import {coin_routes} from "./coin_routes.js";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: coin_routes
});

const vue_instance = new Vue({
  el: '#app',
  template: `
    <div class='demo_container'>
      <ios-menu-comp
        :routes="coin_routes">
      </ios-menu-comp>
    </div>
  `,
  router,
  data() {
    return {
      coin_routes: coin_routes,
    }
  },
  components: {
    IosMenuComp
  }
});
```

The `coin_routes.js` module file exports the `coin_routes` array that is defined as follows:

```
import {HomeComp} from "./components/HomeComp.js";
import {CoinsComp} from "./components/CoinsComp.js";
import {AboutComp} from "./components/AboutComp.js";

export const coin_routes = [
  {path: '/', component: HomeComp, name: 'Home', icon: '&#9751', heading: null},
  {path: '/bitcoin', component: CoinsComp, props: {coin_type:'bitcoin'}, name: 'Bitcoin', icon: '&#36', heading: 'Coin Types'},
  {path: '/ethereum', component: CoinsComp, props: {coin_type:'ethereum'}, name: 'Ethereum', icon: '&#36', heading: null},
  {path: '/about', component: AboutComp, name: 'About', icon: '&#63', heading: null}
];
```

Again, html character codes for the icons.  Note the assignment of `props` for the CoinsComp component.