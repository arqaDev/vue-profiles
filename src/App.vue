<template>
  <div id="app">
    <navbar-component></navbar-component>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavbarComponent from '@/components/UI/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style lang="scss">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 14px;
    }

    body {
      background-color: rgb(227, 244, 244);
    }

    .main {
      padding: 5%;
    }
</style>
