import Vue from 'vue';
import Router from 'vue-router';
import BlogDashBoard from '@/components/BlogDashBoard';
import BlogPost from '@/components/BlogPost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogDashBoard',
      component: BlogDashBoard,
    },
    {
      path: '/post/:id',
      name: 'BlogPost',
      component: BlogPost,
    },
  ],
});
