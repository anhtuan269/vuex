<template>
    <p>this is result : {{ result}}    </p>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    computed: {
        result() {
            return this.$store.state.result
        }
    }
}
</script>

<style scoped>

</style>
