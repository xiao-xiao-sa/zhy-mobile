<template>
	<div class="sb-detail">
		<div class="top">
			<img :src="shopInfo.src" alt="">
			<div class="title">
				<h2>{{shopInfo.name}}</h2>
				<span>
					<i class="iconfont icon-xin" :class="{'red':isKeep}" @click="changeKeep"></i>
					收藏
				</span>
			</div>
		</div>
		<div class="content">
			<h2>基本信息</h2>
			<p>商标名称：{{shopInfo.name}}</p>
			<p>所属类别：{{shopInfo.type}}</p>
			<p>商标编号：{{shopInfo.sbbh}}</p>
			<!-- <p>使用期限：{{shopInfo.syqx}}</p> -->
			<p class="lsqz">类似群组：{{shopInfo.lsqz}}</p>
			<p>注册范围：{{shopInfo.syfw}}</p>
		</div>
		<div class="bottom">
			<a href="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT28485359&lng=cn" target="_blank">询价留言</a>
			<a :href="'tel:'+kfTel" target="_blank">联系客服</a>
		</div>
	</div>
</template>

<script>
	import baseData from '../assets/data/baseData'
	export default {
		name:'SbDetail',
		data(){return{
			shopInfo:null,
			isKeep:false,
			kfTel:''
		}},
		created:function(){
			this.shopInfo = this.$store.state.shopInfo;
			this.kfTel = baseData.kfTel;
		},
		methods:{
			changeKeep:function(){
				this.isKeep = !this.isKeep;
			}
		}
	}
</script>

<style lang="less" scoped>
	.sb-detail{
		.top{
			width: 100%;
			background-color: #fff;
			padding:20px 20px;
			box-sizing: border-box;
			img{
				width: 700px;
			}
			.title{
				width: 100%;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				margin-top:20px;
				h2{
					font-size: 30px; /*px*/
					color: #111;
					font-weight: 700;
				}
				span{
					font-size: 30px; /*px*/
					.iconfont{
						font-size: 40px; /*px*/
					}
					.red{
						color:#ff2132;
					}
				}
			}
		}
		.content{
			background-color: #fff;
			text-align: left;
			margin-top: 20px;
			box-sizing: border-box;
			width: 100%;
			padding:20px;
			margin-bottom: 120px;
			h2{
				font-size:30px; /*px*/ 
				font-weight: 600;
				text-align: center;
				margin-bottom: 20px;
			}
			p{
				font-size: 26px; /*px*/
			}
			.lsqz{
				word-wrap: break-word; 
				word-break: normal; 
			}
		}
		.bottom{
			width: 100%;
			height:96px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between; 
			position: fixed;
			bottom: 0;
			left: 0;
			a{
				width: 50%;
				height: 100%;
				display: inline-block;
				text-align: center;
				line-height: 96px;
				color: #fff;
				font-size: 30px;
				background-color: #ff2132;
			}
			a:nth-child(2){
				background-color: #6a84ce;
			}
		}
	}
</style>