<template>
    <Layout>
        <h1>{{$page.tag.title}}</h1> 

        <li v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
          <g-link :to="post.node.path"> {{ post.node.title}}</g-link>
        </li>

    </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag: tag (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Post {
            title
            date (format: "MMMM D, Y")
            path
          }
        }
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo () {
    return {
      title: 'Tag: ' + this.$page.tag.title,
    }
  },
}
</script>