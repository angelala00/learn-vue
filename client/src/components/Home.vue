<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
      <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/student">学生管理模块</router-link></li>
          <li><router-link to="/course">课程管理模块</router-link></li>
          <li><router-link to="/teacher">教师管理模块</router-link></li>
      </ul>
  </div>
</template>

<script>
// import HelloWorld from './Student.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
