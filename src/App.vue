<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hr />
    <h1>Vuex section</h1>

    <Result />
    <br />
    <other-result />

    <Counter @updated="result += $event" />
  </div>
</template>

<script>
import Counter from "./components/counter.vue";
import Result from "./components/result.vue";
import otherResult from "./components/2nd_result.vue";
export default {
  name: "App",
  components: {
    Counter,
    Result,
    otherResult
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
