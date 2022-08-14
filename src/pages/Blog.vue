<template>
  <Layout>
    <div class="blog-list-container">
      <h1 class="blog">Articles</h1>
      <div
            v-for="post in $page.posts.edges"
            :key="post.id"
            :to="post.node.path"
        >
            <div class="post">
                <g-link :to="post.node.path" class="blog-post-title">{{ post.node.title }}</g-link>
                <div v-html="post.node.description"></div>
                <p class="blog-post-date">Date: {{ post.node.date }}</p>
            </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog',
    meta: [
        {
       name: 'Keywords',
       content: 'Python aws django devops'
      }
    ]
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
                    tags {
                      title
                      path
                    }
                }
            }
        }
    }
</page-query>

<style lang="scss" scoped>
  .blog {
    font-size: 2em;
  }

  .blog-list-container {
    width: 75%;
    margin: auto;

  }
  .blog-post-title {
    color: black;
    text-decoration: none;
    font-size: 2em;
  }
  .blog-post-title:hover {
    color: blue;
  }
  .blog-post-date {
    color: grey;
  }
</style>
