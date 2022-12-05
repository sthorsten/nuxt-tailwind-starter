export default defineNuxtConfig({

  typescript: {
    shim: false
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    viewer: false,
  }
})
