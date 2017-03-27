export default {
    install(Vue) {
        debugger
        Vue.directive("tap", {
            fn: null,
            bind() {
                // 做一些一次性的工作
            },
            update(el, binding, vnode, oldVnode) {
                if (typeof binding.value !== 'function') {
                    throw new Error('传给v-tap的参数不是一个函数,请检查');
                }

                el.fn = binding.value;
                el.addEventListener('click', el.fn);
            },
            unbind(el) {
                el.removeEventListener('click', el.fn);
            }
        })
    }
}