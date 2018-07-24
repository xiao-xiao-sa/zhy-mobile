<template>
	<div class="pane" v-if='show'>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'pane',
		data(){return{
			show:true
		}},
		props:{
			name:{
				type:[String,Number]
			},
			label:{
				type:String,
				default:''
			}
		},
		methods:{
			updateNav:function(){
				this.$parent.updateNav();
			}
		},
		watch:{
			label:function(){
				this.updateNav();
			}
		},
		mounted:function(){
			this.updateNav();
		}
	}
</script>