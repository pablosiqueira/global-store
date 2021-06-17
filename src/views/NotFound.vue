<template>
    <div class="text-center pt-8">
        <h1 class="text-4xl">Page Not Found</h1>
        <h3 class="text-2xl">Code 404</h3>
        <button class="btn text-xl mt-4 px-2" @click="$router.go(-1)">Go Back</button>
    </div>  
</template>

<style scoped>
.btn{
    background-color: rgba(30, 58, 138,1);
    color: white;
    border: transparent;
    border-width: 1px;
    border-radius: 5px;
}

.btn:hover{
    color: #d4bb62;
}
</style>