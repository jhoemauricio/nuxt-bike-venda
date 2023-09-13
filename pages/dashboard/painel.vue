<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'login'
})

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
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
         
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
         
        
            <div class="flex justify-center items-center md:order-2">
          
                <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                 
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2">
              
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">Cadastrar Bike</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">Logout</a>
                    </li>
         
                </ul>

                </div>
               
            
        </div>
    </nav>
    
</template>

<style lang="scss" scoped></style>