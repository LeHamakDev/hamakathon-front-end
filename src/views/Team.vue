<template>
  <div class="box">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input v-model="teamName" class="input" type="text" />
      </div>
    </div>
  </div>
  <button @click="createTeam()" class="button is-primary">Create</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore()
    return({store})
  },
  data() {
    return { teamName: "" };
  },
  methods: {
    async createTeam() {
      console.log("create")
      const myTeam = await this.store.dispatch("createTeam", this.teamName)
      console.log(myTeam)
    },
  },
});
</script>
