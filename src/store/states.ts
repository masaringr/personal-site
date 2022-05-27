import { reactive } from 'vue'

const state = reactive({
    theme: localStorage.ari_theme ? localStorage.ari_theme : 'light',
})

export default state