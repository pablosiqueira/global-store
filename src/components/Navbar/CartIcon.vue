<template>
    <div class="flex-none cart-box">
        <router-link to="/cart" class="mx-2 flex cart-link">
            <img src="@/assets/navbar/cart_white.png" class="flex-none" id="cart_img">
            <div v-if="number_itens" class="cart-number flex-none">
                <span id="cart-quantity" class="text-center">{{number_itens}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    computed:{
        number_itens(){
            return this.$store.getters.numberItems
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
#cart_img{
    max-height: 50px;
}
.cart-number, #cart_img{
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
.cart-link{
    justify-content: center;
    max-width: 100px;
}
.cart-box{
    display: inline-flex;
    justify-content: center;
    margin-inline: 2rem;
    width: 246px;
}
.cart-div{
    max-width: 86px;
    margin-inline: auto;
}
#cart-quantity{
    display: block;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: bold;
    color: rgba(30, 58, 138,1);
    margin-right: .2rem;
}
.cart-number{
    background-color: white;
    color: black;
    width: 22px;
    height: 22px;
    border-style: hidden;
    border-radius: 50%;
}

</style>