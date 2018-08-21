var kfTel = "400-864-5660";

var kfLink = "http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT28485359&lng=cn";

var filterList = [
	{
		"title":"商标类别",
		"code":"cateCode",
		"list":[
			{	
				id:1,
				type:'01类-化学原料'
			},
			{	
				id:2,
				type:'02类-涂料油漆'
			},
			{	
				id:3,
				type:'03类-日化用品'
			},
			{	
				id:4,
				type:'04类-燃料油脂'
			},
			{	
				id:5,
				type:'05类-医药品'
			},
			{	
				id:6,
				type:'06类五金金属'
			},
			{	
				id:7,
				type:'07类-机械设备'
			},
			{	
				id:8,
				type:'08类-手工器械'
			},
			{	
				id:9,
				type:'09类-科学仪器'
			},
			{	
				id:10,
				type:'10类-医药设备'
			},
			{	
				id:11,
				type:'11类-灯具空调'
			},
			{	
				id:12,
				type:'12类-运载工具'
			},
			{	
				id:13,
				type:'13类-军火烟火'
			},
			{	
				id:14,
				type:'14类-珠宝钟表'
			},
			{	
				id:15,
				type:'15类-乐器'
			},
			{	
				id:16,
				type:'16类-办公用品'
			},
			{	
				id:17,
				type:'17类-橡胶制品'
			},
			{	
				id:18,
				type:'18类-皮革皮具'
			},
			{	
				id:19,
				type:'19类-建筑材料'
			},
			{	
				id:20,
				type:'20类-家具'
			},
			{	
				id:21,
				type:'21类-厨房洁具'
			},
			{	
				id:22,
				type:'22类-绳网袋篷'
			},
			{	
				id:23,
				type:'23类-纱线丝'
			},
			{	
				id:24,
				type:'24类-布料床单'
			},
			{	
				id:25,
				type:'25类-服装鞋帽'
			},
			{	
				id:26,
				type:'26类-纽扣拉链'
			},
			{	
				id:27,
				type:'27类-地毯席垫'
			},
			{	
				id:28,
				type:'28类-健身器材'
			},
			{	
				id:29,
				type:'29类-食品'
			},
			{	
				id:30,
				type:'30类-方便食品'
			},
			{	
				id:31,
				type:'31类-饲养种子'
			},
			{	
				id:32,
				type:'32类-啤酒饮料'
			},
			{	
				id:33,
				type:'33类-酒'
			},
			{	
				id:34,
				type:'34类-烟草烟具'
			},
			{	
				id:35,
				type:'35类-广告销售'
			},
			{	
				id:36,
				type:'36类-金融物管'
			},
			{	
				id:37,
				type:'37类-建筑修理'
			},
			{	
				id:38,
				type:'38类-通讯服务'
			},
			{	
				id:39,
				type:'39类-运输储藏'
			},
			{	
				id:40,
				type:'40类-材料加工'
			},
			{	
				id:41,
				type:'41类-教育娱乐'
			},
			{	
				id:42,
				type:'42类-网站服务'
			},
			{	
				id:43,
				type:'43类-餐饮住宿'
			},
			{	
				id:44,
				type:'44类-医疗园艺'
			},
			{	
				id:45,
				type:'45类-社会服务'
			},
		]
	},
	// {
	// 	"title":"价格",
	// 	"code":"qprice",
	// 	"list":[
	// 		{
	// 			id:1,
	// 			type:"不限"
	// 		},
	// 		{
	// 			id:2,
	// 			type:'1-2万'
	// 		},
	// 		{
	// 			id:3,
	// 			type:"2-5万"
	// 		},
	// 		{
	// 			id:4,
	// 			type:'5-10万'
	// 		},
	// 		{
	// 			id:5,
	// 			type:'10万以上'
	// 		}
	// 	]
	// },
	{
		"title":"类型",
		"code":"qmarktype",
		"list":[
			{
				id:1,
				type:"不限",
			},
			{
				id:2,
				type:"纯中文",
			},
			{
				id:3,
				type:'中文+英文',
			},
			{
				id:4,
				type:'中文+英文(拼音)'
			},
			{
				id:5,
				type:'中文+英文(拼音)+图形'
			},
			{
				id:6,
				type:'图形'
			},
			{
				id:7,
				type:'文字+图形'
			},
			{
				id:8,
				type:'英文(拼音)'
			},
			{
				id:9,
				type:'英文(拼音)+图形'
			}
		]
	},
	{
		"title":"字数",
		"code":"qworknum",
		"list":[
			{
				id:1,
				type:'不限'
			},
			{
				id:2,
				type:'1个字'
			},
			{
				id:3,
				type:'2个字'
			},
			{
				id:4,
				type:'3个字'
			},
			{
				id:5,
				type:'4个字'
			},
			{
				id:6,
				type:'5个字'
			},
			{
				id:7,
				type:'5个字以上'
			}
		]
	},
	{
		"title":"注册年限",
		"code":"qregdate",
		"list":[
			{
				id:1,
				type:"不限"
			},
			{
				id:2,
				type:'1年以上'
			},
			{
				id:3,
				type:'2年以上'
			},
			{
				id:4,
				type:'3年以上'
			},
			{
				id:5,
				type:'4年以上'
			},
			{
				id:6,
				type:'5年以上'
			},
			{
				id:7,
				type:'6年以上'
			}
		]
	}
]

var companyInfo = "<p>公司介绍：知汇眼是杭州标点知识产权代理有限公司旗下运营品牌，是一家致力于为中小企业提供品牌问题解决方案的服务商。</p>\
<p>团队由一群来自阿里和知识产权领域的专业代理人组成，愿景帮助中小企业插上知识产权的翅膀，通过商标、专利、版权以及维权等各个领域为中小企业保驾护航。</p>\
<p>标点知识产权是国家工商行政管理总局商标局备案成立的专业知识产权法律服务机构，所有成员均经过严格的职业考核并至少拥有3年的知识产权服务经验，确保服务的专业、安全以及便捷，为国内数万客户提供全国范围内的知识产权服务。</p>\
<p>本公司的业务范围主要涉及商标申请、商标转让、天猫京东入驻，店铺交易、电商维权、专利申请、专利转让、版权申请、公司注册等业务，公司成立以来，通过全体人员的精诚努力，业务得到了迅速发展，并凭借专业的服务、良好的信用、优良的口碑与多家企业建立了长期的知识产权合作关系；杭州标点知识产权代理有限公司热诚欢迎各界朋友前来参观、考察、洽谈业务。</p>\
<p>联系地址：浙江省杭州市江干区九和路11号2幢4楼8012、8013室</p>\
<p>联系电话：400-864-5660 &nbsp;&nbsp;&nbsp;&nbsp;   0571-88017565</p>";

var bannerImg = require('../image/banner.png');

module.exports = {
	kfTel,
	kfLink,
	filterList,
	companyInfo,
	bannerImg
}