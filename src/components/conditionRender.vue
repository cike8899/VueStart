<template>
    <div>
        <h1 v-if="ok">Yes</h1>
        <h1 v-else>No</h1>
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <div v-if="Math.random() > 0.5">
            Sorry
        </div>
        <div v-else>
            Not sorry
        </div>
        <h1 v-show="ok">Hello!</h1>
    </div>
</template>

<script>
//条件渲染

//template v-if
//因为 v-if 是一个指令，需要将它添加到一个元素上。但是如果我们想切换多个元素呢？此时我们可以把一个 
//<template> 元素当做包装元素，并在上面使用 v-if，最终的渲染结果不会包含它。是标签包含在template标签内,
//来控制一段标签是否显示
export default {
    data(){
        return {
           ok:true
        }
    }
}    
</script>

<style>

</style>