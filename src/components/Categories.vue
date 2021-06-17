<template>
    <h1 class="text-center text-4xl py-8 italic font-bold mt-4">Shop by Category</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ctg-grid">
        <div v-for="(categorie,key) in categories" :key=key class=" mx-6 pb-4">
            <router-link :to="{name:'List', query: { category: categorie.toLowerCase() }, params: {title:categorie}}">  
            <div class="img-box bg-blue-900">  
            <img :src="require('@/assets/categories/' + categorie + '.png')" class="img-cat">
            </div>
            <h3 class="text-center mt-2 font-bolder uppercase">{{categorie}}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: ['Shoes','Jackets','Shirts','Shorts','Acessories']
            }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
.img-box{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    padding-top: 35px;
    transition: 1s;
    display: block;
    margin-inline: auto;
}
.ctg-grid{
    max-width: 1000px;
    margin-inline: auto;
}
.img-cat{
    display: block;
    margin-inline: auto;
    max-height: 80px;
    transition: 1s;
}

h3{
    font-size: larger;
    font-family: 'Signika', sans-serif;
    font-weight: 500;
}

a:hover .img-box{
    background-color: #d4bb62;
}

a:hover .img-cat{
    transform: scale(1.2);
}

</style>