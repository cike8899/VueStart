<template>
    <div class="parent">
        <child>
            <template scope="props">
                <span>hello from parent</span>
                <span>{{ props.text }}</span>
            </template>
        </child>
    </div>
</template>
<script>
import ChildScopeSlot from './childScopeSlot.vue'
export default {
    components: {
        child: ChildScopeSlot
    },
    data() {
        return {}
    }
}
</script>
