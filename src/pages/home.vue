<template>
	<div>
	    <homeheader></homeheader>
	<ul>
		<list v-for="(item,index) in items" :title=item.title></list>
	</ul>
	</div>
</template>

<script>
	import homeheader from '../components/homeheader'
	import list from '../components/list'
	import $ from '../js/jquery-1.8.3.min.js'

	export default{
		data () {
			return {
				items:[
				    {title:"1"},
				    {title:"2"},
				    {title:"3"},
				    {title:"4"},
				    {title:"5"}
				]
			}
		},
		components:{
			homeheader,
			list
		},
		
	}
	
</script>