<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

    button {
        background-color: transparent;
        border: none;
        color: #0c78ed;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover {
        color: #125eaf;
    }
</style>