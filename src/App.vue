<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>
<script>
import Hello from './components/Hello'

export default {
    name: 'app',
    data() {
        return {}
    }
}
</script>
<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothin: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
