<template>
  <div id="app">
    <p>
      <a v-link="{path: '/app'}">App</a>
      <a v-link="{path: '/hello'}">Hello</a>
    </p>
    <!-- use router-view element as route outlet -->
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>
<style>
  [v-cloak] {
    display: none;
  }
  .fade-transition {
    transition: opacity .1s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
