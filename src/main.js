// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
"use strict";
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import home from './pages/home'
// import detail from './pages/detail'



//创建路由实例
// const router = new VueRouter({
// 	hash:'false',
// 	routes:[
// 		{
// 	    	path:"/",
// 	    	component:home
// 	    },
// 	    {
// 	    	path:'/detail',
// 	    	component:detail
// 	    }
// 	]
// });
const router = new VueRouter({
	hash:'false',
	routes:[
		{
	    	path:"/",
	    	component:function(resolve){
	    		require(['./pages/home'],resolve)
	    	}
	    },
	    {
	    	path:'/detail',
	    	component:function(resolve){
	    		require(['./pages/detail'],resolve)
	    	}
	    }
	]
});
//创建vue实例
new Vue({
	el:"#app",
	router

	// watch:{
	// 	'$route'(to,from){

	// 	}
	// }
});