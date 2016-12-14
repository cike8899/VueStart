<template v-if="ok">
    <div>
        <h1 v-if="ok">Yes</h1>
        <h1 v-else>No</h1>
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
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