<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookie } from "vue-cookie-next";
import { useStore } from "vuex";
import router from "./router/index";
export default defineComponent({
  setup() {},
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
