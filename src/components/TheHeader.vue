<template>
    <header class="header">
       <strong>
           <g-link class="nav__link" to="/">{{ $static.metadata.siteName }} </g-link>
      </strong>  
      <nav class="nav">
        <g-link class="nav__link" to="/projects/">Projects</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>

      </nav>
    </header>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    props: ['sitename']
    
}
</script>

<style scoped>
 .header{
   padding: 2rem;
 }
</style>