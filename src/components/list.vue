<template>
	<li v-on:click="dian">{{title}}</li>
</template>
<script>

    export default{
        props:['title']
        ,methods:{
		    dian:function(){
		        alert($("li").length)
		    }
		}
    }
</script>