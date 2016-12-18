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
import CurrencyInput from './currencyInput.vue'
export default {
    name: "currency-parent",
    props: ["value"],
    components: {
        CurrencyInput: CurrencyInput
    },
    data() {
        return {
            price: 0,
            shipping: 0,
            handling: 0,
            discount: 0
        }
    },
    computed: {
        total() {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2);
        }
    },
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
