<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <p>{{ $page.blogPost.date }}</p>
    <div v-html="$page.blogPost.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  blogPost (path: $path) {
    title
    content
    date (format: "MMM Do YYYY")
    tags
  }
}
</page-query>
