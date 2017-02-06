<template>
	<div class="goods-title">
		<p class="title">{{goodsTitle}}</p>
		<p class="intro">{{goodsIntro}}</p>
	</div>	
</template>

<script>
export default {
  name: 'title',
  props:['goodsTitle', 'goodsIntro']
}
</script>

<style lang="scss">
@import "~pubscss/_convertUnit.scss";
.goods-title {
	margin-top:px2rem(20px) ;
	padding:0 .3rem ;
	p.title {
		font-size:font(42px) ;
		line-height:px2rem(66px) ;
		font-weight: normal;
		word-break: break-all;

		i {
			height: 18px;
			line-height: 18px;
			font-size: 14px;
			position: relative;
			top: 3px;
		}
	}

	p.intro {
		color: #FF3000;
		font-size: font(32px);
		line-height: .4rem;
		margin-top: .1rem;
		text-align: justify;
		word-wrap: break-word;
	}
}
</style>