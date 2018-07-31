<template>
	<div class="index">
		<div class="header">
			<img src="../assets/image/logo.png" alt="">
			<div class="right">
				<p>{{kfTel}}</p>
				<p>（知汇眼国家商标局正规备案机构）</p>
			</div>
		</div>
		<swiper :swiper="bannerList"></swiper>
		<phone-input id="phoneInput" :class="{'isFixed':phoneInputFixed}"></phone-input>
		<div class="floor-1">
			<h2 class="floor-title">热门商标分类</h2>
			<ul class="sort-list">
				<li v-for="(item,index) in sortList" :key="index" @click="toSearch(item.cateCode)">
					<img :src="item.src" alt="">
					<span>{{item.title}}</span>
				</li>
			</ul>
			<router-link to="/Sort" class="more">
				更多分类&gt;&gt;
			</router-link>
		</div>
		<div class="floor-2">
			<h2 class="floor-title">成功案例</h2>
			<ul>
				<li v-for="(item,index) in caseList" :key="index">
					<router-link :to="item.url" >
						<img :src="item.src" alt="">
					</router-link>
				</li>
			</ul>
			<div class="bottom">
				<p class="title">
					<img src="../assets/image/guke.png" alt="">
					<span>顾客推荐商标</span>
				</p>
				<div class="input-btn">
					<input type="text" placeholder="请输入您的手机号码">
					<button>马上获取</button>
				</div>
			</div>
		</div>
		<div class="floor-3">
			<h2 class="floor-title">精品商标</h2>
			<boutique-trademark v-for="(item,index) in trademarkList" :trademark="item" :key="index"></boutique-trademark>
		</div>
		<div class="floor-4">
			<h2 class="floor-title">自己挑太麻烦？一对一推荐更高效</h2>
			<div class="content">
				<img src="../assets/image/123456.png" alt="">
				<a :href="kfLink" class="find">
					帮我找商标
				</a>
			</div>
		</div>
		<div class="floor-5">
			<h2 class="floor-title">商标转让无小事，请选择专业交易平台</h2>
			<div class="content">
				<div class="top">
					<div v-for="(item,index) in floor5" :key="index" class="floor5-item">
						<img :src="item.src" alt="">
						<h2 class="">{{item.title}}</h2>
						<p v-html="item.content"></p>
					</div>
				</div>
				<a :href="kfLink" class="kf">
					立即咨询
				</a>
			</div>
		</div>
		<div class="floor-6">
			<h2 class="floor-title">专业过户流程，杜绝风险</h2>
			<div class="content">
				<img src="../assets/image/6.png" alt="">
				<span class="bq1">避免漫天要价</span>
				<span class="bq2">杜绝虚假、欺骗现象</span>
				<a :href="kfLink" class="kf">
					立即咨询
				</a>
				<button class="tel">{{kfTel}}</button>
			</div>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import swiper from '../components/Banner.vue'
	import TabBar from '../components/TabBar.vue'
	import PhoneInput from '../components/PhoneInput'
	import BoutiqueTrademark from '../components/BoutiqueTrademark'
	import baseData from '../assets/data/baseData'
	import indexData from '../assets/data/indexData'

	export default {
		name:'Index',
		data(){return{
			kfLink:'',
			kfTel:'',
			cur:'Index',
			phoneInputFixed:false,
			bannerList: null,
			sortList:null,
			caseList:null,
			trademarkList:null,
			floor5:null
		}},
		created:function(){
			this.kfLink = baseData.kfLink;
			this.kfTel = baseData.kfTel;
			this.bannerList = indexData.bannerList;
			this.sortList = indexData.sortList;
			this.caseList = indexData.caseList;
			this.floor5 = indexData.floor5;
			//精品商标是需要从后台获取的
			this.trademarkList = indexData.trademarkList;
			this.axios.get(url)
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
		},
		activated:function(){
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll:function(){
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			   var offsetTop = document.querySelector('#phoneInput').offsetTop;
			   if(scrollTop>offsetTop){
			   	this.phoneInputFixed=true;
			   }else{
			   	this.phoneInputFixed=false;
			   }
			},
			toSearch:function(val){
				this.$store.commit('cateCode',val)
				this.$router.push({path:'/Search'})
			}
		},
		deactivated:function(){
		  	window.removeEventListener('scroll', this.handleScroll);
		},
		components:{
			'swiper':swiper,
			'tab-bar':TabBar,
			'phone-input':PhoneInput,
			'boutique-trademark':BoutiqueTrademark
		}
	}
</script>

