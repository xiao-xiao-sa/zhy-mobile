<template>
<div>
	<scroll class="wrapper-search"
	        :data="shopList"
	        :pullup="pullup"
	        @scrollToEnd="loadData">
		<div class="search" ref="search">
			<div class="header">
				<div class="search-box">
					<input type="text" v-model="markName" placeholder="请输入商标名称">
					<button  @touchstart="start($event)" @touchend.stop.prevent="stop($event)" >搜索</button>
				</div>
				<div class="filter-box" :class="{'isFixed':filterBoxFixed}" id="filterBox" >
					<button :class="{'active':curCondition==1}" @click="changeCondition(1)">综合</button>
					<button :class="{'active':curCondition==2}" @click="changeCondition(2)">人气</button>
					<button>价格<i class="iconfont icon-shangxia"></i></button>
					<button @click="changeIsFilter" ref="displayBtn">筛选<i class="iconfont icon-shaixuan"></i></button>
				</div>
			</div>
			<div class="shop-list" >
				<shop v-for="(item,index) in shopList" :key="index" :shopInfo="item"></shop>
			</div>
			<div class="loading-wrapper" v-if="status == 1">数据加载中</div>
			<div class="loading-wrapper" v-if="status == 2">上拉加载更多</div>
			<div class="loading-wrapper" v-if="status == 3">没有更多数据了</div>
		</div>
	</scroll>
	<scroll class="wrapper-filter"  :style="{'z-index':zIndex}">
		<div class="all-filter">
			<div class="display" ref="display">
				<p>筛选</p>
<filter-item v-for="(item,index) in filterList" :key="index" :filterItem="item" class="filter-container"></filter-item>				
			</div>
		</div>
	</scroll>
	<div class="submit-btn" :style="{'z-index':zIndex}">
		<button @click="getShops">确定</button>
	</div>
</div>
</template>

<script>
	import searchData from '../assets/data/searchData'
	import baseData from '../assets/data/baseData'
	import Shop from '../components/Shop.vue'
	import FilterItem from '../components/FilterItem.vue'
	import BScroll from 'better-scroll'
	import scroll from '../components/scroll.vue'
	import qs from 'qs'

	export default {
		name:'Search',
		data(){return{
			curCondition:1,
			filterBoxFixed:false,
			shopList:[],
			filterList:null,
			pullup: true,
			totalPage:1,
			pageNumber:1,
			pageSize:20,
			status:1,
			zIndex:-2,
			markName:''
		}},	
		watch:{
			markName:function(){}
		},		
		created:function(){
			this.filterList = baseData.filterList;
			//this.getShops();
			document.addEventListener('click',(e)=>{
			    if(!this.$refs.display.contains(e.target) && !this.$refs.displayBtn.contains(e.target)){
			        this.zIndex = -2;
			    }
			})
		},
		beforeRouteEnter (to, from, next) {
		    // 在渲染该组件的对应路由被 confirm 前调用
		    // 不！能！获取组件实例 `this`
		    // 因为当守卫执行前，组件实例还没被创建
		    console.log('我来自哪里',from.path)
		    if(from.path == "\/SbDetail"){
		    	next()
		    }else{
		    	next(vm=>{
		    		vm.getShops();
		    	});
		    }
		},
		methods:{
			loadData:function(){
				this.status = 1;
				if(this.pageNumber<this.totalPage){
					this.pageNumber += 1;
					this.$store.commit('pageNumber',1);
					var params = this.$store.state.params;
					console.log('我是loadData');
					console.log(params)
					// this.axios.post(url, qs.stringify(params))
					//   .then(res => {
					//     // 成功回调
					//     this.shopList = res.shopList.concat(this.shopList);
					//     this.status = 2;
					//   }).catch( res => {
					//     // 错误回调
					//     console.log(res)
					//   })
					setTimeout(()=>{
						this.shopList = searchData.shopList.concat(this.shopList);
						this.status = 2;
					},1000)
				}else{
					this.status = 3;
					return;

				}
			},
			getShops:function(){
				this.status = 1;
				this.shopList = [];
				this.$store.commit('pageNumber',0);
				var params = this.$store.state.params;
				console.log('我是getShops');
				console.log(params)
				// this.axios.post(url, qs.stringify(params))
				//   .then(res => {
				//     // 成功回调
				//     this.shopList = res.shopList;
				//     this.totalPage = res.totalPage;
				//     this.status = 2;
				//     this.pageNumber = 1;
				//   }, res => {
				//     // 错误回调
				//     console.log(res)
				//   })
				setTimeout(()=>{
					this.shopList = searchData.shopList;
					this.totalPage = 3;
					this.pageNumber = 1;
					this.status = 2;
				},1000)
				this.isFilter = false;
			},
			changeIsFilter:function(){
				this.zIndex = 10;
			},
			changeCondition:function(val){
				this.curCondition=val;
			},
			start ($event) {
		        this.startY = $event.touches[0].pageY;
		        console.log(this.startY)
		    },
		    stop ($event) {
		        const moving = Math.abs($event.changedTouches[0].pageY - this.startY)
		        if (moving > 20) return
		        this.startY = 0
		        this.$store.commit('markName',this.markName);
				this.getShops();
		      }
		},
		components:{
			'shop':Shop,
			'filter-item':FilterItem,
			'scroll':scroll
		}
	}
</script>

<style lang="less" scoped>
	.wrapper-search{
		background-color: #fff;
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		z-index:-1;
	}
	.loading-wrapper{
		margin-top:20px;
		margin-bottom: 50px;
		font-size: 24px; /*px*/
		color: #999;
	}
	.wrapper-filter{
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		right: 0;
		overflow: hidden;
	}
	.search{
		.header{
			top: 0;
			left: 0;
			background-color: #f6f5fa;
			width: 100%;
			height: 170px;
			box-sizing: border-box;
			padding-top:20px;
			.search-box{
				width: 700px;
				height: 62px;
				margin:0 auto;
				background-color: #fff;
				border-radius: 30px;
				padding:0 20px;
				box-sizing: border-box;
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
					border-left: 1px solid #efefef;
				}
			}
			.filter-box{
				width: 100%;
				height: 72px;
				margin-top: 20px;
				background-color: #fff;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				button{
					width: 25%;
					font-size: 28px; /*px*/
					.iconfont{
						font-size: 26px; /*px*/
						color: #999;
					}
				}
				button.active{
					color: #ff2132;
				}
			}
			.isFixed{
				position: fixed;
				top: 0;
				left: 0;
				z-index:10;
				margin-top:0;
			}
		}
		.shop-list{
			margin-top:20px;
		}
	}
	.all-filter{
		z-index: 11;
		.display{
			width:600px;
			margin-left: 150px;
			background-color: #fff;
			padding-bottom: 100px;
			.filter-container{
				margin-top:20px;
			}
		}
		.display>p{
			font-size: 32px; 
			padding:20px;
		}
	}
	.submit-btn{
		position: fixed;
		width: 600px;
		height: 72px;
		background-color: #fff;
		bottom: 0;
		right: 0;
		button{
			background-color: #ff2132;
			color: #fff;
			font-size: 28px; 
			position: absolute;
			width: 200px;
			height: 72px;
			right: 0;
			top:0;
		}
	}
</style>