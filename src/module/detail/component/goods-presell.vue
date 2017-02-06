<template>
	<!--★★★预售组件★★★-->
	<div class="presell">
		<!--阶梯价-->
        <ul class="clear">
            <li v-for="(item, i) in priceList">
                <div class="wrap">
                    <div v-if="item.levelMin == 0" class="hint">
                    	提前{{item.levelMin-item.levelMax}}小时
                    </div>
                    <div v-else-if="i==priceList.length-1 && item.levelMax == '999999999'"  class="hint" >
                		<i v-if="i==0">提前</i>{{item.levelMin/24}}天以上
                	</div>
                	<div v-else class="hint" >
                		<i v-if="i==0">提前</i>{{item.levelMin / 24}} ~ {{item.levelMax / 24}} 天
                	</div>

                    <div class="price"><i>￥</i>{{item.groupPrice}}</div>
                    <div v-if="item.perPrice" class="perPrice"><i>￥</i>{{item.perPrice}}</div>
                </div>
            </li>
        </ul>
		
		<!--限购 及 积分-->
        <div class="ladderPrice">
            <p v-if="limitUp && parseInt(limitUp)>0" class="quota">
            	* 每人限购：<i>{{parseInt(limitUp)}} </i>件
            </p>
            <span v-if="score" class="integral">可获 <i>{{score}}</i> 积分</span>
        </div>
    </div>
</template>

<script>
	export default{
		name:'goodsPresell',
		props:['priceList', 'limitUp', 'score']
	}

</script>
<style lang="scss">
	@import "~pubscss/_variables.scss";
	.presell {
		padding-top: .2rem;

		div.ladderPrice{
			box-sizing: border-box;
			display:table;
			width:100%;
			padding:.2rem .3rem ;

			&>*{
				display:table-cell;
			}
			.integral{
				text-align:right;
				font-size: .3rem;
				line-height:25px;
				i {
					color:$color-orange;
					font-size:.4rem;
				}
			}
			.quota{
				i{
					color:$color-orange;
					font-size:.4rem ;
				}
			}
		}

		ul{
			padding:.28rem 0;
			width: 100%;
			color:#808080;
			border-top:1px solid #F5F5F5;
			border-bottom:1px solid #F5F5F5;

			li {
				float:left;
				width:3.33rem;
				box-sizing:border-box;
				
				div.wrap{
					border-radius:4px ;
					margin:4px ;
				}

				div.hint {
					text-align:center;
					line-height: .5rem;
					font-size: .4rem;
				}
				div.price {
					font-size: .56rem;
					color: #ff4e00;
					text-align: center;
					margin: .2rem 0;
					height: .6rem;
					line-height: .6rem;
					i{
						font-size:.4rem;
					}
				}

				div.perPrice{
					text-align:center;
					font-size:.4rem;

					i{
						font-size:.3rem;
					}
				}
			}
		}
	}
</style>