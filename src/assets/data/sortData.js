var huoList = [
	{"title":"第1类 化学原料","cateCode":"01"},
	{"title":"第5类 医药制品","cateCode":"05"},
	{"title":"第16类 办公用品","cateCode":"16"},
	{"title":"第25类 服装鞋帽","cateCode":"25"},
	{"title":"第40类 材料处理","cateCode":"40"},
	{"title":"第41类 文娱教育","cateCode":"41"}
];

var allSortList = [
	{"title":"第1类 化学原料","cateCode":"01","src":require('../image/45type/1.png')},
	{"title":"第2类 颜料油漆","cateCode":"02","src":require('../image/45type/2.png')},
	{"title":"第3类 化妆日用","cateCode":"03","src":require('../image/45type/3.png')},
	{"title":"第4类 燃料油脂","cateCode":"04","src":require('../image/45type/4.png')},
	{"title":"第5类 医药制品","cateCode":"05","src":require('../image/45type/5.png')},
	{"title":"第6类 金属制材","cateCode":"06","src":require('../image/45type/6.png')},
	{"title":"第7类 机械设备","cateCode":"07","src":require('../image/45type/7.png')},
	{"title":"第8类 手动工具","cateCode":"08","src":require('../image/45type/8.png')},
	{"title":"第9类 电子电脑","cateCode":"09","src":require('../image/45type/9.png')},
	{"title":"第10类 医疗器械","cateCode":"10","src":require('../image/45type/10.png')},
	{"title":"第11类 家用电器","cateCode":"11","src":require('../image/45type/11.png')},
	{"title":"第12类 运载工具","cateCode":"12","src":require('../image/45type/12.png')},
	{"title":"第13类 军火烟火","cateCode":"13","src":require('../image/45type/13.png')},
	{"title":"第14类 珠宝钟表","cateCode":"14","src":require('../image/45type/14.png')},
	{"title":"第15类 音乐器材","cateCode":"15","src":require('../image/45type/15.png')},
	{"title":"第16类 办公文具","cateCode":"16","src":require('../image/45type/16.png')},
	{"title":"第17类 橡塑制品","cateCode":"17","src":require('../image/45type/17.png')},
	{"title":"第18类 皮革箱包","cateCode":"18","src":require('../image/45type/18.png')},
	{"title":"第19类 建筑材料","cateCode":"19","src":require('../image/45type/19.png')},
	{"title":"第20类 家具工艺","cateCode":"20","src":require('../image/45type/20.png')},
	{"title":"第21类 生活用具","cateCode":"21","src":require('../image/45type/21.png')},
	{"title":"第22类 绳网帐篷","cateCode":"22","src":require('../image/45type/22.png')},
	{"title":"第23类 纺织纱线","cateCode":"23","src":require('../image/45type/23.png')},
	{"title":"第24类 布料织物","cateCode":"24","src":require('../image/45type/24.png')},
	{"title":"第25类 布料织物","cateCode":"25","src":require('../image/45type/25.png')},
	{"title":"第26类 花边配饰","cateCode":"26","src":require('../image/45type/26.png')},
	{"title":"第27类 地毯席垫","cateCode":"27","src":require('../image/45type/27.png')},
	{"title":"第28类 体育玩具","cateCode":"28","src":require('../image/45type/28.png')},
	{"title":"第29类 蔬果肉干","cateCode":"29","src":require('../image/45type/29.png')},
	{"title":"第30类 谷物调料","cateCode":"30","src":require('../image/45type/30.png')},
	{"title":"第31类 牲禽花木","cateCode":"31","src":require('../image/45type/31.png')},
	{"title":"第32类 啤酒果汁","cateCode":"32","src":require('../image/45type/32.png')},
	{"title":"第33类 高度酒饮","cateCode":"33","src":require('../image/45type/33.png')},
	{"title":"第34类 烟草烟具","cateCode":"34","src":require('../image/45type/34.png')},
	{"title":"第35类 广告事务","cateCode":"35","src":require('../image/45type/35.png')},
	{"title":"第36类 保险金融","cateCode":"36","src":require('../image/45type/36.png')},
	{"title":"第37类 建筑修理","cateCode":"37","src":require('../image/45type/37.png')},
	{"title":"第38类 电信传媒","cateCode":"38","src":require('../image/45type/38.png')},
	{"title":"第39类 运输旅行","cateCode":"39","src":require('../image/45type/39.png')},
	{"title":"第40类 材料处理","cateCode":"40","src":require('../image/45type/40.png')},
	{"title":"第41类 文娱教育","cateCode":"41","src":require('../image/45type/41.png')},
	{"title":"第42类 科技研究","cateCode":"42","src":require('../image/45type/42.png')},
	{"title":"第43类 餐饮酒店","cateCode":"43","src":require('../image/45type/43.png')},
	{"title":"第44类 医疗园艺","cateCode":"44","src":require('../image/45type/44.png')},
	{"title":"第45类 法律安保","cateCode":"45","src":require('../image/45type/45.png')}
];
var patentList = [
	{
		"title":"代办官费减免手续",
		"content":"<h2>一、费减比例</h2>\
		<h3>1、 申请人为单个个人或单个公司：减缓85%。</h3>\
		<h3>2、 申请人为两个：减缓70%。</h3>\
		<h2>二、可减缴项目：</h2>\
		<p>申请费、发明专利实审费、前六年年费、复审费</p>\
		<h2>三、费减资格要求及证明资料</h2>\
		<p>（一）个人：月收入低于3500元，年收入低于42000元；</p>\
		<p>1、 身份证复印件；</p><p>2、 加盖单位公章的收入证明原件；</p>\
		<p>无固定工作的，提交户籍所在地或者经常居住地县级民政部门或乡镇人民政府（街道办事处）出具的关于其经济困难情况的证明-盖章）；</p>\
		<p>（二）本年度新成立公司：营业执照副本复印件加盖公章（仅限本年度办理费减可行）</p>\
		<p>（三）本年度前成立的公司：上一年度全年应纳税所得额（收入）低于30万元。</p>"
	},
	{
		"title":"发明申请",
		"content":"<h2>一、服务内容：发明专利申请</h2>\
		<h2>二、服务地区：全国</h2>\
		<h2>三、服务时间：18个月以上</h2>\
		<h2>四、费用说明：</h2>\
		<h3>1.官费 :</h3>\
		<p>申请费：全额&yen;950一个人申请人减免后&yen;185两个申请人减免后&yen;350</p>\
		<h3>2.实质审查费：</h3>\
		<p>全额：&yen;2500一个人申请人减免后&yen;375两个申请人减免后&yen;750</p>\
		<h3>3.授权办理登记费：&yen;255</h3>\
		<p>年费：（1~3年） 全额&yen;900/年一个人申请人减免后&yen;135/年两个申请人减免后&yen;270/年</p>\
		<h3>4.服务费：</h3>\
		<p>（包括实质审查阶段意见答复）普通领域&yen;3998特殊领域&yen;4998（电子通信计算机生物医药等）</p>\
		<h2>五、需准备材料：</h2>\
		<p>1.技术交底资料（重要）</p> \
		<p>2.申请人与发明人 证明材料（营业执照、身份证等）</p>"
	},
	{
		"title":"实用新型申请",
		"content":"<h2>一、服务内容：发明专利申请</h2>\
		<h2>二、服务地区：全国</h2>\
		<h2>三、服务时间：6-12个月</h2>\
		<h2>四、费用说明：</h2>\
		<h3>1.官费 :</h3>\
		<p>申请费：全额￥500 一个人申请人减免后&yen;75两个申请人减免后&yen;150</p>\
		<h3>授权办理登记费：&yen;205</h3>\
		<p>2.年费：（1~3年） 全额&yen;600/年一个人申请人减免后&yen;90/年两个申请人减免后&yen;180/年</p>\
		<h3>4.服务费：</h3>\
		<p>（普通申请&yen;1998担保申请&yen;2998（不成功退全款）</p>\
		<h2>五、需准备材料：</h2>\
		<p>1.技术交底资料（重要）</p>\
		<p>2.申请人与发明人 证明材料（营业执照、身份证等）</p>"
	},
	{
		"title":"外观设计申请",
		"content":"<h2>一、服务内容：发明专利申请</h2>\
		<h2>二、服务地区：全国</h2>\
		<h2>三、服务时间：6-12个月</h2>\
		<h2>四、费用说明：</h2>\
		<h3>1.官费 :</h3>\
		<p>申请费：全额￥500 一个人申请人减免后&yen;75两个申请人减免后&yen;150</p>\
		<h3>授权办理登记费：&yen;205</h3>\
		<p>2.年费：（1~3年） 全额&yen;600/年一个人申请人减免后&yen;90/年两个申请人减免后&yen;180/年</p>\
		<h3>4.服务费：</h3>\
		<p>（普通申请&yen;1998担保申请&yen;2998（不成功退全款）</p>\
		<h2>五、需准备材料：</h2>\
		<p>1.技术交底资料（重要）</p>\
		<p>2.申请人与发明人 证明材料（营业执照、身份证等）</p>"
	},
	{
		"title":"专利权评价报告",
		"content":"<h2>1.专利权评价报告：</h2>\
		<p>国家知识产权局根据专利权人或者利害关系人的请求，在实用新型或者外观设计被授予专利权后对相关实用新型或外观设计专利进行检索，并就该专利是否符合专利法及其实施细则规定的授权条件进行分析和评价，作出专利权评价报告，这是一种官方出具的较较好专利质量评价。</p>\
		<h2>2.作用：</h2>\
		<p>因实用新型和外观设计专利申请在审查时仅通过初步审查程序即可授权，因此，实用新型或者外观设计被授予专利权后，并不表示专利权状态稳定。国家知识产权局应专利权人或者相关利害关系人请求进一步做出的专利权评价报告，相当于国家知识产权局对获权实用新型或外观设计专利的专利性和专利权稳定性的进一步核查。</p>\
		<h2>3.时间与费用：</h2>\
		<p>官费2400元，办理时间一般在两个月左右</p>"
	}
]

