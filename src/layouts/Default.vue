<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/posts">Posts</g-link>
      </nav>
    </header>
    <g-image v-if="background" :src="background" />
    <!-- <g-image src="~/assets/images/lucie.jpg" width="200" quality="100" /> -->
    <slot/>
    <LatestPosts/>
  </div>
</template>

<script>
import LatestPosts from '~/components/LatestPosts.vue';

export default {
  props: ['background'],
  components: {
    LatestPosts
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size: $baseFontSize;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
