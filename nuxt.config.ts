// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase',
  '@nuxtjs/tailwindcss'],

  supabase: {

    redirectOptions: {
      login: '/',
      // callback: '/confirm',
      exclude: ['/acesso/registro','/dashboard/painel','/dashboard/produtoDetails','/dashboard/editarBike']
    }
  },

 
})
