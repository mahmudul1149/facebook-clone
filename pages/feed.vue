<template>
   <div class="feed bg-dark">
     <div class="container">
       <div class="left-sidebar">
         <leftsidebarVue></leftsidebarVue>
       </div>
       <div class="feed-sidebar mt-3">
         <div class="text">
      
         </div>
       </div>
       <div class="right-sidebar">

       </div>
     </div>
   </div>
 </template>
 
 <script>
 import leftsidebarVue from "../components/leftsidebar.vue";
 export default {
   components: {
     leftsidebarVue,
   },
 };
 </script>
 <style lang="scss" scoped>
 @import "../assets/scss/mixins.scss";
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
       width: 30%;
 
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
 