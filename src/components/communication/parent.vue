<template>
    <div class="wrap">
        <button v-on:click="clickParent">点击</button>
        <child1 ref="child1" :msg="{name:'bill'}"></child1>
        来自父组件的数据：
        <input type="text" :value="name" />
        <child2 :callback="handleChild2Change"></child2>
        来自child2的数据：<span class="inner">{{input}}</span>
        <div class="child3">
            <p>{{ total }}</p>
            <button-counter v-on:increment="incrementTotal"></button-counter>
            <button-counter v-on:increment="incrementTotal"></button-counter>
        </div>
    </div>
</template>
<script>
import './parent.less';
import Child1 from './child1'
import Child2 from './child2.vue'
import Child3 from './child3.vue'
export default {
    name: "parent",
    data() {
        console.info("iii");
        return {
            bill: "bill",
            name: "dyu",
            input: "",
            total: 0
        }
    },
    components: {
        child1: Child1,
        child2: Child2,
        ButtonCounter: Child3
    },
    methods: {
        clickParent() {
            // this.$refs.child1.$emit('click-child', "high");
            //通过ref拿到子组件的实例,也可以发事件去调用子组件的方法
            this.$refs.child1.handleParentClick("ssss");
        },
        handleChild2Change(e) {
            this.input = e
        },
        incrementTotal() {
            this.total += 1
        }
    }
}
</script>
<style lang="less" scope>
.wrap {
    .child3 {
        border: 1px solid rgb(100, 200, 100)
    }
}
</style>
