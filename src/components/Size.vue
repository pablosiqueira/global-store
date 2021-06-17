<template>
    <div class="grid grid-cols-7 gap-2 py-2 mx-2">
        <div v-for="(size,key) in sizes" :key=key class="text-lg mr-2">
                <button v-if="size.quantity > 0" class="active" :id = "'size_' + key" @click="clickSize(key)">{{key}}</button>
                <button v-else class="inactive">{{key}}</button>
        </div>
    </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    props:{
        sizes:{
            type: Object,
            default: null
        }
    },
    emits: ['selected'],
    setup(props,{emit}) {
        const data = reactive({
        selectedSize: null,
        })
        function clickedBTN(id){
            document.getElementById('size_'+ id).className = 'clicked' //ok
            var keys = Object.keys(props.sizes)
            var size = keys.length
            for (var i = 0; i < size ; i++){
                if(keys[i] != id && document.getElementById('size_'+ keys[i]).className == 'clicked'){
                    document.getElementById('size_'+ keys[i]).className = 'active'
                }
            }
        }
        function clickSize(id){
            this.clickedBTN(id)
            emit('selected',id)
        }
        return {...toRefs(data), clickedBTN, clickSize}
    },
}
</script>

<style scoped>
    .active, .inactive, .clicked{
        border: transparent;
        border-style: solid;
        border-width: 1px;
        border-radius: 50%;
        min-height: 30px;
        min-width: 30px;
        transition: .5s;
        font-weight: bolder;    
    }
    .active{
        background-color: rgba(30, 58, 138,1);
        color: white;
    }
    .inactive{
        background-color: lightgray;
        color: white;
        cursor: default
    }
    .active:hover, .clicked{
        background-color: #d4bb62;
        color: black;
    }
</style>