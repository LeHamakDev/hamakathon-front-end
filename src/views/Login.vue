<template>
  <div class="pageWrapper darkmode">
    <div class="darkmode box-register">
      <h1 class="title is-1 has-text-primary-light">Log in</h1>
      <hr class="darkmode"/>
      <h5 class="title is-5 has-text-primary-light">Create an account here</h5>
      <div class="field">
        <label class="label">Login or Email</label>
        <div class="control">
          <input class="input dark-input" type="text" v-model="loginText" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input dark-input" type="password" v-model="passwordText" />
        </div>
      </div>
      <button @click="login()" class="button is-primary">Login</button>
      <div class="is-divider"></div>
      <hr class="darkmode"/>
      <article v-if="isLoginErr" class="message is-danger">
        <div class="message-header">
          <p>Can't connect</p>
        </div>
        <div class="message-body">Incorrect login or password.</div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useCookie } from "vue-cookie-next";
import router from "../router/index";
export default defineComponent({
  name: "Login",
  setup(): any {
    const store: any = useStore();
    const cookie: any = useCookie();
    store.state.dark = true
    console.log("test")
    return {
      store: store,
      cookie: cookie,
    };
  },
  data(): any {
    return { loginText: "", passwordText: "", loginError: false };
  },
  computed: {
    isLoginErr(): boolean {
      return this.loginError;
    },
  },
  methods: {
    async login() {
      const me: any = await this.store.dispatch("login", {
        login: this.loginText,
        password: this.passwordText,
      });
      if (me.success == true) {
        console.log("true");
        this.cookie.setCookie("token", me.data.token, {
          expire: "7d",
          path: "/",
          domain: "",
          secure: "",
          sameSite: "",
        });
        router.push("/");
      } else {
        this.loginError = true;
      }
    },
  },
});
</script>
