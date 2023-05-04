// Sidebar Menu Start
function openSidebar() {
    document.querySelector('.sidebar').classList.remove('hidden');
    document.querySelector('.sidebar').classList.add('block');
}
function hideSidebar() {
    document.querySelector('.sidebar').classList.add('hidden');
    document.querySelector('.sidebar').classList.remove('block');
}
var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $('div[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("ul li a.active-link").removeClass('active-link');
            $("ul li a[href='#" + elemId + "']").addClass('active-link');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});
// Sidebar Menu End

// Medium Blogs start
$(function () {
    var $content = $('#medium-blogs');
    var data = {
        rss_url: 'https://medium.com/feed/@TusharKanjariya'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status == 'ok') {
            var output = '';
            $.each(response.items, function (k, item) {
                if (k < 9) {
                    let tags = ``;
                    $.each(item.categories, function (c, items) {
                        tags += `<span class="inline-block bg-sky-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${items}</span>`
                    });
                    output += `<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 flex flex-col">
                <a href="${item.link}">
                    <img class="rounded-t-lg" src="${item.thumbnail}" alt="${item.title} | Tushar Kanjariya" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">${item.title}</h5>
                    </a>
                    <div class="pt-4 pb-2">
                        ${tags}
                    </div>
                </div>
                <div class="p-5 mt-auto">
                    <a target="blank" class="m-auto text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center bottom-0" href="${item.link}">
                        Read Article <i class="ml-3 fas fa-angles-right"></i>
                    </a>
                </div>
            </div>`
                }
            });
            $content.html(output);
        }
    });
});