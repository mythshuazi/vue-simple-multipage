<template>
<!--caseType=4 首单；caseType=5 闪购；caseType=6 特价；smtType=5 秒杀；smtType=1首单-->
	<section class="common">
		<!--活动信息-->
		<div v-if="smtList.length>0" class="youhui">
			<p v-for="(item,index) in smtList">
				<i class="prefix" v-bind:class="item.smtTip | assignBgColor " ><em>{{item.smtTip}}</em></i>{{item.smtName}}
			</p>
			<p v-if="highLimit && highTips">
				<i class="prefix">限购</i>{{highTips}}
			</p>
		</div>
		<p v-if="caseType == 5 || caseType == 6" class="noTicket">此商品不能使用优惠券！</p>
		<p v-if="vipMsg" class="vip">会员日 {{vipMsg}}</p>

		<!--已选-->
		<div v-if="attrList && attrList.length>0" id="choosed">
			<span class="selected">已选</span>
			<span v-for="item in attrList" class="option">{{item | getDefaultAttr}}</span>
			<span class="option"> {{choosedCount}} 件</span>
			<i v-if="smtType != 5" class="goods-options arrowMore"></i>
		</div>

		<!--承诺-->
			<div v-if="promise" class="notice-bar clear">
				<p v-for="item in promiseSplit">{{item}}</p>
			</div>

		<!--评价晒单-->
		<div class="enterComment">
	        <div v-if="assessCount==0" class="comment-title">评价晒单<span class="noComment" style="color:#8F8F8F;">(暂无评价)</span></div>
	    	<template v-else>
	    		<div class="comment-title">评价晒单 <i class="arrowMore"></i></div>
	        	<div class="comment-about">好评率：<i>{{goodPercent}}%</i> <span class="comment-count">{{assessCount}}</span>人已评价</div>
	    	</template>
	        
		</div>

		<!--评价列表-->
		<ul v-if="shineList" class="comment-list">
		    <li v-for="item in shineList" class="bd-btm-gray">
		        <div class="comment-info">
		            <span class="user">{{item.phoneNo}}</span><span class="date">{{item.shineTime}}</span><span class="star" v-bind:class="'star'+item.assessStars"></span>
		        </div>
		        <div class="comment-content">
		            <div class="user_reply">
		                <p class="ellipsis">
		                    {{item.assessMemo}}
		                </p>   
		            </div>
		            <div v-if="item.pics">
		                <img v-for="one in item.pics" v-bind:src="one"  onerror="this.src='images/public/default.jpg'"/>
		            </div>
	                <div v-if="item.replyState" class="reply">
	                    <p class="buy_attr">购买规格：{{item.attrName}}</p>
	                    <p class="buy_time">购买时间：{{item.buyTime}}</p>
	                    <p class="seller_reply">【客服回复】{{item.replyMemo}} </p>
	                </div>
		        </div>
		    </li>
		</ul>
	</section>
</template>

<script>
	export default{
		name:"common",
		props:['smtList','caseType','highLimit','highTips','vipMsg','smtType','attrList','choosedCount','promise','goodPercent','shineList','assessCount'],
		computed:{
			promiseSplit: function(){
				if(this.promise.indexOf(',') > 0){
					return this.promise.split(',');
				}else{
					return [this.promise];
				}
			}
		},
		filters:{
			//活动标志颜色
			assignBgColor: function(type){
				switch (type){
					case '测试':
						return 'bgcolor-shoudan';
						break;
					case '打折':
						return 'bgcolor-dazhe';
						break;
					case '满减':
						return 'bgcolor-manjian';
						break;
					case '满赠':
						return 'bgcolor-manzeng';
						break;
					case '惊爆':
						return 'bgcolor-jingbao';
						break;
					case '预售':
						return 'bgcolor-yushou';
						break;
				}
			},
			//获取默认选择商品属性
			getDefaultAttr: function(item){
				var defaultAttr;
				item.cartAttrList.forEach(function(one){
					if(one.isDefault == 1){
						defaultAttr = one.selfAttr;
					}
				})
				return defaultAttr;
			}
		}
	}
</script>

<style lang="scss">
	
</style>