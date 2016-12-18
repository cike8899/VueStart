<template>
    <div>
        <h1>对象绑定</h1>
        <div v-bind:class="{ active: isActive }">
            上面的语法表示 classactive 的更新将取决于数据属性 isActive 是否为真值 。
        </div>
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
            v-bind:class 指令可以与普通的 class 属性共存
        </div>
        <div v-bind:class="classObject">绑定对象</div>
        <div v-bind:class="otherClassObject">使用计算属性绑定class</div>
        <p>-------------------</p>
        <h1>数组绑定</h1>
        <p>我们可以把一个数组传给 v-bind:class ，以应用一个 class 列表：</p>
        <div v-bind:class="[activeClass, errorClass]">
            数组的中括号在标签内部
        </div>
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">
            如果你也想根据条件切换列表中的 class ，可以用三元表达式：
        </div>
        <div v-bind:class="[{ active: isActive }, errorClass]">

        </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true,
                hasError: true,
                error: null,
                activeClass: 'active',
                errorClass: 'text-danger',
                classObject: {
                    active: true,
                    'text-danger': false
                }
            }
        },
        computed: {
            otherClassObject() {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal',
                }
            }
        },
        watch: {

        }
    }
</script>

<style>

</style>