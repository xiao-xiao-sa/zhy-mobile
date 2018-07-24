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
				this.$store.commit('cateCode',this.trademark.cateCode);
				this.$router.push({path:'/Search'})
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
		height: 480px;
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
				width: 320px;
				height: 180px;
			}
		}
	}
</style>