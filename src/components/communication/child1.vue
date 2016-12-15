<template>
    <div>
        <div>
            child1
        </div>
        <div>
            <button type="button" @click="showParentMsg" value="">显示父组件的内容</button>
            <input type="text" name="" :value="name">
        </div>
    </div>
</template>

<script>
    //name.sync是vue1的数据双向绑定的，vue只能单向数据绑定
    export default {
        name: "child1",
        props: ["msg", "name"],
        created() {
            this.$on('click-child', (x) => {
                console.info("send ajax", x);
            });
        },
        methods: {
            handleParentClick(e) {
                console.info(e)
            },
            showParentMsg() {
                console.info(this.msg);
            }
        }
    }
</script>

<style>

</style>