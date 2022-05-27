<template>
    <div>
        <button type="button" @click="openModal"
            class="p-0.5 text-sm font-medium rounded-md ring-[2.25px] ring-slate-700 dark:ring-slate-200 focus:outline-none">
            <MenuAlt3Icon class="h-6 w-6 text-slate-700 dark:text-slate-200" />
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal">
            <div class="fixed inset-0 z-[60] overflow-y-auto">
                <div class="min-h-screen text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>

                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <div
                            class="w-full h-screen p-6 overflow-hidden transition-all transform bg-slate-200/60 dark:bg-slate-700/60 backdrop-blur-md">
                            <div class="flex justify-center items-center h-full">
                                <ul
                                    class="flex flex-col -mt-12 gap-12 font-serif text-3xl text-slate-800/90 dark:text-slate-200 font-semibold">
                                    <li v-for="menu in menus" :key="menu.name" @click="closeModal">
                                        <router-link :to="{ name: menu.name }" v-slot="{ isActive, isExactActive }">
                                            <div class="flex flex-col items-center">
                                                <span :class="isActive ? 'text-blue-700/80' : ''">{{ menu.text }}</span>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="absolute bottom-0 left-0 w-full pb-10">
                                <button type="button"
                                    class="inline-flex justify-center p-1 ring-[2.25px] ring-slate-700 dark:ring-slate-200 rounded-full focus:outline-none"
                                    @click="closeModal">
                                    <XIcon class="h-6 w-6 text-slate-700 dark:text-slate-200" />
                                </button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { MenuAlt3Icon, XIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from '@headlessui/vue'

const isOpen = ref(false)

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

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>
