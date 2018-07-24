<template>
	<div class="registered">
		<phone-input class="phone"></phone-input>
		<div class="header" :style="{backgroundImage:'url('+bannerImg+')'}">
		</div>
		<div class="content">
			<h2 class="title">注册<span>业务</span></h2>
			<div class="zcyw">
				<div>
					<h3>&yen;600<span>起</span></h3>
					<span>普通注册</span>
					<ul>
						<li><i class="iconfont icon-icon-test"></i>免费查询商标</li>
						<li><i class="iconfont icon-icon-test"></i>7*24h1对1专属服务</li>
						<li><i class="iconfont icon-icon-test"></i>行业专家提供风险评估</li>
						<li><i class="iconfont icon-icon-test"></i>24小时极速申报</li>
					</ul>
				</div>
				<div>
					<h3>&yen;1680<span></span></h3>
					<span>担保注册</span>
					<ul>
						<li><i class="iconfont icon-icon-test"></i>免费查询商标</li>
						<li><i class="iconfont icon-icon-test"></i>7*24h1对1专属服务</li>
						<li><i class="iconfont icon-icon-test"></i>行业专家提供风险评估</li>
						<li><i class="iconfont icon-icon-test"></i>24小时极速申报</li>
						<li class="bz"><i class="iconfont icon-jingdiananli_kongwujiaoxing_shoucang"></i>不成功退全款或重新申请注册</li>
					</ul>
				</div>
				<div>
					<h3>&yen;3000<span></span></h3>
					<span>国际注册</span>
					<ul>
						<li><i class="iconfont icon-icon-test"></i>7*24h1对1专属服务</li>
						<li><i class="iconfont icon-icon-test"></i>行业专家提供风险评估</li>
						<li><i class="iconfont icon-icon-test"></i>24小时极速申报</li>
						<li class="bz"><i class="iconfont icon-jingdiananli_kongwujiaoxing_shoucang"></i>世界范围218个国家申报</li>
					</ul>
				</div>
			</div>
			<h2 class="title">注册商标<span>必要性</span></h2>
			<div class="byx">
				<div>
					<img src="../assets/image/byx1.png" alt="">
					<h3>品牌落地</h3>
					<p>企业里程碑标志</p>
					<p>加强企业品牌宣传</p>
					<p>推广市场竞争力</p>
				</div>
				<div>
					<img src="../assets/image/byx2.png" alt="">
					<h3>品牌保护</h3>
					<p>防止同类企业侵权</p>
					<p>防止业内后来这抢注</p>
					<p>保护企业无形资产</p>
				</div>
				<div>
					<img src="../assets/image/byx3.png" alt="">
					<h3>必备资质</h3>
					<p>办理质检、卫检等必备条件</p>
					<p>入驻电商平台的通行证</p>
					<p>卖场企业认证</p>
				</div>
				<div>
					<img src="../assets/image/byx4.png" alt="">
					<h3>附属价值</h3>
					<p>享受政府扶持</p>
					<p>商标可做抵押贷款</p>
					<p>商标可用来融资</p>
				</div>
			</div>
			<h2 class="title">全国著名<span>合作客户</span></h2>
			<div class="hzkh">
				<img src="../assets/image/hzkh.png" alt="">
			</div>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import PhoneInput from '../components/PhoneInput'
	import TabBar from '../components/TabBar.vue'
	import baseData from '../assets/data/baseData'

	export default {
		name:'Registered',
		data(){return{
			bannerImg:null,
			cur:'Registered'
		}},
		created:function(){
			this.bannerImg = baseData.bannerImg;
		},
		components:{
			'phone-input':PhoneInput,
			'tab-bar':TabBar
		}
	}
</script>

<style lang="less" scoped>
	.registered{
		.phone{
			position: fixed;
			top:0;
			left: 0;
			width: 100%;
		}
		.header{
			margin-top: 100px;
			width: 100%;
			height: 350px;
			box-sizing: border-box;
			padding-top:20px;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
		}
		.content{
			width: 100%;
			background-color: #fff;
			margin-top: 20px;
			margin-bottom: 120px;
			.title{
				font-size: 28px; /*px*/
				color: #000;
				padding:30px 0;
				span{
					color: #159fe5;
				}
			}
			.zcyw{
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				width: 100%;
				box-sizing: border-box;
				padding:20px 20px;
				div{
					width: 226px;
					height: 244px;
					box-shadow: 0 0 5px #059be4;
					h3{
						font-size: 28px; /*px*/
						color: #059be4;
					}
					span{
						font-size: 18px; /*px*/	
					}
					ul{
						margin-top:20px;
						font-size: 20px; /*px*/
						color:#999;
						li{
							margin:4px auto;
						}
						.bz{
							font-size: 16px;
							color: #059be4
						}
						.iconfont{
							color: #ff9d02;
						}
					}
				}
				
			}
			.byx{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				margin-bottom: 30px;
				div{
					width:300px;
					margin-top:30px;
					img{
						width:80px;
						height: 80px;
					}
					h3{
						font-size: 26px; /*px*/
						color: #000;
						margin:10px;
					}
					p{
						font-size: 24px; /*px*/
						color: #666;
					}
				}
			}
			.hzkh{
				padding-bottom: 50px;
				img{
					width:705px;
					height: 226px; 
				}

			}
		}
	}
</style>