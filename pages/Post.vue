<template>
  <div class="feed bg-dark">
    <div class="container">
      <div class="left-sidebar">
        <leftsidebarVue></leftsidebarVue>
      </div>
      <div class="feed-sidebar mt-2">
        <PostpageVue></PostpageVue>
        <createpost-vue></createpost-vue>
        <post-item-vue></post-item-vue>
      </div>
      <div class="right-sidebar mt-2">
        <rightsidebar-vue></rightsidebar-vue>
      </div>
    </div>
  </div>
</template>

<script>
import leftsidebarVue from "../components/leftsidebar.vue";
import createpostVue from "../components/createpost.vue";
import PostpageVue from "../components/Postpage.vue";
import postItemVue from "../components/postItem.vue";
import rightsidebarVue from "../components/rightsidebar.vue";

export default {
  components: {
    leftsidebarVue,
    PostpageVue,
    createpostVue,
    postItemVue,
    rightsidebarVue,
  },
};
</script>
<style lang="scss" scoped>
.feed {
  height: 100%;
  .container {
    display: flex;
    justify-content: space-between;

    .left-sidebar {
      width: 20%;
      position: fixed;
      left: 0;
    }
    .feed-sidebar {
      margin: 0 auto;
      width: 50%;
    }
    .right-sidebar {
      width: 18%;
      right: 0;
      position: fixed;
      margin-left: 2rem !important;
    }
  }
}

.bg-dark {
  background: #f0f2f5;
}
@media screen and (max-width: 1300px) {
  .feed-sidebar {
    width: 50% !important;
  }
  .right-sidebar {
    width: 10%;
  }
}
@media screen and (max-width: 1100px) {
  .feed-sidebar {
    width: 70% !important;
    margin-right: 25% !important;
  }
  .left-sidebar {
    display: none;
  }
}
@media screen and (max-width: 900px) {
  .right-sidebar {
    display: none;
  }
  .feed-sidebar {
    width: 100% !important;
  }
}
@media screen and (max-width: 600px) {
  .feed-sidebar {
    width: 350px !important;
    margin: auto !important;
  }
}
</style>
