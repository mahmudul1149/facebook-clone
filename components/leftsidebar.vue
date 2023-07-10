<template>
  <div class="left-sidebars mt-1">
    <div class="container-box">
      <ul>
        <li class="flex">
          <img src="../assets/image/avatar.png" class="avatar" alt="" />

          <span>{{ userName }}</span>
        </li>
      </ul>
      <ul>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/friends.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Friends</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/watch.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Watch</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/add-center.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Ad Center</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/groups.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Groups</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/marketplace.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Marketplace</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="../assets/image/memories.png"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Memories</span>
        </li>
        <li>
          <svg
            class="ml-1"
            version="1.1"
            id="Layer_1"
            width="36"
            height="30"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.59 122.88"
            style="enable-background: new 0 0 122.59 122.88"
            xml:space="preserve"
          >
            <g>
              <path
                d="M4.95,0h112.68c2.74,0,4.95,2.22,4.95,4.95v112.97c0,2.74-2.22,4.95-4.95,4.95c-1.37,0-2.61-0.56-3.51-1.46L61.16,75.79 L8.18,121.66c-2.06,1.78-5.18,1.56-6.97-0.5c-0.81-0.93-1.2-2.09-1.2-3.23H0V4.95C0,2.22,2.22,0,4.95,0L4.95,0z M112.68,9.91H9.91 v97.2l47.97-41.54c1.82-1.62,4.61-1.68,6.51-0.04l48.3,41.61V9.91L112.68,9.91z"
              />
            </g>
          </svg>
          <span>Saved</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    userName() {
      return this.user ? this.user.displayName : "";
    },
    userEmail() {
      return this.user ? this.user.email : "";
    },
  },
  filters: {
    liveSubstr: function (string) {
      return string.substring(0, 1);
    },
  },
};
</script>

<style lang="scss">
.ml-1 {
  margin-left: 1rem !important;
}
.left-sidebars ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  line-height: 3.5;
  margin-left: 0.4rem;
  .avatar {
    height: 36px;
    width: 36px;
  }
  cursor: pointer;
  &:hover {
    background: #e4e6e9;
  }
  span {
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .box {
    background: #356d24;
    width: 50px;
    height: 50px;
    color: white;
  }
}
.left-sidebars li img {
  margin-left: 1rem !important;
}
.left-sidebars .profile {
  margin-left: 1rem;
}
</style>
