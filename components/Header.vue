<template>
  <div>
    <header class="header">
      <div class="logo">
        <nuxt-link to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60"
            width="60"
            viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
          >
            <path
              d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
              fill="#1877f2"
            />
            <path
              d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
              fill="#fff"
            />
          </svg>
        </nuxt-link>
        <div class="search-box">
          <button class="btn btn-search">
            <svg
              class="svg-icon"
              style="width: 20; height: 20; vertical-align: middle; fill: #333"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M963.80969 874.914509 746.640896 653.056614c-3.587891-3.66551-7.710925-6.443725-12.110336-8.352256 46.655488-62.60183 74.359501-140.751667 74.359501-225.526477 0-205.788877-163.237376-372.568371-364.609741-372.568371C242.909082 46.60951 79.67785 213.390029 79.67785 419.177984c0 205.792973 163.231232 372.569395 364.603597 372.569395 92.421632 0 176.807936-35.134157 241.069056-93.044122 1.778586 3.55799 4.115866 6.89705 7.027302 9.871872l217.115546 221.85687c14.970573 15.300506 39.292518 15.300506 54.316237 0C978.780262 915.131494 978.780262 890.21399 963.80969 874.914509zM444.281446 732.950221c-169.564672 0-307.06176-140.4928-307.06176-313.772237 0-173.332685 137.496064-313.766195 307.06176-313.766195 169.570816 0 307.06176 140.433408 307.06176 313.766195C751.343206 592.457421 613.851238 732.950221 444.281446 732.950221z"
              />
            </svg>
          </button>

          <input type="text" name="" id="" placeholder="Search Facebook" />
        </div>
        <button class="btn btn-search-block">
          <svg
            class="svg-icon"
            style="width: 20; height: 20; vertical-align: middle; fill: #333"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M963.80969 874.914509 746.640896 653.056614c-3.587891-3.66551-7.710925-6.443725-12.110336-8.352256 46.655488-62.60183 74.359501-140.751667 74.359501-225.526477 0-205.788877-163.237376-372.568371-364.609741-372.568371C242.909082 46.60951 79.67785 213.390029 79.67785 419.177984c0 205.792973 163.231232 372.569395 364.603597 372.569395 92.421632 0 176.807936-35.134157 241.069056-93.044122 1.778586 3.55799 4.115866 6.89705 7.027302 9.871872l217.115546 221.85687c14.970573 15.300506 39.292518 15.300506 54.316237 0C978.780262 915.131494 978.780262 890.21399 963.80969 874.914509zM444.281446 732.950221c-169.564672 0-307.06176-140.4928-307.06176-313.772237 0-173.332685 137.496064-313.766195 307.06176-313.766195 169.570816 0 307.06176 140.433408 307.06176 313.766195C751.343206 592.457421 613.851238 732.950221 444.281446 732.950221z"
            />
          </svg>
        </button>
      </div>
      <div class="main-link">
        <ul class="items">
          <li class="item">
            <nuxt-link to="#" class="set">
              <svg
                viewBox="0 0 28 28"
                class="b6ax4al1 m4pnbp5e main-link-icon somyomsx ahndzqod p9vk499z"
                fill="#727478"
                height="28"
                width="28"
              >
                <path
                  d="M25.825  12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                class="b6ax4al1 m4pnbp5e somyomsx main-link-icon ahndzqod gnhxmgs4"
                fill="#727478"
                height="28"
                width="28"
              >
                <path
                  d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                class="b6ax4al1 m4pnbp5e somyomsx main-link-icon ahndzqod gnhxmgs4"
                fill="#727478"
                height="28"
                width="28"
              >
                <path
                  d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                class="b6ax4al1 m4pnbp5e somyomsx main-link-icon ahndzqod gnhxmgs4"
                fill="#727478"
                height="28"
                width="28"
              >
                <path
                  d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                class="b6ax4al1 m4pnbp5e somyomsx main-link-icon ahndzqod gnhxmgs4"
                fill="#727478"
                height="28"
                width="28"
              >
                <path
                  d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="right-link">
        <ul class="right-nav-links">
          <li class="item">
            <nuxt-link to="#">
              <svg
                fill="#050505"
                viewBox="0 0 44 44"
                width="20"
                height="20"
                class="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p"
              >
                <circle cx="7" cy="7" r="6"></circle>
                <circle cx="22" cy="7" r="6"></circle>
                <circle cx="37" cy="7" r="6"></circle>
                <circle cx="7" cy="22" r="6"></circle>
                <circle cx="22" cy="22" r="6"></circle>
                <circle cx="37" cy="22" r="6"></circle>
                <circle cx="7" cy="37" r="6"></circle>
                <circle cx="22" cy="37" r="6"></circle>
                <circle cx="37" cy="37" r="6"></circle>
              </svg>
            </nuxt-link>
          </li>
          <li class="item">
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk"
                fill="#050505"
                height="20"
                width="20"
              >
                <path
                  d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <li class="item">
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="b6ax4al1 m4pnbp5e ahndzqod g8r5yzqk"
                fill="#050505"
                height="20"
                width="20"
              >
                <path
                  d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
                ></path>
              </svg>
            </nuxt-link>
          </li>
          <button class="btn dropdown" v-if="!isUserAuth">
            <img
              @click="toggle"
              src="../assets/image/Profile-pic.jpg"
              alt=""
              class="profile"
            />
            <div v-if="visible" class="dropdown-menu">
              <div class="profile-details">
                <div class="items">
                  <div class="box">
                    <img src="../assets/image/Profile-pic.jpg" alt="" />
                    <span class="title">{{ user.displayName }}</span>
                  </div>
                  <div class="pro-title">
                    <a href="#">See all profiles</a>
                  </div>
                </div>
              </div>

              <div class="btn btn-logout">
                <button class="btn btn-flex">
                  <div class="item-box">
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon"
                      style="
                        pointer-events: none;
                        display: block;
                        width: 20;
                        height: 20;
                      "
                    >
                      <g class="style-scope yt-icon">
                        <path
                          d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span>Settings & privacy</span>
                </button>
                <button class="btn btn-flex">
                  <div class="item-box">
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      class="style-scope yt-icon"
                      style="
                        pointer-events: none;
                        display: block;
                        width: 24;
                        height: 24;
                      "
                    >
                      <g class="style-scope yt-icon">
                        <path
                          d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                          class="style-scope yt-icon"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span>Help & support</span>
                </button>
                <button class="btn btn-flex" @click.prevent="logout">
                  <div class="item-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                      xml:space="preserve"
                    >
                      <defs></defs>
                      <g
                        style="
                          stroke: none;
                          stroke-width: 0;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: none;
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                      >
                        <path
                          d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z"
                          style="
                            stroke: none;
                            stroke-width: 1;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: rgb(0, 0, 0);
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform=" matrix(1 0 0 1 0 0) "
                          stroke-linecap="round"
                        />
                        <path
                          d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z"
                          style="
                            stroke: none;
                            stroke-width: 1;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: rgb(0, 0, 0);
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform=" matrix(1 0 0 1 0 0) "
                          stroke-linecap="round"
                        />
                        <path
                          d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z"
                          style="
                            stroke: none;
                            stroke-width: 1;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: rgb(0, 0, 0);
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform=" matrix(1 0 0 1 0 0) "
                          stroke-linecap="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </button>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import { logout } from "../service/firebaseService";
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    user() {
      return this.$store.state.user;
    },
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    },
  },
  methods: {
    logout() {
      logout().then(() => {
        this.$store.commit("setUser", null);

        this.$router.push("/");
      });
    },
    toggle() {
      this.visible = !this.visible;
    },
  },
  mounted() {
    this.$store.dispatch("authAction");
  },
};
</script>

