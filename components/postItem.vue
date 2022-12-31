<template>
  <div class="post">
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id">
        <button class="dots-icon btn">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            data-testid="MoreHorizIcon"
          >
            <path
              d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            ></path>
          </svg>
        </button>

        <div class="bio">
          <img :src="item.profileUrl" alt="" />
          <div class="content">
            <span class="title">{{ item.title }}</span>
            <span class="date">{{ item.postTime }}</span>
          </div>
        </div>
        <p>{{ item.postTitle }}</p>
        <img v-if="items" class="post-image" :src="item.postUrl" alt="" />
        <div class="show-react">
          <div class="box">
            <span>
              <img
                class="gewbibgg"
                height="18"
                role="presentation"
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                width="18"
              />
            </span>
            <span>
              <img
                class="gewbibgg"
                height="18"
                role="presentation"
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                width="18"
              />
            </span>
          </div>
          <a href="#">{{ item.react }}</a>
          <span class="comments">{{ item.comment }}</span>
        </div>

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
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("initItems");
  },
};
</script>

<style lang="scss">
.post {
  margin: 1rem 0;
  .item {
    box-shadow: 0 0 2px rgba(20, 17, 17, 0.3);
    background: #fff;
    border-radius: 10px;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
    p {
      margin: 0.5rem;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
    }
    .dots-icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
    .show-react {
      display: flex;
      gap: 7px;
      padding: 0.4rem 1rem;
      cursor: pointer;
      .box {
        display: flex;
        align-items: center;
      }
      a {
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
      }
      .comments {
        margin-left: auto;
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
      }
    }
  }
  .bio {
    display: flex;

    padding: 12px;
    gap: 0.5rem;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      object-fit: cover;
      cursor: pointer;
    }
    .content {
      margin-top: 3px;
      .title {
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: #333333;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      .date {
        font-size: 0.7rem;

        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        display: block;
      }
    }
  }
  .post-image {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
  }
  .react-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    margin: 0.5rem !important;
    border-top: 1px solid rgba(171, 167, 167, 0.4);
    border-bottom: 1px solid rgba(171, 167, 167, 0.4);
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      span {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
      }
    }
    .btn-react,
    .btn-comment,
    .btn-share {
      padding: 0.4rem 3.5rem;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .post {
    .items {
      .react-btn {
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;

        .btn-react,
        .btn-comment,
        .btn-share {
          padding: 0.4rem 0.3rem;

          &:hover {
            background: #e7e3e1;
          }
        }
      }
    }
  }
}
</style>
