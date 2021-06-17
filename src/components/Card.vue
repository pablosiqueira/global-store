<template>
    <div v-for="product in products" :key="product.id" class="card border-2">

        <router-link :to="{name:'Details', query: { id: product.id }, params: {title: product.name}}">
            <img :src="product.image_url" :alt="product.name">
            <div class="text-center max-w-max px-4 block mx-auto details">Details</div>
            <h3 class="mt-2">{{product.name}}</h3>
            <h5 class="line-through">{{product.prices.full}}</h5>
            <h4 class="font-bold">{{product.prices.current}}</h4>
        </router-link>

    </div>
</template>

<script>
export default {
    props:{
        products:{type:Object},
        mykey:{type:Number}
    },
    setup() {
        
    },
}
</script>

<style scoped>
.card{
        width: 250px;
        font-family: 'Signika', sans-serif;
        transition: 1s;
        display: block;
        margin-inline: auto;
    }
.card:hover, .details{
        border-color: rgba(30, 58, 138,1);
}
.card:hover .details{
    display: block;
}    
.card:hover img{
    transform: scale(.9);
}    
a{
    position: relative;
}
.details{
   position: absolute;
   top: 50%;
   top: 170px;
   left: 80px;
   display: none;
   transition: 1s ease;
   border-width: 1px;
   border-style: solid;
   color: rgba(30, 58, 138,1) ;
}
.details:hover{
    background-color: rgba(30, 58, 138,1);
    color: white;
}
img{
        height: 200px;
        display: block;
        margin-inline: auto;
        transition: 1s;
        object-fit: scale-down;
    } 
h3,h5, h4{
    margin-left: .5rem;
}    
</style>