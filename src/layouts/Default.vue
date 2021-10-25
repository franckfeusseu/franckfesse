<template>
  <div class="layout">
    <TheHeader />
    <slot/>
    <TheFooter />
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

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}

.post {
    text-decoration: none;
  }
  .post:visited {
    color: black;
  }
  .post-title{
    color: aqua;
  }

</style>
