//export const BASEURL = 'http://192.168.1.3:8080/p2p_pb'  //服务器地址  林
export const BASEURL = '/api'  //服务器地址  林


//export const IMG = 'http://www.art.com' //图片服务器地址
export const IMG = 'http://192.168.3.4'
//export const IMG = 'http://www.yhb118.com/res' //正式环境图片服务器地址
//export const IMG = 'http://139.196.25.57/res' //57图片服务器地址

export const WEIBO = 'http://weibo.com/5676187359/profile?rightmod=1&wvr=6&mod=personinfo' //余惠宝官方微博


export const LOGIN = BASEURL + '/Zbasic/login.do' //登录接口
export const REGISTER = BASEURL + '/inlet/register' //注册接口
export const EXIT = BASEURL + '/inlet/exit' //退出接口
export const SMSCODE = BASEURL + '/inlet/sendPhoneVerifCode' //发送验证码接口

export const RECHARGE = BASEURL + '/pay/toDeposit' //充值信息请求后台接口

export const PHONECODEVALI = BASEURL + '/inlet/checkPhoneVerifCodeJson' //短信验证码验证接口

export const RESETPWD = BASEURL + '/inlet/setNewUserPassword' //修改登陆密码接口

//配置项
export const TRADE = BASEURL + '/index/getTransaction' //平台是否开启交易接口

// 首页
export const FACEUPLOAD = BASEURL + '/file/uploadImage'  //用户头像上传接口
export const HOME_PRODUCTS = BASEURL + '/Zindex/pros.do' //获取产品列表
export const HOME_INVEST_RECORD = BASEURL + '/Zindex/investments.do' //首页投资记录
export const HOME_NEWS_LIST = BASEURL + '/Zindex/news.do'  //首页新闻列表
export const HOME_NOTICE = BASEURL + '/Zindex/notice.do'  //首页平台公告


export const PRO_DETAIL_INFO = BASEURL + '/Zcenter/productDetail.do' //产品详情信息

//个人中心
export const ACC_BIND_STATE = BASEURL + '/Zcenter/baseInfo.do' //四种绑定状态

//账户总览
export const ACC_OV_CAP = BASEURL + '/user/info'  //账户总览资金概况

//我的理财
export const ACC_YESTER_PROFIT = BASEURL + '/Zcenter/yesIncome.do' //昨日收益
export const ACC_FIN_TOTAL = BASEURL + '/Zcenter/myProsCount.do' //我的理财总条数 ，持有中/已结束
export const ACC_FIN_LIST = BASEURL + '/Zcenter/myProsList.do' //我的理财集合，持有中/已结束
export const ACC_FIN_OUT_TOTAL = BASEURL + '/Zcenter/rollOutCount.do' //我的理财转出中总条数
export const ACC_FIN_OUT_LIST = BASEURL + '/Zcenter/rollOutList.do'  //我的理财转出中集合

//我的礼券
export const ACC_COUPON_TOTAL = BASEURL + '/Zcoupon/total.do' //礼券总页数
export const ACC_COUPON_LIST = BASEURL + '/Zcoupon/list.do'  //礼券集合

//账户信息
export const ACC_INFO_BASE = BASEURL + '/Zbasic/getBasicInfo.do'  //账户信息基本信息
export const ACC_INFO_LOGIN_PWD_CHANGE = BASEURL + '/Zbasic/modifyPassword.do' //更改登录密码
export const ACC_INFO_PAY_PWD_SET = BASEURL + '/Zbasic/setpayPassword.do' //设置支付密码
export const ACC_INFO_PAY_PWD_CHANGE = BASEURL + '/Zbasic/modifypayPassword.do' //更改支付密码
export const ACC_INFO_PAY_PWD_BACK_ONE = BASEURL + '/Zbasic/VerificationIdentity.do'  //找回支付密码第一步
export const ACC_INFO_PAY_PWD_BACK_TWO = BASEURL + '/Zbasic/resetpayPassword.do'  //找回支付密码第二步

//银行卡管理 
export const SUPPORT_BANK_UPDATE = BASEURL + '/user/bankList' // 获取支持的银行列表

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
