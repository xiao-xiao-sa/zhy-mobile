<template>
	<div class="tabs">
		<div class="tabs-bar">
			<a v-for='(item,index) in navList' class="tabs-item" :class="{'tabs-item-active':item.name==currentValue}" :key='index' @click='handleChange(index)'>{{item.label}}</a>
		</div>
		<div class="tabs-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'tabs',
		data(){return{
			navList:[],
			currentValue:this.value
		}},
		props:{
			value:{
				type:[String,Number],
			}
		},
		methods:{
			getTabs:function(){
				return this.$children.filter(function(item) {
					//$options：用来访问组件实例化时的初始化选项对象
                	return item.$options.name === 'pane';
            	})
			},
			updateNav:function(){
				var that=this;
				this.navList=[];
				this.getTabs().forEach(function(pane,index){
					that.navList.push({
						label:pane.label,
						name:pane.name || index
					});
					if(!pane.name) pane.name=index;
					if(index===0){
						if(!that.currentValue){
							that.currentValue=pane.name || index;
						}
					}
				})
				this.updateStatus();
			},
			updateStatus:function(){
				var tabs=this.getTabs();
				var that=this;
				tabs.forEach(function(tab){
					//在这里直接修改pane组件的show变量
					return tab.show= tab.name===that.currentValue;
				})
			},
			handleChange:function(index){
				var nav=this.navList[index];
				var name=nav.name;
				this.currentValue=name;
				//实现子和父的通信
				this.$emit('input',name)
			}
		},
		watch:{
			value:function(val){
				this.currentValue=val;
			},
			currentValue:function(){
				this.updateStatus();
			}
		}
	}
</script>

<style>
	
</style>