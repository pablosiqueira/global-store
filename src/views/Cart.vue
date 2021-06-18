<template>
    <h1 class="text-center text-2xl py-4">Shopping Cart</h1>
    <div v-if="items.length > 0" class="item-group">
        <div v-for="item in items" :key="item.id" class="flex flex-row item-area my-4 border-solid border-2 border-blue-300 px-2 py-2" :id="item.id">
            <img :src="item.img" class="item-img" :alt="item.name">
            <div class="flex flex-col mx-4 desc">
                <h2 class="text-center"><b>{{item.name}}</b></h2>
                <h4 class="text-center"><b>Size:</b> {{item.size}} </h4>
                <div class="text-center"><b>Quantity:</b>  
                <button class="btn btn-add-rm ml-2" @click="remove(item)">-</button> {{item.quantity}} 
                <button class="btn btn-add-rm" @click="add(item,item.maxQuantity)">+</button>
                <button class="btn ml-2" @click="excludeItem(item)">
                    <img class="trash mt-2" src='@/assets/cart/trash.png'>
                </button>
                </div>
            </div>
            <h3 class="text-center desc price"><b>Price:</b> <br> U$ {{(item.price * item.quantity).toFixed(2)}}</h3>
        </div>
        <div class="text-center text-lg">
            <h2><b>Total:</b> U$ {{total.toFixed(2)}}</h2>
        </div>
        <div class="mt-4">
            <button class="btn btn-empty block mx-auto view-prod px-2 py-2 mb-8" @click="clear()">Clear Cart</button>
        </div>
    </div>
    <div v-else>
        <h1 class="text-center">Your shopping cart is empty.</h1>
        <router-link :to="{name:'List', query: { category: 'all' }}"><button class="btn view-prod block mx-auto py-2 px-2 my-4">Shop Products</button></router-link>
    </div>    
</template>

<script>
import { useStore } from 'vuex'
import {reactive,toRefs} from 'vue'
export default {
    setup() {
        const store = useStore()
        const data = reactive({
        items : store.getters.cartItems,
        total: store.getters.cartTotal
        })
        function remove(product){
            store.commit('removeFromCart', product)
            data.total = store.getters.cartTotal
            data.items = store.getters.cartItems
        }
        function add(product,max){
            if(product.quantity < max){
            store.commit('addToCart', product)
            data.total = store.getters.cartTotal
            }            
        }
        function clear(){
            store.commit('clearCart')
            data.total = store.getters.cartTotal
            data.items = store.getters.cartItems
        }
        function excludeItem(product){
            store.commit('excludeProduct',product)
            data.total = store.getters.cartTotal
            data.items = store.getters.cartItems
        }
        return {...toRefs(data),remove,add,clear,excludeItem}
    },
}
</script>

<style scoped>
    .trash{
        height: 25px;
        position: relative;
        top: 5px;
    }
    .view-prod{
        background-color: rgba(30, 58, 138,1);
        color: white;
    }
    .view-prod:hover{
        color: #d4bb62;
    }
    .btn-add-rm{
        border-width: 1px;
        border-style: solid;
        font-size: large;
        width: 20px;
        border-color: gray;
    }
    .item-group{
        display: block;
        margin-inline: auto;
        max-width: 500px;
    }
    .price{
        min-width: 71px;
    }
    .desc{
        margin-block: auto;
    }
    .item-list{
        max-width: 200px;
    }
    .item-area{
        justify-content: space-between;
    }
    .item-img{
        height: 100px;
        width: 100px;
        object-fit: scale-down;
    }
    @media (max-width: 670px) {
        .item-area{
            flex-direction: column;
            margin-inline: 1rem;
        }
        .item-img{
            margin-inline: auto;
        }
    }
</style>