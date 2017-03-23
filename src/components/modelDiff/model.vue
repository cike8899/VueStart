<template>
    <div>
        父：<input type="text" v-model="msg">
        <child v-model="msg"></child>
    </div>
</template>
<script>
import child from './modelChild.vue'
export default {
    name: "model",
    props: {

    },
    components: {
        child
    },
    data() {
        return {
            msg: "ppp"
        }
    },
    methods: {

    }
}
</script>
<style lang="less">

</style>