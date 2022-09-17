<template>
  <div class="signin">
    <div class="flex container">
      <div class="accounts">
        <div class="center-text">
          <h1 class="title">facebook</h1>
          <span>Recent Logins</span>
          <p>Click your picture or add an account.</p>
        </div>
        <div class="items">
          <div class="item">
            <img src="~/assets/image/profile.png" alt="" />
            <div class="content-box">
              <span>Md Mahmudul </span>
            </div>
          </div>
          <button @click="showModal" class="item">
            <div class="bg-account">
              <svg
                fill="white"
                viewBox="0 0 20 20"
                width="20px"
                height="20px"
                class="b6ax4al1 add-btn m4pnbp5e somyomsx ahndzqod qsbzbi57 dmdr2h6l kgzac55p"
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
            </div>
            <div class="content-box">
              <span class="add-account">Add Account</span>
            </div>
          </button>
        </div>
      </div>
      <div class="signin-group">
        <form action="">
          <input
            type="text"
            name=""
            placeholder="Email address or phone number"
            id=""
          />
          <input type="password" name="" placeholder="Password" id="" />
          <div class="text-center">
            <button type="submit" class="btn btn-secondery">Log in</button>
          </div>
        </form>
        <div class="text-center">
          <p>Forgotten password?</p>
        </div>
        <div class="text-center">
          <ul>
            <li>
              <router-link to="/signup" class="btn btn-primary"
                >Create New Account</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <signin-vue @toggole-order-form="showModal" v-if="show"></signin-vue>
  </div>
</template>

<script>
import signinVue from "~/components/signin.vue";
export default {
  components: {
    signinVue,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showModal() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background: #f0f2f5;
  z-index: 9999;
  position: relative;

  .flex {
    display: flex;
    align-items: center;
  }
  .accounts {
    margin-right: 10rem;
    a {
      text-decoration: none;
    }
    .title {
      color: #1877f2;
      font-size: 2.5rem;
      font-weight: 800;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }
    span {
      font-size: 1rem;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
    p {
      font-size: 1rem;
      padding: 0.7rem 0;
      color: #606770;
    }
    .items {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .item {
        width: 150px;
        height: 200px;
        display: flex;
        flex-direction: column;
        border-radius: 50px;

        border: 1px solid rgba(130, 117, 117, 0.2);
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 7px rgba(130, 117, 117, 0.3);
        }

        img {
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          object-fit: cover;
        }
        .content-box {
          background: white;
          padding: 0.7rem;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          .add-account {
            color: #0268ee;
          }
          span {
            font-size: 1.1rem;
            font-weight: 400;

            font-family: Arial, Helvetica, sans-serif;
          }
        }
        .bg-account {
          width: 100%;
          height: 100%;
          line-height: 100% !important;
          text-align: center;
          background: #f5f6f7;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          position: relative;
          .add-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgb(71, 71, 245);
            color: white;
            padding: 0.5rem;
            font-weight: bolder;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .signin-group {
    width: 400px;
    padding: 0.8rem;
    border: 1px solid white;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(130, 117, 117, 0.2);

    ul li {
      margin-bottom: 1.5rem;
      margin-top: 2rem;
    }
    a {
      text-decoration: none;
    }
    p {
      color: #1877f2;
      padding: 0.8rem 0;
      font-size: 1.1rem;
      border-bottom: 1px solid rgba(130, 117, 117, 0.3);
      &:hover {
        text-decoration: underline;
      }
    }
    input {
      display: block;
      width: 100%;
      background: transparent;
      padding: 0.9rem 0.5rem;
      margin-bottom: 15px;
      font-size: 1rem;
      // border: 1px solid transparent !important;
      border: 1px solid rgba(130, 117, 117, 0.2);
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 1px solid blue;
      }
    }
    .btn-secondery {
      width: 100%;
      padding: 0.9rem;
      background: #0268ee;
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 5px;
      transition: 0.3s ease-in;
      &:hover {
        background: #005fdb;
      }
    }
    .btn-primary {
      padding: 0.9rem;
      background: #42b72a;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 5px;
      transition: 0.3s ease-in-out;
      &:hover {
        background: #40bc27;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .signin {
    height: 80vh !important;

    .flex {
      flex-direction: column !important;
      align-items: center;
      gap: 1rem;
    }
    .accounts {
      margin-right: 0rem !important;
      .center-text {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .signin {
    height: 100vh !important;

    .signin-group {
      width: 350px;
    }
  }
}
</style>
