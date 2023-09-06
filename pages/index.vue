<script setup lang="ts">
import { ref } from 'vue';
const supabase = useSupabaseClient();

const credentials = {
    email: '',
    password: ''
}

let dados = ref('');


const logar = async () =>{
    const { data, error } = await supabase.auth.signInWithPassword(credentials)

if(error){

    console.log('Deu erro '+error);

}

return navigateTo('/dashboard/painel');

}




</script>

<template>
    <div>
        Login
       <form @submit.prevent="logar">
            <input v-model="credentials.email" type="email" placeholder="email">
            <input  v-model="credentials.password" type="password" placeholder="senha">
            <button>Entrar</button>
       </form>

       <p> {{ dados }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>