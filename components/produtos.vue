<script setup lang="ts">

import { ref } from 'vue';


const produtoDetails = async ()=>{
    return navigateTo('/dashboard/produtoDetails');
}
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
        
        <div @click="produtoDetails" v-for="b in bikes" class="mt-8 grid grid-cols-3 gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">

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
                    <div>
                        <p  class="font-sans">Dísponível</p>
                  
                    </div>
                

                </div>

           
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>