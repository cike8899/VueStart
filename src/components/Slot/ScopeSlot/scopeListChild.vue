<template>
    <ul>
        <slot name="item" v-for="item in items" :text="item.text">
            <!-- 这里是备用内容 -->
        </slot>
    </ul>
</template>
<script>
export default {
    props: ['items'],
    data() {
        return {
            // items: []
        }
    },
    computed: {
        // items() {
        //     return this.props.items
        // }
    }
}
</script>
