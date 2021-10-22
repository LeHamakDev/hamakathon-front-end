<template>
  <div id="nav" :class="isDark ? 'darkmode' : ''">
    <div class="nav-logo">
      <span
        :class="(isDark ? 'darkmode-logo-p1' : '') + ' nav-bar-logo-p1'"
        @click="goHome">
        Hamak</span>
      <span
        :class="(isDark ? 'darkmode-logo-p2' : '') + ' nav-bar-logo-p2'"
        @click="goHome">athon</span>
    </div>
    <router-link :class="isDark ? 'has-text-primary-light' : ''" to="/about"
      >About</router-link
    >
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookie } from "vue-cookie-next";
import { useStore } from "vuex";
import router from "./router/index";
export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    isDark(): boolean {
      return this.store.state.dark;
    },
  },

  methods: {
    goHome(): void {
      router.push("/login");
    },
  },

  async mounted() {
    const cookie = useCookie();
    const store = useStore();
    const token = cookie.getCookie("token");
    console.log(store.state.token, "?");
    if (token && store.state.token == "") {
      console.log("cookie tokn", token);
      store.state.token = token;
      const user = await store.dispatch("loginToken", token);
      if (user.success == true) {
        //router.push("/")
      } else {
        cookie.setCookie("token", "", {
          expire: "7d",
          path: "/",
          domain: "",
          secure: "",
          sameSite: "",
        });
      }
    }
  },
});
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
