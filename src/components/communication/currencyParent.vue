<template>
    <div>
        <currency-input label="Price" v-model="price"></currency-input>
        <currency-input label="Shipping" v-model="shipping"></currency-input>
        <currency-input label="Handling" v-model="handling"></currency-input>
        <currency-input label="Discount" v-model="discount"></currency-input>
        <p>Total: ${{ total }}</p>
    </div>
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
