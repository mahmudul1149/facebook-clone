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
              <p class="add-account">Add Account</p>
            </div>
          </button>
        </div>
      </div>
      <div class="signin-group">
        {{ error }}
        <form action="" @submit.prevent="loginUser">
          <input
            type="email"
            placeholder="Email address or phone number"
            v-model="user.email"
            required
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            v-model="user.password"
            required
          />
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
              <button @click="showSignup" class="btn btn-primary">
                Create New Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <signin-vue @toggole-order-form="showModal" v-if="show"></signin-vue>
    <signup-vue v-if="visible" @toggle-order-form="showSignup"></signup-vue>
  </div>
</template>

<script>
import signinVue from "~/components/signin.vue";
import signupVue from "~/components/signup.vue";

export default {
  components: {
    signinVue,
    signupVue,
  },
  data() {
    return {
      show: false,
      visible: false,
      error: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    showModal() {
      this.show = !this.show;
    },
    showSignup() {
      this.visible = !this.visible;
    },
    async loginUser() {
      try {
        await this.$store.dispatch("login", {
          email: this.user.email,
          password: this.user.password,
        });

        await this.$router.push("/post");
      } catch (error) {
        this.$router.push("/");
      } finally {
      }
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
      font-size: 3rem;
      font-weight: 600;
      font-family: Helvetica, Arial, sans-serif;
    }
    span {
      font-size: 28px;
      font-weight: 400;
      color: #1c1e21;
      font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    }
    p {
      font-size: 1rem;
      font-weight: 600;
      font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
      padding: 0.7rem 0;
      color: rgba(0, 0, 0, 0.6);
    }
    .items {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      .content-box {
        p {
          padding-top: 1rem;
          font-size: 1.1rem;
          font-weight: 400;
          padding: 1rem !important;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
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
          height: 74%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          object-fit: cover;
        }
        .content-box {
          background: white;

          text-align: center;
          width: 100%;
          box-sizing: border-box;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;

          .add-account {
            font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
            color: #1877f2;
            font-size: 18px;
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
      font-size: 14px;
      letter-spacing: 1px;
      font-family: Helvetica, Arial, sans-serif;
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
      font-size: 20px;
      font-weight: 700;
      border-radius: 5px;
      transition: 0.3s ease-in;
      font-family: Helvetica, Arial, sans-serif;
      &:hover {
        background: #005fdb;
      }
    }
    .btn-primary {
      padding: 0.9rem;
      background: #42b72a;
      font-family: Helvetica, Arial, sans-serif;
      color: #ffffff;
      font-size: 17px;
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
