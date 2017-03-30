import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Movie from '../components/movie.vue'
import actor from '../components/actor.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    },{
      path: '/actor/:id',
      name: 'actor',
      component: actor
    }
  ]
});
