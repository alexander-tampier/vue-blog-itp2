<template lang="html">
  <div class="blog-post">
    <div class="row">
       <div class="col s12">
          <h1>{{title}}</h1>
       </div>
    </div>
    <div class="divider"></div>
    <div class="row">
       <div class="col s12">
          <img class="responsive-img my-img" :src="image_source">
          <span class="flow-text" v-html="content"></span>
       </div>
    </div>
  </div>
</template>

<script>
import PostService from '@/services/PostService';

export default {
  name: 'BlogPost',
  data() {
    return {
      title: '',
      content: '',
      image_source: '',
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const response = await PostService.getPost({
        id: this.$route.params.id,
      });

      const post = response.data.post;

      this.title = post.title;
      this.content = post.content;
      this.image_source = post.image_source;
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lobster);
@import url('https://fonts.googleapis.com/css?family=Oswald');

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}

h1 {
  font-family: Lobster;
}

.flow-text {
  font-family: 'Oswald', sans-serif !important;
}

.my-img {
  width: 100%;
  height: auto;
  padding-top: 10px;
}
</style>
