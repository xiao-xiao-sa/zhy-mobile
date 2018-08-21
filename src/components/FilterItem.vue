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
				this.cur = this.$store.state.params1[this.code];
			}
		},
		methods:{
			changeShow:function(){
				this.active = !this.active;
			},
			selectCur:function(val){
				this.cur = val;
				var title=this.filterItem.title
				if(title=="商标类别"){
					this.$store.commit(this.filterItem.code,{v1:val,v2:val.slice(0,2)});
				}else if(title=="类型"){
					var qmarktype;
					switch(val){
						case "纯中文":
						 	qmarktype=0;
						 	break;
						case "中文+英文":
							qmarktype=1;
						 	break;
						case "中文+英文(拼音)":
							qmarktype=2;
						 	break;
						case "中文+英文(拼音)+图形":
							qmarktype=3;
						 	break;
						case "图形":
							qmarktype=4;
						 	break;
						case "文字+图形":
							qmarktype=5;
						 	break;
						case "英文(拼音)":
							qmarktype=6;
						 	break;
						case "英文(拼音)+图形":
							qmarktype=7;
						 	break;
						case "不限":
							qmarktype='';
						 	break;
					}
					this.$store.commit(this.filterItem.code,{v1:val,v2:qmarktype});
				}else if(title == "字数"){
					var qworknum;
					switch(val){
						case "1个字":
							qworknum=1;
						 	break;
						case "2个字":
							qworknum=2;
						 	break;
						case "3个字":
							qworknum=3;
						 	break;
						case "4个字":
							qworknum=4;
						 	break;
						case "5个字":
							qworknum=5;
						 	break;
						case "5个字以上":
							qworknum=6;
						 	break;
						case "不限":
							qworknum='';
						 	break;
					}
					this.$store.commit(this.filterItem.code,{v1:val,v2:qworknum});
				}else if(title == "价格"){
					var qprice_min=0,qprice_max=1000000000;
					switch(val){
						case "1-2万":
						 	qprice_min=10000;
						 	qprice_max=20000;
						 	break;
						case "2-5万":
							qprice_min=20000;
						 	qprice_max=50000;
						 	break;
						case "5-10万":
							qprice_min=50000;
						 	qprice_max=100000;
						 	break;
						case "10万以上":
							qprice_min=100000;
						 	break;
					}
					this.$store.commit('qprice_min',qprice_min);
					this.$store.commit('qprice_max',qprice_max);
					this.$store.commit('price',val);
				}else if(title == "注册年限"){
					var time;
					var date=new Date();
					var y=date.getFullYear();
					var m=date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
					var d=date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
					switch(val){
						case '1年以上':
							time=(y-1)+" "+m+" "+d;
							break;
						case '2年以上':
							time=(y-2)+" "+m+" "+d;
							break;
						case '3年以上':
							time=(y-3)+" "+m+" "+d;
							break;
						case '4年以上':
							time=(y-4)+" "+m+" "+d;
							break;
						case '5年以上':
							time=(y-5)+" "+m+" "+d;
							break;
						case '6年以上':
							time=(y-6)+" "+m+" "+d;
							break;
					}
					this.$store.commit('qregdate',{v1:val,v2:time});
				}
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