<template>
  <footer class="footer">
    <p class="social-icon">
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        class="social-icon-item"
        :href="contact.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome :icon="[contact.style , contact.svg]" />
      </a>
    </p>
    <div class="footer-copyrights">
      &copy;{{ new Date().getFullYear() }} Franck Fesse . Powered by <a href="https://gridsome.org/" target="_blank" class="gridsome"> Gridsome</a>
    </div>
     
  </footer>  
</template>

<script>
    export default {
     data() {
       return{
         contacts: [
           {
             link: "mailto:me@franckfesse.com",
             style: 'fas',
             svg: "envelope"
           },
           {
             link: "https://github.com/franckfeusseu",
             style: 'fab',
             svg: "github"
           },
           {
             link: "https://linkedin.com/in/franckfesse",
             style: 'fab',
             svg: "linkedin"
           },
         ]
       }
     }   
    }
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

}
.social-icon {
  display: flex;
  justify-content: center;
}

.social-icon-item {
  margin: 1rem;

  &:hover {
    color: blue;
  }

  &:visited{
    color: grey;
  }
}


.footer-copyrights{
  display: flex;
  justify-content: center;
}

.footer-copyrights a{
  margin-left: 0.5rem;
  text-decoration: none;
}

.gridsome {
  color: green;
}
</style>