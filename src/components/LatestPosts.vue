<template>
  <section>
    <h3>Latest Posts</h3>
    <article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
      <div v-html="edge.node.content" />
      <!-- <h4>Post Title</h4>
      <p>Here is some fake text for a post body summary.</p> -->
      <a href="#">Read More</a>
    </article>
  </section>
</template>

<static-query>
  query LatestPosts {
    allBlogPost {
      edges {
        node {
          id
          content
        }
      }
    }
  }
</static-query>
