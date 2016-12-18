<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
            <slot name="any"></slot>
        </footer>
    </div>
</template>
<script>
</script>
<style>
</style>
