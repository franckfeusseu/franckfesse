<template>
  <div id="app">
    <v-app>
      <TheHeader class="mx-4"/>
      <v-main class="mx-16">
        <slot/>
      </v-main>  
      <TheFooter/> 
    </v-app>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';


export default {
    components : {
      TheHeader,
      TheFooter
    }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
 
 .content {
  min-height: 100vh;
  }

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}

a, a:visited, a:hover, a:active {
  color: inherit;
}




</style>