<style lang="scss">
li {
  list-style: none;
}

.btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 9999;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  .logo {
    display: flex;
    align-items: center;
  }
  .search-box {
    width: 200px;
    height: 40px;
    background: #f0f2f5;
    position: relative;
    border-radius: 35px;
    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.9rem;
      padding: 0 2.3rem;
    }
  }

  .btn-search {
    position: absolute;
    background: #f0f2f5;
    padding: 0.7rem;
    border-radius: 50%;
  }
  .btn-search-block {
    display: none;
    background: #f0f2f5;
    padding: 0.7rem;
    border-radius: 50%;
  }

  .main-link {
    .items {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      li .main-link-icon {
        padding: 16px 22px;
        border-bottom: 3px solid transparent;

        &:hover {
          fill: #1b74e4;
          border-bottom: 3px solid #1b74e4;
        }
      }
    }
  }

  .right-link {
    .right-nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-right: 1rem;

      .item {
        width: 35px;
        height: 35px;
        background: #d8dadf;
        border-radius: 50%;
        position: relative;
      }

      .m4pnbp5e {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .dropdown {
        position: relative;
        display: inline-block;
        .dropdown-menu {
          display: block;
          position: absolute;
          background-color: #fafafa;
          padding: 0.5rem;

          min-width: 350px;
          height: 260px;
          top: 3rem;
          right: 0;
          bottom: 0;
          z-index: 1;
          box-shadow: 0 0 10px rgba(89, 89, 90, 0.3);
          .profile-details {
            margin: 0.5rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) !important;
            border-radius: 5px;
            .items {
              padding: 0.5rem;
              .box {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding-bottom: 0.5rem;

                border-bottom: 1px solid rgba(89, 89, 90, 0.3);
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
                span {
                  font-family: "Gill Sans", "Gill Sans MT", Calibri,
                    "Trebuchet MS", sans-serif;
                  font-size: 1.2rem;
                }
              }
            }

            .pro-title {
              text-align: left;
              padding-top: 0.5rem;

              a {
                text-decoration: none;
                color: #3783e7;
                font-family: "Trebuchet MS", "Lucida Sans Unicode",
                  "Lucida Grande", "Lucida Sans", Arial, sans-serif;
                font-size: 1rem;
              }
            }
          }
          .btn-logout {
            text-align: left;
            margin-top: 5px;
            .btn-flex {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              width: 100%;
              box-sizing: border-box;
              padding: 0.5rem;
              .item-box {
                width: 35px;
                height: 35px;
                background: #ccc;
                border-radius: 50%;
                position: relative;
              }
              &:hover {
                background: #f2f2f2;
              }
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              span {
                font-size: 1rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 500;
              }
            }
          }
        }
      }
    }

    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
@media screen and (max-width: 900px) {
  .main-link {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .header {
    .search-box {
      display: none;

      input {
        font-size: 0.7rem;
      }
    }
    .btn-search-block {
      display: block !important;
    }
  }
}
</style>
