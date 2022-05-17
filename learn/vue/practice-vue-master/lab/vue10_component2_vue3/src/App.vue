<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- import component example -->
    <!-- <course-intro></course-intro>
    <course-intro></course-intro>
    <course-intro></course-intro> -->

    <!-- prop example -->
    <!-- <course-intro id="poop" name="python oop" duration="35"></course-intro>
    <course-intro
      id="bdpy"
      name="python and big data"
      duration="35"
    ></course-intro> -->
    <new-course @add-course="addCourse"></new-course>
    <course-intro
      v-for="course in courses"
      :key="course.id"
      :id="course.id"
      :name="course.name"
      :duration="course.duration"
      :current="course.current"
      @toggle-current="toggleCurrentState"
      @delete-current="delCourse"
    ></course-intro>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      courses: [
        { id: "poop", name: "python oop", duration: 35, current: true },
        {
          id: "bdpy",
          name: "python and big data",
          duration: 35,
          current: false,
        },
      ],
    };
  },
  created() {
    console.log("component created");
    this.emitter.on("toggle-current", (idx) => {
      console.log(`${idx} should change toggle state`);
      const course = this.courses.find((c) => c.id == idx);
      course.current = !course.current;
    });
  },
  methods: {
    toggleCurrentState(id) {
      console.log(`should change id:${id}`);
      const course = this.courses.find((course) => course.id === id);
      course.current = !course.current;
    },
    addCourse(id, name, duration) {
      const newCourse = {
        id: id,
        name: name,
        duration: parseInt(duration),
        current: false,
      };
      this.courses.push(newCourse);
    },
    delCourse(id) {
      console.log('del :' + id)
      this.courses = this.courses.filter((course)=>course.id !== id)
    },
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
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px sold #ff0077;
  background-color: #c0ffee;
  color: black;
}
#app form {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
</style>
