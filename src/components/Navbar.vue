<template> 
    <div class="top-0 w-full bg-blue-900 text-white top-bar flex flex-wrap">
        <div class="flex-none title">
            <router-link to="/" class="text-3xl" id="logo">Global Store</router-link>
        </div>
        
        <SearchBar />

        <CartIcon />

    </div>
</template>

<script>
import SearchBar from '@/components/Navbar/SearchBar.vue'
import CartIcon from '@/components/Navbar/CartIcon.vue'
export default {
    components:{
        SearchBar,
        CartIcon
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

.top-bar{
    min-height: 100px;
    justify-content: center;
}

.title{
    margin-top: 2rem;
    font-family: 'Monoton', cursive;
    margin-inline: 2rem;
    width: 246px;
}

#logo:hover{
    color: #d4bb62;
}
</style>