<template>
  <div id="app">
    <Header />
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view name="main"/>
    <Footer />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "./style.scss";
</style>
