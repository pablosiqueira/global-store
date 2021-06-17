<template>
    <div v-if="loading"><Loader /></div>

    <div v-else class="flex details py-4 pt-8">
        <div v-if="!error" class="flex-initial">
            <img :src="product.image_url" :alt="product.name">
        </div>    
        
        <div v-if="!error" class="flex-initial text-left px-2 desc">
            <h1 class="text-2xl"><b>{{product.name}}</b></h1>
            <h5 class="line-through full-price">U$ {{product.prices.full}}</h5>
            <h1 class="text-2xl current-price"><b>U$ {{product.prices.current}}</b></h1>
            <h4><b>Color:</b> {{product.color}}</h4>
            <h4><b>Size:</b></h4>
            <Size :sizes="product.sizes" @selected="onSelected"/>
            <h4 v-if="size && product.sizes[size].quantity < 10" class="text-red-600">Only {{product.sizes[size].quantity}} left in stock</h4>
            <h4 v-if="alertSize && size == null" class="text-red-600 text-center py-2 text-lg">Please select a size</h4>
            <button class="btn text-lg" @click="addToCart">Add to Cart</button>
        </div>

        <div v-else class="text-center text-2xl pt-4">Product not found.</div>
    </div>


</template>

<script>
import Size from '@/components/Size.vue'
import {onMounted,reactive,toRefs} from 'vue'
import { useStore } from 'vuex'
import { useRoute} from 'vue-router'
import Loader from '@/components/Loader.vue'
import api from '@/services/api'
export default {
    components:{
        Loader,
        Size
    },
    props:{
        id:{
            type: String,
            default: null
        },
    },
    setup(props) {
        const store = useStore()
        // eslint-disable-next-line no-unused-vars
        const route = useRoute()
        const data = reactive({
        product: [],
        loading: true,
        error: false,
        size: null,
        alertSize: false,
        selectedProduct: {
            id: '',
            name:'',
            size: '',
            img: '',
            price: '',
            maxQuantity: ''
        }
        })

        function onSelected(code){  
        data.size = code
        }

        function addToCart(){
            if(data.size == null){
                data.alertSize = true
            }else{
                console.log('adding')
                //data.selectedProduct = [{id: data.product.id + '_' + data.size},{name: data.product.name},{size: data.size},{img: data.product.image_url}]
                data.selectedProduct.id = data.product.id + '_' + data.size
                data.selectedProduct.name = data.product.name
                data.selectedProduct.size = data.size
                data.selectedProduct.img = data.product.image_url
                data.selectedProduct.price = data.product.prices.current
                data.selectedProduct.maxQuantity = data.product.sizes[data.size].quantity
                console.log(data.selectedProduct)  
                store.commit('addToCart', this.selectedProduct)
            }
        }
         onMounted(async () => {
             try{
                const response = await api.product(props.id)
                data.product = response.data
             } catch(error){
                if(error.response){
                console.log('error ' + error.response)
                data.error = true
                }
             }
            data.loading = false
        })
        return {...toRefs(data), onSelected, addToCart}
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
    .desc{
        font-family: 'Signika', sans-serif;
    }
    .details{
        justify-content: center;
    }
    img{
        max-width: 415px;
    }
    .current-price, b{
        color: rgba(30, 58, 138,1);
    }
    .full-price{
        color: gray;
    }
    .btn{
        background-color: rgba(30, 58, 138,1);
        color: white;
        font-weight: bold;
        width: 100%;
        margin-top: .5rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        margin-bottom: 1rem;
    }
    .btn:hover{
       background-color: #d4bb62;
        color: black; 
    }

@media (max-width:860px) {
    .details{
        flex-direction: column;
    }

    img{
        width: -webkit-fill-available;
    }
}
</style>