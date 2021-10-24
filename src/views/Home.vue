<template>
  <div class="home">
    Home
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  setup(): any {
    const store: any = useStore();
    store.state.dark = false;
    store.state.isOnJam = true;
    return {
      store: store
    };
  }
});
</script>
