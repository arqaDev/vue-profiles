<template>
    <div class="user">
        <div class="user__content">
            <div><strong>Name: </strong>{{user.name}}</div>
            <div><strong>Username: </strong>{{user.username}}</div>
            <div><strong>Email: </strong>{{user.email}}</div>  
        </div>
        <router-link class="user-link" :to="`/users/${user.id}`"></router-link>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/common/colors.scss';

    .user {
        height: 170px;
        line-height: 2rem;
        border: 2px solid $primary-color;
        border-radius: 10px;
        padding: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        background-color: $secondary-color;
    }

    .user__content div {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .user-link {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>