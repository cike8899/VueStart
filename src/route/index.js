import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hello from '../components/Hello.vue'
import Tpl from '../components/tpl.vue'
import Computed from '../components/computedAttr.vue'
import StyleBind from '../components/styleBind.vue';
import Condition from '../components/conditionRender.vue'
import Parent from '../components/communication/parent.vue';

export default new VueRouter(
    {
        mode: 'history',
        scrollBehavior: function (to, from, savedPosition) {
            return savedPosition || { x: 0, y: 0 }
        },
        routes: [
            {
                path: '/',
                name: 'hello',
                components: {
                    default: Hello
                }
            },
            {
                path: '/tpl',
                name: 'tpl',
                components: {
                    default: Tpl
                }
            },
            {
                path: '/computed',
                name: 'computed',
                components: {
                    default: Computed
                }
            },
            {
                path: '/style',
                name: 'style',
                components: {
                    default: StyleBind
                }
            },
            {
                path: '/condition',
                name: 'condition',
                components: {
                    default: Condition
                }
            },
            {
                path: '/parent',
                name: 'parent',
                components: {
                    default: Parent
                }
            }
        ]
    }
)