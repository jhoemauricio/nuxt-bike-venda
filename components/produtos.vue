<script setup lang="ts">

import { ref } from 'vue';

const supabase = useSupabaseClient()



//componente Venda
// const venda = resolveComponent('venda');

// const cardProduto = ref(false);

// const emit = defineEmits(['dadosBicicleta']);

// function dadosEnviar(nome){
// // const dadosEnviar = async (id, nome, modalidade, preco) =>{
//     cardProduto.value = true;
//     // console.log(id +' + '+nome +' + '+modalidade+' + '+preco);
//     emit('dadosBicicleta',nome);
// // }
// }


//Vender, atualiza a propriedade de disponivel através do idBike
const vender = async (idBike) => {

    //selciona pelo id e atualiza a propriedade
    const { error } = await supabase
        .from('bike')
        //atualiza a propriedade disponivel para false
        .update({ disponivel: false })
        .eq('id', idBike)

        if(error){
            console.log('Algo deu errado ao vender '+error);
            
        }
        //chama o método listar
        listar();
}

//deletar bike
const deletar = async(idBike) =>{
    const { error } = await supabase
  .from('bike')
  .delete()
  .eq('id',idBike )

  if(error){
    console.log('Erro ao excluir '+error);
  }

  listar();
}



//listar
let bikes = ref('');

const listar = async () => {

    //lista todas as bikes
    const { data, error } = await supabase
        .from('bike')
        .select()
       //onde propriedade disponivel for true 
        .eq('disponivel',true)

    if (error) {
        console.log('Algo deu errado ao listar ' + error);
    }

    // variavel bikes recebe o valor de data
    bikes.value = data;

     
}

//método executado ao carregar a página
listar();

</script>

<template>
    <div>
        
        <div v-for="b in bikes" class="mt-8 grid grid-cols-3 gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">

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
                        <button class="mt-4 text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="vender(b.id)">Vender</button> 
                  
                </div>

                <div class="bg-sky-700">
                        <button class="mt-4 text-white w-full p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="dadosEnviar(b.nome)"><NuxtLink :to="`/dashboard/${b.id}`">Editar</NuxtLink></button> 
                  
                </div>

                <div class="bg-sky-700">
                        <button class="mt-4 text-white w-full  p-2  bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-center dark:bg-pink-600" @click="deletar(b.id)">Excluir</button> 
                  
                </div>
                

           
        </div>

        <!-- <div>
            <button v-if="mostrar == false" class="bg-red-200 w-16 h-16" @click="mostrar = true">VOLTAR</button>
        </div> -->

        <!-- <component :is="valor ? editarProduto : cardProduto = true "/>
         -->
        
         <!-- <EditarProduto v-if="cardProduto"/> -->

    </div>
</template>

<style lang="scss" scoped>

</style>