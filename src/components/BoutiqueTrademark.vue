<template>
	<div class="boutique-trademark">
		<div class="title">
			<h2>
				<span>{{trademark.title}}</span>
			</h2>
			<span class="more" @click="toSearch">···</span>
		</div>
		<ul class="content">
			<li v-for="(item,index) in trademark.sbList" :key="index" @click="toDetail(item)">
				<img :src="item.src" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'BoutiqueTrademark',
		props:['trademark'],
		methods:{
			toSearch:function(){
				var title=this.trademark.title,cateCode=this.trademark.cateCode;
				console.log(title,cateCode)
				this.$store.commit('cateCode',{v1:title,v2:cateCode});
				this.$store.commit('qmarktype','');
				this.$store.commit('qregdate','');
				this.$store.commit('qworknum','');
				this.$store.commit('qprice_min',0);
				this.$store.commit('qprice_max',10000000000);
				this.$store.commit('markName','');
				this.$store.commit('page',1);
				this.$router.push({path:'/Search'});
			},
			toDetail:function(val){
				console.log(val)
				this.$store.commit('shopInfo',val);
				this.$router.push({path:'/SbDetail'})
			}
		}
	}
</script>

<style lang="less" scoped>
	.boutique-trademark{
		width: 700px;
		height: 600px;
		background-color: #fff;
		margin:25px auto 0;
		border-radius: 10px;
		box-sizing: border-box;
		padding:18px 20px;
		.title{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			h2{
				background:url(../assets/image/titlebg.png);
				width: 240px;
				height: 50px;
				background-size: 240px 50px;
				color: #fff;
				position: relative;
				left: -35px;
				font-size: 20px; /*px*/
			}
			.more{
				font-size: 40px; /*px*/
				font-weight: 700;
				color: #d8d8d8;
			}
		}
		.content{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li{
				margin-top:15px;
			}
			img{
				border-radius: 10px;
				display: block;
				width: 320px;
				height: 236px;
				border:1px solid red;
			}
		}
	}
</style>