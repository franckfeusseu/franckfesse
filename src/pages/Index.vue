<template>
  <Layout>
    <h1>Blog</h1>
     <g-link
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post"
            :to="post.node.path"
        >
            <div class="post">
                <h3>
                    <b class="post-title">{{ post.node.title }}</b>
                </h3>
                <div v-html="post.node.description"></div>
                <p>Date: {{ post.node.date }}</p>
            </div>
        </g-link>
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