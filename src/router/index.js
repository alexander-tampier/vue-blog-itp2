import Vue from 'vue';
import Router from 'vue-router';
import BlogDashBoard from '@/components/BlogDashBoard';
import BlogPost from '@/components/BlogPost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-blog-itp2',
      name: 'BlogDashBoard',
      component: BlogDashBoard,
    },
    {
      path: '/vue-blog-itp2/post/:id',
      name: 'BlogPost',
      component: BlogPost,
    },
  ],
});
