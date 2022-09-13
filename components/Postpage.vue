<template>
  <div class="post-page">
    <div class="story">
      <div class="box">
        <img src="~/assets/image/profile.png" alt="" />
        <button class="btn btnDiv">
          <svg
            fill="white"
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            class="b6ax4al1 btn-add m4pnbp5e somyomsx ahndzqod qsbzbi57 dmdr2h6l kgzac55p"
          >
            <g fill-rule="evenodd" transform="translate(-446 -350)">
              <g fill-rule="nonzero">
                <path
                  d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                  transform="translate(354.5 159.5)"
                ></path>
                <path
                  d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                  transform="translate(354.5 159.5)"
                ></path>
              </g>
            </g>
          </svg>
        </button>

        <div class="text-center">
          <span>Create Story</span>
        </div>
      </div>
      <div class="box">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5c521f714bbe6f0b926ce988/960x0.jpg?format=jpg&width=960"
          alt=""
        />
        <button class="btn btnDiv-2">
          <img
            class="profile-pic"
            src="https://pbs.twimg.com/profile_images/2236907019/images_400x400"
            alt=""
          />
        </button>
        <span class="title">Mark jukar bag</span>
      </div>
      <div class="box">
        <img
          src="http://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg"
          alt=""
        />
        <button class="btn btnDiv-2">
          <img
            class="profile-pic"
            src="https://assets.hardwarezone.com/img/2019/11/google2.jpg"
            alt=""
          />
        </button>
        <span class="title">Sundar Pichail</span>
      </div>
      <div class="box">
        <img
          src="https://cdn.mos.cms.futurecdn.net/mQ2fqdNwVviPBBigDeg6Ja-320-80.jpg"
          alt=""
        />
        <button class="btn btnDiv-2">
          <img
            class="profile-pic"
            src="https://i2.wp.com/www.starmag.com/wp-content/uploads/2021/10/kylie-jenner-accusee-darnaquer-ses-fans-sa-collection-de-maillots-de-bain-fortement-critiquee.jpg?resize=600%2C460&ssl=1"
            alt=""
          />
        </button>
        <span class="title">Kylie Jenner</span>
      </div>
      <div class="box">
        <img
          src="https://bareillycollege.org/wp-content/uploads/2022/07/bill-gate-768x503.jpeg"
          alt=""
        />
        <button class="btn btnDiv-2">
          <img
            class="profile-pic"
            src="https://media-exp1.licdn.com/dms/image/C5603AQERTD_EeJiGlA/profile-displayphoto-shrink_400_400/0/1661816468423?e=1667433600&v=beta&t=igZyDGrawNrlCITFHgNI0AFVRTJlof9f23DVPu6cS4Q"
            alt=""
          />
        </button>
        <span class="title">Bill gates</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.post-page {
  .story {
    display: flex;
    gap: 0.3rem;

    .box {
      width: 130px;
      height: 220px;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(196, 196, 196, 0.3);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        opacity: 0.9;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      .title {
        position: absolute !important;
        bottom: 0px;
        left: 0 !important;
        padding: 0.5rem;
        color: white;
        z-index: 9999;
        font-weight: 400;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      .text-center {
        background: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding-top: 1rem;
        padding-bottom: 0.5rem;

        span {
          font-size: 0.9rem;
        }
      }

      .btnDiv {
        background: white;
        padding: 3px;
        border-radius: 35px;
      }
      // .btnDiv-2 {
      //   background: red;
      //   border-radius: 50%;
      //   padding: 3px;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      // }

      .btnDiv {
        position: absolute;
        left: 35%;
        top: 70%;
        padding: 0.3rem;
        font-size: 1.3rem;
        background: white !important;
        border-radius: 50%;
      }

      .btn {
        cursor: pointer;
        border: none;
        outline: none;
        text-align: center;
      }

      .btn-add {
        border-radius: 50%;
        padding: 0.3rem;
        background: #166ada !important;
        display: inline block;
      }
      .profile-pic {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;
        background: #166ada;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        padding: 4px;
      }
    }
  }
}
</style>
