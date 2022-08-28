<template>
    <div class="album">
        <div class="album__content">
            <h1 style="font-size: 1.5rem">Album</h1>
            <h5 class="album__title">{{album.title}}</h5>
        </div>
        <div class="album__carousel">
            <ArrowLeftIcon size="3x" class="leftArrow" @click="prevSlide"/>
            <div class="album__wrapper" :style="{'margin-left': '-' + (100 * currentSlide) + '%'}">
                <album-photos v-for="photo in photos"
                    :photo="photo"
                    :key="photo.id"
                />
            </div>
            <ArrowRightIcon size="3x" class="rightArrow" @click="nextSlide"/>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';
    import AlbumPhotos from './AlbumPhotos.vue';
    import { ArrowLeftIcon, ArrowRightIcon } from '@vue-hero-icons/solid'

    export default {
        components: {
            AlbumPhotos, ArrowLeftIcon, ArrowRightIcon
        },
        data() {
            return {
                photos: [],
                currentSlide: 0
            }
        },
        props: {
            album: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            async fetchPhothos() {
                const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.album.id}`)
                const data = resp.data
                for (let i=0; i<5; i++) {
                    this.photos.push(data[i].url)
                }
            },
            prevSlide() {
                if (this.currentSlide > 0) {
                    this.currentSlide--
                }
            },
            nextSlide() {
                if (this.currentSlide >= this.photos.length - 1) {
                    this.currentSlide = 0
                } else {
                    this.currentSlide++
                } 
            }
        },
        mounted() {
            this.fetchPhothos()
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/common/colors.scss';

    .album {
        border: 2px solid $primary-color;
        border-radius: 10px;
        background-color: $secondary-color;
        padding: 20px;
        margin-bottom: 20px;
        max-width: 50%;

    }

    .album__title {
        font-size: 1.3rem;
        font-weight: 500;
        margin: 20px 0;
    }

    .album__carousel {
        max-width: 600px;
        overflow: hidden;
        position: relative;
    }

    .album__wrapper {
        display: flex;
        transition: all ease .5s;
    }

    .leftArrow {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 0;
        color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    .rightArrow {
        position: absolute;
        z-index: 1000;
        top: 50%;
        right: 0;
        color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
</style>