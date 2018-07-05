import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import money from "../money/manage-money"
import white from "../white/white"
import crowd from "../crowd/crowd"
import down from "../special/download"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: money
        },
        {
            path: '/white',
            name: 'white',
            component: white
        },
        {
            path: '/me',
            name: 'me',
            component: crowd,
            children: [
                {
                    path: ':down',
                    name: 'down',
                    component: down
                }
            ]
        }
    ],
})
