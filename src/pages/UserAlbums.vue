<template>
    <div>
        <album-item v-for="album in albums"
            :album="album"
            :key="album.id"
        />
    </div>
</template>

<script>
    import axios from 'axios'
    import AlbumItem from '@/components/AlbumItem.vue'

    export default {
        components: {
            AlbumItem
        },
        data() {
            return {
                albums: []
            }
        },
        methods: {
            async fetchAlbums() {
                const resp = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${this.$route.params.id}`)
                this.albums = resp.data
            }
        },
        mounted() {
            this.fetchAlbums()
        }
    }
</script>

<style lang="scss" scoped>

</style>