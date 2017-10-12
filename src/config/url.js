//export const BASEURL = 'http://192.168.1.3:8080/p2p_pb'  //服务器地址  林
export const BASEURL = '/webapi'  //服务器地址  林


export const IMG = '/assets/pc' //图片服务器地址
//export const IMG = '/image'
//export const IMG = '/bilibili' //正式环境图片服务器地址
//export const IMG = 'http://139.196.25.57/res' //57图片服务器地址


export const LOGIN = BASEURL + '/Zbasic/login.do' //登录接口

//注册
export const REGISTER_SEND_CODE = BASEURL + '/Zbasic/sendRegistVerificationCode.do' //注册发送验证码
export const REGISTER = BASEURL + '/Zbasic/regist.do ' //注册接口
export const EXIT = BASEURL + '/Zbasic/quit.do' //退出接口
export const SMSCODE = BASEURL + '/inlet/sendPhoneVerifCode' //发送验证码接口

export const RECHARGE = BASEURL + '/pay/toDeposit' //充值信息请求后台接口

//企业充值
export const ENTERPRISE_RECHARGE_CONFIRM = BASEURL + '/enter/check' //企业充值验证是否可充值
export const ENTERPRISE_RECHARGE = BASEURL + '/enter/trade' //企业充值请求后台信息

//短信验证
export const PHONECODEVALI = BASEURL + '/Zbasic/VerificationIdentity.do' //通用的短信验证码验证接口

//未登录找回登录密码
export const RESETPWD_SEND_CODE = BASEURL + '/Zbasic/sendLoginVerificationCodez.do' //找回登录密码发送验证码
export const RESETPWD = BASEURL + '/inlet/setNewUserPassword' //修改登陆密码接口

//配置项
export const TRADE = BASEURL + '/index/getTransaction' //平台是否开启交易接口

// 首页
export const FACEUPLOAD = BASEURL + '/Zcenter/uploadHeadImg.do'  //用户头像上传接口
export const HOME_PRODUCTS = BASEURL + '/Zindex/pros.do' //获取产品列表
export const HOME_INVEST_RECORD = BASEURL + '/Zindex/investments.do' //首页投资记录
export const HOME_NEWS_LIST = BASEURL + '/Zindex/news.do'  //首页新闻列表
export const HOME_NOTICE = BASEURL + '/Zindex/notice.do'  //首页平台公告
export const HOME_BANNER = BASEURL +'/Zindex/getPictures.do' //首页轮播图


export const PRO_DETAIL_INFO = BASEURL + '/Zcenter/productDetail.do' //产品详情信息

//个人中心
export const ACC_BIND_STATE = BASEURL + '/Zcenter/baseInfo.do' //四种绑定状态

//账户总览
export const ACC_OV_CAP = BASEURL + '/Zcenter/accountOverview.do'  //账户总览资金概况
export const ACC_CAP_RECORD_TOTAL = BASEURL + '/Zcenter/capitalRecordsCount.do' //资金记录总条数
export const ACC_CAP_RECORD_LIST = BASEURL + '/Zcenter/capitalRecords.do' //资金记录集合

//我的理财
export const ACC_YESTER_PROFIT = BASEURL + '/Zcenter/yesIncome.do' //昨日收益
export const ACC_FIN_TOTAL = BASEURL + '/Zcenter/myProsCount.do' //我的理财总条数 ，持有中/已结束
export const ACC_FIN_LIST = BASEURL + '/Zcenter/myProsList.do' //我的理财集合，持有中/已结束
export const ACC_FIN_OUT_TOTAL = BASEURL + '/Zcenter/rollOutCount.do' //我的理财转出中总条数
export const ACC_FIN_OUT_LIST = BASEURL + '/Zcenter/rollOutList.do'  //我的理财转出中集合




//我的礼券
export const ACC_COUPON_TOTAL = BASEURL + '/Zcoupon/total.do' //礼券总页数
export const ACC_COUPON_LIST = BASEURL + '/Zcoupon/list.do'  //礼券集合

