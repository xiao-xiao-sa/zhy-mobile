<template>
<div>
			<div class="header">
				<div class="search-box">
					<input type="text" v-model="markName" placeholder="请输入商标名称">
					<button  @touchstart="start($event)" @touchend.stop.prevent="stop($event)" >搜索</button>
				</div>
				<div class="filter-box" :class="{'isFixed':filterBoxFixed}" id="filterBox" >
					<button :class="{'active':curCondition==1}" @click="changeCondition(1)">综合</button>
					<button :class="{'active':curCondition==2}" @click="changeCondition(2)">人气</button>
					<!-- <button @click="changePrice">价格<i class="iconfont icon-shangxia"></i></button> -->
					<button @click="changeIsFilter" ref="displayBtn">筛选<i class="iconfont icon-shaixuan"></i></button>
				</div>
			</div>
	<scroll class="wrapper-search"
	        :data="shopList"
	        :pullup="pullup"
	        @scrollToEnd="loadData">
		<div class="search" ref="search">
			
			<div class="shop-list" >
				<shop v-for="(item,index) in shopList" :key="index" :shopInfo="item"></shop>
			</div>
			<div class="loading-wrapper" v-if="status == 1">数据加载中</div>
			<div class="loading-wrapper" v-if="status == 2">上拉加载更多</div>
			<div class="loading-wrapper" v-if="status == 3">没有更多数据了</div>
			<div class="loading-wrapper" v-if="status == 4">没有找到该类商标</div>
		</div>
	</scroll>
	<scroll class="wrapper-filter" :class="{'hide':isshow,'show':!isshow}"  >
		<div class="all-filter">
			<div class="display" ref="display" v-clickoutside="handleClose">
				<p>筛选</p>
<filter-item v-for="(item,index) in filterList" :key="index" :filterItem="item" class="filter-container"></filter-item>				
			</div>
		</div>
	</scroll>
	<div class="submit-btn" :class="{'hide':isshow,'show':!isshow}"  >
		<button @click="getShops1">确定</button>
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
	import Qs from 'qs'
	import sort from '../assets/data/sortData'

	const clickoutside = {
	    // 初始化指令
	    bind(el, binding, vnode) {
	        function documentHandler(e) {
	            // 这里判断点击的元素是否是本身，是本身，则返回
	            if (el.contains(e.target)) {
	                return false;
	            }
	            // 判断指令中是否绑定了函数
	            if (binding.expression) {
	                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
	                binding.value(e);
	            }
	        }
	        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
	        el.__vueClickOutside__ = documentHandler;
	        document.addEventListener('click', documentHandler);
	    },
	    update() {},
	    unbind(el, binding) {
	        // 解除事件监听
	        document.removeEventListener('click', el.__vueClickOutside__);
	        delete el.__vueClickOutside__;
	    },
	};

	export default {
		name:'Search',
		data(){return{
			curCondition:1,
			filterBoxFixed:false,
			shopList:[],
			filterList:null,
			pullup: true,
			totalPage:1,
			page:1,
			pageSize:20,
			status:1,
			zIndex:-2,
			isshow:true,
			markName:'',
			allSortList:null,
			priceUp:true
		}},
		directives: {clickoutside},	
		watch:{
			markName:function(){}
		},		
		created:function(){
			this.filterList = baseData.filterList;
			this.allSortList = sort.allSortList;
			this.markName = this.$store.state.params.markName;
			console.log(this.markName);
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
				var params = this.$store.state.params;
				if(this.page<=this.totalPage){
					this.axios({
					   url:'/api/biaodian/get_shopxm',
					   method:'post',
					   data:Qs.stringify({       
					         username:'17364525677',
					         access_token:'5b8fc031ae5a87960d5a448937f4232d',
					         cateCode:params.cateCode,
					         qmarktype:params.qmarktype,
					         qregdate:params.qregdate,
					         qworknum:params.qworknum,
					         qprice_min:params.qprice_min,
					         qprice_max:params.qprice_max,
					         markName:params.markName,
					         page:params.page,
					         pagesize:params.pagesize
					   }),
					   headers: {
					     'Content-Type': 'application/x-www-form-urlencoded' 
					   }
					}).then(res=>{
						console.log(res)
						if(res.data.status=='y'){
							for(var i=0,l=res.data.result.length;i<l;i++){
								var sb=res.data.result[i];
							var n = parseInt(sb.cateCode)-1;
								var t=this.allSortList[n]["title"];
								sb["type"]=t;
								this.shopList.push(sb);
							}
					 		this.totalPage=res.data.all_rows;
					 		this.status =2;
					 		this.page=this.page*1+1;
					 		this.$store.commit('page',this.page);
						}else if(res.data.status=='n'){
							if(this.shopList.length>0){
								this.status=3
							}else{
								this.status=4;
							}
							
						}
					}).catch(err=>{
					 console.log(err);
					})
				}else{
					this.status=3;
				}
			},
			getShops:function(){
				this.shopList=[];
				this.page=1;
				this.totalPage=1;
				this.$store.commit('page',this.page);
				this.loadData();
			},
			getShops1:function(){
				this.$store.commit('markName','');
				this.isshow=true;
				this.getShops();
			},
			handleClose() {
				// if(this.isshow==false){
				// 	this.isshow = true;
				// }
				console.log(this.isshow)
	            
	        },
			changeIsFilter:function(){
				this.isshow=false;
			},
			changeCondition:function(val){
				this.curCondition=val;
				var arr = this.shopList;
				for(let i = 0,len = arr.length; i < len; i++){
				  var currentRandom = parseInt(Math.random() * (len - 1));
				  var current = arr[i];
				  arr[i] = arr[currentRandom];
				  arr[currentRandom] = current;
				  this.shopList = arr;
				}
			},
			changePrice:function(){
				var arr=this.shopList;
				if(this.priceUp){
					for(var i=0;i<arr.length-1;i++){
				        for(var j=0;j<arr.length-1-i;j++){
				            if(arr[j]["price"]>arr[j+1]["price"]){
				                var temp=arr[j];
				                arr[j]=arr[j+1];
				                arr[j+1]=temp;
				            }
				        }
	    			}
				}else{
					for(var i=0;i<arr.length-1;i++){
				        for(var j=0;j<arr.length-1-i;j++){
				            if(arr[j]["price"]<arr[j+1]["price"]){
				                var temp=arr[j];
				                arr[j]=arr[j+1];
				                arr[j+1]=temp;
				            }
				        }
	    			}
				}
				this.priceUp = !this.priceUp;
				this.shopList=arr.reverse()
			},
			start ($event) {
		        this.startY = $event.touches[0].pageY;
		    },
		    stop ($event) {
		        const moving = Math.abs($event.changedTouches[0].pageY - this.startY);
		        if (moving > 20) return
		        this.startY = 0
		        this.$store.commit('markName',this.markName);
		        this.$store.commit('cateCode','');
				this.$store.commit('qmarktype','');
				this.$store.commit('qregdate','');
				this.$store.commit('qworknum','');
				this.$store.commit('qprice_min',0);
				this.$store.commit('qprice_max',10000000000);
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
	.wrapper-search{
		background-color: #fff;
		position: fixed;
		width: 100%;
		/*height: 100%;*/
		top:170px;
		bottom:0;
		left: 0;
		z-index:-1;
		overflow: hidden;
		padding-bottom: 10px;
	}
	.loading-wrapper{
		margin-top:20px;
		margin-bottom: 100px;
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
	.show{
		z-index: 10;
		opacity: 1;
	}
	.hide{
		z-index:-2;
		opacity: 0;
	}
	
</style>