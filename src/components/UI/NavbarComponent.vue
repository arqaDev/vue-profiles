<template>
    <nav class="navbar">
        <router-link to="/" class="logo">Profiles</router-link>
        <router-link to="/" class="home-page">Home</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'navbar-component'
    }
</script>

<style lang="scss" scoped>
    @import '@/common/colors.scss';

    .navbar {
        padding: 1% 5%;
        display: flex;
        align-items: center;
        background-color: $primary-color;
    }

    .logo {
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-decoration: none;
        color: $secondary-color;
    }

    .logo:hover {
        color: $navbar-hover-color;
    }

    .home-page {
        font-size: 1.3rem;
        margin-left: auto;
        letter-spacing: 1px;
        text-decoration: none;
        color: $secondary-color
    }

    .home-page:hover {
        color: $navbar-hover-color
    }
</style>