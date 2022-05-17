<template>
  <section id="lab13">
    <h3>{{ course }}</h3>
    <h3>{{ price }}</h3>
    <button @click="extraDuration">bad way</button>
    <h2>{{courseDisplayName}}</h2>
  </section>
</template>

<script>
import { reactive, ref, computed } from "vue";
export default {
  name: "App",

  setup() {
    const course = reactive({ name: "POOP", duration: 35 });
    const price = ref(24000);
    const courseId = "hello"
    const courseFullName = "vue"
    const courseDisplayName = computed(function(){
      return courseId + ' ' + courseFullName;
    })
    function extraDuration() {
      course.duration += 7;
      price.value += 2000;
    }
    return { course, extraDuration, price,courseDisplayName };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>