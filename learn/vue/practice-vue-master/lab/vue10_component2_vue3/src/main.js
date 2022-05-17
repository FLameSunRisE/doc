import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from "./components/CourseIntro.vue"
import NewCourse from "./components/NewCourse.vue"
import mitt from "mitt"
const emitter = mitt()
const app = createApp(App)
app.component("course-intro", CourseIntro)
app.component("new-course",NewCourse)
app.config.globalProperties.emitter = emitter;
app.mount('#app')