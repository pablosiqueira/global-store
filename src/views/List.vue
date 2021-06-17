<template>
    <div v-if="!$route.query.search">
    <h1 v-if="$route.query.category == 'all'"  class="text-center pb-4 pt-8 text-4xl">All Products</h1>
    <h1 v-else class="text-center capitalize pb-4 pt-8 text-4xl">{{$route.query.category}}</h1>
    </div>

    <div v-else>
        <h3 class="text-center py-8 text-2xl">Found {{products.length}} matchs for <i>"{{$route.query.search}}"</i></h3>
    </div>

    <div v-if="check && products.length < 1">
        <img class="search-error" src='@/assets/error/search.png'>
        <h5 class="text-center text-lg py-4">Sorry! No products found.</h5>
    </div>
    <div v-if="check" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 list-grid pb-4">
        <Card :products="products"/>
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader.vue'
import { useRoute} from 'vue-router';
import {onMounted,reactive,toRefs,watch} from 'vue'
import api from '@/services/api'
export default {
    components:{
        Card,
        Loader
    },
    props:{
        category:{
            type: String,
            default: null
        },
        search:{
            type: String,
            default: null
        }
    },
    setup(props) {
        const route = useRoute()
        //const router = useRouter()
        const data = reactive({
        products: [],
        check: false,
    })
    watch(
        () => route.query.category,
        // eslint-disable-next-line no-unused-vars
        async newProd => {
            if(!route.query.search){
            data.check = false
            //https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/
            if(route.query.category == 'all'){
            console.log('watch all')    
            const response = await api.all()
            data.products = response.data
            }else{
            console.log('watch cat')    
            const response = await api.category(route.query.category)
            data.products = response.data
            }
            data.check = true
            }
            
        },
    ),
    watch(
        () => route.query.search,
        // eslint-disable-next-line no-unused-vars
        async newProd => {
            if(route.query.search){
            data.check = false
            console.log('search')
            const response = await api.fulltextsearch(route.query.search)
            data.products = response.data
            console.log(data.products)
            data.check = true
            }else{
                if(route.query.category == 'all'){
                console.log('null search ' + route.query.search)
                const response = await api.all()
                data.products = response.data
                }
            }
            
        },
    ),

 
        onMounted(async () => {
            console.log('new')
            if(route.query.category == 'all'){
                if(route.query.search == null){
                    const response = await api.all()
                    data.products = response.data
                }else{
                    console.log('search ' + route.query.search + ' ' + props.search)
                    const response = await api.fulltextsearch(route.query.search)
                    data.products = response.data
                }                
            }else{
                console.log('cat ' + route.query.category + ' ' + props.category)
                const response = await api.category(route.query.category)
                data.products = response.data
                console.log(data.products)
            }
            data.check = true
            
        })

    return {...toRefs(data)}
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
    h1,h5{
        font-family: 'Signika', sans-serif;
    }
    .list-grid{
        margin-inline: auto;
        max-width: 1100px;
        
    }
    .search-error{
        display: block;
        margin-inline: auto;
        max-height: 100px;
        margin-top: 1rem;
    }
</style>