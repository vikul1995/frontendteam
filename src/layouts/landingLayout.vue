<script>
import FooterBar from "@/components/FooterBar";
import landingNav from '@/components/landingNav';
import landingContent from '@/components/landingContent';
export default {
    components: {
        landingNav,
        landingContent,
        FooterBar,
    }
};
</script>
<template>
    <div>
        <landing-nav/>
        <landing-content />
        <router-view />
        <footer-bar />
    </div>
</template>