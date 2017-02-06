import Vue from 'vue'
import App from './App.vue'

//初始化时的代码
/*new Vue({
  el: '#app',
  render: h => {
  	return h(App);
  }
})*/

//将app.vue 作为组件component插入页面
new Vue({
  el: '#app',
  data:{
  	greet:'大家好！'
  },
  components: {
  	myComponet:{
  		render: h => h(App)
  	}
  }
})