<template>
  <div>
    <div class="modalBody">
      <div class="signin">
        <div class="signin-group">
          <div class="text-center title">
            <span>Log in to Facebook</span>
          </div>
          <img
            src="../assets/image/icons8-multiply-24.png"
            @click="hideorderform"
            alt=""
            class="cross-icon"
          />
          <div class="signinwrap">
            <form @submit.prevent="loginUser">
              <input
                type="email"
                placeholder="Email address or phone number"
                v-model="user.email"
                required
              />
              <input
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
              <div class="flex-check">
                <div class="check">
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <span>Remember password</span>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-secondery">Log in</button>
              </div>
            </form>
            <div class="text-center">
              <p class="forgot-pass">Forgotten password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backdrop" @click="hideorderform"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    hideorderform() {
      this.$emit("toggole-order-form");
    },
    async loginUser() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("login", {
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push("/post");
      } catch (error) {
        this.$router.push("/");
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modalBody {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 99999;
  background-color: #fec855;
  border-radius: 10px;
}
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: pointer;
}
.signin-group {
  width: 400px;
  border: 1px solid white;
  background: white;
  box-sizing: border-box;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(130, 117, 117, 0.2);
  .flex-check {
    display: flex;
    gap: 0.5rem;
    padding: 0.7rem 0 !important;
    .check {
      margin-top: 4px;
    }
    input {
      width: 15px;
      height: 15px;
    }
    span {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 0.9rem;
    }
  }
  .cross-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 5px;
    background: #dadde1;
    border-radius: 50%;
    cursor: pointer;
  }
  .title {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    padding: 1rem 0 !important;
    border-bottom: 1px solid rgba(224, 210, 210, 0.3);
  }
  .signinwrap {
    padding: 0.8rem;
  }
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
    &:hover {
      text-decoration: underline;
    }
  }
  .forgot-pass {
    color: #1877f2;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: Helvetica, Arial, sans-serif;
  }
  input {
    display: block;
    width: 100%;
    background: transparent;
    padding: 0.9rem 0.5rem;
    margin-bottom: 10px;
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
    padding: 0.7rem 0;
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
@media screen and (max-width: 500px) {
  .signin-group {
    width: 350px;
  }
}
</style>
