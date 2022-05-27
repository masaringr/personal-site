<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ProjectPosts from '../components/ProjectPosts.vue'

const currRouterName = computed(() => {
    return useRouter().currentRoute.value.name;
})
</script>
<template>
    <div v-if="currRouterName === 'Project'" class="mt-12">
        <div class="text-center">
            <h1 class="text-[32px] font-semibold text-slate-800 dark:text-slate-200 font-serif mb-2">Project
            </h1>
            <span class="text-sm font-sans text-slate-700 dark:text-slate-200">Banyak yang tidak sempurna,
                tetapi saya akan berusaha mendokumentasikannya sebaik mungkin.</span>
            <div class="w-1/4 border-b border-slate-500/60 dark:border-slate-400 mx-auto my-6"></div>
        </div>
        <div class="grid grid-cols-12 gap-8 mt-12">
            <project-posts />
        </div>
    </div>
    <router-view></router-view>
</template>