<template>
    <my-awesome-list :items="items">
        <!-- 作用域插槽也可以在这里命名 -->
        <template slot="item" scope="props">
            <li class="my-fancy-item">{{ props.text }}</li>
        </template>
    </my-awesome-list>
</template>
<script>
import ScopeListChild from './scopeListChild.vue'
export default {
    components: {
        MyAwesomeList: ScopeListChild
    },
    data() {
        return {
            // items: []
        }
    },
    computed: {
        items() {
            return [{
                text: "tttt"
            }, {
                text: "iiii"
            }]
        }
    }
}
</script>
