<template>
<h1 class="text-center text-5xl py-8 italic font-extrabold">NEW ARRIVALS</h1>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 arrivals">
    <div v-for="item in items" :key="item.id" class="product border-4 border-solid border-black mx-2 rounded-md">
    
    <div v-if="loading" class="mt-8">  
    <Loader />
    </div>

    <router-link v-else :to="{name:'Details', query: { id: item.id } ,params: {title: item.name}}">
    <img :src="item.image_url" :alt="item.name">
    <h3 class="text-lg text-center mb-1 extra-mg" >{{item.name}}</h3>
    </router-link>


    </div>
  </div>
</template>

<script>
import {onMounted,reactive,toRefs} from 'vue'
import api from '@/services/api'
import Loader from '@/components/Loader.vue'
export default {
  components:{
    Loader
  },
  setup() {
    const data = reactive({
        loading: true,
        items: {
            1: [],
            2: [],
            3: []
        }
        })
    onMounted(async () => {
                for (var i = 1; i < 4; i++){
                const response = await api.product(i)
                data.items[i] = response.data
                }
                data.loading = false
        })
     return {...toRefs(data)}   
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
.arrivals{
  max-width: 1000px;
  margin-inline: auto;
}
  img{
    display: block;
    margin-inline: auto;
    height: 180px;
    transition: 1s;
    margin-top: .5rem;
  }

a:hover img{
  transform: scale(1.2);
}
a:hover h3{
  color: black;
}

h3{
  font-family: 'Signika', sans-serif;
  color: rgba(30, 58, 138,1);
}

.product{
  width: 300px;
  height: 240px;
  border-color: #187bcd;
  border-style: double;
  margin-inline: auto;
}

.extra-mg{
    margin-top: .2rem;
}

h1{
    color: rgba(30, 58, 138,1);
}
  

</style>