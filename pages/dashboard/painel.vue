<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient();


const logout = async () =>{

    const { error } = await supabase.auth.signOut()

    if(error){

        console.log('Algo errado o sair '+error);

    }

    return navigateTo('/');
}




</script>

<template>
    <div>
        <div>
            <button @click="logout">Sair</button>
        </div>
    
        <Venda />
    </div>
</template>

<style lang="scss" scoped>

</style>