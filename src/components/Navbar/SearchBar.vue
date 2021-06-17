<template>
    <div class="flex-grow search-box text-black">
            <div class="search-div flex-grow">
                <input type="search" id="site-search" class="border border-transparent focus:outline-none focus:ring-2 
                focus:ring-yellow-600 focus:border-transparent" placeholder="Search" v-model="search">
                <router-link :to="{name:'List', query: { category: 'all' , search: search.toLowerCase() }, params: {title: 'Search for ' + search}}">
                    <img id="search-icon" src="@/assets/navbar/search.png"></router-link>
            </div>
        </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    setup() {
        const data = reactive({
            search : ''
        })
        return {...toRefs(data)}
    },
}
</script>

<style scoped>
#site-search{
    margin-top: 1.9rem;
    height: 40px;
    width: 100%;
    max-width: 700px;
}

.search-div{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}

#search-icon{
    height: 60px;
    margin-top: 1.28rem;
}

input[type=search], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>