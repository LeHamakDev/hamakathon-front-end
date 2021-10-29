<template>
  <div class="home-p1">
    <div class="home-p1-wrapper">
      <div class="home-p1-left">
        <h3 class="home-title roboto title is-3">Hamakathon, by Le Hamak</h3>
        <hr />
        <h6 class="home-text roboto subtitle is-6">
          THis is a test Bacon ipsum dolor amet doner turkey picanha pork short
          ribs swine. Cow drumstick flank t-bone, ham hock beef ribs tail
          leberkas ground round short ribs kevin venison biltong beef
          burgdoggen. Beef ribs boudin doner tongue. Bacon chicken shankle
          sirloin ball tip shoulder.
        </h6>
        <button class="button is-rounded purple-back">
          Join the experience
        </button>
      </div>
      <div class="screen home-p1-right">
        <ScreenHeader />
      </div>
    </div>
    <img
      @click="scrollToP2"
      class="icon-doubleDown home-doubleDown"
      :src="doubleDown"
    />
  </div>
  <div id="home-p2" class="home-p2">
    <div class="overlap-parent">
      <div class="screen overlap-a"><ScreenHeader /></div>
      <div class="screen-brighter overlap-b">
        <ScreenHeader />
        <form action="">
          <VoteProgressBar :title="'il'" :myid="'123'" :percent="'30'" />
          <VoteProgressBar :title="'faut'" :myid="'123'" :percent="'20'" />
          <VoteProgressBar :title="'aligner'" :myid="'123'" :percent="'50'" />
        </form>
        <button
          v-if="isLoged == ''"
          @click="goLogin"
          :class="'vote-button nav-purple button is-rounded'"
        >
          Log to vote
        </button>
        <button
          v-else
          @click="goVote"
          :class="'vote-button nav-purple button is-rounded'"
        >
          Vote !
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ScreenHeader from "@/components/ScreenHeader.vue";
import VoteProgressBar from "@/components/VoteProgressBar.vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import router from "../router/index";
export default defineComponent({
  components: { ScreenHeader, VoteProgressBar },
  name: "Home",
  setup(): any {
    const store: any = useStore();
    store.state.dark = false;
    store.state.isOnJam = true;
    return {
      store: store,
      doubleDown: require("../assets/icons/doubleDown.svg"),
    };
  },
  methods: {
    scrollToP2(): void {
      var element = document.getElementById("home-p2");
      element?.scrollIntoView({ block: "end", behavior: "smooth" });
    },
    goLogin(): void {
      router.push("/login");
    },

    goVote(): void {
      router.push("/vote");
    },
  },
  computed: {
    isLoged(): string {
      return this.store.state.token
    },
  },
});
</script>
