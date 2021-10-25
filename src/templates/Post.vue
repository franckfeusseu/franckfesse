<template>
    <Layout>
        <header class="title">
            <h1>{{ $page.post.title }}</h1>
            <p>Published on: {{ $page.post.date }}</p>
        </header>
        <div>
            <g-link
             :to="tag.path"
             v-for="tag in $page.post.tags"
             :key="tag.id"
             class="tag"
            >
              {{ tag.title }}
            </g-link>
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
            date (format: "MMMM D, YYYY h:mma") 
            content
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
</style>