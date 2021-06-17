<template>
  <Navbar />
  <SectionsBar />
  <div class="main">
  <router-view/>
  </div>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SectionsBar from '@/components/SectionsBar.vue'
import Footer from '@/components/Footer.vue'
import {onMounted} from 'vue'
import { useStore } from 'vuex'

export default {
  components:{
    Navbar,
    SectionsBar,
    Footer
  },
  watch: {
   // eslint-disable-next-line no-unused-vars
      '$route' (to, from) {
        if(to.params.title){
          document.title = to.params.title
        }else{
          document.title = to.meta.title || 'Global Store'
        }
      },
    },
  setup() {
    const store = useStore()
    onMounted(async () => {
        store.commit('updateCartFromLocalStorage')
        })
  },

  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
.main{
  background-color: cornsilk;
  min-height: 70vh;
  font-family: 'Signika', sans-serif;
}
</style>

