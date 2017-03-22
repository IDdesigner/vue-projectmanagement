import Home from './Home.vue';
import About from './About.vue';
import Management from './Management.vue';
import New from './New.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/management', component: Management},
    { path: '/new', component: New}
]