<template>
  <div class="left-sidebars mt-1">
    <div class="container-box">
      <ul>
        <li class="flex">
          <!-- <img class="profile" src="../assets/image/profile.png" alt="" /> -->
          <svg
            version="1.1"
            id="Layer_1"
            class="profile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="40"
            height=""
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <path
              style="fill: #ffffff"
              d="M256,508C117.04,508,4,394.96,4,256S117.04,4,256,4s252,113.04,252,252S394.96,508,256,508z"
            />
            <path
              style="fill: #d6d6d6"
              d="M256,8c136.752,0,248,111.248,248,248S392.752,504,256,504S8,392.752,8,256S119.248,8,256,8 M256,0
	C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0L256,0z"
            />
            <g>
              <ellipse
                style="fill: #0ba4e0"
                cx="256"
                cy="175.648"
                rx="61.712"
                ry="60.48"
              />
              <path
                style="fill: #0ba4e0"
                d="M362.592,360.624c0-57.696-47.728-104.464-106.592-104.464s-106.592,46.768-106.592,104.464H362.592
		z"
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

          <span>{{ user.displayName }}</span>
        </li>
      </ul>
      <ul>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEuJBYO2bw14eRYSUcKvn5rqfpKmA4GtxSp-kqYDga3FDBizg_WKQ8xmulQhtzd8Voch9te1uw4njJItUNBTQsr"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Friends</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeHUOGb_spanPBiZPEWzDDf6x42NRDTXGHJ53Y1ENNcYcnnQX9RTyhhq4Mm2owEhGBuB6fdcCeR8bkGGDHiP1AQ_v6"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Watch</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeG5sROZJ8FIdqRET8URJpQvdJ1I9kdbuqh0nUj2R1u6qMXeAoIqw_tSGUXaoD91C8GwN1Qrs0-pqmyb_1sB02YQ"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Ad Center</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeGFnFzh6YdCwRDrJWq6ERNpZ3xAUM5_bWpnfEBQzn9tapgIZ-HLDedXPbXRassPzZ74cuNwhxcxohpUcwR-NXPo"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Groups</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeEefNHeGZ5FTZnw3hiDPhP3-vsl1K9A-9v6-yXUr0D7246S0FNRLeyaGbvGSVxNbQgBzimbeSJvYBx8AZogT7IM"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Marketplace</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeGCLrxbQzJKaSvVHoqUjOT-a4YXxTz5jX9rhhfFPPmNf8Oq5JATRk1OPCqn-mgviry-K1tAuEBFhuakDsnVoZgN"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Memories</span>
        </li>
        <li>
          <img
            class="gneimcpu p9wrh9lq"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeGE1vwYEPxCjeddfF8ud-m3-5kYScafj0T7mRhJxp-PRDed3ZyR3P-iAAFGAfHr87PVzDCKsWyqXL_Eww76Zow0"
            style="height: 36px; width: 36px"
            alt=""
          />
          <span>Saved</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  filters: {
    liveSubstr: function (string) {
      return string.substring(0, 1);
    },
  },
  mounted() {
    this.$store.commit("initializeStore");
  },
};
</script>

<style lang="scss">
.left-sidebars ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  line-height: 3.5;
  margin-left: 0.4rem;
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
