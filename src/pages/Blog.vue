<template>
  <Layout>
    <h1>Blog</h1>
    <u>
			<h2>Posts</h2>
		</u>
		<g-link
			v-for="post in $page.posts.edges"
			:key="post.id"
			class="post"
			:to="post.node.path"
		>
			<div class="post">
				<h3>
					<b>{{ post.node.title }}</b>
				</h3>
				<p>Date: {{ post.node.date }}</p>
			</div>
		</g-link>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
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
					path 
					date(format: "MMMM D, YYYY")
				} 
			} 
		} 
	}
</page-query>
