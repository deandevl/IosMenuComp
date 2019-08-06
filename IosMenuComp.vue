<template>
  <div class="iosMenuComp">
    <section class="iosMenuComp_triggerSec" v-on:click="trigger_menu">
      <div class="iosMenuComp_triggerIcon"></div>
    </section>
    <section class="iosMenuComp_iosSec">
      <ul class="iosMenuComp_list">
        <section class="iosMenuComp_listSec" :style="menu_style">
          <li class="iosMenuComp_itemParent" v-for="(route,index) in routes" :key="index">
            <div :class="{iosMenuComp_itemBar: route.heading}"></div>
            <div class="iosMenuComp_itemHeading" v-if="route.heading">{{route.heading}}</div>
            <div class="iosMenuComp_itemBox">
              <span class="iosMenuComp_itemIcon" v-if="route.icon" v-html="route.icon"></span>
              <span><router-link :to="route.path">{{route.name}}</router-link></span>
            </div>
          </li>
        </section>
      </ul>
      <router-view class="iosMenuComp_itemView"></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'IosMenuComp',
    data(){
      return {
        is_open: false,
        menu_style: 'width: 0; transition: all 3s; opacity: 0;'
      }
    },
    props: {
      routes: {
        type: Array,
        default: () => {
          return [];
        }
      },
      css_variables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    methods: {
      trigger_menu: function(){
        if(!this.is_open){
          this.is_open = true;
          this.menu_style = 'width: 100%; transition: all 3s; opacity: 1.0;';
        }else {
          this.is_open = false;
          this.menu_style = 'width: 0; transition: all 3s; opacity: 0;';
        }
      }
    },
    mounted(){
      if(this.css_variables !== null){
        for(let key of Object.keys(this.css_variables)){
          this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
        }
      }
    }
  }
</script>

<style lang="less">
  :root {
    --ios_menu_comp_font_family: Verdana,serif;

    --ios_menu_comp_trigger_icon: '\2630';
    --ios_menu_comp_trigger_background_color: #dfe5eb;
    --ios_menu_comp_trigger_color: black;

    --ios_menu_comp_background: transparent;
    --ios_menu_comp_border: 1px solid black;

    --ios_menu_comp_menuitem_color: black;
    --ios_menu_comp_menuitem_font_size: .7rem;
    --ios_menu_comp_menuitem_icon_color: black;
    --ios_menu_comp_menuitem_bar_color: black;
  }

  .iosMenuComp {
    height: 100%;
    font-family: var(--ios_menu_comp_font_family);

    &_triggerSec {
      background-color: var(--ios_menu_comp_trigger_background_color);
      width: 38px;
      height: 38px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 300ms;
      margin: .5rem 0 .5rem .5rem;
    }

    &_triggerIcon::before {
      content: var(--ios_menu_comp_trigger_icon);
      display: inline-block;
      color: var(--ios_menu_comp_trigger_color);
      background-color: var(--ios_menu_comp_trigger_background_color);
      font-size: 1.8rem;
      margin-left: .4rem;
      cursor: pointer;
    }

    &_iosSec {
      display: flex;
      flex-direction: row;
    }

    &_list {
      margin: 0 1.2rem 0 .5rem;
      padding: 0;
      list-style: none;
    }

    &_listSec {
      background: var(--ios_menu_comp_background);
      border: var(--ios_menu_comp_border);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0 .5rem 0 .5rem;
    }

    &_itemParent {
      display: flex;
      flex-direction: column;
      color: var(--ios_menu_comp_menuitem_color);
      font-size: var(--ios_menu_comp_menuitem_font_size);
      padding: .5rem 0;
    }

    &_itemBar {
      width: 100%;
      border-top-width: 1px;
      border-top-style: solid;
      border-top-color: var(--ios_menu_comp_menuitem_bar_color);
    }

    &_itemHeading {
      margin-top: .5rem;
      font-weight: bolder;
      color: var(--ios_menu_comp_menuitem_color);
    }

    &_itemBox {
      display: flex;
      flex-direction: row;
      cursor: pointer;

      a {
        text-decoration: none;
        color: var(--ios_menu_comp_menuitem_color)
      }
    }

    &_itemIcon {
      margin-right: .3rem;
      color: var(--ios_menu_comp_menuitem_icon_color);
    }

    &_itemView {
      margin-left: 1rem;
    }
  }
</style>