<script>

import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/FooterBar';
export default {
    components: {
        SideBar,  
        NavBar,
        FooterBar  
    }

};
</script>
<template>
<div>
    <nav-bar />
     <side-bar />
     <router-view />
     <footer-bar />
</div>
</template>