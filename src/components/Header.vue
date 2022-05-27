<template>
    <div class="py-4 px-6 bg-slate-50/70 dark:bg-slate-900/50 backdrop-blur">
        <div class="flex md:flex-row flex-row-reverse justify-between items-top">
            <div>
                <div class="md:hidden float-right mt-1">
                    <mobile-menu />
                </div>
                <ul
                    class="hidden md:flex flex-row gap-8 font-serif text-xl text-slate-800/90 dark:text-slate-200 font-semibold">
                    <li v-for="menu in menus" :key="menu.name">
                        <router-link :to="{ name: menu.name }" v-slot="{ isActive, isExactActive }">
                            <div class="flex flex-col items-center">
                                <span>{{ menu.text }}</span>
                                <div v-show="isActive" class="w-4 h-[3px] bg-sky-500 mt-2 rounded-full"></div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="cursor-pointer mt-1.5" @click="toggleTheme(myState.theme)">
                <MoonIcon v-show="myState.theme === 'dark'" class="h-6 w-6 text-yellow-100" />
                <SunIcon v-show="myState.theme === 'light'" class="h-6 w-6 text-yellow-500" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MobileMenu from './MobileMenu.vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';
import myState from "../store/states";

const menus = ref([{
    text: "Home",
    name: "Home"
}, {
    text: "Project",
    name: "Project"
}, {
    text: "Blog",
    name: "Blog"
}])

const isDark = ref(false)
function toggleTheme(theme: string) {
    if (theme === 'light') {
        localStorage.setItem('ari_theme', 'dark')
        myState.theme = 'dark'
        document.documentElement.classList.add('dark')
    } else {
        localStorage.setItem('ari_theme', 'light')
        myState.theme = 'light'
        document.documentElement.classList.remove('dark')
    }
}
</script>