<style lang="less">
	.index{
		width: 100%;
		.header{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			width: 100%;
			height: 145px;
			background-color: #f6f5fa;
			box-sizing: border-box;
			padding-top: 40px;
			padding-left:50px;
			img{
				width: 172px;
				height: 62px;
				margin-top:10px;
			}
			.right{
				font-size: 28px; /*px*/
			}
		}
		.isFixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index:10;
		}
		.floor-1{
			height: 440px;
			width: 100%;
			padding:40px 25px 0;
			box-sizing: border-box;
			.sort-list{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				padding:0;
				justify-content: space-between;
				margin-top:30px;
				position: relative;
				left:10px;
				li{
					position: relative;
					width: 175px;
					img{
						width: 140px;
					}
					span{
						font-size: 20px;/*px*/
						position: absolute;
						width: 100%;
						bottom:35px;
						left: 0;
						text-align: center;
					}
				}
			}
			.more{
				width: 175px;
				height: 40px;
				background-color: #ff2132;
				border-radius:20px; 
				font-size: 20px; /*px*/
				display: block;
				color: #fff;
				line-height: 40px;
				margin:20px auto;
			}
		}
		.floor-2{
			padding:40px 10px 0;
			ul{
				width: 100%;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				margin-top: 30px;
				li img{
					width: 240px;
				}
			}
			.bottom{
				background-color: #6a85ce;
				width: 700px;
				height: 230px;
				margin:20px auto;
				.title{
					font-size: 36px; /*px*/
					color: #fff;
					margin-bottom: 30px;
					img{
						width: 85px;
						height: 85px;
						position: relative;
						top:40px;
					}
				}
				.input-btn{
					background-color: #fff;
					height: 60px;
					width: 640px;
					margin:10px auto;
					border-radius: 30px;
					overflow: hidden;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					font-size: 28px; /*px*/
					input{
						background-color: transparent;
						outline: none;
						border: none;
						width: 380px;
						height: 100%;
						box-sizing: border-box;
						padding-left: 100px;
					}
					button{
						background-color: #ff2132;
						color: #fff;
						width: 210px;
						height: 100%;
					}
				}
				
			}
		}
		.floor-4{
			width: 100%;
			box-sizing: border-box;
			padding:40px 25px 0;
			.content{
				width: 100%;
				margin-top:30px;
				img{
					width: 100%;
				}
				.find{
					display: block;
					width:175px;
					height: 40px;
					line-height: 40px;
					margin:20px auto 0;
					color: #fff; 
					border-radius: 20px;
					background-color: #6a85ce;
				}
			}
		}
		.floor-5{
			width: 100%;
			box-sizing: border-box;
			padding-top:40px;
			.content{
				width: 735px;
				height: 623px;
				background:url(../assets/image/ditu.png) center center no-repeat;
				background-size: 100% 100%;
				margin:40px auto 0;
				.top{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
				}
				.floor5-item{
					width: 350px;
					text-align: center;
					margin-top:30px;
					img{
						width: 125px;
						height: 125px;
					}
					h2{
						font-size: 20px; /*px*/
						color: #6a85ce;
					}
					p{
						font-size: 16px; /*px*/
						-webkit-text-size-adjust:none;
						span.purple{
							color:#6a85ce; 
						}
					}
					
				}
				.kf{
					width: 175px;
					height: 40px;
					border-radius: 20px;
					display: block;
					color: #fff;
					background-color: #ff2132;
					line-height: 40px;
					font-size: 20px;
					margin:30px auto;
				}
			}
		}
		.floor-6{
			margin-bottom: 120px;
			width: 100%;
			box-sizing: border-box;
			padding-top:40px;
			.content{
				width: 100%;
				overflow: hidden;
				position: relative;
				img{
					width: 700px;
					margin:50px auto 100px;
					display: block;
				}
				.bq1{
					font-size:20px; /*px*/
					color: #fff;
					width: 170px;
					height: 40px;
					line-height: 40px;
					background-color: #ff2132;
					position: absolute;
					border-radius: 20px;
					top:260px;
					left: 280px;
				}
				.bq2{
					font-size:20px; /*px*/
					color: #fff;
					width: 230px;
					height: 40px;
					line-height: 40px;
					background-color: #ff2132;
					position: absolute;
					border-radius: 20px;
					right:60px;
					top:530px; 
				}
				.kf{
					width: 182px;
					height: 40px;
					font-size: 20px; /*px*/
					border-radius: 20px;
					background-color: #6a85ce;
					color:#fff;
					display: block;
					margin:20px auto;
					line-height: 40px;
					box-shadow: 5px 5px 5px #999;
				}
				.tel{
					width: 200px;
					height: 40px;
					font-size: 20px; /*px*/
					border-radius: 20px;
					background-color: #ff2132;
					color:#fff;
					display: block;
					margin:20px auto;
					line-height: 40px;
					box-shadow: 5px 5px 5px #999;
				}
			}
		}
		.floor-title{
			font-size: 26px; /*px*/
			color: #000;
			position: relative;
			display: inline-block;
			margin:0 auto;
		}
		.floor-title:before{
			content: "";
			width:50px;
			height: 2px;
			background-color: #000;
			position: absolute;
			left:-60px;
			top:20px;
		}
		.floor-title:after{
			content:"";
			width: 50px;
			height: 2px;
			background-color: #000;
			position: absolute;
			right:-60px;
			top:20px;
		}
	}
</style>