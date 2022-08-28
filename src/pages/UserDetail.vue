<template>
    <div class="user">
        <h1><strong>name: </strong>{{ user.name }}</h1>
        <h1><strong>username: </strong>{{ user.username }}</h1>
        <h1><strong>Email: </strong>{{ user.email }}</h1>
        <div class="user__posts">
            <my-button @click.native="$router.push(`/users/${user.id}/posts`)">Posts</my-button>
        </div>
        <div class="user__albums">
            <my-button @click.native="$router.push(`/users/${user.id}/albums`)">Albums</my-button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapActions({
                fetchUsers: 'fetchUsers',
            }),
            ...mapMutations({
                setUsers: 'setUsers',
            }),
        },
        computed: {
            ...mapState({
                users: state => state.users
            }),
            user() {
                return this.users.find(user => user.id == this.$route.params.id)
            }
        },
        mounted() {
            this.fetchUsers()
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        line-height: 3rem;
        border: 2px solid teal;
        border-radius: 10px;
        padding: 10px;
        background-color: white;
        width: 70%;
    }
    
    .user strong {
        font-size: 1.3rem;
        color: rgb(156, 156, 156);
    }

    .user h1 {
        font-size: 1.5rem;
    }

</style>