var patentType = [
	{"src":require('../image/leixing1.png'),"content":"对产品的形状、图案或者其结合以及色彩与形状、图案的结合所做出的富有美感并适用于工业应用的新设计"},
	{"src":require('../image/leixing2.png'),"content":"对产品的形状、构造或者其结合所提出的适用于实用的新技术方案"},
	{"src":require('../image/leixing3.png'),"content":"对产品的形状、图案或者其结合以及色彩与形状、图案的结合所做出的富有美感并适用于工业应用的新设计"}
]
var protection = [
	{"src":require('../image/baozhang1.png'),"title":"资质过硬多年经验"},
	{"src":require('../image/baozhang2.png'),"title":"价格优惠信息透明"},
	{"src":require('../image/baozhang3.png'),"title":"撰写高效快速提交"},
	{"src":require('../image/baozhang4.png'),"title":"专属顾问贴心服务"},
	{"src":require('../image/baozhang5.png'),"title":"严格保密安全可靠"},
	{"src":require('../image/baozhang6.png'),"title":"按技术领域专业化分工"},
	{"src":require('../image/baozhang7.png'),"title":"完善的案件管理流程"},
	{"src":require('../image/baozhang8.png'),"title":"庞大的申请量"},
	{"src":require('../image/baozhang9.png'),"title":"不成功包退, 担保服务"}
]

module.exports = {
	huoList,
	allSortList,
	patentList,
	patentType,
	protection,
}