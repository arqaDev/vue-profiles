<template>
    <div class="post__content">
        <h1 class="post__title">{{ post.title }}</h1>
        <p class="post__body">{{ post.body }}</p>
    </div>
</template>

<script>
    export default {
        name: 'post-item',
        props: {
            post: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post__content {
        border: 2px solid teal;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 10px;
        background-color: white;
    }

    .post__title {
        font-size: 1.5rem;
    }
    .post__body {
        font-size: 1.2rem;
        line-height: 2rem;
    }
</style>