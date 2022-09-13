<template>
   <div class="feed bg-dark">
     <div class="container">
       <div class="left-sidebar">
         <leftsidebarVue></leftsidebarVue>
       </div>
       <div class="feed-sidebar mt-2">
         <PostpageVue></PostpageVue>
       </div>
       <div class="right-sidebar">

       </div>
     </div>
   </div>
 </template>
 
 <script>
 import leftsidebarVue from "../components/leftsidebar.vue";
import PostpageVue from '../components/Postpage.vue';
 
 export default {
   components: {
     leftsidebarVue,
     PostpageVue,
   },
 };
 </script>
 <style lang="scss" scoped>


  .feed {
 
   height: 100vh;
   .container {
     display: flex;
     justify-content: space-between;
     
     .left-sidebar {
       // position: fixed;
       // top: 4rem;
       // left: 0;
       width: 20%;
       position: fixed;
       left: 0;
     }
     .feed-sidebar {
       margin: 0 auto;
       width: 35%;
 
     }
     .right-sidebar {
       width: 25%;
       right: 0;
       position: fixed;
       
 
     }
   }
  }
 
  .bg-dark {
   background: #F0F2F5;
  }
  
 </style>
 