import Vue from 'vue'
import './detail.scss'
import carousel from './component/carousel.vue'
import goodsType from './component/goods-type.vue'
import common from './component/common.vue'


//预售
var ys = {
    "code": "0000",
    "msg": "操作成功。",
    "data": {
        "goodsCode": "0115613887373568",
        "goodsId": "885",
        "picList": [
            {
                "bigPic": "http://oss.njcjh.cn/20151217/6d58307a8c1644ef95578676908fb2ca.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20151217/b17710023a394ece987b8a6aee50e1bc.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20151217/f9a6a4b14a7d4c1599c59e7b2266274c.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20151217/f1ed019c36054389b11b3f066f1a5620.jpg",
                "tip": null
            }
        ],
        "goodsType": 0,
        "siteId": "2",
        "saleType": 1,
        "state": 1,
        "goodsName": "Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机",
        "ads": "正品保障 经典机型",
        "priceList": [
            {
                "levelMin": "24",
                "levelMax": "72",
                "groupPrice": "6888.00",
                "perPrice": ""
            },
            {
                "levelMin": "72",
                "levelMax": "120",
                "groupPrice": "6688.00",
                "perPrice": ""
            },
            {
                "levelMin": "120",
                "levelMax": "999999999",
                "groupPrice": "6388.00",
                "perPrice": ""
            }
        ],
        "stocks": "99999",
        "isBack": 0,
        "backMax": 0,
        "promise": "预售期1天",
        "score": 6388,
        "smtCaseId": null,
        "smtType": -1,
        "caseType": "0",
        "caseTip": null,
        "caseName": null,
        "smtList": [],
        "attrList": [
            {
                "attrTip": "规格",
                "cartAttrList": [
                    {
                        "cartAttrid": "16",
                        "selfAttr": "默认",
                        "isDefault": 1
                    }
                ]
            }
        ],
        "goodsDetail": null,
        "assessCount": "0",
        "goodPercent": "100",
        "isFavor": 0,
        "cartNums": "18",
        "isStartTimeGo": "",
        "isInstoreAlarm": "0",
        "referPrice": null,
        "limitUp": "10",
        "currentTime": null,
        "rushBeginTime": 1476339508,
        "rushEndTime": null,
        "highLimit": null,
        "highTips": null,
        "innNum": "",
        "lowPrice": null,
        "highPrice": null,
        "isSetRushAlram": "",
        "shineList": null,
        "isFlash": 1     //闪购预告
    }
};

//数码
var shuma={
    "code": "0000",
    "msg": "操作成功。",
    "data": {
        "goodsCode": "0116105345699840",
        "goodsId": "2983",
        "picList": [
            {
                "bigPic": "http://oss.njcjh.cn/20160914/0a06c24a11c54809b3e89547989cacf1.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20160914/96d73bab4bc347889dab557d798084fc.jpg",
                "tip": null
            }
        ],
        "goodsType": 0,
        "siteId": "2",
        "saleType": 0,
        "state": 1,
        "goodsName": "Apple iPhone 7 Plus 移动联通电信4G手机",
        "ads": "提前下单，苹果官方配送到货后，次日到达长江汇体验店",
        "priceList": [
            {
                "levelMin": "24",
                "levelMax": "999999999",
                "groupPrice": "6388.00",
                "perPrice": ""
            }
        ],
        "stocks": "99999",
        "isBack": 1,
        "backMax": 7,
        "promise": "品质保证,省时省力",
        "score": 6388,
        "smtCaseId": null,
        "smtType": 4,
        "caseType": "0",
        "caseTip": null,
        "caseName": null,
        "smtList": [
            {
                "smtTip": "测试",
                "smtName": "满增"
            }
        ],
        "attrList": [
            {
                "attrTip": "颜色",
                "cartAttrList": [
                    {
                        "cartAttrid": "84",
                        "selfAttr": "金色",
                        "isDefault": 1
                    },
                    {
                        "cartAttrid": "85",
                        "selfAttr": "银色",
                        "isDefault": 0
                    },
                    {
                        "cartAttrid": "86",
                        "selfAttr": "玫瑰金",
                        "isDefault": 0
                    },
                    {
                        "cartAttrid": "87",
                        "selfAttr": "黑色",
                        "isDefault": 0
                    },
                    {
                        "cartAttrid": "88",
                        "selfAttr": "亮黑色",
                        "isDefault": 0
                    }
                ]
            },
            {
                "attrTip": "内存",
                "cartAttrList": [
                    {
                        "cartAttrid": "89",
                        "selfAttr": "32G",
                        "isDefault": 1
                    },
                    {
                        "cartAttrid": "90",
                        "selfAttr": "128G",
                        "isDefault": 0
                    },
                    {
                        "cartAttrid": "91",
                        "selfAttr": "256G",
                        "isDefault": 0
                    }
                ]
            }
        ],
        "goodsDetail": null,
        "assessCount": "4",
        "goodPercent": "100",
        "isFavor": 0,
        "cartNums": "",
        "isStartTimeGo": "",
        "isInstoreAlarm": "0",
        "referPrice": "6388.00",
        "limitUp": "99",
        "currentTime": null,
        "rushBeginTime": null,
        "rushEndTime": null,
        "highLimit": 1,
        "highTips": '哈哈',
        "innNum": "",
        "lowPrice": null,
        "highPrice": null,
        "isSetRushAlram": "",
        "isFlash": 0,
        "usableCoupon": 1,
        "shareTitle": "Apple iPhone 7 Plus 移动联通电信4G手机",
        "shareDesc": "我在长江汇发现了一个不错的商品，便宜、质量还好，赶紧来看看吧。",
        "shareIcon": "http://oss.njcjh.cn/20160914/0a06c24a11c54809b3e89547989cacf1.jpg",
        "shineList": [
            {
                "assessStars": "5",
                "assessMemo": "九",
                "shineTime": "2015-11-03 15:24:56",
                "phoneNo": "159****4983",
                "pics": [],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:21:13"
            },
            {
                "assessStars": "5",
                "assessMemo": "一二三四五六七八一二三四五六七八一二三四五六七八一二三四五六七八一二三四五六七八，好东西，赞一个！好东西，赞一个！好东西，赞一个！",
                "shineTime": "2015-11-03 15:24:12",
                "phoneNo": "159****4983",
                "pics": [
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg",
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg",
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg"
                ],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:21:16"
            },
            {
                "assessStars": "5",
                "assessMemo": "好东西，赞一个！",
                "shineTime": "2015-11-02 20:51:27",
                "phoneNo": "159****4983",
                "pics": [],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:19:26"
            }
        ]
    }
};

