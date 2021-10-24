<template>
  <div class="home-p1">
    <div class="home-p1-wrapper">
      <div class="home-p1-left">
        <h3 class="home-title roboto title is-3">Hamakathon, by Le Hamak</h3>
        <hr />
        <h6 class="home-text roboto subtitle is-6">
          Bacon ipsum dolor amet doner turkey picanha pork short ribs swine. Cow
          drumstick flank t-bone, ham hock beef ribs tail leberkas ground round
          short ribs kevin venison biltong beef burgdoggen. Beef ribs boudin
          doner tongue. Bacon chicken shankle sirloin ball tip shoulder.
        </h6>
        <button class="button is-rounded purple-back">
          Join the experience
        </button>
      </div>

      <carousel class="home-p1-right" :items-to-show="1.5">
        <slide v-for="slide in 10" :key="slide">
          {{ slide }}
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <img
      @click="scrollToP2"
      class="icon-doubleDown home-doubleDown"
      :src="doubleDown"
    />
  </div>
  <div id="home-p2" class="home-p2"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
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
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    scrollToP2(): void {
      var element = document.getElementById("home-p2");
      element?.scrollIntoView({ block: "end", behavior: "smooth" });
    },
  },
});
</script>
