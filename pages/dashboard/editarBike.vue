<script setup lang="ts">
import { ref } from 'vue'; 
definePageMeta({
    layout: 'login'
})


const dadosEmit = reactive({
    nome: ref('')
})
function mostrarDadosBike(data){

    Object.keys(data).forEach(function() {

        //atribui ao objeto dadosBike os valores
       
        // dadosEmit.nome = data[key].nome;
            dadosEmit.nome = data;
            console.log(data)
     
        });
       
    // console.log('EDITAR BIKE FUNCIONOU '+dadosEmit)
}

</script>

<template>
    <div>
     <div  class="mt-8 grid grid-cols-2 gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
              
                        

                                        
              <div class="p-2 col-span-2 flex justify-center items-center">
                      <img class="rounded-full w-24 h-24 object-cover" src="">
                      
              </div>
              <div class="col-span-2">
                    

                   
                              <Form @submit.prevent>
                              <div>

                                      <label class="mb-2 text-sm font-bold">Nome</label>
                                    
                                      <input v-model="dadosEmit.nome"   class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div>

                                      <label class="mb-2 text-sm font-bold ">Modalidade</label>
                                      <input   class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div>

                                      <label class="mb-2 text-sm font-bold ">Preço</label>
                                      <input   class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div class="grid grid-cols-2 gap-6 flex justify-center items-center mt-8">
                                      <div >

                                              <button class="text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" >Salvar</button>         

                                      </div>
                                      <div >
                                              <button class="text-white w-full p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" >Voltar</button>         
                                      
                                      </div>
                               

                              </div>

                              </Form> 
                     
              </div>
           
      
    
     </div>
    </div>

    <Produtos  @dadosBicicleta="mostrarDadosBike"/>
</template>

<style lang="scss" scoped>

</style>