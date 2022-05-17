<template>
  <li>
    <h2>props current==>{{ current }}</h2>
    <h2>{{ id }}-{{ isCurrent }}</h2>
    <button @click="toggleCourseDetail">Show detail</button>
    <button @click="toggleCurrent">toggle current class</button>
    <button @click="deleteCourse">Delete</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  emits: {
    "toggle-current": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("oops, id is missing");
        return false;
      }
    },
    "delete-current": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("oops, id is missing");
        return false;
      }
    },
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    duration: {
      type: Number,
      required: true,
      validator: function (value) {
        return value > 7;
      },
    },
    current: { type: Boolean, required: false },
  },
  data() {
    return {
      detailsVisible: true,
      isCurrent: this.current,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent;
      //this.current = !this.current;
      this.emitter.emit("toggle-current", this.id);
      // this.emitter.emit("toggle-current");
    },
    deleteCourse() {
      this.$emit("delete-current", this.id);
    },
  },
};
</script>