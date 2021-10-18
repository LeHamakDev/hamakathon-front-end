<template>
  <div class="box box-register">
    <div class="field">
      <label class="label">Login</label>
      <div class="control">
        <input class="input" type="text" v-model="loginText" />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="e.g. alex@example.com"
          v-model="emailText"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" v-model="passwordText" />
      </div>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control">
        <input class="input" type="password" v-model="cpasswordText" />
      </div>
    </div>

    <div class="field">
      <label class="label">Pseudo</label>
      <div class="control">
        <input class="input" type="text" v-model="pseudoText" />
      </div>
    </div>

    <button @click="register()" class="button is-primary">Register</button>
    <div class="is-divider"></div>
    <hr>
    <article v-if="isRegisterErr" class="message is-danger">
      <div class="message-header">
        <p>Can't connect</p>
      </div>
      <div class="message-body">Incorrect login or password.</div>
    </article>
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
      registerError:false,
    };
  },
  computed : {
    isRegisterErr():boolean {
      return(this.registerError)
    }
  },
  methods: {
    async register() {
      if (this.passwordText == this.cpasswordText) {
        const me: any = await this.store.dispatch("register", {
          login: this.loginText,
          password: this.passwordText,
          pseudo:this.pseudoText,
          email:this.emailText
        });
        if (me.success == true) {
          router.push("/")
        } else {
          this.registerError = true
        }
      }
    },
  },
});
</script>
