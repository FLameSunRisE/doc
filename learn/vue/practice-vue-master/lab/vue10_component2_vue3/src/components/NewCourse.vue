<template>
  <form @submit.prevent="submitData">
    <div><label>id</label><input type="text" v-model="inputId" /></div>
    <div><label>name</label><input type="text" v-model="inputName" /></div>
    <div>
      <label>duration</label><input type="text" v-model="inputDuration" />
    </div>
    <button>Add a course</button>
  </form>
</template>
<script>
export default {
  emits: ["add-course"],
  data() {
    return { inputId: "", inputName: "", inputDuration: "" };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-course",
        this.inputId,
        this.inputName,
        this.inputDuration
      );
    },
  },
};
</script>