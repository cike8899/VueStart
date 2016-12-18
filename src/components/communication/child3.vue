<template>
    <div>
        <button v-on:click="increment">{{ counter }}</button>
    </div>
</template>
<script>
//子组件通过事件向父组件发送数据
export default {
    name: 'button-counter',
    props: [],
    data() {
        return {
            counter: 0
        }
    },
    computed: {},
    watch: {

    },
    methods: {
        increment() {
            this.counter += 1;
            this.$emit('increment');
        }
    }
}
</script>
<style>
</style>
