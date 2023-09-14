<script setup lang="ts">

import { ref } from 'vue';

const supabase = useSupabaseClient()

//Objeto Reativo
const dadosBike = reactive({

    id: ref(''),
    nome: ref(''),
    modalidade: ref(''),
    preco: ref(''),
    disponivel: true

})


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



//Vender
const vender = async (id) => {
    //selciona pelo id e atualiza a propriedade
    const { error } = await supabase
        .from('bike')
        .update({ disponivel: false })
        .eq('id', id)
}


//Editar
//Informo o id do objeto selecionado
const editar = async (id) => {
    //verifica se existe um id igual
    const { data, error } = await supabase
        .from('bike')
        .select().eq('id', id)

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


}

//Salva ou Atualiza
const salvar = async () => {

    //aqui verifica se ja existe uma bike cadastrada se tiver autualiza senao cria um novo
    const { error } = await supabase
        .from('bike')
        .upsert(dadosBike)
        .select()


    if (error) {
        console.log('NAO ATUALIZOU' + error)
    }

    console.log('ATUALIZADO ou Salvo com SUCESSO!');


}


</script>

<template>
    <div>
        <form @submit.prevent="salvar">
            <input v-model="dadosBike.nome" type="text" placeholder="Nome">
            <input v-model="dadosBike.modalidade" type="text" placeholder="Modalidade">
            <input v-model="dadosBike.preco" type="text" placeholder="Preco">

            <button>Cadastrar</button>
        </form>
    </div>

    <button @click="listar">LISTAR</button>

    <div>

        <table>

            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Modalidade</th>
                    <th>Preco</th>
                    <th>Disponível</th>
                    <th>Ação</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="b in bikes">
                    <td> {{ b.nome }} </td>
                    <td> {{ b.modalidade }}</td>
                    <td>{{ b.preco }}</td>
                    <td id="dispo"> {{ b.disponivel }}</td>

                    <td><button @click="vender(b.id)">Vender</button></td>
                    <td><button @click="editar(b.id)">Editar</button></td>
                    <td><button>Excluir</button></td>
                </tr>
            </tbody>



        </table>
    </div>
</template>

<style lang="scss" scoped></style>