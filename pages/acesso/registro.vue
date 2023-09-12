<script setup lang="ts">

import { Field, Form, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';

definePageMeta({
    layout: 'login'
})

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



// ----------------- Validação
let alertaErro = ref(false);
let alertaSenha = ref(false);
let alertaEmail = ref(false);
const validarDados = {
    email(value) {
        //Regex para validar email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
         if(!(regexEmail.test(value)) && (value != '')){
            return alertaEmail.value = true;
           
         }

         alertaEmail.value = false;
         //se tudo ocorrer bem retorna true
         return true;
    },

    senha(value){
        if((value.length < 6) && (value != '')){
           return alertaSenha.value = true;
          

        }
        alertaSenha.value = false;
        return true;
    
    }

}












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

        const tipoErro = error.status;
        if(tipoErro === 400){
           
          
                return alertaErro.value = true;

         
        } else if (tipoErro === 422){
            return alertaErro.value = true;
        }

    }

  
    console.log('SUCCESS');
    // cadastrarDados()

    return navigateTo('/');

}





</script>

<template>
    <!-- <div>
        Cadastro
        <form @submit.prevent="cadastrar">
            <input v-model="nome" type="text" placeholder="nome">
            <input v-model="email" type="text" placeholder="email">
            <input v-model="password" type="password" placeholder="password"> -->

            <!-- <input v-model="credentials.modalidade" type="text" placeholder="nome"> -->
            <!-- <input v-model="credentials.preco" type="text" placeholder="nome"> -->

            <!-- <input v-model="credentials.email" type="email" placeholder="email">
            <input v-model="credentials.password" type="password" placeholder="senha"> -->
            <!-- <button>Confirmar</button>
        </form>
    </div> -->






<div>
     
<div class="flex justify-center items-center grid grid-cols-2 gap-12">

<div class="col-span-2 p-6 flex justify-center mt-12">
        <h1 class="font-sans text-5xl text-white"><b>Registra-te</b></h1>
</div>
    <div class="col-span-2 p-6 flex justify-center mt-10">
        <div class="">
            <Form @submit="cadastrar" :validation-schema="validarDados">
                <div class="w-80 mb-6">
                    
                    <Field name="nome" v-model="nome" type="text" id="nome"
                        class="font-sans bg-gray-50 border border-gray-300 text-gray-900  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nome completo" required/>
                       

                </div>
                <div class="w-80 mb-6">
                    
                    <Field name="email" v-model="email" type="email" id="email"
                        class="font-sans bg-gray-50 border border-gray-300 text-gray-900  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example@email.com" required/>



                     
                            <div v-if="alertaEmail" id="alert-2" class="mt-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div class="ml-3 text-sm font-medium">
                                        Precisa ser um email
                                       
                                    </div>
                            
                            </div>
                       


                </div>
                <div class="w-80 mb-4">
                
                    <Field name="senha" v-model="password" type="password" id="password"
                        class="font-sans bg-gray-50 border border-gray-300 text-gray-900  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password" required/>

                        

                            <div v-if="alertaSenha" id="alert-3" class="mt-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div class="ml-3 text-sm font-medium">
                                    Senha precisa ter 6 caracteres
                                
                                </div>
                           
                            </div>

                        


                </div>
                <div class="w-80 mb-4">
                    <div v-if="alertaErro" id="alert-4" class="mt-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div class="ml-3 text-sm font-medium">
                                    Dados inválidos
                                
                                </div>
                           
                            </div>

                </div>


                <div class="flex justify-center">
                    <button class="w-60 px-4 py-6  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600"><p class="text-base font-medium text-white text-4xl">Confirmar</p></button>         
                </div>
      
            </Form>

        </div>
       
    </div>

</div>
</div>














</template>

<style lang="scss" scoped></style>