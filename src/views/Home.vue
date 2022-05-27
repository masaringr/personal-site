<script setup lang="ts">
import RecentPosts from '../components/RecentPosts.vue'
</script>
<template>
    <div class="flex flex-row gap-6 items-center mt-12">
        <div
            class="w-14 h-14 outline-2 outline-slate-700 dark:outline-slate-200 outline-dotted outline-offset-4 rounded-full">
            <img loading="lazy" decoding="async" class="rounded-full w-full h-auto" src="/ari.jpg" />
        </div>
        <label class="text-[40px] font-semibold text-slate-800 dark:text-slate-200 font-serif">Ari Nugroho</label>
    </div>
    <div class="mt-6">
        <p class="text-base font-sans text-slate-700 dark:text-slate-200">Saya adalah seorang Front-End Web Developer.
            Cukup familiar dengan teknologi HTML, CSS, dan JS. Agar mempercepat project yang saya kerjakan, saya biasa
            menggunakan framework Vue JS. Di platform ini saya akan berusaha mencatat setiap ilmu yang saya pelajari.
            Setidaknya
            pengalaman yang saya dapat dari perjalanan hidup saya.</p>
    </div>
    <div class="w-1/4 border-b my-6 border-slate-500/60 dark:border-slate-400"></div>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
            <h2 class="capitalize font-serif font-semibold text-xl text-slate-800 dark:text-slate-200">unggahan terbaru
            </h2>
        </div>
        <recent-posts />
    </div>
</template>