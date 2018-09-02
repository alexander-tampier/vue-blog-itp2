<template>
<div class="blog-dashboard">
  <div class="row">
    <!-- s12 for mobile -->
    <div class="col s12 m4" v-for="post in posts" v-bind:key="post.id">
      <div class="card">
        <div class="card-image">
          <router-link :to="{ name: 'BlogPost', params: { id: post.id } }">
            <img :src="post.cardSrc">
            <!--<span class="btn-floating halfway-fab waves-effect waves-light green">
              <i class="material-icons">favorite</i>
            </span>-->
          </router-link>
        </div>
        <div class="card-content">
          <span class="card-title">{{post.title}}</span>
          <p>{{post.cardContent}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VehicleService from '@/services/PostService';

import imgOne from '../assets/card-picture-one.jpeg';
import imgTwo from '../assets/card-picture-two.jpeg';
import imgThree from '../assets/card-picture-three.jpeg';
import imgFour from '../assets/card-picture-four.jpeg';

export default {
  name: 'BlogDashboard',
  data() {
    return {
      title: 'blog-dashboard',
      posts: [
        {
          id: 1,
          title: 'Card Title',
          cardContent: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
          cardSrc: imgOne,
        },
        {
          id: 2,
          title: 'Card Title',
          cardContent: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
          cardSrc: imgTwo,
        },
        {
          id: 3,
          title: 'Card Title',
          cardContent: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
          cardSrc: imgThree,
        },
        {
          id: 4,
          title: 'Card Title',
          cardContent: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
          cardSrc: imgFour,
        },
      ],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostService.fetchPosts();
      this.posts = response.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
