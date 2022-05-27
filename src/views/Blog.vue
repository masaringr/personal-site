<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BlogPosts from '../components/BlogPosts.vue'

const currRouterName = computed(() => {
    return useRouter().currentRoute.value.name;
})
</script>
<template>
    <div v-if="currRouterName === 'Blog'" class="mt-12">
        <div class="text-center">
            <h1 class="text-[32px] font-semibold text-slate-800 dark:text-slate-200 font-serif mb-2">Blog
            </h1>
            <span class="text-sm font-sans text-slate-700 dark:text-slate-200">
                Layaknya air yang bisa memenuhi sebuah wadah, isi kepala juga perlu dikeluarkan secara berkala.
            </span>
            <div class="w-1/4 border-b border-slate-500/60 dark:border-slate-400 mx-auto my-6"></div>
        </div>
        <div class="grid grid-cols-12 gap-8 mt-12">
            <blog-posts />
        </div>
    </div>
    <router-view></router-view>
</template>