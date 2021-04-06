<template>
    <div>
        <button class="btn btn-success me-3" @click="decrement"> decrement </button>
        <button class="btn btn-success " @click="increment"> increment </button>
        <div class="two-way-binding m-5" >
            <input type="text" v-model="value" class="px-5">
            <br>
            <p class="mt-3"> test text : {{value}}</p>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{
        }
    },
    methods : {
      ...mapMutations([ "decrement"]),
      ...mapActions(["increment"])
    },
    computed: {
        value: {
            get() {
               return this.$store.getters.value
            },
            set(value) {
                this.$store.dispatch("updatedValue", value)
            }
        }
    }
}
</script>

<style scoped>

</style>
