<template>
  <div>
    <div class="backdrop"></div>
    <div class="signup">
      <div class="content">
        <h1>Sign Up</h1>
        <span>It's quick and easy.</span>
      </div>
      <div class="signup-group">
        <form action="#">
          <div class="flex">
            <input class="input" type="text" placeholder="FirstName" />
            <input class="input" type="text" placeholder="Surname" />
          </div>
          <input class="input" type="email" placeholder="Email address" />
          <input class="input" type="password" placeholder="New password" />
          <div class="birth">
            <a href="#"
              >Date of birth
              <img
                class="question-png"
                src="~/assets/image/icons8-question-mark-24.png"
                alt=""
            /></a>
            <div class="flex">
              <select name="" id="" v-model="selectedays">
                <option v-for="day in days" :key="day">
                  {{ day }}
                </option>
              </select>

              <select v-model="selectedmonths">
                <option v-for="month in months" :key="month">
                  {{ month }}
                </option>
              </select>
              <select v-model="selectedYear">
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div>
          </div>
          <div class="gender">
            <a href="#"
              >Gender
              <img
                class="question-png"
                src="~/assets/image/icons8-question-mark-24.png"
                alt=""
            /></a>
            <div class="flex-items">
              <div class="form-control">
                <label for="html">Female</label><br />
                <input type="radio" name="fav_language" value="Female" />
              </div>
              <div class="form-control">
                <label for="css">Male</label><br />
                <input type="radio" name="fav_language" value="Male" />
              </div>
              <div class="form-control">
                <label for="javascript">Custom</label>
                <input type="radio" name="fav_language" value="Custom" />
              </div>
            </div>
          </div>
          <div class="terms">
            <div class="py-1">
              <a href="#"
                >People who use our service may have uploaded your contact
                information to Facebook. <span>Learn more</span> .</a
              >
            </div>
            <a href="#"
              >By clicking Sign Up, you agree to our Terms,
              <span>Privacy</span> <span>Policy</span> and
              <span>Cookies Policy</span> . You may receive SMS notifications
              from us and can opt out at any time.</a
            >
          </div>
          <div class="text-center py-1">
            <button type="submit" class="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
      <img
        class="delete-img"
        @click="hideOrderForm"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png"
        alt=""
        width="24"
        height="24"
        id="u_2_9_Am"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedays: 18,
      selectedmonths: "Nov",
      selectedYear: 2022,
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },

  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1900 },
        (value, index) => 1901 + index
      );
    },
  },

  methods: {
    hideOrderForm() {
      this.$emit("toggle-order-form");
    },
  },
};
</script>

<style lang="scss">
.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  z-index: 99999;
  background: white;
  box-shadow: 0 0 5px #ccc;
  .delete-img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
  .content {
    padding: 0.7rem;
    border: 1px solid rgba(99, 96, 96, 0.3);
    h1 {
      font-family: Arial, Helvetica, sans-serif;
    }
    span {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 3000;
    }
  }

  .signup-group {
    padding: 0.7rem;

    .input {
      width: 100%;
      display: block;
      padding: 0.6rem;
      font-size: 0.9rem;
      border: none;
      outline: none;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 5px;
      background: #f5f6f7;
      margin: 10px auto;
    }
    .flex {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .birth {
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        select {
          width: 200px;
          padding: 0.6rem;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          option {
            padding: 10px;
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        padding: 0.3rem 0;
        color: #333;
        text-decoration: none;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        .question-png {
          width: 10px;
          height: 10px;
          color: white;
        }
      }
    }
    .gender {
      a {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        padding: 0.3rem 0;
        color: #333;
        text-decoration: none;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        .question-png {
          width: 10px;
          height: 10px;
          color: white;
        }
      }
      .flex-items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .form-control {
          border: 1px solid #ccc;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          border-radius: 5px;
          gap: 1.9rem;
          label {
            font-size: 1rem;
            font-family: Arial, Helvetica, sans-serif;
          }
        }
      }
    }
    .terms {
      a {
        text-decoration: none;
        margin-top: 3rem;
        color: #333;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        span {
          color: #92d2ff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .btn-primary {
      margin: 1rem 0;
      margin: 0 auto;
      padding: 0.4rem 3.5rem;
      color: white;
      font-size: 1.3rem;
      background: #00a400;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      border-radius: 10px;
    }
  }
}
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(99, 96, 96, 0.4);
  z-index: 9999;
}
</style>
