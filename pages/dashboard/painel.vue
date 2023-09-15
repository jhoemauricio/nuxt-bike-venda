<script setup lang="ts">
import { ref } from 'vue';
definePageMeta({
    middleware: 'auth',
    layout: 'login'
})

const cadastroProduto = resolveComponent('cadastroProduto');
const produtos = resolveComponent('produtos');
const valorComponent = ref(true);
// let cad = ref(false);
// let listar = ref(false);
// const listarProdutos = async() =>{
//     return listar.value = true;

// }
// const cadas = async ()=>{
//     return cad.value = true; 
// }



const supabase = useSupabaseClient();


const logout = async () => {

    const { error } = await supabase.auth.signOut()

    if (error) {

        console.log('Algo errado o sair ' + error);

    }

    return navigateTo('/');
}




</script>

<template>
    <!-- <div>
        <div>
            <button @click="logout">Sair</button>
        </div>
    
        <Venda />
    </div> -->










    <nav class="bg-white border-gray-200 dark:bg-gray-900 p-4">
        <div class="flex flex-wrap items-center justify-between p-4">
         
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
         
        
            <div class="flex justify-center items-center md:order-2">
          
                <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="true">
                 
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div id="mega-menu" class="bg-red-200 p-6 justify-between items-center hidden w-full md:flex md:w-auto md:order-2">
              
                <div class="flex justify-center p-2">
                    <button class="font-bold" @click="valorComponent = false" >Cadastrar Bike</button>
                </div>
                <div class="flex justify-center p-2">
                    <button class="font-bold" @click="valorComponent = true">Listar Bikes</button>
                </div>

                <div class="flex justify-center p-2">
                    <button class="font-bold" @click="logout">Logout</button>
                </div>



        

            </div>
               
            
        </div>
    </nav>


    <div class="p-4 flex justify-center">
        <!-- <produtos v-if="listar == true"/>
        <venda v-if="cad == true"/> -->
        <component :is="valorComponent ? produtos : cadastroProduto"/>
    </div>
    
</template>

<style lang="scss" scoped></style>