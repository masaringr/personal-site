<script setup lang="ts">
import { computed } from 'vue';
import router from '../router';

function goToPost(routeName: string) {
    router.push({ name: routeName })
}

const posts = computed(() => {
    const data = [{
        postDate: "20 Apr 2022",
        postThumb: "bg-[url('src/assets/thumbs/thumb-1.jpg')]",
        postRoute: "ProjectSatu",
        postTitle: "Judul 1 amet consectetur adipisicing elit",
        postDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolorem magni totam autem facere laudantium officia reiciend",
        postTags: ["satu", "dua", "tigalima"]
    }]

    return data
})
</script>
<template>
    <div v-for="post in posts" class="col-span-12 md:col-span-6">
        <div class="h-[300px] rounded-xl relative shadow-md">
            <span
                class="absolute top-2 left-2 text-[11px] font-semibold backdrop-blur-sm text-slate-600 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-700/80 border-2 border-slate-200 dark:border-slate-700  px-3 py-0.5 rounded-md">{{
                        post.postDate
                }}</span>
            <div class="rounded-t-xl h-[198px]">
                <div class="rounded-t-xl post-thumbnail bg-center bg-no-repeat bg-cover w-full h-full"
                    :class="post.postThumb">
                </div>
            </div>
            <div
                class="rounded-b-xl bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-sm h-[110px] absolute bottom-0 w-full">
                <div class="py-2 px-3 flex flex-col gap-2">
                    <h4 @click="goToPost(post.postRoute)"
                        class="text-base font-serif font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis text-slate-800/80 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer dark:text-slate-200/70">
                        {{ post.postTitle }}
                    </h4>
                    <p
                        class="text-xs line-clamp-2 text-slate-800/80 dark:text-slate-200/70 font-normal dark:font-light">
                        {{ post.postDesc }}</p>
                    <div class="overflow-auto no-scrollbar">
                        <div class=" flex flex-nowrap gap-1 text-[11px]">
                            <span v-for="tag in post.postTags"
                                class="bg-sky-500 px-2 py-0.5 rounded-md text-slate-100 capitalize whitespace-nowrap">{{
                                        tag
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>