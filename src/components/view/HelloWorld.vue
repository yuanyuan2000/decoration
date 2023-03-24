<template>
  <div class="hello">
    <img src="@/assets/logo.png"></img>
    <div>
      <button @click="sendA(username,password)">发送A</button>
      <button @click="sendB" :data-name="username" :data-pwd="password">发送B</button>
      <button @click="sendC(username,password)" :data-nameABC="username">发送C</button>
      <router-link :to="{name:'First',params:{id:0}}">
          <button>跳转首页</button>
      </router-link>
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">Forum</a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"jack",
      password:123123
    }
  },
  methods:{
  	sendA:function(username,password){
  		console.log(username+" " +password)
  	},
    sendB(event){
      console.log(event)
      console.log(event.srcElement.dataset)
    },
    sendC(username,password,$event){
    	console.log(username);
    	console.log(password);
    	console.log(event.srcElement.dataset);
    	console.log(event.srcElement.dataset.nameabc);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    max-width: 750px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
h1, h2 {
  font-weight: normal;
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
