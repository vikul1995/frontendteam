<template>
<div id="gist1" style="width:198px; border:1px solid #2d6ab4;height:auto;background-color:#ffffff;font-family:Arial;">
  <div style="background-color:#2d6ab4;height:24px;width:100%; margin:0 auto;font-size:18px; font-weight:bold;text-align:center; padding-top:0px;">
  <a href="https://www.oilcrudeprice.com/" rel="nofollow" style="color:#ffffff;text-decoration:none;">Brent Oil Price</a>
  </div>
</div>
</template> 
<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {  
  name: 'Gist-Example',
  mounted: function () {
    postscribe('#gist1', `<script src="https://www.oilcrudeprice.com/oilwidget.php?l=en&m=000000&g=ffffff&c=2d6ab4&i=ffffff&l=2d6ab4&o=e6f2fa&u=brent"><\/script>`)
  }
}
</script>