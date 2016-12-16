<template>
    <div>
        <input type="text" name="" ref="input" :value="value" @input="updateValue" />
    </div>>
</template>
<script>
export default {
    name: "currency-input",
    props: ["value"],
    methods: {
        updateValue(val) {
            let formattedValue = value.trim().slice(0, value.indexOf('.') + 3)
            if (formattedValue !== val) {
                this.$refs.input.value = formattedValue;
            }
            this.$emit('input', Number(formattedValue))
        }
    }
}
</script>
<style lang="less">
</style>
