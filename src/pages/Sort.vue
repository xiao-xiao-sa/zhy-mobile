<template>
	<div class="sort">
		<div class="header" :style="{backgroundImage:'url('+bannerImg+')'}">
			<div class="search-box">
				<input type="text" v-model="markName" placeholder="请输入商标名称">
				<button @click="searchMarkName">搜索</button>
			</div>
		</div>
		<tab v-model='activeKey' class="tabs1">
			<pane  label='商标分类'  name='0' class="pane1">
				<div class="top">
					<h2>
						<i class="iconfont icon-red"></i>
						热门分类
					</h2>
					<ul>
						<li v-for="(item,index) in huoList" :key="index" @click="toSearch(item)">
							{{item.title}}
						</li>
					</ul>
				</div>
				<div class="bottom">
					<h2>
						<i class="iconfont icon-fenlei"></i>
						全部分类
					</h2>
					<ul>
						<li v-for="(item,index) in allSortList" :key="index" @click="toSearch(item)">
							<img :src="item.src" alt="">
							<p>{{item.title}}</p>
						</li>
					</ul>
				</div>
			</pane>
			<pane  label='专利分类'  name='1' class="pane2">
				<tab v-model="pane2ActiveKey" class="tabs2">
					<pane v-for="(item,index) in patentList" :key="index" :name="index" :label="item.title">
						<div v-html="item.content"></div>
					</pane>
				</tab>
				<div class="constant" v-if="pane2ActiveKey == 1 || pane2ActiveKey == 2 || pane2ActiveKey == 3">
					<h2 class="title1"><span>专利发明</span>申请流程</h2>
					<img src="../assets/image/liucheng1.png" alt="" class="liucheng">
					<h2 class="title1">办完之后会拿到哪些材料</h2>
					<img src="../assets/image/liucheng2.png" alt="" class="liucheng">
				</div>
				<div class="constant">
					<h2 class="title1">拥有专利的<span>好处</span>，你需要<span>了解</span>这些</h2>
					<p class="title2">申请专利有什么好处</p>
					<img src="../assets/image/haochu.png" alt="" class="haochu">
					<p class="title2">专利类型简介</p>
					<ul class="patent-type">
						<li v-for="(item,index) in patentType" :key="index">
							<img :src="item.src" alt="">
							<p>{{item.content}}</p>
						</li>
					</ul>
				</div>
				<div class="constant">
					<h2 class="title1">十大<span>优势</span>, 专利申请成功有保障</h2>
					<p class="title2">专利类型简介</p>
					<ul class="protection">
						<li v-for="(item,index) in protection" :key="index">
							<img :src="item.src" alt="">
							<p>{{item.title}}</p>
						</li>
					</ul>
				</div>
			</pane>
		</tab>
		<tab-bar :cur="cur"></tab-bar>
	</div>
</template>

<script>
	import tab from '../components/Tab.vue'
	import pane from '../components/Pane.vue'
	import TabBar from '../components/TabBar.vue'
	import sortData from '../assets/data/sortData'
	import baseData from '../assets/data/baseData'

	export default {
		name:'Sort',
		data(){return{
			bannerImg:null,
			cur:'Sort',
			activeKey:0,
			pane2ActiveKey:0,
			huoList:null,
			allSortList:null,
			patentList:null,
			patentType:null,
			protection:null,
			markName:''
		}},
		watch:{
			markName:function(){}
		},
		created:function(){
			this.bannerImg = baseData.bannerImg;
			this.huoList = sortData.huoList;
			this.allSortList = sortData.allSortList;
			this.patentList = sortData.patentList;
			this.patentType = sortData.patentType;
			this.protection = sortData.protection;
		},
		methods:{
			toSearch:function(val){
				console.log(val);
				this.$store.commit('cateCode',{v1:val.title,v2:val.cateCode});
				this.$store.commit('qmarktype','');
				this.$store.commit('qregdate','');
				this.$store.commit('qworknum','');
				this.$store.commit('qprice_min',0);
				this.$store.commit('qprice_max',10000000000);
				this.$store.commit('markName','');
				this.$store.commit('page',1);
				this.$router.push({path:'/Search'});
			},
			searchMarkName:function(){
				this.$store.commit('cateCode','');
				this.$store.commit('qmarktype','');
				this.$store.commit('qregdate','');
				this.$store.commit('qworknum','');
				this.$store.commit('qprice_min',0);
				this.$store.commit('qprice_max',10000000000);
				this.$store.commit('markName',this.markName);
				this.$store.commit('page',1);
				this.$router.push({path:'/Search'})
			}
		},
		components:{
			'tab':tab,
			'pane':pane,
			'tab-bar':TabBar
		}
	}
