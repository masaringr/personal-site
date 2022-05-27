import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
}, {
    path: "/project",
    name: "Project",
    component: () => import("../views/Project.vue"),
    children: [{
        path: "/project/satu",
        name: "ProjectSatu",
        component: () => import("../views/projects/Satu.vue"),
    }]
}, {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
    children: [{
        path: "/blog/satu",
        name: "BlogSatu",
        component: () => import("../views/blog/Satu.vue"),
    }]
}, {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: () => import("../views/404.vue")
}];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

function startProgress() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute('class', 'fixed top-0 left-0 w-full h-[2px] bg-gray-200/60 z-50 page-load');

    const progress = document.createElement("div");
    progress.setAttribute('class', 'h-full bg-sky-500/90 transition-all duration-500 w-0');
    progress.setAttribute('id', 'load-progress');

    wrapper.appendChild(progress);
    document.body.appendChild(wrapper)
}

function finishProgress() {
    const progress = document.querySelector("div.page-load")
    progress?.remove()
}

router.beforeEach(() => {
    startProgress()
    const progress = document.getElementById('load-progress')
    for (let index = 1; index <= 3; index++) {
        setTimeout(() => {
            let isLast = index === 3 ? 9 : 0;
            if (progress) {
                progress.style.width = (index * 30) + isLast + '%'
            }
        }, index * 150);
    }
})

router.afterEach(() => {
    setTimeout(() => {
        const progress = document.getElementById('load-progress')
        if (progress) {
            progress.style.width = '100%'
        }

        setTimeout(() => {
            finishProgress()
        }, 250);
    }, 750);
})


export default router;