//评论
var comment ={
    "code": "0000",
    "msg": "succeed",
    "data": {
        "goodsCode": "0005737281531904",
        "goodsId": "1277",
        "picList": [
            {
                "bigPic": "images/carousel/01.jpg",
                "tip": null
            },
            {
                "bigPic": "images/carousel/02.jpg",
                "tip": null
            },
            {
                "bigPic": "images/carousel/03.jpg",
                "tip": null
            },
            {
                "bigPic": "images/carousel/04.jpg",
                "tip": null
            }
        ],
        "goodsType": 0,
        "saleType": 0,
        "goodsName": "妮维雅海洋精华深层补水秋冬必备套装(手霜/唇膏/润肤乳)",
        "ads": "【长江汇自营】",
        "priceList": [
            {
                "levelMin": "0",
                "levelMax": "2",
                "groupPrice": "49.98"
            },
            {
                "levelMin": "2",
                "levelMax": "999999999",
                "groupPrice": "49.98"
            }
        ],
        "stocks": "10",
        "state": 1,
        "isBack": 1,
        "backMax": 21,
        "promise": "支持货到付款,21天无理由退换",
        "score": 11,
        "smtCaseId": null,
        "smtType": 2,
        "caseType": null,
        "caseTip": null,
        "caseName": null,
        "smtList": [
            {
                "smtTip": "满赠111",
                "smtName": "满赠111"
            }
        ],
        "attrList": [
            {
                "attrTip": "尺码",
                "cartAttrList": [
                    {
                        "cartAttrid": "53",
                        "selfAttr": "77cm",
                        "isDefault": 1
                    },
                    {
                        "cartAttrid": "56",
                        "selfAttr": "80cm",
                        "isDefault": 0
                    }
                ]
            },
            {
                "attrTip": "颜色",
                "cartAttrList": [
                    {
                        "cartAttrid": "50",
                        "selfAttr": "红色",
                        "isDefault": 1
                    }
                ]
            }
        ],
        "goodsDetail": null,
        "assessCount": "4",
        "goodPercent": "100",
        "isFavor": 0,
        "cartNums": "",
        "isStartTimeGo": "",
        "isInstoreAlarm": "0",
        "referPrice": "105.21",
        "limitUp": "2",
        "currentTime": null,
        "rushBeginTime": null,
        "isSetRushAlram": "",
        "shineList": [
            {
                "assessStars": "5",
                "assessMemo": "九",
                "shineTime": "2015-11-03 15:24:56",
                "phoneNo": "159****4983",
                "pics": [],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:21:13"
            },
            {
                "assessStars": "5",
                "assessMemo": "一二三四五六七八一二三四五六七八一二三四五六七八一二三四五六七八一二三四五六七八，好东西，赞一个！好东西，赞一个！好东西，赞一个！",
                "shineTime": "2015-11-03 15:24:12",
                "phoneNo": "159****4983",
                "pics": [
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg",
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg",
                    "http://192.168.1.224:8080/bss///upload/20151103/69ccc01d67474fdea4fc365963c66699.jpg"
                ],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:21:16"
            },
            {
                "assessStars": "5",
                "assessMemo": "好东西，赞一个！",
                "shineTime": "2015-11-02 20:51:27",
                "phoneNo": "159****4983",
                "pics": [],
                "replyState": 0,
                "replyTime": null,
                "replyMemo": null,
                "replyUser": null,
                "attrName": "红色 77cm",
                "buyTime": "2015-11-02 20:19:26"
            }
        ]
    }
};

//app 调用，传递数据
var appCallJsGetGoodsDetail = function(json){
    //商品不存在
    if(json.code !='0000'){

    }
    //商品存在
    else{
        dealData(json);
        initVue(json.data);
    }
}

//实例化 vue
function initVue(data){
    //注册组件
    /*Vue.component('carousel',{
        render: h => h(carousel)
    });*/

    window.myVue = new Vue({
        el: '#wrapContainer',
        data:data,
        /*components: {
            carousel:{
                render: h => h(carousel)
            }
        },*/
        components: {carousel, goodsType, common},//ES2015语法编写，譬如：components: {Game}，相当于components: {Game: Game}，这是enhanced-object-literals
        mounted: function(){
            //console.log(this.picList)
            //alert('ready')
        }
    });
}

//数据的增删
function dealData(json){
    var data = json.data;

    //vip提示信息
    if(json.vipMsg) {
        json.data.vipMsg=json.vipMsg
    }else{
        json.data.vipMsg=false
    };

    //选择购买的数量
    data.choosedCount = '1';
    console.log(json);
}

setTimeout(function(){
    appCallJsGetGoodsDetail(shuma);
},1);