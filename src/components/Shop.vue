<template>
	<div class="shop" @click="toDetail">
		<img :src="shopInfo.src" alt="">
		<div class="right">
			<h2 class="name">{{shopInfo.name}}</h2>
			<p class="type">{{shopInfo.type}}</p>
			<p class="syfw">{{shopInfo.syfw | changeTextLength}}</p>
			<p class="price">价格：&yen;{{shopInfo.price | priceType}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Shop',
		props:['shopInfo'],
		filters:{
			changeTextLength:function(val){
		    	if(val.length>28){
		    		return val.substr(0,28) + "...";
		    	}else{
		    		return val
		    	}
		    }
		},
		methods:{
			toDetail:function(){
				this.$store.commit('shopInfo',this.shopInfo);
				this.$router.push({path:'/SbDetail'})
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop{
		background-color: #fff;
		border-bottom: 2px solid #efefef;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		width: 100%;
		height: 210px;
		box-sizing: border-box;
		padding: 20px;
		img{
			width: 220px;
			height: 165px;
		}
		.right{
			width: 450px;
			text-align: left;
			position: relative;
			.name{
				font-size: 28px; /*px*/
				font-weight: 700;
			}
			.price{
				font-size: 24px; /*px*/
				color: #ff2132;
				position: absolute;
				left: 0;
				bottom: 0;
			}
		}
	}
</style>