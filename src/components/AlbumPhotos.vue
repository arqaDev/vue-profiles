<template>
    <img :src="photo" alt="" class="album__img"/>
</template>

<script>
    export default {
        props: {
            photo: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>