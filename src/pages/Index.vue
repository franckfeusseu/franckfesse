<template>
  <Layout>
     <v-card
            v-for="post in $page.posts.edges"
            :key="post.id"
            :to="post.node.path"
            class="my-6 px-4"
        >
            <div class="post">
                <h3>
                  <g-link :to="post.node.path" class="post-title">{{ post.node.title }}</g-link>
                </h3>
                <div v-html="post.node.description"></div>
                <div class="DateTags">
                  <p>{{ post.node.date }}</p>
                  <div class="tags">
                    <v-chip label v-for="tag in post.node.tags" :key="tag.title" class="ma-2" color="red" text-color="white">
                         <v-icon left> mdi-label</v-icon>
                        {{tag.title}}
                    </v-chip>
                  </div>
                </div>
              </div>
              <v-divider></v-divider>
     </v-card>
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
.post-title{
  text-decoration: none;
  color: aqua;
}

.DateTags{
    display: flex;
    justify-content: space-between;
}

.tags {
    display: flex;
    justify-content: space-between;
}

.tagItem {
    margin-left: 0.5rem;
}
</style>