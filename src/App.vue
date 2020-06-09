<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="less">
html,body{
  height: 100%;
}
p {
 padding: 0;
 margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.wrap {
  flex: 1;
}
.myactive {
 color: #42b983 !important;
//  background: red;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

  }
}
</style>
