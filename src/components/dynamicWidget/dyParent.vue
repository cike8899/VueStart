<template>
    <div>
        <keep-alive>
            <component v-bind:is="currentView">
                <!-- 组件在 vm.currentview 变化时改变！ -->
            </component>
        </keep-alive>
        <button @click="changeWidget">切换组件</button>
    </div>
</template>
<script>
//动态组件
import Home from './dyHome.vue'
import Posts from './dyPosts.vue'
export default {
    components: {
        home: Home,
        posts: Posts
    },
    data() {
        return {
            currentView: 'home'
        }
    },
    methods: {
        changeWidget(e) {
            let currentView = this.$data.currentView
                // currentView === "home" ? currentView = "posts" : currentView = "home"
            if (currentView === "home") {
                // this.$data.currentView == "posts"
                // this.$set("currentView", "posts")
                this.currentView = "posts"
            } else {
                // this.$data.currentView == "home"
                // this.$set("currentView", "home")
                this.currentView = "home"
            }
        }
    }
}
</script>
