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
			qprice_min:0,		//最小价格
			qprice_max:100000000,//最大价格
			markName:null,      //商标名称
			page:1,				//页数
			pagesize:20      	//页面大小
		},
		params1:{
			cateCode:null,      //商标类别
			qmarktype:null,		//类型
			qregdate:null,		//注册日期
			qworknum:null,		//字数
			qprice:null,
		},
		shopInfo:null
	},
	getters:{},
	mutations:{
		cateCode:function(state,val){
			state.params.cateCode = val.v2;
			state.params1.cateCode = val.v1;
		},
		qmarktype:function(state,val){
			state.params.qmarktype = val.v2;
			state.params1.qmarktype = val.v1;
		},
		qregdate:function(state,val){
			state.params.qregdate = val.v2;
			state.params1.qregdate = val.v1;
		},
		qworknum:function(state,val){
			state.params.qworknum = val.v2;
			state.params1.qworknum = val.v1;
		},
		price:function(state,val){
			state.params1.qprice=val
		},
		qprice_min:function(state,val){
			state.params.qprice_min = val;
		},
		qprice_max:function(state,val){
			state.params.qprice_max = val;
		},
		markName:function(state,val){
			state.params.markName = val;
		},
		shopInfo:function(state,val){
			state.shopInfo = val;
		},
		page:function(state,val){
			state.params.page=val;
		}
	},
	actions:{}
})