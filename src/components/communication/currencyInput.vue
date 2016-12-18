<template>
    <div>
        <input type="text" name="" ref="input" :value="value" @input="updateValue($event.target.value)" @focus="selectAll" @blur="formatValue" />
    </div>>
</template>
<script>
export default {
    name: "currency-input",
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.formatValue()
    },
    methods: {
        updateValue(value) {
            var result = this.value
            if (result.warning) {
                this.$refs.input.value = result.value
            }
            this.$emit('input', result)
        },
        formatValue() {
            this.$refs.input.value = this.value
        },
        selectAll(event) {
            setTimeout(function() {
                event.target.select()
            }, 0)
        }
    }
}
</script>
<style lang="less">
</style>
