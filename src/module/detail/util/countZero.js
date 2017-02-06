/**
 * [countZero 秒杀剩余时间，倒计时功能]
 * @param  {[type]} nowTime   [当前时间]
 * @param  {[type]} endTime   [结束时间]
 * @param  {[type]} startTime [开始时间]
 */
var countZeroTimer;
function countZero(nowTime, endTime, startTime){
    var timeWrap= $('.surplus'),
        note= $('.countZero .note'),
        title = $('.describe h3'),
        miaosha = $('#miaosha');

    /**
     *
     * @param msec [Number] 秒数
     * @param type [String] 类型
     */
    function daojishi( msec, type ){
        var numString = Math.floor(msec/1000) + '';
        var timeArr = numString.toHHMMSS().split(':');
        //console.log(msec);
        //console.log(timeArr);
        timeWrap.html('').append('<span class="hh">'+ timeArr[0] +'</span><i>:</i><span class="mm">'+ timeArr[1] +'</span><i>:</i><span class="ss">'+ timeArr[2] +'</span>');
        note.html('距活动'+type+'还剩');
    }
    countZeroTimer = setInterval(function(){

        //活动未开始，且距离活动开始时间大于2小时
        if(nowTime<startTime && startTime-nowTime > 7200000){
            note.html(new Date(startTime).Format("MM月dd日hh:mm")+' 开抢');
            title.html('该商品即将参加长江汇秒杀');
            miaosha.removeClass('ing');
        }

        //活动未开始，且距离活动开始时间小于2小时，开始倒计时
        if(nowTime<startTime && startTime-nowTime < 7200000){
            var tmp = Math.floor((startTime-nowTime)/1000) + '';
            //console.log('★★★★★★★★倒计时★★★★★★★★★');
            //console.log(tmp.toHHMMSS());
            daojishi(startTime-nowTime, '开始');
            title.html('该商品即将参加长江汇秒杀');
            miaosha.removeClass('ing');
        }

        //活动已经开始，尚未结束，开始倒计时
        if(nowTime>startTime && nowTime<endTime){
            var tmp = Math.floor((endTime-nowTime)/1000) + '';
            //console.log('★★★★★★★★倒计时★★★★★★★★★');
            //console.log(tmp.toHHMMSS());
            daojishi(endTime-nowTime, '结束');
            title.html('该商品正在参加长江汇秒杀');
            miaosha.addClass('ing');
        }

        //活动已经结束
        if(nowTime>endTime){
            title.html('该商品的长江汇秒杀活动已结束');
            note.html('此轮活动已结束');
            if(!miaosha.hasClass('ing')) miaosha.addClass('ing');
            clearInterval(countZeroTimer);
        }



        nowTime = nowTime + 1000;

    },1000);
}

function startCount(currentTime,rushBeginTime,rushEndTime){
    var loadTime, nowTime, endTime, startTime;
    //处理“还剩多少时间”
    loadTime = Math.ceil( (new Date().getTime() - loadStartTime));
    nowTime  = parseInt(currentTime*1000) + loadTime; //数据库nowTime + 文档加载时间
    endTime  = parseInt(rushEndTime*1000);
    startTime= parseInt(rushBeginTime*1000);
    //console.log( '★★★★★★★计算为毫秒当前时间+加载页面时间：'+ nowTime);
    //console.log( '★★★★★★★计算为毫秒开始时间：'+ startTime);
    //console.log( '★★★★★★★计算为毫秒结束时间：'+ endTime);
    countZero( nowTime, endTime, startTime);
}
