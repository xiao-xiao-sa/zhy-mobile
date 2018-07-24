<template>
	<div class="phone-input">
		<div class="input-box">
			<input type="text" v-model="phone" placeholder="请输入您的电话号码">
			<i @click="clear">×</i>
		</div>
		<button @click="backTel">给您回电</button>
	</div>
</template>

<script>
	function isPoneAvailable(str) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        }else{
            return true;
        }
    }
	export default {
		name:'PhoneInput',
		data(){return{
			phone:''
		}},
		watch:{
			phone:function(){}
		},
		methods:{
			backTel:function(){
				var phone = this.phone;
				if(isPoneAvailable(phone)){
					//提交后台
				}else{
					alert('请输入正确的手机号码，11位数字')
				}
			},
			clear:function(){
				this.phone = '';
			}
		}
	}
</script>

<style lang="less" scoped>
	.phone-input{
		width: 750px;
		height: 108px;
		box-sizing: border-box;
		padding:24px 20px;
		background-color: #6a85ce;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		.input-box{
			width:560px;
			height: 60px;
			border-radius: 45px; 
			background-color: #fff;
			box-shadow:5px 5px 5px #999 inset;  
			line-height: 60px;
			position: relative;
			input{
				border:none;
				outline: none;
				font-size:28px; /*px*/
				background-color: transparent;
			}
			i{
				position: absolute;
				right: 50px;
				font-style: normal;
				font-size: 40px;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background-color: #d3d3d3;
				color: #fff;
				text-align: center;
				line-height: 30px;
				top:15px;
			}
		}
		button{
			font-size: 32px; /*px*/
			border:none;
			outline: none;
			background-color: transparent;
			color: #fff;
		}
	}
</style>