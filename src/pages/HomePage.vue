<template>
    <div class="home">
        <user-list 
            :users="users"
        />
    </div>
</template>

<script>
    import UserList from '@/components/UserList.vue';
    import { mapActions, mapState, mapMutations } from 'vuex'

    export default {
        components: { UserList },
        name: 'home-page',
        methods: {
            ...mapMutations({
                setUsers: 'setUsers'
            }),
            ...mapActions({
                fetchUsers: 'fetchUsers'
            })
        },
        computed: {
            ...mapState({
                users: state => state.users
            }),
        },
        mounted() {
            this.fetchUsers()
        }
    }
</script>

<style lang="scss" scoped>
</style>