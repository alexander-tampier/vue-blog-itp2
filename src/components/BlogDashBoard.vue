<template>
<div class="blog-dashboard">
  <div class="row">
    <!-- s12 for mobile -->
    <div class="col s12 m4" v-for="post in posts" v-bind:key="post._id">
      <div class="card medium">
        <div class="card-image">
          <router-link :to="{ name: 'BlogPost', params: { id: post._id } }">
            <img :src="post.image_source">
            <!--<span class="btn-floating halfway-fab waves-effect waves-light green">
              <i class="material-icons">favorite</i>
            </span>-->
          </router-link>
        </div>
        <div class="card-content">
          <!--<span class="card-title">{{post.title | filterTitle(50)}}</span>-->
          <span class="card-title truncate">{{post.title}}</span>
          <p>{{post.content | truncate(100, '...')}}</p>
          <!--<p class="truncate">{{post.content}}</p>-->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PostService from '@/services/PostService';

export default {
  name: 'BlogDashboard',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostService.fetchPosts();
      const data = response.data;
      this.posts = data.posts;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-dashboard{
  padding-top: 1.5rem;
}
</style>