</script>

<style lang="less">
	.sort{
		.header{
			width: 100%;
			height: 350px;
			box-sizing: border-box;
			padding-top:20px;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			.search-box{
				width: 700px;
				height: 62px;
				margin:0 auto;
				background-color: #fff;
				border-radius: 30px;
				padding:0 20px;
				box-sizing: border-box;
				box-shadow: 0 0 10px #999 inset;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				input{
					width: 560px;
					height: 100%;
					background-color: transparent;
				}
				button{
					width: 100px;
					height: 100%;
					background-color: transparent;
				}
			}
		}
		.tabs1{
			margin-bottom: 120px;
			.tabs-bar{
				width: 100%;
				height: 72px;
				margin:20px 0;
				background-color: #fff;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-around;
				line-height: 72px;
				box-sizing: border-box;
				padding:0 50px;
				.tabs-item{
					font-size: 28px; /*px*/
				}
				.tabs-item-active{
					color: #ff2132;
					border-bottom: 4px solid #ff2132;
				}
			}
			.tabs-content{
				.pane1 .top{
					width: 100%;
					height: 240px;
					background-color: #fff;
					padding:20px 0 30px 24px;
					box-sizing: border-box;
					h2{
						font-size: 28px; /*px*/
						.iconfont{
							font-size: 40px;
							color: #ff2132;
						}
					}
					ul{
						width: 100%;
						margin-top: 30px;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						li{
							margin-right:22px;
							width: 220px;
							height: 55px;
							line-height: 55px;
							font-size: 24px; /*px*/
							background-color: #f1f0f5;
							margin-bottom: 20px;
						}
					}
				}
				.pane1 .bottom{
					margin-top:20px;
					width: 100%;
					background-color: #fff;
					padding:20px 24px;
					box-sizing: border-box;
					h2{
						font-size: 28px; /*px*/
						.iconfont{
							font-size: 40px;
						}
					}
					ul{
						width:702px;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						margin-top: 30px;
						li{
							width: 234px;
							height: 234px;
							box-sizing: border-box;
							border:1px solid #d4d4d4;
							font-size: 28px; /*px*/
							img{
								width: 182px;
								height: 124px;
								margin:24px auto;
							}
						}
					}
				}
				.pane2 .tabs2{
					.tabs-bar{
						width: 100%;
						height: 142px;
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						padding:0;
						background-color: transparent;
						.tabs-item{
							width:222px;
							height: 52px;
							line-height: 52px;
							font-size: 26px; /*px*/
							text-align: center; 
							background-color: #fff;
							margin:20px 0 0 20px;
						}
						.tabs-item-active{
							border:none;
							background-color: #ff2132;
							color: #fff;
						}
					}
					.tabs-content{
						background-color: #fff;
						text-align: left;
						width: 100%;
						box-sizing: border-box;
						padding:20px 25px;
						h2{
							font-size: 26px; /*px*/
						}
						h3{
							font-size: 22px; /*px*/
						}
						p{
							font-size: 20px; /*px*/
						}
					}
				}
				.pane2 .constant{
					background-color: #fff;
					width: 100%;
					padding-top:20px;
					padding-bottom: 50px;
					.title1{
						font-size: 30px; /*px*/
						color: #000;
						margin:20px auto;
						span{
							color: #28abe1;
						}
					}
					.title2{
						font-size: 24px; /*px*/
						position: relative;
						display: inline-block;
						margin:0 auto 20px;
					}
					.title2:before{
						content:url(../assets/image/zuo.png);
						display: block;
						position: absolute;
						width: 45px;
						height: 12px;
						left:-50px;
						top:0;
					}
					.title2:after{
						content:url(../assets/image/you.png);
						display: block;
						position: absolute;
						width: 45px;
						height: 12px;
						right:-50px;
						top:0;
					}
					.haochu{
						width: 575px;
						margin:0 auto;
						display: block;
						margin-bottom: 20px;
					}
					.liucheng{
						width: 700px;
						display: block;
						margin:20px auto;
					}
					.patent-type{
						display: flex;
						flex-wrap: nowrap;
						justify-content: space-around;
						li{
							width: 200px;
							img{
								width: 140px;
							}
							p{
								text-align: left;
								font-size:20px; /*px*/ 
							}
						}
					}
					.protection{
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						li{
							width: 33.33%;
							padding:20px 0;
							font-size: 20px;
							color: #999;
							img{
								width:75px;
								height: 75px;
							}
							p{
								margin-top: 10px;
							}
						}
					}
				}
			}
		}
		
	}
</style>