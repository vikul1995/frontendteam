<script>

import CoverPhoto from '@/components/CoverPhoto';
export default {
    components: {
        CoverPhoto 
    }

};
</script>
<template>
<div> 
     <CoverPhoto />
     <router-view />
</div>
</template>