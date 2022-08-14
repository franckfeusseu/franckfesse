<template>
    <Layout>
        <header class="title">
            <h1>{{ $page.post.title }}</h1>
        </header>
        <div class="tag-container">
            <div class="publication">
              <p>Published on: {{ $page.post.date }}</p>
            </div>
            <div class="tags">
               <g-link
             :to="tag.path"
             v-for="tag in $page.post.tags"
             :key="tag.id"
             class="tag"
            > 
              #
              {{ tag.title }}
            </g-link>
            </div>
        </div>
        <main class="content" v-html="$page.post.content"></main>
    </Layout>
</template>

<page-query>
    query Post($path: String!) {
        post: post(path: $path) {
            id
            title
            path
            description
            date (format: "MMMM D, YYYY")
            content
            image {
              path
              caption
              alt
            }
            tags {
                title
                path
            }
        }
    }
</page-query>

<style scoped>
    .title {
        text-align: center;
    }
    .tag {
        color: grey;
        text-decoration: none;
    }
    .cover-image {
        display: flex;
        justify-content: center;
        width: 500px;
        height: 500px;
    }
    .tag-container {
        display: flex;
        justify-content: center;
        margin: 2rem;
    }
    .tag {
        margin: 1rem;
    }

</style>
