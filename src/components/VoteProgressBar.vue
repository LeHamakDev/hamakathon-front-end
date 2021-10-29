<template>
  <div class="progress-bar">
    <span class="align-text-left progress-bar-item">{{ title }}</span>
    <div class="progress-bar-item"><input type="radio" name="radio" /></div>
    <progress
      class="progress is-primary progress-bar-item custom-progress"
      :value="percent"
      max="100"
    ></progress>
    <span class="progress-bar-item">{{ percent }}%</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  name: "VoteProgressBar",
  props: {
    title: String,
    myid: String,
    percent: String,
  },
});
</script>
