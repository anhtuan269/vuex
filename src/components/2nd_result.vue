<template>
  <div class="result">
    <p>this is name result  : {{ nameResult }}</p>
    <p>this is tenRresult : {{ tenResult }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["nameResult", "tenResult"]),
  },
};
</script>

<style scoped>
</style>
