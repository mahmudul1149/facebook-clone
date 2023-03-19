<template>
  <div>
    <div class="crete-post">
      <div class="flex">
        <!-- <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-13y7ul3 profile"
          focusable="false"
          aria-hidden="true"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
          data-testid="PersonIcon"
          cursor="pointer"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          ></path>
        </svg> -->
        <img class="profile" src="../assets/image/avatar.png" alt="" />

        <input
          type="text"
          name=""
          id=""
          placeholder="what's on your mind,"
          v-model="text"
          @change="addItem"
        />
      </div>
      <div class="post-btn">
        <button class="btn">
          <svg
            fill="#E73F5A"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod ruv4vjns mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                  transform="translate(354 158.5)"
                ></path>
                <path
                  d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                  transform="translate(354 158.5)"
                ></path>
              </g>
            </g>
          </svg>
          <span>Live video</span>
        </button>
        <button class="btn flex1">
          <svg
            fill="#41B35D"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod n7gtua6e mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                  transform="translate(352 156.5)"
                ></path>
                <path
                  fill-rule="nonzero"
                  d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                  transform="translate(352 156.5)"
                ></path>
              </g>
            </g>
          </svg>
          <span>Photos/Videos</span>
        </button>
        <button class="btn">
          <svg
            fill="#EAB026"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod dxn77deq mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                  transform="translate(353.5 156.5)"
                ></path>
                <path
                  fill-rule="nonzero"
                  d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                  transform="translate(353.5 156.5)"
                ></path>
                <path
                  d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                  transform="translate(353.5 156.5)"
                ></path>
              </g>
            </g>
          </svg>
          <span>Felling/activity</span>
        </button>
      </div>
    </div>

    <div class="post">
      <div class="items" v-if="userItems">
        <div class="item" v-for="item in userItems" :key="item.id">
          <div class="bio">
            <img src="~/assets/image/avatar.png" class="prprofile-img" alt="" />

            <div class="content">
              <span class="title">{{ user.displayName }}</span>
            </div>
          </div>
          <p>{{ item.post }}</p>

          <div class="react-btn">
            <button class="btn btn-react">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                width="20px"
                height="20px"
                y="0px"
                viewBox="0 0 486.926 486.926"
                style="enable-background: new 0 0 486.926 486.926"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M462.8,181.564c-12.3-10.5-27.7-16.2-43.3-16.2h-15.8h-56.9h-32.4v-75.9c0-31.9-9.3-54.9-27.7-68.4
		c-29.1-21.4-69.2-9.2-70.9-8.6c-5,1.6-8.4,6.2-8.4,11.4v84.9c0,27.7-13.2,51.2-39.3,69.9c-19.5,14-39.4,20.1-41.5,20.8l-2.9,0.7
		c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c7.6,0,14.5-3.5,19-8.9
		c12.5,13.3,30.2,21.6,49.4,21.6h65.9h6.8h135.1c45.9,0,75.2-24,80.4-66l26.9-166.9C489.8,221.564,480.9,196.964,462.8,181.564z
		 M103.2,441.064c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7
		v228.4H103.2z M462.2,241.764l-26.8,167.2c0,0.1,0,0.3-0.1,0.5c-3.7,29.9-22.7,45.1-56.6,45.1H243.6h-6.8h-65.9
		c-21.3,0-39.8-15.9-43.1-36.9c-0.1-0.7-0.3-1.4-0.5-2.1v-191.6l5.2-1.2c0.2,0,0.3-0.1,0.5-0.1c1-0.3,24.7-7,48.6-24
		c32.7-23.2,49.9-54.3,49.9-89.9v-75.3c10.4-1.7,28.2-2.6,41.1,7c11.8,8.7,17.8,25.2,17.8,49v87.8c0,6.6,5.4,12,12,12h44.4h56.9
		h15.8c9.9,0,19.8,3.7,27.7,10.5C459,209.864,464.8,225.964,462.2,241.764z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span>Like</span>
            </button>
            <button class="btn btn-comment">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"
                />
              </svg>
              <span>Comment</span>
            </button>
            <button class="btn btn-share">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20px"
                height="20px"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <path d="M104.1,705.2" />
                  <path
                    d="M978.7,420.9L581.6,95c-9.2-7.5-21.8-8.9-32.5-3.9c-10.7,5.1-17.5,15.8-17.5,27.7l-0.9,171.9c-178,5.7-315.8,62.9-405.1,167.4C-19.9,628.2,12.6,875.5,14.1,885.8c2.3,15,13.3,26,28.4,26c0.3,0,0.7,0,1.1,0c15.5-0.5,25.3-12.5,26.6-28c1-11.3,31.5-286.2,460.6-285.9l0.9,175.8c0,11.8,6.8,22.6,17.6,27.7c10.6,5.1,23.4,3.5,32.5-4l397.1-329c7.1-5.8,11.2-14.5,11.2-23.7C990,435.4,985.8,426.7,978.7,420.9z M592.9,708.8v-142c0-8.1-3.2-15.9-9-21.7c-5.8-5.7-13.5-8.9-21.6-8.9c0,0-0.1,0-0.1,0c-306.4,0.2-423.5,103.7-490.4,195c9.8-73.2,38.3-161.4,100.5-233.5c82.6-95.8,215.7-146.3,390-146.3c16.9,0,30.6-13.7,30.6-30.6V183.2L911,444.8L592.9,708.8z"
                  />
                </g>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        <div class="item">
          <div class="bio">
            <img src="../assets/image/avatar.png" alt="" />

            <div class="content">
              <span class="title">Md Mahmudul islam</span>
            </div>
          </div>
          <p>I am a frontend developer</p>

          <div class="react-btn">
            <button class="btn btn-react">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                width="20px"
                height="20px"
                y="0px"
                viewBox="0 0 486.926 486.926"
                style="enable-background: new 0 0 486.926 486.926"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M462.8,181.564c-12.3-10.5-27.7-16.2-43.3-16.2h-15.8h-56.9h-32.4v-75.9c0-31.9-9.3-54.9-27.7-68.4
		c-29.1-21.4-69.2-9.2-70.9-8.6c-5,1.6-8.4,6.2-8.4,11.4v84.9c0,27.7-13.2,51.2-39.3,69.9c-19.5,14-39.4,20.1-41.5,20.8l-2.9,0.7
		c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c7.6,0,14.5-3.5,19-8.9
		c12.5,13.3,30.2,21.6,49.4,21.6h65.9h6.8h135.1c45.9,0,75.2-24,80.4-66l26.9-166.9C489.8,221.564,480.9,196.964,462.8,181.564z
		 M103.2,441.064c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7
		v228.4H103.2z M462.2,241.764l-26.8,167.2c0,0.1,0,0.3-0.1,0.5c-3.7,29.9-22.7,45.1-56.6,45.1H243.6h-6.8h-65.9
		c-21.3,0-39.8-15.9-43.1-36.9c-0.1-0.7-0.3-1.4-0.5-2.1v-191.6l5.2-1.2c0.2,0,0.3-0.1,0.5-0.1c1-0.3,24.7-7,48.6-24
		c32.7-23.2,49.9-54.3,49.9-89.9v-75.3c10.4-1.7,28.2-2.6,41.1,7c11.8,8.7,17.8,25.2,17.8,49v87.8c0,6.6,5.4,12,12,12h44.4h56.9
		h15.8c9.9,0,19.8,3.7,27.7,10.5C459,209.864,464.8,225.964,462.2,241.764z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span>Like</span>
            </button>
            <button class="btn btn-comment">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"
                />
              </svg>
              <span>Comment</span>
            </button>
            <button class="btn btn-share">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20px"
                height="20px"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <path d="M104.1,705.2" />
                  <path
                    d="M978.7,420.9L581.6,95c-9.2-7.5-21.8-8.9-32.5-3.9c-10.7,5.1-17.5,15.8-17.5,27.7l-0.9,171.9c-178,5.7-315.8,62.9-405.1,167.4C-19.9,628.2,12.6,875.5,14.1,885.8c2.3,15,13.3,26,28.4,26c0.3,0,0.7,0,1.1,0c15.5-0.5,25.3-12.5,26.6-28c1-11.3,31.5-286.2,460.6-285.9l0.9,175.8c0,11.8,6.8,22.6,17.6,27.7c10.6,5.1,23.4,3.5,32.5-4l397.1-329c7.1-5.8,11.2-14.5,11.2-23.7C990,435.4,985.8,426.7,978.7,420.9z M592.9,708.8v-142c0-8.1-3.2-15.9-9-21.7c-5.8-5.7-13.5-8.9-21.6-8.9c0,0-0.1,0-0.1,0c-306.4,0.2-423.5,103.7-490.4,195c9.8-73.2,38.3-161.4,100.5-233.5c82.6-95.8,215.7-146.3,390-146.3c16.9,0,30.6-13.7,30.6-30.6V183.2L911,444.8L592.9,708.8z"
                  />
                </g>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      userItems: [
        {
          title: "",
          post: " ",
          completed: true,
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.commit("initializeStore");
  },
  methods: {
    addItem() {
      this.userItems.unshift({ post: this.text });

      this.text = "";
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_mixins.scss";

.crete-post {
  margin-top: 1.5rem;
  background: white;
  padding: 0 0.5rem;

  .flex {
    @include flex;
    gap: 0.5rem;
    padding: 0.4rem;
    border-bottom: 1px solid rgba(81, 78, 78, 0.1);

    .profile {
      background: #c9ccd1;
      width: 55px;
      height: 55px;
      cursor: pointer;
      border-radius: 50%;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 0.7rem 0.5rem;
      border-radius: 35px;
      font-size: 1rem;
      background: #f0f2f5;

      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      &:hover {
        background: #e4e6e9;
      }
    }
  }
  .post-btn {
    @include flex;
    justify-content: space-between;
    padding: 0.5rem;

    span {
      font-size: 1rem;
    }
    button {
      @include flex;
      gap: 0.5rem;
      border-radius: 5px;
      padding: 0.5rem 1.3rem;
      text-align: center;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
}
.post {
  .items {
    .bio {
      .profile-img {
        border: 1px solid #ccc;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  p {
    padding-left: 0.8rem;
  }
}
@media screen and (max-width: 800px) {
  .crete-post {
    button:last-child {
      display: none;
    }
  }
}
</style>
