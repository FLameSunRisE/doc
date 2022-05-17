<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-on:click="recordBug">trigger a bug</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Bugsnag from '@bugsnag/js'
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  method: {
    recordBug() {
      console.log("oops, something wrong happen");
      Bugsnag.notify(new Error("something bad happen in Helloworld.vue...."));
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
</style>
