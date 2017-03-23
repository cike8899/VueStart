import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hello from '../components/Hello.vue'
import Tpl from '../components/tpl.vue'
import Computed from '../components/computedAttr.vue'
import StyleBind from '../components/styleBind.vue';
import Condition from '../components/conditionRender.vue'
import Parent from '../components/communication/parent.vue'
import Currency from '../components/communication/currencyParent.vue'
import WrapWidget from '../components/Slot//wrapWidget.vue'
import SlotContainer from '../components/Slot/NamedSlot/slotContainer.vue'
import ParentScopeSlot from '../components/Slot/ScopeSlot/parentScopeSlot.vue'
import ScopeListParent from '../components/Slot/ScopeSlot/scopeListParent.vue'
import DyParent from '../components/dynamicWidget/dyParent.vue'
import tabs from '../components/tabs/tabWrapper.vue'
import toastTrigger from '../components/trigger/triggerToast.vue'
import model from '../components/modelDiff/model.vue'

export default new VueRouter({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || {
            x: 0,
            y: 0
        }
    },
    routes: [{
        path: '/',
        name: 'hello',
        components: {
            default: Hello
        }
    }, {
        path: '/tpl',
        name: 'tpl',
        components: {
            default: Tpl
        }
    }, {
        path: '/computed',
        name: 'computed',
        components: {
            default: Computed
        }
    }, {
        path: '/style',
        name: 'style',
        components: {
            default: StyleBind
        }
    }, {
        path: '/condition',
        name: 'condition',
        components: {
            default: Condition
        }
    }, {
        path: '/parent',
        name: 'parent',
        components: {
            default: Parent
        }
    }, {
        path: '/currency',
        name: 'currency',
        components: {
            default: Currency
        }
    }, {
        path: '/slot',
        name: 'slot',
        components: {
            default: WrapWidget
        }
    }, {
        path: '/slotcon',
        name: 'slotcon',
        components: {
            default: SlotContainer
        }
    }, {
        path: '/scopeslot',
        name: 'scopeslot',
        components: {
            default: ParentScopeSlot
        }
    }, {
        path: '/scopelist',
        name: 'scopelist',
        components: {
            default: ScopeListParent
        }
    }, {
        path: '/dyParent',
        name: 'dyParent',
        components: {
            default: DyParent
        }
    }, {
        path: '/tabs',
        name: 'tabs',
        components: {
            default: tabs
        }
    }, {
        path: '/triggerToast',
        name: 'triggerToast',
        components: {
            default: toastTrigger
        }
    }, {
        path: '/model',
        name: 'model',
        components: {
            default: model
        }
    }]
})