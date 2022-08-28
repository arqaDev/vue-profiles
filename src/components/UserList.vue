<template>
    <div class="users">
        <user-item v-for="user in users"
            :user="user"
            :key="user.id"
        />
        
    </div>
</template>

<script>
    import UserItem from '@/components/UserItem.vue'

    export default {
        components: { UserItem },
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .users {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 3rem;
    }
</style>