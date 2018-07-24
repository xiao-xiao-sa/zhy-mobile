import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
	state:{
		params:{
			cateCode:null,      //商标类别
			qmarktype:null,		//类型
			qregdate:null,		//注册日期
			qworknum:null,		//字数
			qprice:null,		//价格
			markName:null,      //商标名称
			pageNumber:1,		//页数
			pageSize:20      	//页面大小
		},
		shopInfo:null
	},
	getters:{},
	mutations:{
		cateCode:function(state,val){
			state.params.cateCode = val;
		},
		qmarktype:function(state,val){
			state.params.qmarktype = val;
		},
		qregdate:function(state,val){
			state.params.qregdate = val;
		},
		qworknum:function(state,val){
			state.params.qworknum = val;
		},
		qprice:function(state,val){
			state.params.qprice = val;
		},
		markName:function(state,val){
			state.params.markName = val;
		},
		shopInfo:function(state,val){
			state.shopInfo = val;
		},
		pageNumber:function(state,val){
			if(val==0){
				state.params.pageNumber = 1;
			}else if(val == 1){
				state.params.pageNumber += 1;
			}
		}
	},
	actions:{}
})