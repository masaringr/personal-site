<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.ari_theme === 'dark' || (!('ari_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="max-w-[720px] bg-slate-50 dark:bg-slate-900 mx-auto">
    <Header class="fixed top-0 w-full max-w-[720px] z-30" />
    <main class="p-6 pt-24 pb-4">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>