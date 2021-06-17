<template>
    <footer class="site-footer bg-blue-900 pt-4" id="info">
        <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4">

            <div class="md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-5 mx-2">
              <h6 class="my-2">About</h6>
              <p class="text-justify nav_item font-josefin">Web page created by Pablo Siqueira. Bachelor in Computer Engineering and Science & Techonology 
                by the Federal University of Rio Grande do Norte (UFRN) from Brazil and former exchange student of the Lappeeranta University
              of Technology (LUT) in Finland. For more info, check my <a href="https://pablosiqueira.github.io/" target="_blank"><b>Portifolio Page</b></a>. </p>
            </div>
  
            <div class="md:col-span-4 mx-2">
              <h6 class="my-2 text-left">Contact & Networks</h6>
              <ul class="footer-links nav_item">
                <li><a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg> <span class="ml-1 text-base">Email: pablo16@outlook.com</span></a></li>
                <li><a href="https://www.linkedin.com/in/pablo-siqueira-457867150/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg> <span class="ml-1 text-base">Linkedin</span></a></li>
                <li><a href="http://lattes.cnpq.br/9695010765251628" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                  </svg> <span class="ml-1 text-base">Curriculum Lattes</span></a></li>
                <li><a href="https://github.com/pablosiqueira" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg> <span class="ml-1 mb-1 text-base">Github</span></a></li>
              </ul>
            </div>
          </div>
          <hr>
 

            <div>
              <h5 class="copyright-text text-center py-2 text-lg">Copyright &copy; 2021 All Rights Reserved by Pablo Siqueira. </h5>
            </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');
.site-footer
{
  font-size:15px;
  line-height:24px;
  color:white;
}
h5, p, span{
    font-family: 'Signika', sans-serif;
}
.bi{
    height: 23px;
}
h6{
  font-family: 'Monoton', cursive;
}
#contact{
  margin-left: .8rem;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0;
}
.site-footer h6
{
  color:white;
  font-size:23px;
  margin-top:5px;
  letter-spacing:2px;
}
.site-footer a
{
  color:white;

}
.site-footer a:hover
{
  color:#d4bb62;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block;
  text-decoration: none;
}
ul li{
  margin-top: 0;
}
.footer-links a
{
  color: white;
  text-decoration:none;
  display: inline-flex;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#d4bb62;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}

.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
</style>