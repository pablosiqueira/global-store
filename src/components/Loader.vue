<template>
    <h5 class="text-center pb-4">Loading...</h5>
    <div class="loader"></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
h5{
    font-family: 'Signika', sans-serif;
    font-size: large;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgba(30, 58, 138,1);
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  display: block;
  margin-inline: auto;
  transition: 2s;
}
/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>