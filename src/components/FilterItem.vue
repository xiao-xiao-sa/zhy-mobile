<template>
	<div class="filter-item">
		<h2 class="title">
			<span>{{filterItem.title}}</span>
			<i class="iconfont icon-xia" v-if="active==false" @click="changeShow"></i>
			<i class="iconfont icon-shang" v-if="active==true" @click="changeShow"></i>
		</h2>
		<div class="content" v-if="active">
			<button v-for="(item,index) in filterItem.list" :key="index" :class="{cur:item.type==cur}"
			@click="selectCur(item.type)">{{item.type}}</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'FilterItem',
		data(){return{
			active:true,
			cur:'',
			code:this.filterItem.code
		}},
		props:['filterItem'],
		watch:{
			cur:function(){
				this.cur = this.$store.state.params[this.code];
			}
		},
		methods:{
			changeShow:function(){
				this.active = !this.active;
			},
			selectCur:function(val){
				this.cur = val;
				this.$store.commit(this.filterItem.code,val);
			}
		}
	}
</script>

<style lang="less" scoped>
	.filter-item{
		width: 100%;
		padding:10px;
		box-sizing: border-box;
		.title{
			width: 100%;
			font-size: 28px;/*px*/
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			box-sizing: border-box;
			padding-right: 20px;
			.iconfont{
				font-size: 40px;
				color: #999;
			}
		}
		.content{
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			button{
				width: 170px;
				margin-right: 20px;
				display: inline-block;
				background-color: #f2f0fa;
				margin-top:20px;
				padding:10px 0;
			}
			.cur{
				background-color: #ff2132;
				color: #fff;
			}
		}
	}
</style>