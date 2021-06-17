<template>
  <Arrivals />
  <Categories />
</template>

<script>
import Arrivals from '@/components/Arrivals.vue'
import Categories from '@/components/Categories.vue'
export default {
  title: 'Global Store',
  name: 'Home',
  components: {
    Arrivals,
    Categories
  }
}
</script>

