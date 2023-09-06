// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],

  supabase: {

    redirectOptions: {
      login: '/',
      // callback: '/confirm',
      exclude: ['/acesso/registro','/dashboard/painel']
    }
  }

})