//我的团队
export const ACC_TEAM_TOTAL = BASEURL + '/Zcenter/myTeamCount.do' //团队总数
export const ACC_TEAM_LIST = BASEURL + '/Zcenter/myTeamList.do'  //团队集合

//账户信息
export const ACC_INFO_BASE = BASEURL + '/Zbasic/getBasicInfo.do'  //账户信息基本信息
export const ACC_INFO_LOGIN_PWD_CHANGE = BASEURL + '/Zbasic/modifyPassword.do' //更改登录密码
export const ACC_INFO_PAY_PWD_SET = BASEURL + '/Zbasic/setpayPassword.do' //设置支付密码
export const ACC_INFO_PAY_PWD_CHANGE = BASEURL + '/Zbasic/modifypayPassword.do' //更改支付密码
export const ACC_INFO_PAY_PWD_BACK_SEND_CODE = BASEURL + '/Zbasic/sendVerificationCode.do' //找回支付密码发送验证码
export const ACC_INFO_PAY_PWD_BACK_ONE = BASEURL + '/Zbasic/VerificationPayIdentity.do'  //找回支付密码第一步
export const ACC_INFO_PAY_PWD_BACK_TWO = BASEURL + '/Zbasic/resetpayPassword.do'  //找回支付密码第二步
export const ACC_INFO_PHONE_SEND_CODE = BASEURL + '/ACC_INFO_PHONE_SEND_CODE'  //更换手机给当前手机发送短信
export const ACC_INFO_PHONE_SEND_CODE_NEW = BASEURL + '/ACC_INFO_PHONE_SEND_CODE_NEW' //给新手机发短信
export const ACC_INFO_PHONE_CHANGE = BASEURL + '/ACC_INFO_PHONE_CHANGE' //更换手机


//银行卡管理
export const ACC_BANK_INFO = BASEURL + '/Zbank/getBankCardInfo.do' //获取已经绑定银行卡基本信息
export const ACC_BANK_DETAIL_INFO = BASEURL + '/Zbank/getBankCardDetailInfo.do' //已经绑定的银行卡详细信息
export const ACC_BANK_SUPPORT = BASEURL + '/Zbank/getAllBank.do' //支持的银行卡列表
export const ACC_AREA_SUPPORT = BASEURL + '/Zbank/getCities.do' //支持的地区（省市）列表
export const ACC_BANK_BAND = BASEURL + '/Zbank/addBankCard.do' //绑定银行卡
export const ACC_BANK_CHANGE = BASEURL + '/Zbank/addBankCard.do' //更好银行卡


//我的消息
export const ACC_MSG_TOTAL = BASEURL + '/Zcenter/messageCount.do' //我的消息总条数
export const ACC_MSG_LIST = BASEURL + '/Zcenter/messagePage.do' //我的消息列表集合
export const ACC_MSG_READ = BASEURL + '/Zcenter/messageRead.do' //我的消息标记为已读
export const ACC_MSG_DELETE = BASEURL + '/Zcenter/messageDel.do' //我的消息删除



//信息披露
export const PUB_NEWS_DETAILS = BASEURL + '/Zindex/newDetail.do' //新闻详情展示
export const PUB_NEWS_TOTAL = BASEURL + '/Zindex/newsCount.do' //新闻列表总条数
export const PUB_NEWS_LIST = BASEURL + '/Zindex/newsPage.do' //新闻列表当前页数据
export const PUB_ANNOUNCEMENT_DETAILS = BASEURL + '/Zindex/noticesDetail.do' //公告详情展示
export const PUB_ANNOUNCEMENT_TOTAL = BASEURL + '/Zindex/notices.do' //公告列表总条数
export const PUB_ANNOUNCEMENT_LIST = BASEURL + '/Zindex/noticesPage.do' //公告列表当前页数据
