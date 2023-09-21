<script setup lang="ts">

import { ref } from 'vue';


const venda = resolveComponent('venda');

const cardProduto = ref(false);



// const mostrarVenda = ref(false);


// const produtoDetails = async ()=>{
//     mostrarVenda.value = true;
//     // return navigateTo('/dashboard/produtoDetails');
// }
const supabase = useSupabaseClient()




//listar
let bikes = ref('');


const listar = async () => {

    //lista todas as bikes
    const { data, error } = await supabase
        .from('bike')
        .select()

    if (error) {
        console.log('Algo deu errado ao listar ' + error);
    }

    bikes.value = data;

     
}

listar();

</script>

<template>
    <div>
        
        <div v-if="cardProduto == false" v-for="b in bikes" class="mt-8 grid grid-cols-3 gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">

                <div>
                    <img class="rounded-full w-16 h-16 object-cover" src="../public/imagemTeste.jpg">
                </div>
                <div>
                    <div>
                        <p class="font-bold">{{ b.nome }}</p>
                    </div>
                    <div>
                        <p class="font-sans">{{ b.modalidade }}</p>
                    </div>
                
                </div>
                <div>
                    <div>
                        <p class="font-bold">R$ {{ b.preco }}</p>
                    </div>
                </div>

                
                <div class="bg-red-200">
                        <button class="mt-4 text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="a">Vender</button> 
                  
                </div>

                <div class="bg-sky-700">
                        <button class="mt-4 text-white w-full p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="cardProduto = true">Editar</button> 
                  
                </div>

                <div class="bg-sky-700">
                        <button class="mt-4 text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="a">Excluir</button> 
                  
                </div>
                

           
        </div>

        <!-- <div>
            <button v-if="mostrar == false" class="bg-red-200 w-16 h-16" @click="mostrar = true">VOLTAR</button>
        </div> -->

        <!-- <component :is="valor ? editarProduto : cardProduto = true "/>
         -->
        
         <EditarProduto v-if="cardProduto"/>

    </div>
</template>

<style lang="scss" scoped>

</style>