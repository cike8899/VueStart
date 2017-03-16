<template>
    <div id="dr01">
        <!-- 导航栏 -->
        <div class="border cf">
            <ul>
                <li>
                    <a href="javascript:void(0);" @click="toggleTabs('tab01');">{{tab01Text}}</a>
                </li>
                <li>
                    <a href="javascript:void(0);" @click="toggleTabs('tab02');">{{tab02Text}}</a>
                </li>
                <li>
                    <a href="javascript:void(0);" @click="toggleTabs('tab03');">{{tab03Text}}</a>
                </li>
            </ul>
        </div>
        <!-- 点击导航后要切换的内容 -->
        <div class="border" style="height: 100px;">
            <!-- 如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数 -->
            <keep-alive>
                <component :is="currentView"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import tab01 from './tab01Con'
    import tab02 from './tab02Con'
    import tab03 from './tab03Con'
    export default {
        data() {
            return {
                tab01Text: "tab01", //导航栏文本1
                tab02Text: "tab02", //导航栏文本2
                tab03Text: "tab03", //导航栏文本3
                currentView: 'tab01'
            }
        },
        components: {
            tab01: tab01,
            tab02: tab02,
            tab03: tab03,
        },
        methods: {
            toggleTabs(tabText) {
                this.currentView = tabText;
            }
        }
    }
</script>
<style lang="less">
    .cf>ul {
        list-style: none;
        text-align: left;
        >li {
            display: inline-block;
        }
    }
    
    .border {
        border: 1px solid rgb(10, 200, 100);
    }
</style>