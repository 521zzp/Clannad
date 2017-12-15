//配置项
export const TRADE = 'TRADE' //平台是否开启交易

export const LOGIN = 'LOGIN' //登录
export const LOGIN_GEETEST_INIT = 'LOGIN_GEETEST_INIT' //登录极验初始化
export const LOGIN_GEETEST_SWITCH = 'LOGIN_GEETEST_SWITCH' //登录极验开关
export const REGISTER = 'REGISTER' //注册
export const REGISTER_GEETEST_INIT = 'REGISTER_GEETEST_INIT'  //注册极验证初始化
export const REGISTER_GEETEST_SWITCH = 'REGISTER_GEETEST_SWITCH'  //注册极验开关
export const EXIT = 'EXIT' //退出
export const RECHARGE ='RECHARGE' //充值

export const RESETPWDONE = 'RESETPWDONE' //修改密码第一步下一步
export const RESETPWDTWO = 'RESETPWDTWO' //修改密码第二步下一步


//首页
export const HOME_PRODUCTS = 'HOME_PRODUCTS'  //主页产品渲染
export const HOME_IMG_UPLOAD = 'HOME_IMG_UPLOAD' //主页用户头像上传
export const HOME_INVEST_RECORD = 'HOME_INVEST_RECORD' //主页投资记录
export const HOME_NEWS_LIST = 'HOME_NEWS_LIST'  //首页新闻列表
export const HOME_NOTICE = 'HOME_NOTICE' //首页公告
export const HOME_BANNER = 'HOME_BANNER' //轮播图片

//企业充值
export const ENTERPRISE_RECHARGE_CONFIRM = 'ENTERPRISE_RECHARGE_CONFIRM' //企业充值验证是否可充值
export const ENTERPRISE_RECHARGE = 'ENTERPRISE_RECHARGE' //企业充值请求后台信息


export const PRO_DETAIL_INFO = 'PRO_DETAIL_INFO' //产品详情信息
export const PRO_DETAIL_LIST = 'PRO_DETAIL_LIST' //产品投资记录

//用户中心
export const ACC_BREAD_CHANGE = 'ACC_BREAD_CHANGE' //用户中心面包屑切换
export const ACC_BIND_STATE = 'ACC_BIND_STATE' //用户中心四种绑定状态
export const ACC_RECHARGE_LOADING = 'ACC_RECHARGE_LOADING' //用户总览充值加载中

//账户总览
export const ACC_OV_CAP = 'ACC_OV_CAP' //账户总览各种金额
export const ACC_CAP_RECORD_TOTAL = 'ACC_CAP_RECORD_TOTAL' //资金记录总条数
export const ACC_CAP_RECORD_LIST = 'ACC_CAP_RECORD_LIST' //资金记录集合


//我的理财
export const ACC_YESTER_PROFIT = 'ACC_YESTER_PROFIT' //昨日收益
export const ACC_FIN_TOTAL = 'ACC_FIN_TOTAL' //我的理财总条数 ，持有中/已结束
export const ACC_FIN_LIST = 'ACC_FIN_LIST' //我的理财集合，持有中/已结束
export const ACC_FIN_OUT_TOTAL = 'ACC_FIN_OUT_TOTAL' //我的理财转出中总条数
export const ACC_FIN_OUT_LIST = 'ACC_FIN_OUT_LIST' //我的理财转出中集合

//我的礼券
export const ACC_COUPON_TOTAL = 'ACC_COUPON_TOTAL' //礼券总页数
export const ACC_COUPON_LIST = 'ACC_COUPON_LIST'  //礼券集合

//我的团队
export const ACC_TEAM_TOTAL = 'ACC_TEAM_TOTAL' //团队总数
export const ACC_TEAM_LIST = 'ACC_TEAM_LIST'  //团队集合


