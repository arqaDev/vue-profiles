<template>
    <div>
        <h1 class="posts__title">Posts</h1>
        <post-item v-for="post in posts"
            :post="post"
            :key="post.id"
        />
    </div>
</template>

<script>
    import axios from 'axios'
    import PostItem from '@/components/PostItem.vue'

    export default {
        components: {
            PostItem
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async fetchPosts() {
                const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
                this.posts = resp.data 
            },
        },
        mounted() {
            this.fetchPosts()
        }

    }
</script>

<style lang="scss" scoped>
    .posts__title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
</style>