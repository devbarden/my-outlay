<template>
  <div id="app" class="app">
    <MainNav class="nav" />
    <Header class="header" />
    <router-view class="main" name="main"/>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" rel="stylesheet/scss">
@import "../style/index.scss";
@import "./style.scss";
</style>
