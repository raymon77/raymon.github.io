/**
 * Created by yuhanqin on 2017/5/18.
 */

$(function () {
    //00.声明变量
    var index = 0,
        timer = null;

    showAndHide(index);

    //01.监听点击
    $('.gps li').on('click', function () {
        // 1.1 获取当前的索引
        index = $(this).index();
        // alert(index);
        // 1.2 切换选中的样式
        $(this).addClass('current').siblings().removeClass('current');
        $('section').eq(index).show().siblings('section').hide();

        // 1.3 显示和隐藏元素
        showAndHide(index);

        // 1.4 处理落空类
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10);
    });

    //02.监听屏幕滚动
    //delta表示滚动方向，1往上，-1往下 => index -= delta
    $(window).mousewheel(function (event, delta) {
        clearTimeout(timer);
        // 使用定时器截流，防止屏幕滚动和切换太快
        timer = setTimeout(function () {
            // 2.1 求出索引
            index -= delta;

            // 2.2 临界值处理
            if (index > $('.gps li').length - 1) {
                index = $('.gps li').length - 1
            }
            else if (index < 0) {
                index = 0;
            }

            //    2.3 切换样式
            $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
            $('section').eq(index).show().siblings('section').hide();

            // 2.4 显示和隐藏元素
            showAndHide(index);

            // 2.5 处理落空类
            setTimeout(function () {
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10);
        }, 400);
    });

//    03.显示和隐藏头部左边的元素
    function showAndHide(index) {
        if (index == 0) {
            $('.head-left').hide();
            $('.pointer').show();
        } else {
            $('.head-left').show();
            $('.pointer').hide();
        }
    }
});