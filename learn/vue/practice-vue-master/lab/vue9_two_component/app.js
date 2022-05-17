const app = Vue.createApp({
  data() {
    return {
      courses: [
        { id: "POOP", name: "Python OOP", duration: 35 },
        { id: "BDPY", name: "python and big data", duration: 35 },
      ],
      detailsVisible: true,
    };
  },
  computed: {},
});
app.component("course-content", {
  template: `
<li>
<h2>{{course.id}}</h2>
<button @click="toggleCourseDetail">Show detail</button>
<ul v-if="detailsVisible">
    <li>{{course.name}}</li>
    <li>{{course.duration}}</li>
</ul>
</li>



`,
  data() {
    return {
      course: { id: "POOP", name: "Python OOP", duration: 35 },
      detailsVisible: true,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});
app.mount("#app");
