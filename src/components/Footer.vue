<script setup lang="ts">
import { computed } from 'vue';
import myState from '../store/states'

const footerText = computed(() => {
    return new Date().getFullYear();
})

const iconTwitter = computed(() => {
    return myState.theme === 'dark' ? '/twitter-light.png' : '/twitter.png'
})

const iconGithub = computed(() => {
    return myState.theme === 'dark' ? '/github-light.png' : '/github.png'
})
</script>
<template>
    <div class="px-6 py-4 flex flex-row gap-1">
        <span class="font-serif font-normal text-xs text-slate-700 dark:text-slate-200">Ari Nugroho &copy; {{
                footerText
        }} |</span>
        <div class="flex flex-row gap-2 items-center">
            <a href="#" target="_blank">
                <img loading="lazy" decoding="async" :src="iconTwitter" class="w-4 h-4" />
            </a>
            <a href="#" target="_blank">
                <img loading="lazy" decoding="async" :src="iconGithub" class="w-4 h-4" />
            </a>
        </div>
    </div>
</template>