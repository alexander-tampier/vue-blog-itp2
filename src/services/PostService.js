import Api from '@/services/Api';

export default {
  fetchPosts() {
    return Api().get('api/posts');
  },
  getPost(params) {
    return Api().get(`api/posts/${params.id}`);
  },
};
