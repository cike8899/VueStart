import Vue from 'vue'
import widget from './toast.vue'

const ToastConstructor = Vue.extend(widget);

var toastPool = [];

var getAnInstance = function () {
    // if (toastPool.length > 0) {
    //     var instance = toastPool[0];

    // }
    var div = document.createElement("div");
    div.className = "haha";
    return new ToastConstructor({ el: div });
}

function removeDom(e) {
    if (e.target.parentNode) {
        e.target.parentNode.removeChild(e.target);
    }
}

ToastConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener("transitionend", removeDom);
}

function Toast(options = {}) {
    let duration = options.duration || 3000;
    let instance = getAnInstance();

    instance.message = typeof options === "string" ? options : options.message;
    instance.position = options.position || '';
    instance.duration = options.duration || '';
    instance.className = options.className || '';
    instance.iconClass = options.iconClass || '';

    document.body.appendChild(instance.$el);

    instance.visible = true;

    setTimeout(function () {
        instance.close();
    }, duration);

    return instance;
}

export default Toast;