<template>
    <div class="toast-trigger-wrap">
        <button type="button"
                @click.prevent.stop="trigger">弹窗</button>
    </div>
</template>

<script>
import Toast from '../toast'
export default {
    methods: {
        trigger() {
            var t = Toast({ message: "地方反馈", duration: 3000 });
            // setTimeout(function () {
            //     t.close();
            // }, 200);
        }
    }
}
</script>

<style lang="less">
.toast-trigger-wrap {
    box-sizing: border-box;
}
</style>