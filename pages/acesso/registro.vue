<script setup lang="ts">
import { ref } from 'vue';

const supabase = useSupabaseClient();


// const credentialsDados = {

//     nome: ''

// }

// const credentials = {
//     email: '',
//     password: '',

// }

// const credentials = {

//     email: '',
//     password: ''
// }

// let nomeUsuario = '';
// nomeUsuario.value = credentials.nome;

// const cadastrarDados = async () => {


//     const { error } = await supabase
//         .from('profile')
//         .insert(credentialsDados)

//     if (error) {
//         console.log('Algo deu errado no Cadastro do Nome: ' + error);
//     }

//     console.log('Cadastrado com sucesso o Nome!');

// }


let nome = '';
let email = '';
let password = '';


const cadastrar = async () => {

    const { data, error } = await supabase.auth.signUp({

        email: email,
        password: password,

        //este é criado dentro do meta_data do supabase
        options: {
            data: {
               
                nome_profile: nome

            }
        }
    })

    if (error) {

        console.log('Esse é o erro da autenticacao ' + error);

    }

    console.log('SUCCESS');
    // cadastrarDados()

}





</script>

<template>
    <div>
        Cadastro
        <form @submit.prevent="cadastrar">
            <input v-model="nome" type="text" placeholder="nome">
            <input v-model="email" type="text" placeholder="email">
            <input v-model="password" type="password" placeholder="password">

            <!-- <input v-model="credentials.modalidade" type="text" placeholder="nome"> -->
            <!-- <input v-model="credentials.preco" type="text" placeholder="nome"> -->

            <!-- <input v-model="credentials.email" type="email" placeholder="email">
            <input v-model="credentials.password" type="password" placeholder="senha"> -->
            <button>Confirmar</button>
        </form>



    </div>
</template>

<style lang="scss" scoped></style>