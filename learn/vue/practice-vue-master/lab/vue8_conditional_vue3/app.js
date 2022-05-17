Vue.createApp({
  data() {
    return {
      courses: [],
      courseContent: "initial",
      poop: {
        name: "POOP",
        duration: 35,
        period: ["Sat", "Sun"],
        location: ["Taipei", "Remote"],
        instructor: {
          name: "Mark",
          location: "Taipei",
        },
      },
    };
  },
  computed: {},
  methods: {
    addCourse() {
      this.courses.push(this.courseContent);
    },
    removeCourse(i) {
      this.courses.splice(i, 1);
    },
  },
}).mount("#app");
