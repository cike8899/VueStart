<template>
  <div>
    <button type="button"></button>
    <input type="text" name="" value="" @input="handleChange" />
  </div>
</template>
<script>
// 子组件向父组件传递数据
export default {
  props: ["callback"],
  data() {
    return {}
  },
  methods: {
    handleChange(e) {
      this.callback(e.target.value)
    }
  }
}
</script>
<style lang="less">
  .wrap {
    .inner {}
  }
</style>
