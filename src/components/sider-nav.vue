<template>
  <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
    <Submenu :name="nav.id" v-for="nav in navConfig" :key="nav.index">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>{{nav.name}}
      </template>
      <MenuItem :name="navItem.id" v-for="navItem in nav.children" :key="navItem.index">{{navItem.name}}</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
import { navConfig } from "./nav-config";
export default {
  name: "sider-nav",
  data(){
    return {
      navConfig
    }
  }
};
</script>
