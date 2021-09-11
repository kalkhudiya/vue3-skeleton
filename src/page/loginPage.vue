<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" @submit.prevent="login()">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        required
                        v-model="formBody.email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        required
                        v-model="formBody.password"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small" href="forgot-password.html"
                      >Forgot Password?</a
                    >
                  </div>
                  <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { signIn } from "../utill/authGuard";
import userService from "../services/user";

const _userService = new userService();

export default defineComponent({
  mounted() {
    this.addBodyCssTags({
      className: "bg-gradient-primary",
    });
  },
  data() {
    return {
      formBody: {
        email: "",
        password: ""
      },
      formBodyError: {
        email: false,
        password: false
      },
    };
  },
  methods: {
    async login() {
      if (this.validateForm()) {
        try {
          const res = await _userService.signIn(this.formBody);
          if (res && res.data && res.data.token) {
            signIn(res.data);
            this.$router.push({
              name: "dashboard",
            });
          } else {
            throw "Invalid";
          }
        } catch (error) {
          this.$toast.error("Unable to login! Try again with valid credentials");
        }
        
      }
    },
    validateForm() {
      let isValid = true;
      if (!this.formBody.email || this.formBody.email.trim() === "") {
        this.formBodyError.email = true;
        isValid = false;
      }
      if (!this.formBody.password || this.formBody.password.trim() === "") {
        this.formBodyError.password = true;
        isValid = false;
      }
      return isValid;
    }
  },
});
</script>