//我的消息
export const ACC_MSG_TOTAL = 'ACC_MSG_TOTAL' //我的消息总条数
export const ACC_MSG_LIST = 'ACC_MSG_LIST' //我的消息列表集合
export const ACC_MSG_READ = 'ACC_MSG_READ' //我的消息标记为已读
export const ACC_MSG_DELETE = 'ACC_MSG_DELETE' //我的消息删除
export const ACC_MSG_SELECT = 'ACC_MSG_SELECT' //我的消息选中
export const ACC_MSG_SELECT_ALL = 'ACC_MSG_SELECT_ALL' //我的消息全选和反选

//账户信息
export const ACC_INFO_INIT = 'ACC_INFO_INIT'  //找回支付密码步骤初始化
export const ACC_INFO_BASE = 'ACC_INFO_BASE'  //账户信息基本信息
export const ACC_INFO_LOGIN_PWD_CHANGE = 'ACC_INFO_LOGIN_PWD_CHANGE' //更改登录密码
export const ACC_INFO_PAY_PWD_SET = 'ACC_INFO_PAY_PWD_SET' //设置支付密码
export const ACC_INFO_PAY_PWD_CHANGE = 'ACC_INFO_PAY_PWD_CHANGE'  //记得原支付密码更改支付密码
export const ACC_INFO_PAY_PWD_BACK_ONE = 'ACC_INFO_PAY_PWD_BACK_ONE'  //找回支付密码第一步
export const ACC_INFO_PAY_PWD_BACK_TWO = 'ACC_INFO_PAY_PWD_BACK_TWO'  //找回支付密码第二步
export const ACC_INFO_PHONE_SEND_CODE = 'ACC_INFO_PHONE_SEND_CODE'  //更换手机给当前手机发送短信
export const ACC_INFO_PHONE_VALI_CODE = 'ACC_INFO_PHONE_VALI_CODE'  //验证当前手机号及验证码
export const ACC_INFO_PHONE_SEND_CODE_NEW = 'ACC_INFO_PHONE_SEND_CODE_NEW' //给新手机发短信
export const ACC_INFO_PHONE_CHANGE = 'ACC_INFO_PHONE_CHANGE' //更换手机

//银行卡管理
export const ACC_BANK_INFO = 'ACC_BANK_INFO' //获取已经绑定银行卡基本信息
export const ACC_BANK_DETAIL_INFO = 'ACC_BANK_DETAIL_INFO' //已经绑定的银行卡详细信息
export const ACC_BANK_SUPPORT = 'ACC_BANK_SUPPORT' //支持的银行卡列表
export const ACC_AREA_SUPPORT = 'ACC_AREA_SUPPORT' //支持的地区（省市）列表
export const ACC_BANK_BAND = 'ACC_BANK_BAND' //绑定银行卡
export const ACC_BANK_CHANGE = 'ACC_BANK_CHANGE' //更好银行卡


//银行卡管理
export const SUPPORT_BANK_UPDATE = 'SUPPORT_BANK_UPDATE' //获取支持的银行列表

//信息披露
export const PUB_BREAD_CHANGE = 'PUB_BREAD_CHANGE' //信息披露面包屑切换
export const PUB_NAV_CHANGE = 'PUB_NAV_CHANGE' //信息披露右边导航手风琴切换
export const PUB_NEWS_DETAILS = 'PUB_NEWS_DETAILS' //新闻详情
export const PUB_NEWS_TOTAL = 'PUB_NEWS_TOTAL' //新闻列表总条数
export const PUB_NEWS_LIST = 'PUB_NEWS_LIST' //新闻列表当前页数据
export const PUB_ANNOUNCEMENT_DETAILS = 'PUB_ANNOUNCEMENT_DETAILS' //公告详情
export const PUB_ANNOUNCEMENT_TOTAL = 'PUB_ANNOUNCEMENT_TOTAL' //公告列表总条数
export const PUB_ANNOUNCEMENT_LIST = 'PUB_ANNOUNCEMENT_LIST' //公告列表当前页数据


export const TRAPDOOR = 'TRAPDOOR'




