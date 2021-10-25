<template>
  <footer class="footer">
    <p class="social-icon">
      <font-awesome :icon="['fab', 'github']" class="social-icon-item"/>
      <font-awesome :icon="['fab', 'linkedin']" class="social-icon-item"/>
    </p>
    <div class="footer-copyrights">
      &copy;2021 Franck Fesse . All rights reserved 
    </div>
     
  </footer>  
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';
.footer {
  display: flex;
  flex-direction: column;

}
.social-icon {
  display: flex;
  justify-content: center;
}

.social-icon-item {
  margin: 1rem;
}

.footer-copyrights{
  display: flex;
  justify-content: center;
}
</style>