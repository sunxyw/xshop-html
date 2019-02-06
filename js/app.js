let element = layui.element,
    $ = layui.$;

$('.nav-bottom a').click(function () {
    if ($(this).children('.iconfont').data('no-xx') === 'yes') {
        return true;
    }
    let icon = $(this).children('.iconfont').attr('class');
    icon = icon.replace('-xianxing', '');
    $('.nav-bottom .iconfont').each(function () {
        let cl = $(this).attr('class');
        if (cl.search('-xianxing') === -1 && $(this).data('no-xx') !== 'yes') {
            cl = cl + '-xianxing';
        }
        $(this).attr('class', cl);
    });
    $(this).children('.iconfont').attr('class', icon);
});
