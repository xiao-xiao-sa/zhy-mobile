<template>
	<div class="tab-bar">
		<ul class="tab-list">
			<li class="tab-item" :class="{'active':cur==='Index'}">
				<router-link to="/">
					<i class="iconfont icon-home" ></i><br/>
					<span>首页</span>
				</router-link>
			</li>
			<li class="tab-item" :class="{'active':cur==='Sort'}">
				<router-link to="/Sort">
					<i class="iconfont icon-fenlei1"></i><br/>
					<span>分类查询</span>
				</router-link>
			</li>
			<li class="tab-item online" :class="{'active':cur===''}">
				<a href="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT28485359&lng=cn" target="_blank">
					<i class="iconfont icon-zaixiankefu" style="color:#ff2132;"></i><br/>
					<span>在线咨询</span>
				</a>	
			</li>
			<li class="tab-item" :class="{'active':cur==='Registered'}">
				<router-link to="/Registered">
					<i class="iconfont icon-shangbiao"></i><br/>
					<span>注册商标</span>
				</router-link>
			</li>
			<li class="tab-item" :class="{'active':cur==='About'}">
				<router-link to="/About">
					<i class="iconfont icon-guanyuwomen"></i><br/>
					<span>关于我们</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			cur:{
				type:String,
				default:'Index'
			}
		},
		methods:{

		}
	}
</script>

<style>
	.tab-bar{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 100px;
		border-top:1px solid #bababa;
		box-sizing: border-box;
		padding-top: 10px;
		background-color: #fff;
	}
	.tab-list{
		width:700px;
		margin:0 auto;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	.tab-item{
		width: 130px;
	}
	.online{
		width:150px;
		height: 150px;
		border-radius: 50%;
		border-left:2px solid #ff2132;
		border-right:2px solid #ff2132;
		position: relative;
		top:-20px;
		background-color: #fff;
	}
	.online a span{
		color: #ff2132;
	}
	.tab-item span{
		font-size: 24px; /*px*/
		color: #bababa;
	}
	.tab-item i{
		font-size: 50px; /*px*/
		color: #bababa;
	}
	.tab-item.active i{
		color: #ff2132;
	}
	.tab-item.active span{
		color: #ff2132;
	}
</style>