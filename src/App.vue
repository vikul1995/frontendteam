<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
    
    
  },
 

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>
