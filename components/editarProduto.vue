<script setup>
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';


const cardEditarProduto = ref(true);
const supabase = useSupabaseClient()

//Objeto Reativo
const dadosBike = reactive({

//     id: ref(''),
    nome: ref(''),
    modalidade: ref(''),
    preco: ref(''),
    disponivel: true

})


const limparCampos = async ()=>{
         dadosBike.nome = '';
         dadosBike.modalidade = '';
         dadosBike.preco = '';
}



//Salva ou Atualiza
const salvar = async () => {

//aqui verifica se ja existe uma bike cadastrada se tiver autualiza senao cria um novo
const { error } = await supabase
    .from('bike')
    .insert(dadosBike)


if (error) {
    console.log('NAO ATUALIZOU' + error)
}

console.log('ATUALIZADO ou Salvo com SUCESSO!');


}

</script>


<template>
   
        <div v-if="cardEditarProduto" class="mt-8 grid grid-cols-2 gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
              
                        

                                        
                        <div class="p-2 col-span-2 flex justify-center items-center">
                                <img class="rounded-full w-24 h-24 object-cover" src="">
                        </div>
                        <div class="col-span-2">
                              

                             
                                        <Form @submit.prevent>
                                        <div>

                                                <label class="mb-2 text-sm font-bold">Nome</label>

                                                <input  v-model="dadosBike.nome" class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                

                                        </div>

                                        <div>

                                                <label class="mb-2 text-sm font-bold ">Modalidade</label>
                                                <input  v-model="dadosBike.modalidade" class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                

                                        </div>

                                        <div>

                                                <label class="mb-2 text-sm font-bold ">Preço</label>
                                                <input  v-model="dadosBike.preco" class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                

                                        </div>

                                        <div class="grid grid-cols-2 gap-6 flex justify-center items-center mt-8">
                                                <div >

                                                        <button class="text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="salvar">Salvar</button>         

                                                </div>
                                                <div >
                                                        <button class="text-white w-full p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="cardEditarProduto = false">Voltar</button>         
                                                
                                                </div>
                                         

                                        </div>

                                        </Form> 
                               
                        </div>
                     
                
              
        </div>
        <Produtos v-if="cardEditarProduto == false" />
    
</template>
<style scoped>
</style>