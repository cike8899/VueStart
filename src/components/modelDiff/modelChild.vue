<template>
    <div>
        子：
        <input type="text"
               @input="handleInput"
               class="text"
               :value="value">
    </div>
</template>
<script>
export default {
    name: "modelChild",
    props: ["value"],
    methods: {
        handleInput(e) {
            this.$emit("input", e.target.value)
        }
    }
}
</script>
<style lang="less">
.text {
    height: 20px;
    width: 200px;
}
</style>