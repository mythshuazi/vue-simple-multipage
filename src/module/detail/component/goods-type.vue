<template>
	<!--caseType=4 首单；caseType=5 闪购；caseType=6 特价；smtType=5 秒杀；smtType=1首单-->
	<section class="goods-type">
		<goods-title v-bind:goods-title="goodsName" v-bind:goods-intro="ads"></goods-title>
		<!--普通商品 及 预售商品-->
		<goods-ps v-if="caseType != 4 && caseType !=5 && caseType !=6 && smtType!=5 && smtType !=1"
				  v-bind:price-list="priceList" 
				  v-bind:limit-up="limitUp" 
				  v-bind:score="score"></goods-ps>
		<!--特价商品-->
	</section>	 
</template>

<script>
import goodsTitle from './goods-title.vue';
import goodsPs from './goods-presell.vue';
export default {
  name: 'title',
  components: {goodsTitle, goodsPs},
  props:['caseType','smtType', 'goodsName', 'ads', 'priceList', 'limitUp', 'score']
}	
</script>

<style lang="scss">
	
</style>