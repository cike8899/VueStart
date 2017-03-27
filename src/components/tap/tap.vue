<template>
    <div>
        <input type="text"
               name="user"
               v-model="user">
        <button v-tap="save">提交</button>
    </div>
</template>
<script>
export default {
    name: "Tap",
    data() {
        return {
            user: ""
        }
    },
    methods: {
        save() {
            console.info(this.user);
        }
    },
    beforeUpdate() {
        console.info(this.user);
    }
}
</script>