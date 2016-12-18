<template>
    <div>
        <h2>我是子组件的标题</h2>
        <slot>
            只有在没有要分发的内容时才会显示。
        </slot>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    }
}
</script>
<style>
</style>
