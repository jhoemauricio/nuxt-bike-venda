<script setup lang="ts">
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';


definePageMeta({
  layout: 'login'
});

let alertaSenha = ref(false);
let alertaEmail = ref(false);
//Validação
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










const supabase = useSupabaseClient();

const credentials = {
    email: '',
    password: ''
}

let dados = ref('');
let alertaErro = ref(false);

const logar = async () => {
   


    const { data, error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {

        console.log('Deu erro ' + error.status);
        const tipoErro = error.status;
        if(tipoErro === 400){
           
          
                return alertaErro.value = true;

         
        }

    }

 
    alertaErro.value = false;
    return navigateTo('/dashboard/painel');

}




</script>

<template>
 
<div class="flex justify-center items-center grid grid-cols-2 gap-12">

    <div class="col-span-2 p-6 flex justify-center mt-12">
            <h1 class="font-sans text-5xl text-white"><b>Nuxt Bike</b></h1>
    </div>
        <div class="col-span-2 p-6 flex justify-center mt-10">
            <div class="">
                <Form @submit="logar" :validation-schema="validarDados">
                    <div class="w-80 mb-6">
                        
                        <Field name="email" v-model="credentials.email" type="email" id="email"
                            class="font-sans bg-gray-50 border border-gray-300 text-gray-900  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="example@email.com" required/>



                         
                                <div v-if="alertaEmail" id="alert-2" class="mt-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        <span class="sr-only">Info</span>
                                        <div class="ml-3 text-sm font-medium">
                                            Precisa ser um email
                                            <!-- <ErrorMessage name="email">Precisa ser email</ErrorMessage> -->
                                        </div>
                                
                                </div>
                           


                    </div>
                    <div class="w-80 mb-4">
                    
                        <Field name="senha" v-model="credentials.password" type="password" id="password"
                            class="font-sans bg-gray-50 border border-gray-300 text-gray-900  rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Password" required/>

                            

                                <div v-if="alertaSenha" id="alert-3" class="mt-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div class="ml-3 text-sm font-medium">
                                        Senha precisa ser de 6 caracteres
                                        <!-- <ErrorMessage name="senha">Senha inválida</ErrorMessage> -->
                                    </div>
                               
                                </div>

                            


                    </div>

                    <div class="mb-24 columns-2 gap-4 p-2">
                        <div>
                            <NuxtLink to="/acesso/registro"><p class="font-sans hover:underline hover:underline-offset-4 hover:decoration-zinc-50"><b>Registra-te</b></p></NuxtLink>
                        </div>
                        <div>
                            <p class="font-sans hover:underline hover:underline-offset-4 hover:decoration-zinc-50"><b>Esqueceu a senha?</b></p>
                        </div>

                    </div>


                    <div v-if="alertaErro">


                        <div id="alert-4" class="-mt-16 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div class="ml-3 text-sm font-medium">
                                Email ou Senha inválidos!
                            </div>
                          
                        </div>

                    </div>


                    <div class="flex justify-center">
                        <button class="w-60 px-4 py-6  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600"><p class="text-base font-medium text-white text-4xl">Entrar</p></button>         
                    </div>
          
                </Form>

            </div>
           
        </div>
    
</div>
  
        




   
</template>

<style scoped></style>