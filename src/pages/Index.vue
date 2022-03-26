<template>
  <Layout>
    <h1>Blog</h1>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post"
            :to="post.node.path"
        >
           <v-card class="post">
             <v-img
              height="100"
               src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
             ></v-img>
            <v-card-text>
                <h3>
                    <b class="post-title">{{ post.node.title }}</b>
                </h3>
                <div v-html="post.node.description"></div>
                <p>Date: {{ post.node.date }}</p>
            </v-card-text>
           </v-card>            
      </v-flex>
    </v-layout>
     
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<page-query>
    query {
        posts: allPost {
            edges {
                node {
                    id 
                    title
                    description 
                    path 
                    date(format: "MMMM D, YYYY")
                } 
            } 
        } 
    }
</page-query>

<style lang="scss" scoped>
  
</style>