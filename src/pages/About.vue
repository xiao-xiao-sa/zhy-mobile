<template>
	<div class="about">
		<div id="map" class="map"></div>
		<phone-input class="phone"></phone-input>
		<div class="content" v-html="companyInfo"></div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import PhoneInput from '../components/PhoneInput'
	import baseData from '../assets/data/baseData'
	import TabBar from '../components/TabBar.vue'

	export default {
		name:'About',
		data(){return{
			cur:'About',
			companyInfo:null 
		}},	
		created:function(){
			this.companyInfo = baseData.companyInfo;
		},
		mounted:function(){
			this.map();
		},
		methods:{
			map:function(){
				console.log(1000)
				var map = new BMap.Map("map"); // 创建地图实例
				console.log(map)
				var point = new BMap.Point(120.268519,30.313952); // 创建点坐标
				console.log(point)
				map.enableScrollWheelZoom(true);
				map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
				　　 var marker = new BMap.Marker(point); // 创建标注 
				　　 map.addOverlay(marker); // 将标注添加到地图中
			}
		},
		components:{
			'phone-input':PhoneInput,
			'tab-bar':TabBar
		}
	}
</script>

<style lang="less" scoped>
	.about{
		.map{
			width: 100%;
			height: 450px;
		}
		.phone{
			position: fixed;
			width: 100%;
			top:0;
			left: 0;
		}
		.content{
			background-color: #fff;
			width: 100%;
			box-sizing: border-box;
			padding: 20px;
			text-align: left;
			font-size: 26px; /*px*/
			margin-bottom: 120px;
			p{
				margin-bottom: 20px;
			}
		}
	}
</style>