<template>
    <div class="sections flex">
        <a id="catg" @click="expand()" class="text-xl">Categories <span id="down">&#8595;</span><span id="up">&#8593;</span></a>
        <router-link :to="{name:'List', query: { category: ctg.toLowerCase() }, params: {title: ctg}}" 
        v-for="(ctg,key) in ctgs" :key="key" class="text-2xl mx-4 route" >{{ctg}}</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ctgs: ['All','Shoes','Jackets','Shirts','Shorts','Acessories']
        }
    },
    setup(){
        function expand(){
            var routes = document.getElementsByClassName('route')
            var arrowUP = document.getElementById('up')
            var arrowDown = document.getElementById('down')
            if(arrowDown.style.display == 'contents' || arrowDown.style.display == ''){
                routes.forEach(element => {
                    element.style.display = 'block'
                })
                arrowDown.style.display = 'none'
                arrowUP.style.display = 'contents'
                console.log('down')
            }else{
                 routes.forEach(element => {
                    element.style.display = 'none'
                })
                arrowDown.style.display = 'contents'
                arrowUP.style.display = 'none'
                console.log('up')
            }
        }
        return {expand}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
.sections{
    background: #187bcd;
    width: 100%;
    min-height: 50px;
    font-family: 'Signika', sans-serif;
    justify-content: center;
    overflow-x: auto;
}

a{
    padding-top: .6rem ;
    padding-inline: 1rem;
    color: #d0efff;
}

a:hover, a:focus{
    color: #d4bb62;
    border-bottom: 3px solid #d4bb62;
}

#catg{
    display: none;
    cursor: pointer;
}

#up{
    display: none;
}

@media (max-width: 680px) {
    #catg{
    display: block;
    }
    #down{
        display: contents;
    }
    .sections{
        flex-direction: column;
        text-align: center;
    }

    a:hover{
        border:none
    }

    .route{
        display: none;
    }
    
}
</style>