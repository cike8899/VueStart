<template>
    <transition name="fade"
                @leave="leave">
        <div class="toast-wrapper"
             v-show="visible">
            <div class="icon"></div>
            <div class="msg">{{message}}</div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        message: String,
        className: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'middle'
        },
        iconClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        leave() {
            console.info("leave");
        }
    }
}
</script>
<style lang="less">
.toast-wrapper {
    box-sizing: border-box;
    position: fixed;
    padding: 10px;
    box-shadow: 1px 0px 7px 5px #a6bc2b;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    // display: inline-block;
    max-height: 100px;
    background: rgba(0, 0, 0, 0.7);
    color: rgb(240, 255, 255);
    text-align: center;
}

.fade-enter-active {
    transition: opacity 2s;
}

.fade-enter {
    opacity: 0;
}

.fade-leave-active {
    transition: transform 2s;
}

.fade-leave-to {
    // width: 300px;
    transform: rotate(180deg);
}

// .fade-leave {
//     width: 300px;
//     transform: translateX(30px);
// }
</style>