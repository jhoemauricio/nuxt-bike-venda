<script setup lang="ts">
import { ref } from 'vue'; 
definePageMeta({
    layout: 'login'
})

const supabase = useSupabaseClient()


const route = useRoute();
const { id } = useRoute().params
//armazena o valor do Id de acordo com o nome dado na vue dinamica
let idBike = route.params.idBike;

// console.log(route.params.idBike);

//Seleciona o id da bike
const selecionarBike = async (idBike) =>{
        const { data, error } = await supabase
        .from('bike')
        .select().eq('id', idBike)

    if (error) {
        console.log('ERRO AO SELECIONAR ' + error);
    }

    //Função Javascript 
    Object.keys(data).forEach(key => {

        //atribui ao objeto dadosBike os valores
        dadosBike.id = data[key].id;
        dadosBike.nome = data[key].nome;
        dadosBike.preco = data[key].preco;
        dadosBike.modalidade = data[key].modalidade;
    });

console.log('Esse é o id: '+idBike);
}


selecionarBike(idBike);


const dadosBike = reactive({
    id: ref(''),
    nome: ref(''),
    preco: ref(''),
    modalidade:ref('')
})
// function mostrarDadosBike(data){

//     Object.keys(data).forEach(function() {

//         //atribui ao objeto dadosBike os valores
       
//         // dadosEmit.nome = data[key].nome;
//             dadosEmit.nome = data;
//             console.log(data)
     
//         });
       
//     // console.log('EDITAR BIKE FUNCIONOU '+dadosEmit)
// }

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
                                    
                                      <input v-model="dadosBike.nome"   class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div>

                                      <label class="mb-2 text-sm font-bold ">Modalidade</label>
                                      <input v-model="dadosBike.modalidade"  class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div>

                                      <label class="mb-2 text-sm font-bold ">Preço</label>
                                      <input v-model="dadosBike.preco"  class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                      

                              </div>

                              <div class="grid grid-cols-2 gap-6 flex justify-center items-center mt-8">
                                      <div >

                                              <button class="text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" >Salvar</button>         

                                      </div>
                                      <div >
                                              <button class="text-white w-full p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" ><NuxtLink to="/dashboard/painel">Voltar</NuxtLink></button>         
                                      
                                      </div>
                               

                              </div>

                              </Form> 
                     
              </div>
           
      
    
     </div>
    </div>

    <!-- <Produtos  @dadosBicicleta="mostrarDadosBike"/> -->


</template>

<style lang="scss" scoped>

</style>