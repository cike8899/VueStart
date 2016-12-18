<template>
    <div>
        <h1>我是父组件的标题</h1>
        <inner-widget>
            <p>这是一些初始内容</p>
            <p>这是更多的初始内容</p>
        </inner-widget>
    </div>
</template>
<script>
import InnerWidget from './innerWidget.vue'
export default {
    components: {
        InnerWidget: InnerWidget
    },
}
</script>
<style>
</style>
