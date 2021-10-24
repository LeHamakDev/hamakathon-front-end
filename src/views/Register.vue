<template>
  <div class="pageWrapper darkmode">
    <div class="darkmode box-register">
      <h1 class="title is-1 has-text-primary-light">Register</h1>
      <hr class="darkmode" />
      <h5 class="title is-5 has-text-primary-light">
        Already have an account ? Click <a class="login-here" @click="goLogin">here</a> to Log in
      </h5>
      <div class="field">
        <div class="control register-input-wrapper">
          <input placeholder="Login" class="input dark-input" type="text" v-model="loginText" />
        </div>
      </div>

      <div class="field">
        <div class="control register-input-wrapper">
          <input
            class="input dark-input"
            type="email"
            placeholder="Email"
            v-model="emailText"
          />
        </div>
      </div>

      <div class="field">
        <div class="control register-input-wrapper">
          <input placeholder="Password" class="input dark-input" type="password" v-model="passwordText" />
        </div>
      </div>

      <div class="field">
        <div class="control register-input-wrapper">
          <input placeholder="Confirm Password" class="input dark-input" type="password" v-model="cpasswordText" />
        </div>
      </div>

      <button @click="register()" class="button is-primary login-button">Register</button>
      <div class="is-divider"></div>
      <hr class="darkmode" />
      <article v-if="isRegisterErr" class="message is-danger">
        <div class="message-header">
          <p>Can't register</p>
        </div>
        <div class="message-body">login or email already taken.</div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Register",
  setup(): any {
    const store: any = useStore();
    store.state.dark = true;
    return {
      store: store,
    };
  },
  data(): any {
    return {
      loginText: "",
      emailText: "",
      passwordText: "",
      cpasswordText: "",
      pseudoText: "",
      registerError: false,
    };
  },
  computed: {
    isRegisterErr(): boolean {
      return this.registerError;
    },
  },
  methods: {
    async register() {
      if (this.passwordText == this.cpasswordText) {
        const me: any = await this.store.dispatch("register", {
          login: this.loginText,
          password: this.passwordText,
          pseudo: this.loginText,
          email: this.emailText,
        });
        if (me.success == true) {
          router.push("/");
        } else {
          this.registerError = true;
        }
      }
    },
  },
});
</script>
