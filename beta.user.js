// ==UserScript==
// @name         VK By RAM
// @namespace    https://github.com/891-2/vk-old-rad/
// @version      2.0.7
// @description  Вернём старый дизайн вместе
// @author       RAM
// @match        *://*.vk.com/*
// @match        *://*.vk.ru/*
// @exclude      *://m.vk.com/*
// @exclude      https://vk.com/video_ext.php*
// @exclude      https://vk.com/widget_comments*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        GM_webRequest
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://github.com/891-2/vk-old-rad/raw/main/beta.user.js
// @connect *
// @license MIT
// ==/UserScript==
    //setInterval(XHRListener,10);

var title_cur
GM_webRequest([
     { selector: '*', action: 'accept' },
], function(info, message, details) {
    console.log(info, message, details);
});

    var default_settings ={
        adblock:true,
        dont_write:false,
        dont_read:false
    }
    var local_settings = {}
    local_settings = JSON.parse(localStorage.getItem("Default"))
    var settings = {}


    var LOCAL = {
        css_url: 'https://raw.githubusercontent.com/891-2/vk-old-rad/main/style.css'
    };

    var VK_RAM = {
        local_css: "",
        custom_css_val: ""
    };

    var RAM = {
        create(elem) {
            return document.createElement(elem);
        },
        createCustom(elem, attrib, attrib_val, innerHTML, classList, outerHTML) {
            let el = document.createElement(elem);
            attrib ? (el.setAttribute(attrib, attrib_val)) : null;
            innerHTML ? (el.innerHTML = innerHTML) : null;
            classList ? (el.classList = classList) : null;
            return el;
        },
        findElem(elem) {
            if (elem){
                let mas = document.querySelectorAll(elem);
                let temp = document.querySelector(elem);

                    if (mas.length > 1) {
                        if (mas!==undefined){
                            return mas;
                        }
                    } else {
                        if (temp){
                            return temp;
                        }
                    }
            }
        },
        getText(elem) {
            let el = document.querySelector(elem)
            return el.textContent?el.textContent:el.InnerHTML
        },
        setVAR(param,value){
           settings?settings[param] = value:(settings = {...settings,...default_settings},settings[param]);
           localStorage.setItem("Default",JSON.stringify(settings));
         },
        getVAR(param){
            settings = JSON.parse(localStorage.getItem("Default"))
           return settings?settings[param]:default_settings[param]
        },
        updateVAR() {
            local_settings?settings = {...settings,...local_settings}:settings = {...settings,...default_settings}
            //settings?console.log(settings,'settings'):null
        }
    };


    var date_now = Date.now();
    var i, i2, vd, theme_hash_number, theme, j;

    //ПЕРЕМЕННЫЕ
    var checked_custom_css_val, checked_custom_css, checked_adblock, checked_dont_read, checked_dont_write;

    var js_url = `https://github.com/891-2/vk-old-rad/raw/main/beta.user.js`;
    var version = GM_info.script.version;
    var local_css = localStorage.getItem("css");
    i = i2 = vd = 0;




    function inject() {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = `
            var xhr = new XMLHttpRequest();

    var body = 'name=messages_recommendation_list_hidden&value=1&extended=1&access_token=vk1.a.5v90H_y_XrEagwlaIJ6am3ABlcClzo1rUzOdZ6-YZ8KDfHUh4700M3fg8h3sIVGjr-4bmPbW-RuUkdOkMDaHwjNvhJO6P9yCNsTEJV9HTsJCDs1B655J8qQSAEmiOVhXam8JxFm0Qha87d48Pi94HaLoTGoa6DeCHHx7r6EdOkVYJZmXj0ERWOUPUp0SrGu9';

    xhr.open("POST", 'https://api.vk.com/method/account.setInfo?v=5.189&client_id=6287487', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = console.log("yse");

    xhr.send(body);
            `;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    window.onload = function () {
        let html = document.createElement("div")
        RAM.updateVAR()
         XHRListener()
        if (RAM.getVAR("adblock")) {
            setInterval(ads, 2000);
            GM_webRequest([
                { selector: "*://vk.*/js/lib/px.js*", action: "cancel" },
                { selector: "*://top-fwz1.mail.ru/*", action: "cancel" },
                { selector: "*://trk.mail.ru/i/*", action: "cancel" },
                { selector: "*://r3.mail.ru/*", action: "cancel" },
                { selector: "*://www.tns-counter.ru/*", action: "cancel" },
                { selector: "*://stats.vk-portal.net/web-stats/p", action: "cancel" },
                { selector: "*://vk.*/ads_rotate.php?act=al_update_ad", action: "cancel" },
                { selector: "*://ad.mail.ru/*", action: "cancel" },
                { selector: "*://top-fwz1.mail.ru/counter*",action:"cancel"},
                { selector: "https://vk.*/al_audio.php?act=ad_event",action:"cancel"},
                { selector: "https://vk.com/reaction/1-reactions*",action:"cancel"}
            ]);
        }
        loaded_time();
        css_add();
        initial();
        removeSafeNotification();
    };

    window.onblur = function () {
        var a = setInterval(title, 2000);
        var b = setInterval(ads, 2000);
        var c = setInterval(check, 1000);
        var d = setInterval(title, 2000);
        var e = setInterval(change, 100);
        clearInterval(a);
        if (checked_adblock == 0 || null) {

        } else {
            clearInterval(b);
        }
        clearInterval(c);
        clearInterval(d);
        clearInterval(e);
        a = b = c = d = e = 0
    };

    window.onfocus = function () {
        setInterval(title, 2000);
        if (checked_adblock == 0 || null) {

        } else {
            setInterval(ads, 2000);
        }
        setInterval(check, 1000);
        setInterval(title, 2000);
        setInterval(change,100)
    };

    function initial() {
        console.log('Скрипт запущен');
        setInterval(title, 2000);
        setInterval(check, 1000);
        fix_name();
        setInterval(change,100)
    }

    function change(){
        var bis = RAM.findElem('a.ui_actions_menu_item.im-action.im-action_business_notify._im_search_more_action')
        var arc = RAM.findElem('a.ui_actions_menu_item.im-action.im-action_archive._im_search_more_action')
        var parent = RAM.findElem('.ui_actions_menu._ui_menu.im-page--dialogs-extra-menu.im-page--redesigned-menu')
        var extra = RAM.findElem('.extra_patch')
        var a = document.querySelector('a.left_row');
        parent&&!extra?parent.insertBefore(bis,arc):null
        parent?parent.classList.add('extra_patch'):null

        //console.log(a)

        if (document.location.href.indexOf(`video/@${a?a.href.replace("https://vk.com/",""):null}`)!=-1){
            let video = RAM.findElem('a.left_row[href="/videos"]')
            let path = RAM.findElem('.patch')
            if (video&&!path){
                video.click()
                video.classList.add("patch")
            }
        }

        let video = document.querySelector('._hide_recomms')
        if (video==null){
            RAM.findElem("div#mv_top_pl_toggle")?RAM.findElem("div#mv_top_pl_toggle").style.display="none":null
            let chat = RAM.findElem(".mv_chat")
            let video_rec = document.querySelector('div#mv_top_pl_toggle')

            if (video_rec&&!chat){
                video_rec.click()
            }
        }

        if (!RAM.findElem('div#feed_wall')&&RAM.findElem('.PostButtonReactions--post .PostButtonReactions__title--textual')){
            let post = RAM.findElem('.PostBottomActionContainer.PostButtonReactionsContainer')
            let nrav = RAM.findElem('.PostButtonReactions__title._counter_anim_container.PostButtonReactions__title--textual')
            let likes = RAM.findElem('.ReactionsPreview__count._counter_anim_container')
            nrav.style.display = "unset"
            likes.style.display = "none"
            nrav.textContent=="Нравится"?nrav.textContent = likes.textContent:null
            nrav.textContent!==likes.textContent?nrav.textContent = likes.textContent:null

        }

        if (RAM.findElem('div#feed_wall')&&RAM.findElem('.PostButtonReactions--post .PostButtonReactions__title--textual')){
            let post = document.querySelector('.PostBottomActionContainer.PostButtonReactionsContainer')
            let nrav = RAM.findElem('.PostButtonReactions__title._counter_anim_container.PostButtonReactions__title--textual')
            let likes = RAM.findElem('.ReactionsPreview__count._counter_anim_container')
            nrav.style.display = "unset"
            likes.style.display = "none"
            nrav.textContent=="Нравится"?nrav.textContent = likes.textContent:null
            nrav.textContent!==likes.textContent?nrav.textContent = likes.textContent:null

        }
    }

    function removeSafeNotification() {

        if (RAM.findElem('.box_title')){
            if (RAM.getText('.box_title').indexOf('Безопасность аккаунта') !== -1) {
                RAM.findElem('.box_title').closest('div#box_layer_wrap').remove();
                RAM.findElem('div#box_layer_bg').remove();
                RAM.findElem("body").style.overflow = "visible";
            }
    }
    }
        function isAdblock() {
            let adblock = document.querySelector('.adsbygoogle');
            if (adblock.clientHeight == 0) {
                return true;
            } else {
                return false;
            }
        }

        function extra() {
            var user = document.querySelector('img.page_avatar_img');
            if (user !== null && user !== undefined) {
                new MutationObserver(function () {
                    var vkProfilePage = document.body.querySelector('#profile_short:not(.display_additional_information_in_vk_profile)');
                    if (!vkProfilePage) return;
                    var vkScripts = document.body.querySelectorAll('script');
                    if (!vkScripts) return;
                    var vkProfileId = (vkScripts[vkScripts.length - 1].textContent.match(/("|')user_id("|'):( *)(|"|')(\d+)/i) || [])[5];
                    if (!vkProfileId) return;
                    vkProfilePage.className += ' display_additional_information_in_vk_profile';
                    var vkPageLang = document.body.querySelector('a.ui_actions_menu_item[onclick*="lang_dialog"]');
                    var vkCurrentLang;
                    if (vkPageLang) {
                        vkCurrentLang = vkPageLang.textContent;
                    } else {
                        vkCurrentLang = navigator.language.substring(0, 2);
                    }
                    var vkLang, vkMonthName;
                    if (vkCurrentLang === 'Language: english' || vkCurrentLang === 'en') {
                        vkLang = 'en';
                        vkMonthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    } else if (vkCurrentLang === 'Язык: русский' || vkCurrentLang === 'ru') {
                        vkLang = 'ru';
                        vkMonthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
                    } else if (vkCurrentLang === 'Мова: українська' || vkCurrentLang === 'uk') {
                        vkLang = 'uk';
                        vkMonthName = ['сiчня', 'лютого', 'березня', 'квiтня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
                    }
                    var i = 0;
                    while (i < 4) {
                        var vkProfilePageElement = document.createElement('div');
                        vkProfilePageElement.style.display = 'none';
                        vkProfilePage.insertBefore(vkProfilePageElement, vkProfilePage.firstChild);
                        i++;
                    }
                    var vkProfileIdElement = document.createElement('div');
                    vkProfileIdElement.className = 'clear_fix profile_info_row';
                    var requestVkFoaf = new XMLHttpRequest();
                    requestVkFoaf.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            var vkFoafRegDate = (this.responseText.match(/ya:created dc:date="(.+)"/i) || [])[1];
                            var vkFoafLastSeenDate = (this.responseText.match(/ya:lastLoggedIn dc:date="(.+)"/i) || [])[1];
                            if (vkFoafRegDate) {
                                var vkRegDate = new Date(vkFoafRegDate);
                                var vkRegDateElement = document.createElement('div');
                                vkRegDateElement.className = 'clear_fix profile_info_row';
                                if (vkLang === 'en') {
                                    vkRegDateElement.innerHTML = '<div class="label fl_l">Registration date:</div><div class="labeled">' + vkMonthName[vkRegDate.getMonth()] + ' ' + vkRegDate.getDate() + ', ' + vkRegDate.getFullYear() + ' at ' + convert24HoursTo12Hours(vkRegDate.getHours()) + ':' + addLeadingZeroToDate(vkRegDate.getMinutes()) + ':' + addLeadingZeroToDate(vkRegDate.getSeconds()) + ' ' + convert24HoursToAmPmLc(vkRegDate.getHours()) + '</div>';
                                } else if (vkLang === 'ru') {
                                    vkRegDateElement.innerHTML = '<div class="label fl_l">Дата регистрации:</div><div class="labeled">' + vkRegDate.getDate() + ' ' + vkMonthName[vkRegDate.getMonth()] + ' ' + vkRegDate.getFullYear() + ' в ' + vkRegDate.getHours() + ':' + addLeadingZeroToDate(vkRegDate.getMinutes()) + ':' + addLeadingZeroToDate(vkRegDate.getSeconds()) + '</div>';
                                } else if (vkLang === 'uk') {
                                    vkRegDateElement.innerHTML = '<div class="label fl_l">Дата реєстрації:</div><div class="labeled">' + vkRegDate.getDate() + ' ' + vkMonthName[vkRegDate.getMonth()] + ' ' + vkRegDate.getFullYear() + ' о ' + vkRegDate.getHours() + ':' + addLeadingZeroToDate(vkRegDate.getMinutes()) + ':' + addLeadingZeroToDate(vkRegDate.getSeconds()) + '</div>';
                                } else {
                                    vkRegDateElement.innerHTML = '<div class="label fl_l">Registration date:</div><div class="labeled">' + addLeadingZeroToDate(vkRegDate.getDate()) + '.' + addLeadingZeroToDate(vkRegDate.getMonth() + 1) + '.' + vkRegDate.getFullYear() + ' ' + addLeadingZeroToDate(vkRegDate.getHours()) + ':' + addLeadingZeroToDate(vkRegDate.getMinutes()) + ':' + addLeadingZeroToDate(vkRegDate.getSeconds()) + '</div>';
                                }
                                vkProfilePage.replaceChild(vkRegDateElement, vkProfilePage.childNodes[1]);
                            } else {
                                console.info('Registration date on VK FOAF profile is empty or unavailable');
                            }
                            if (vkFoafLastSeenDate) {
                                var vkLastSeenDate = new Date(vkFoafLastSeenDate);
                                var vkLastSeenDateElement = document.createElement('div');
                                vkLastSeenDateElement.className = 'clear_fix profile_info_row';
                                if (vkLang === 'en') {
                                    vkLastSeenDateElement.innerHTML = '<div class="label fl_l">Last seen:</div><div class="labeled">' + vkMonthName[vkLastSeenDate.getMonth()] + ' ' + vkLastSeenDate.getDate() + ', ' + vkLastSeenDate.getFullYear() + ' at ' + convert24HoursTo12Hours(vkLastSeenDate.getHours()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getMinutes()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getSeconds()) + ' ' + convert24HoursToAmPmLc(vkLastSeenDate.getHours()) + '</div>';
                                } else if (vkLang === 'ru') {
                                    vkLastSeenDateElement.innerHTML = '<div class="label fl_l">Последний заход:</div><div class="labeled">' + vkLastSeenDate.getDate() + ' ' + vkMonthName[vkLastSeenDate.getMonth()] + ' ' + vkLastSeenDate.getFullYear() + ' в ' + vkLastSeenDate.getHours() + ':' + addLeadingZeroToDate(vkLastSeenDate.getMinutes()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getSeconds()) + '</div>';
                                } else if (vkLang === 'uk') {
                                    vkLastSeenDateElement.innerHTML = '<div class="label fl_l">Останній візит:</div><div class="labeled">' + vkLastSeenDate.getDate() + ' ' + vkMonthName[vkLastSeenDate.getMonth()] + ' ' + vkLastSeenDate.getFullYear() + ' о ' + vkLastSeenDate.getHours() + ':' + addLeadingZeroToDate(vkLastSeenDate.getMinutes()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getSeconds()) + '</div>';
                                } else {
                                    vkLastSeenDateElement.innerHTML = '<div class="label fl_l">Last seen:</div><div class="labeled">' + addLeadingZeroToDate(vkLastSeenDate.getDate()) + '.' + addLeadingZeroToDate(vkLastSeenDate.getMonth() + 1) + '.' + vkLastSeenDate.getFullYear() + ' ' + addLeadingZeroToDate(vkLastSeenDate.getHours()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getMinutes()) + ':' + addLeadingZeroToDate(vkLastSeenDate.getSeconds()) + '</div>';
                                }
                                vkProfilePage.replaceChild(vkLastSeenDateElement, vkProfilePage.childNodes[3]);
                            } else {
                                console.info('Last seen date on VK FOAF profile is empty or unavailable');
                            }
                        } else if (this.readyState === 4 && this.status !== 200) {
                            console.error('Failed to get VK FOAF profile (registration date, last profile edit date and last seen date): ' + this.status + ' ' + this.statusText);
                        }
                    };
                    requestVkFoaf.open('GET', '/foaf.php?id=' + vkProfileId, true);
                    requestVkFoaf.send();
                }).observe(document.body, { childList: true, subtree: true });
            }
        }

        // Проверка
        function check() {
            check_vid();
            dot_check();
            feed_check();
            icon_check();
        }

        function feed_check() {
            if ((window.location.href.includes('feed'))) {
                _class();
                _class2();
            }
            var k = document.querySelector('.like_cont.PostBottomActionLikeBtns.PostBottomActionLikeBtns--withBgButtons');
            if (k) {
                _class();
                _class2();
            }
        }

        function icon_check() {
            if (!window.location.href.includes('im')) {
                var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
                list.forEach(function (element) {
                    element.setAttribute('href', 'https://dl.dropbox.com/s/srxnp2eunc3q3fa/fav_logo.icoraw=1');
                });
                //parent?parent.insertBefore(bi,ar):null
            }
        }

        function _class2() {
            var g;
            var k = document.querySelectorAll('.ui_actions_menu._ui_menu.ui_actions_menu--actionSheet');
            for (g = 0; g < k.length; g++) {
                k[g].className = 'ui_actions_menu _ui_menu ';
            }
        }


        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }


        async function _class() {
            await sleep(2000);

            var k;
            var old2 = document.querySelectorAll('.PostButtonReactions__icon.PostButtonReactions__icon--custom.PostButtonReactions__icon--animationActive');
            for (k = 0; k < old2.length; k++) {
                old2[k].style.background = `background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E);`;
            }
        }

        function addLeadingZeroToDate(date) {
            return ('0' + date).slice(-2);
        }
        function convert24HoursTo12Hours(hours) {
            hours = hours % 12;
            return hours ? hours : 12;
        }
        function convert24HoursToAmPmLc(hours) {
            return hours >= 12 ? 'pm' : 'am';
        }

        window.addEventListener('scroll', function () {
            KPP.add('.PostButtonReactions', function (reactions) {
                var count = reactions.dataset.reactionCounts;
                if (count && !(reactions.dataset.reactionButtonTextIsCounter)) {
                    count = JSON.parse(count);
                    if (!Array.isArray(count)) {
                        count = Object.values(count);
                    }
                    var likes = count.reduce(function (previous, current) {
                        return previous + current;
                    });
                    reactions.getElementsByClassName('PostButtonReactions__title')[0].textContent = likes;
                }
                reactions.dataset.reactionButtonTextIsCounter = '1';

                var target = reactions.dataset.reactionTargetObject;
                if (target) {
                    reactions.setAttribute('onmouseover', 'Likes.showLikes(this,\'' + target + '\')');
                }
            });


        });
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function Visible (target) {
      // Все позиции элемента
      var targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        };

      if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
          return true
      } else {
        return false
      };
    }

        // Название
        function title() {
            if (document.title == 'Мессенджер') {
                document.title = 'Сообщения';
            } else if (document.title == 'Реакции') {
                document.title = 'Понравилось';
            }
        }

        // Реклама
        function ads() {
            if (window.vk){
                vk.audioAdsConfig = null;
                ap.ads._adEvents = [];
                ap.ads._isPlaying = false;
                noAdsAtAll = true
                PageBottomBanners.initUnauthBanner = function(){}
                Unauthorized2 = undefined
            }

            localStorage.setItem("ads.events", null);

            let ad_blocks, a;
            ad_blocks = document.querySelectorAll('div#ads_left>div,[data-ad-view],div[data-ad-disabled-stat-impression],div#feed_filters a,.page_block.apps_feedRightAppsBlock.apps_feedRightAppsBlock_single_mini_app,.page_block.feed_groups_recomm.feed_groups_likes_block,.page_block.feed_groups_recomm.js-feed_groups_recomm.feed_groups_recomm_friends,.wall_marked_as_ads');
            for (let ad_block of ad_blocks){
               ad_block.closest('._post_content')?(
                   ad_block.closest('._post_content').remove()
               ):ad_block.remove()
            }

            let lj = document.querySelectorAll('a.Post__copyrightLink');
            var as = ["appscent", "Бот", "CcCAb5"];
            for (let entry2 of lj){
                for (let k of as) {
                    entry2.innerHTML.indexOf(k) ? entry2.closest('._post_content').remove() : console.log('1');
                    //console.log(entry2.innerHTML.indexOf(k))
                }
            }

/*
            var vkcc = RAM.findElem('.wall_reply_text a,.wall_text a,#wl_post a,li.im-mess a,a.MessageText__link')
            if (vkcc){
                for (let vk_a of vkcc){
                vk_a.textContent.indexOf("vk.cc")!=-1?vk_a.textContent = (vk_a.title?vk_a.title:vk_a.textContent):null
            }
            }*/
            //console.log(vk)
        }

        // Три точки проверка
        function dot_check() {
            RAM.findElem('div#profile_message_send') ? dot_prof_friends() : RAM.findElem('a.vkuiButton[href="/edit"]')? dot_prof() : null;
        }

        // Три точки установка
        function dot_prof() {
            if (!document.querySelector('.ScrollStickyWrapper').getAttribute("patch")){
                document.querySelector('.ScrollStickyWrapper').setAttribute("patch",true)
                moveUp(document.querySelector('.ScrollStickyWrapper'))
            }
            if (!RAM.findElem('.info_fuck')){
                 let d = document.querySelector('.ProfileInfo__status span').outerHTML
                 let h = document.querySelector('.ProfileInfo__status').innerHTML = `
                 <div class="page_current_info" id="page_current_info"><div id="currinfo_editor" class="page_status_editor clear" onclick="cancelEvent(event)">
                 <div class="editor">
                 <div class="page_status_input_wrap _emoji_field_wrap">
                 <div class="emoji_smile_wrap  _emoji_wrap">
                 <div class="emoji_smile _emoji_btn" role="button" title="Используйте TAB, чтобы быстрее открывать смайлы" onmouseenter="return Emoji.show(this, event);" onmouseleave="return Emoji.hide(this, event);" onclick="return cancelEvent(event);" aria-label="Добавить эмодзи или стикер">
                 <div class="emoji_smile_icon_inline_svg emoji_smile_icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49s1.39-.25 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13c-.27.33-.61.6-.97.83a5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.1a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8zM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0z" fill="currentColor"></path></svg></div>
                 </div>
                 </div>
                 <div class="page_status_input" id="currinfo_input" contenteditable="true" role="textbox"></div>
                 </div>
                 <div class="page_status_audio checkbox" id="currinfo_audio" onclick="checkbox(this); Page.audioStatusUpdate('ef92ff3a5b5871573e');" role="checkbox" aria-checked="false" tabindex="0">Транслировать музыку в статус</div>
                 <div class="page_status_app checkbox on unshown" id="currinfo_app" onclick="checkbox(this); Profile.appStatusUpdate('ef92ff3a5b5871573e')" role="checkbox" aria-checked="true" tabindex="0">Показывать приложение в статусе</div>
                 <button class="flat_button button_small page_status_btn_save" id="currinfo_save">Сохранить</button>
                 </div>
                 </div>
                 <div id="currinfo_wrap" onclick="return Page.infoEdit();" tabindex="0" role="button">
                 <span id="current_info" class="current_info"><span class="my_current_info"><span class="current_text">${d}</span></span></span></div>
                 <div id="currinfo_fake" style="display: none"><span class="my_current_info"><span class="current_text">${d}</span></span></div></div><div class="info_fuck"></div>`
            }

/*
            let aside, button, stats, stats_hash, stats_elem, stats_elem_parent, temp_a, regular_a, story;
            aside = document.querySelector('.page_block.page_photo.ProfileActions>aside');
            stats = document.querySelector('[href*="/stats?"]');
            stats ? stats_hash = stats.href : console.log('test');


            aside.style.display = 'none';
            aside.outerHTML = '<aside aria-label="Действия со страницей" class="profile_aside"><div class="profile_aside_div">  <div class="profile_aside_div_div">      <div class="profile_aside_div_div_div">        <a href="edit" class="profile_aside_div_div_div_a">Редактировать</a>      </div>      <div class="profile_aside_div_div_div2">        <div aria-label="Действия" role="button" tabindex="0" class="profile_aside_div_div_div2_div">          <span class="profile_aside_div_div_div2_div_span">Действия</span>          <span style="display:block;">&nbsp;</span>        </div>        <div class="profile_aside_one">          <div class="profile_aside_one_two">            <span class="profile_aside_one_two_three">Действия</span>          </div>          <div class="profile_aside_four">            <a href="memories" role="link" tabindex="0" class="profile_aside_four_a">Воспоминания</a><a href="" id="aside_story_archive" role="link" class="profile_aside_four_a2" tabindex="0">Архив историй</a><a role="link" tabindex="0" class="profile_aside_four_a2" data-task-click="ProfileAction/money_transfer_box" data-from="own_profile">Денежные переводы</a>          </div>        </div>      </div>      <span style="font-size:0px;clear:both;display:block;height: 0px;line-height:0;visibility:hidden;/">.</span></div>    </div>  </aside>';
            story = document.querySelector('a#aside_story_archive');
            story.href = window.location.pathname + '?w=stories';
            // Если есть статистика добавляем элемент
            if (stats) {
                stats_elem_parent = document.querySelector('.profile_aside_four');
                stats_elem = document.createElement('a');
                stats_elem.classList = 'temp_a';
                stats_elem_parent.prepend(stats_elem);
                temp_a = document.querySelector('a.temp_a');
                temp_a.outerHTML = '<a href="" id="aside_stats" role="link" class="profile_aside_four_a2" tabindex="0">Статистика страницы</a>';
                regular_a = document.querySelector('a#aside_stats');
                regular_a.href = stats_hash;
            }

            button = document.querySelector('.profile_aside_div_div_div2');
            button.onclick = function () {
                var b;
                b = document.querySelector('.profile_aside_div_div_div2');
                b.classList.toggle('atv');
            };*/
        }


        // Меню и Имя возле иконки
        function fix_name() {
            try {

                var parentlnk = document.querySelector('div#top_profile_menu');
                var lnk = document.querySelector('li#l_pr a');
                var setlnk = document.querySelector('a#top_settings_link');
                var suplnk = document.querySelector('a#top_support_link');
                var loglnk = document.querySelector('a#top_logout_link');
                var name = document.querySelector('img.TopNavBtn__profileImg');
                var name2 = document.querySelector('a[href*="connect.vk.com"] div[style="color: var(--text_primary);"]');
                var name3 = document.querySelector('[style="background-color: var(--content_tint_background); border-radius: 8px; width: 254px; font-family: inherit;"]');
                var remove = document.querySelector('a[href*="connect.vk.com"] ');
                var remove2 = document.querySelectorAll('div#top_profile_menu span');
                var theme_hash = document.querySelector('.idd_wrap.SettingsColorSchemeDropdown');
                var theme_elem = document.querySelector('a.top_profile_mrow.TopProfileItem--appearance');
                if (theme_hash) {
                    theme_hash_number = theme_hash.getAttribute('data-hash');
                    console.log(theme_hash_number);
                }
                if (theme_elem) {
                    theme_elem.outerHTML = `<a class="top_profile_mrow TopProfileItem--appearance" id="" href="#" style="" onclick="return false">
      <div class="menu_item_icon"><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M10.8 6.05a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14.45 8.2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM4.3 9.45a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM7.85 4.8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path><path clip-rule="evenodd" d="M14.18 14.04c2.14.23 4.32-.75 4.32-4.04A8.47 8.47 0 0010 1.5 8.47 8.47 0 001.5 10a8.47 8.47 0 008.5 8.5c1.13 0 2.25-1 1.98-2.43l-.17-.68c-.25-.94-.43-1.6 1.08-1.49l1.29.14zm.16-1.5l-.25-.02-1.1-.12a3.34 3.34 0 00-1.74.27 2 2 0 00-1.1 1.68 3.8 3.8 0 00.22 1.47l.14.54c.02.13 0 .22 0 .28a.44.44 0 01-.1.17.57.57 0 01-.41.19 6.97 6.97 0 01-7-7 6.97 6.97 0 017-7 6.97 6.97 0 017 7c0 1.3-.41 1.87-.77 2.15-.42.32-1.07.48-1.9.4z" fill-rule="evenodd"></path></g></svg></div>
      <span>
        <div class="TopProfileItem__colorSchemeLabel">
      Тема:
      <div class="idd_wrap SettingsColorSchemeDropdown" id="" data-items="[[&quot;light&quot;,&quot;Светлая&quot;],[&quot;dark&quot;,&quot;Тёмная&quot;],[&quot;auto&quot;,&quot;Системная&quot;]]" data-value="light" hash="`+ theme_hash_number + `" data-inited="1">
      <div class="idd_selected_value " tabindex="0" role="link" onclick="var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">Тёмная</div>
      <input type="hidden" id="_input" name="" value="dark">
      <div class="idd_popup" id="idd_" style="margin-top: -21px;width: 94.75px;opacity: 0;margin-left: -10px;visibility:hidden;">
      <div class="idd_header_wrap " onclick="var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">
      <div class="idd_header " id="light">Тёмная</div>
      </div>
      <div class="idd_items_wrap">
      <div class="idd_items_content">
      <div class="idd_item" id="idd_item_light" data-id="light" tabindex="0" role="button" onclick="var _0x2b4b8c=_0x5db1;function _0xc4b2(){var _0x106c94=['511648DTrZaU','onreadystatechange','9DyWBRA','.idd_wrap.SettingsColorSchemeDropdown','querySelector','4106291YEleCl','open','6XVRymM','&mode=light','al=1&hash=','244725aNpImE','hash','setRequestHeader','Content-Type','3300fqSGRV','1198oczrhX','send','body','scheme','setAttribute','/al_settings.php?act=a_save_color_scheme_mode','692248ztyZYF','56090LKDbyQ','application/x-www-form-urlencoded','1067xAAoDh','296025tIMmYP','log'];_0xc4b2=function(){return _0x106c94;};return _0xc4b2();}(function(_0x1ad865,_0x5f2e32){var _0x172656=_0x5db1,_0x504c32=_0x1ad865();while(!![]){try{var _0x613c99=parseInt(_0x172656(0x93))/0x1+parseInt(_0x172656(0x98))/0x2*(-parseInt(_0x172656(0x97))/0x3)+-parseInt(_0x172656(0x9e))/0x4+parseInt(_0x172656(0x87))/0x5*(-parseInt(_0x172656(0x90))/0x6)+parseInt(_0x172656(0x8e))/0x7+-parseInt(_0x172656(0x89))/0x8*(parseInt(_0x172656(0x8b))/0x9)+parseInt(_0x172656(0x9f))/0xa*(parseInt(_0x172656(0x86))/0xb);if(_0x613c99===_0x5f2e32)break;else _0x504c32['push'](_0x504c32['shift']());}catch(_0x14f101){_0x504c32['push'](_0x504c32['shift']());}}}(_0xc4b2,0x669c0));function test(_0x31234c){var _0x1be468=_0x5db1,_0x39b21a=new XMLHttpRequest(),_0xf4d047=_0x1be468(0x92)+_0x31234c+_0x1be468(0x91);_0x39b21a[_0x1be468(0x8f)]('POST',_0x1be468(0x9d),!![]),_0x39b21a[_0x1be468(0x95)](_0x1be468(0x96),_0x1be468(0xa0)),_0x39b21a[_0x1be468(0x8a)]=console[_0x1be468(0x88)]('test'),_0x39b21a[_0x1be468(0x99)](_0xf4d047);}var j=document[_0x2b4b8c(0x8d)](_0x2b4b8c(0x8c)),k=j['getAttribute'](_0x2b4b8c(0x94));function _0x5db1(_0x58ef69,_0x2134d3){var _0xc4b2e9=_0xc4b2();return _0x5db1=function(_0x5db1cb,_0x470053){_0x5db1cb=_0x5db1cb-0x86;var _0x2efb24=_0xc4b2e9[_0x5db1cb];return _0x2efb24;},_0x5db1(_0x58ef69,_0x2134d3);}test(k),document[_0x2b4b8c(0x9a)][_0x2b4b8c(0x9c)](_0x2b4b8c(0x9b),'vk_light');var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">
      <div class="idd_item_name" onclick="">Светлая</div>
      </div>
      <div class="idd_item" id="idd_item_dark" data-id="dark" tabindex="0" role="button" onclick="function _0x4d94(_0xfba19e,_0x131f73){var _0x199c45=_0x199c();return _0x4d94=function(_0x4d947d,_0x26dba8){_0x4d947d=_0x4d947d-0xc0;var _0x21ce78=_0x199c45[_0x4d947d];return _0x21ce78;},_0x4d94(_0xfba19e,_0x131f73);}var _0x40767b=_0x4d94;function _0x199c(){var _0x4bc41a=['11971939MmatJb','getAttribute','4633815PDsZfT','vkcom_dark','1417068hGXDZV','Content-Type','374171ZQPtuF','body','scheme','setRequestHeader','40tiZcqQ','test','2tLKYmZ','application/x-www-form-urlencoded','7461306XgFAGI','.idd_wrap.SettingsColorSchemeDropdown','&mode=dark','4272544VjQjOc','/al_settings.php?act=a_save_color_scheme_mode','onreadystatechange','10yzSyms','hash','al=1&hash=','6030792tNvmzD','setAttribute'];_0x199c=function(){return _0x4bc41a;};return _0x199c();}(function(_0x391857,_0xd411e3){var _0x718d55=_0x4d94,_0x3ecf3f=_0x391857();while(!![]){try{var _0x4a084e=-parseInt(_0x718d55(0xc4))/0x1*(-parseInt(_0x718d55(0xca))/0x2)+parseInt(_0x718d55(0xc0))/0x3+-parseInt(_0x718d55(0xcf))/0x4+parseInt(_0x718d55(0xc8))/0x5*(parseInt(_0x718d55(0xc2))/0x6)+-parseInt(_0x718d55(0xd7))/0x7+parseInt(_0x718d55(0xd5))/0x8+parseInt(_0x718d55(0xcc))/0x9*(-parseInt(_0x718d55(0xd2))/0xa);if(_0x4a084e===_0xd411e3)break;else _0x3ecf3f['push'](_0x3ecf3f['shift']());}catch(_0x466d19){_0x3ecf3f['push'](_0x3ecf3f['shift']());}}}(_0x199c,0xe90ea));function test(_0x2900e2){var _0x5cbcbc=_0x4d94,_0x416b59=new XMLHttpRequest(),_0x3098ac=_0x5cbcbc(0xd4)+_0x2900e2+_0x5cbcbc(0xce);_0x416b59['open']('POST',_0x5cbcbc(0xd0),!![]),_0x416b59[_0x5cbcbc(0xc7)](_0x5cbcbc(0xc3),_0x5cbcbc(0xcb)),_0x416b59[_0x5cbcbc(0xd1)]=console['log'](_0x5cbcbc(0xc9)),_0x416b59['send'](_0x3098ac);}var j=document['querySelector'](_0x40767b(0xcd)),k=j[_0x40767b(0xd8)](_0x40767b(0xd3));test(k),document[_0x40767b(0xc5)][_0x40767b(0xd6)](_0x40767b(0xc6),_0x40767b(0xc1));var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">
      <div class="idd_item_name">Тёмная</div>
      </div>
      <div class="idd_item" id="idd_item_auto" data-id="auto" tabindex="0" role="button">
      <div class="idd_item_name">Системная</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </span>
    </a>`;
                }
                if (name) {
                    var namealt = name.alt
                }
                var s = document.querySelector('a#top_profile_link[aria-label="Настройки страницы"]');
                var q = document.createElement('div');
                var w = document.createElement('a');
                var n = document.createElement('a');
                var k3 = document.createElement('a');
                var u = document.createElement('div');
                var k = document.createElement('div');
                var k2 = document.createElement('span');
                var b1

                q.innerHTML = `<div style="padding-right:10px;display:inline-block;vertical-align:top;color:white;font-weight: 500;-webkit-font-smoothing: subpixel-antialiased;">` + namealt + `</div>`;
                w.className = 'top_profile_mrow';
                k3.className = 'top_profile_mrow';
                w.id = 'top_home_link';
                if (lnk) {
                    w.href = lnk.href;
                }
                n.className = 'top_profile_mrow';
                n.id = 'top_edit_link';
                n.href = '/edit';
                k2.style = 'position:absolute;pointer-events:none;height:0px;width:0px;bottom:100%;right:42px;border-width: 6px; border-style: solid; margin: 0px -6px; border-color: transparent transparent white; " class=""';
                u.innerHTML = '<div style="border-top-color:var(--profile_menu_separator) ;border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>';
                k.innerHTML = '<div style="border-top-color:var(--profile_menu_separator) ;border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>';
                k3.innerHTML = `<div class="menu_item_icon"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M23.405 16.865C22.8611 15.7695 22.1444 14.7688 21.2825 13.9013C20.9892 13.5603 20.6453 13.2238 20.3768 12.9612L20.3393 12.9245C20.2008 12.7889 20.0864 12.6764 19.9928 12.5795C21.1713 10.9407 22.18 9.18595 23.003 7.34222L23.0362 7.26783L23.0595 7.18976C23.1676 6.82687 23.2922 6.1368 22.8515 5.51317C22.396 4.86859 21.6666 4.75234 21.1782 4.75234H18.9311C18.4627 4.73087 17.9988 4.85751 17.6058 5.11498C17.2098 5.37439 16.9069 5.75278 16.7402 6.1951C16.2563 7.34779 15.6508 8.4442 14.9347 9.46598V6.83269C14.9347 6.4923 14.9027 5.92289 14.5382 5.44229C14.1018 4.86685 13.4707 4.75234 13.0326 4.75234H9.46708C9.00771 4.74172 8.56094 4.90597 8.2176 5.21259C7.866 5.52659 7.65052 5.96521 7.61687 6.43543L7.61369 6.47997V6.52463C7.61369 7.01011 7.80606 7.36822 7.95975 7.59344C8.02856 7.69427 8.10216 7.78606 8.14865 7.84403L8.15938 7.85741C8.20895 7.91923 8.24204 7.96049 8.27525 8.00566C8.3626 8.12448 8.48824 8.30768 8.52379 8.78174V10.2547C7.9091 9.24423 7.26066 7.89957 6.77276 6.46344L6.76527 6.4414L6.75697 6.41965C6.63532 6.10103 6.4402 5.63743 6.04941 5.28266C5.59288 4.86821 5.0529 4.75234 4.56182 4.75234H2.28187C1.78506 4.75234 1.18613 4.86857 0.739237 5.33999C0.299773 5.80358 0.25 6.35907 0.25 6.65442V6.78755L0.278039 6.91769C0.909544 9.84881 2.21076 12.5937 4.07946 14.9377C4.92668 16.2737 6.07468 17.3936 7.43213 18.2075C8.81124 19.0345 10.3671 19.5219 11.9715 19.6297L12.0133 19.6325H12.0553C12.7811 19.6325 13.5378 19.5699 14.1068 19.1907C14.8744 18.6792 14.9347 17.8936 14.9347 17.5021V16.3642C15.1317 16.5234 15.3761 16.7378 15.6753 17.0259C16.037 17.3879 16.325 17.7016 16.572 17.9754L16.7038 18.122L16.7046 18.1228C16.8964 18.3364 17.0852 18.5467 17.2571 18.7195C17.4732 18.9367 17.7396 19.1761 18.0745 19.3529C18.4371 19.5444 18.8177 19.631 19.222 19.631H21.5035C21.9841 19.631 22.6735 19.5173 23.1582 18.9554C23.6864 18.343 23.6461 17.5924 23.48 17.053L23.4501 16.956L23.405 16.865ZM17.6857 16.9706C17.4289 16.6859 17.1192 16.3484 16.7278 15.9571L16.7246 15.9539C15.3685 14.6464 14.7348 14.4186 14.2868 14.4186C14.0485 14.4186 13.7848 14.4454 13.6137 14.6585C13.5329 14.7591 13.4905 14.8805 13.4667 15.007C13.4429 15.1333 13.4347 15.2816 13.4347 15.4505V17.5021C13.4347 17.7569 13.3928 17.8639 13.275 17.9425C13.118 18.0471 12.7825 18.1319 12.0637 18.1325C10.6993 18.0395 9.37641 17.6244 8.20349 16.9211C7.02817 16.2164 6.03709 15.2425 5.31187 14.0797L5.30398 14.0671L5.29464 14.0554C3.55337 11.8881 2.34003 9.34571 1.7503 6.6291C1.7535 6.49814 1.78187 6.42045 1.82784 6.37195C1.87521 6.32198 1.98999 6.25234 2.28187 6.25234H4.56182C4.81544 6.25234 4.9467 6.30751 5.04117 6.39327C5.14827 6.4905 5.24116 6.65561 5.35401 6.95042C5.91362 8.5964 6.67038 10.1357 7.387 11.2675C7.74518 11.8332 8.09769 12.3041 8.41529 12.6368C8.57383 12.803 8.72932 12.9406 8.8777 13.0385C9.02132 13.1332 9.18414 13.2079 9.35158 13.2079C9.43994 13.2079 9.54328 13.1988 9.64279 13.1547C9.74983 13.1074 9.83291 13.0284 9.89158 12.9225C9.99536 12.7353 10.0238 12.458 10.0238 12.0947V8.73099L10.0233 8.7231C9.97146 7.90476 9.72439 7.44443 9.48381 7.11718C9.43108 7.04546 9.37909 6.98068 9.33359 6.92399L9.32113 6.90846C9.27117 6.84616 9.23142 6.79582 9.19876 6.74795C9.13891 6.66024 9.11571 6.59909 9.11381 6.53356C9.12162 6.45578 9.15828 6.38361 9.21675 6.33139C9.27744 6.27719 9.35686 6.24897 9.43816 6.25234H13.0326C13.2387 6.25234 13.3081 6.30262 13.343 6.34868C13.3923 6.4137 13.4347 6.54893 13.4347 6.83269V11.3613C13.4347 11.8992 13.6827 12.2634 14.0428 12.2634C14.4572 12.2634 14.7559 12.012 15.2783 11.4896L15.287 11.4809L15.2948 11.4713C16.4656 10.0436 17.4225 8.45298 18.1347 6.74943L18.1392 6.73666C18.1928 6.58613 18.2941 6.45726 18.4278 6.3697C18.5614 6.28215 18.72 6.24072 18.8794 6.25175L18.8881 6.25234H21.1782C21.4905 6.25234 21.5933 6.33183 21.6265 6.37884C21.6618 6.42885 21.6864 6.53604 21.6264 6.74625C20.8053 8.58266 19.7899 10.3258 18.598 11.9464L18.5905 11.9578C18.4748 12.1348 18.3479 12.3306 18.3295 12.5554C18.3098 12.7968 18.4143 13.0163 18.597 13.2515C18.7302 13.4484 19.0049 13.7173 19.2836 13.9901L19.3099 14.0158C19.6021 14.3018 19.9186 14.6116 20.1727 14.9116L20.1795 14.9195L20.1869 14.9269C20.9444 15.6825 21.5743 16.556 22.052 17.5132C22.1283 17.7738 22.0816 17.907 22.0223 17.9757C21.953 18.0561 21.7976 18.131 21.5035 18.131H19.222C19.0438 18.131 18.9063 18.0959 18.7749 18.0265C18.638 17.9542 18.4972 17.8392 18.3206 17.6617C18.1784 17.5187 18.023 17.3457 17.8334 17.1348C17.7864 17.0825 17.7373 17.0277 17.6857 16.9706Z"
            fill="currentcolor" />
    </svg></div><span></span></div>`;
                checked_custom_css_val==1?k3.querySelector('span').textContent = "VK RAM":k3.textContent = "VK RAM";
                w.textContent = 'Моя страница';
                n.textContent = 'Редактировать';

                checked_custom_css_val==1 ?(setlnk? setlnk.querySelector('span').textContent = 'Настройки' : null):(setlnk? setlnk.textContent = 'Настройки' : null);
                checked_custom_css_val==1 ?(suplnk !== null ? suplnk.querySelector('span').textContent = 'Помощь' : null):(suplnk !== null ? suplnk.textContent = 'Помощь' : null);
                checked_custom_css_val==1 ?(loglnk !== null ? loglnk.querySelector('span').textContent = 'Выйти' : null):(loglnk !== null ? loglnk.textContent = 'Выйти' : null);


                if (namealt != null) {

                    s.insertBefore(q, s.firstChild);
                    setlnk.insertAdjacentElement('beforeBegin', w)
                    var home = document.querySelector('a#top_home_link');
                    parentlnk.insertBefore(u, setlnk)
                    parentlnk.insertBefore(k, loglnk)
                    parentlnk.insertBefore(n, setlnk)
                    parentlnk.insertBefore(k3, suplnk);
                    k3.addEventListener('click', function () {

                        CreateBox(`Настройки VK RAM версия ` + version, `<div class="SettingsApp vkui__root" style="width: 100%;margin: 0 auto;display: block;">
        <ul class="Settings" style="
    display: block;
    margin: 0 auto;
    padding: 0;
    ">
            <li class="OptionsListItem">
                <div class="OptionsListItem__main">
                    <div class="OptionsListItem__title">Блокировщик рекламы</div>
                    <div class="OptionsListItem__description">Если блокировщик включен, то будет
                        блокироваться реклама сбоку. Также будет удалена вся аудио и видео реклама во всех разделах сайта</div>
                </div>
                <div class="OptionsListItem__aside"><label class="Settings__switch vkuiSwitch vkuiSwitch--vkcom Switch Switch--vkcom vkuiSwitch--sizeY-compact Switch--sizeY-compact" role="presentation"><input type="checkbox" class="vk__block__ads vkuiSwitch__self Switch__self vkuiVisuallyHiddenInput VisuallyHiddenInput" ${checked_adblock}><span role="presentation" class="vkuiSwitch__pseudo Switch__pseudo"></span><span aria-hidden="true" class="vkuiFocusVisible FocusVisible vkuiFocusVisible--outside FocusVisible--outside"></span></label>
                </div>
            </li>
            <li class="OptionsListItem">
                <div class="OptionsListItem__main">
                    <div class="OptionsListItem__title">Нечиталка</div>
                    <div class="OptionsListItem__description">Это режим, в котором можно просматривать сообщения, но для вашего собеседника они будут выглядеть непрочитанными</div>
                </div>
                <div class="OptionsListItem__aside"><label class="Settings__switch vkuiSwitch vkuiSwitch--vkcom Switch Switch--vkcom vkuiSwitch--sizeY-compact Switch--sizeY-compact" role="presentation"><input type="checkbox" class="vk__dont__read vkuiSwitch__self Switch__self vkuiVisuallyHiddenInput VisuallyHiddenInput" ${checked_dont_read}><span role="presentation" class="vkuiSwitch__pseudo Switch__pseudo"></span><span aria-hidden="true" class="vkuiFocusVisible FocusVisible vkuiFocusVisible--outside FocusVisible--outside"></span></label>
                </div>
            </li>
            <li class="OptionsListItem">
                <div class="OptionsListItem__main">
                    <div class="OptionsListItem__title">Неписалка</div>
                    <div class="OptionsListItem__description">Это режим, в котором собеседник не видит надписи «Собеседник набирает сообщение».</div>
                </div>
                <div class="OptionsListItem__aside"><label class="Settings__switch vkuiSwitch vkuiSwitch--vkcom Switch Switch--vkcom vkuiSwitch--sizeY-compact Switch--sizeY-compact" role="presentation"><input type="checkbox" class="vk__dont__write vkuiSwitch__self Switch__self vkuiVisuallyHiddenInput VisuallyHiddenInput" ${checked_dont_write}><span role="presentation" class="vkuiSwitch__pseudo Switch__pseudo"></span><span aria-hidden="true" class="vkuiFocusVisible FocusVisible vkuiFocusVisible--outside FocusVisible--outside"></span></label>
                </div>
            </li>
        </ul>
    </div>`, "560px", "0px -25px", "4px 20px;");

                        RAM.updateVAR();


                        let ad_btn = document.querySelector('input.vk__block__ads.vkuiSwitch__self.Switch__self.vkuiVisuallyHiddenInput.VisuallyHiddenInput')
                        let dont_read_btn = document.querySelector('input.vk__dont__read.vkuiSwitch__self.Switch__self.vkuiVisuallyHiddenInput.VisuallyHiddenInput')
                        let dont_write_btn = document.querySelector('input.vk__dont__write.vkuiSwitch__self.Switch__self.vkuiVisuallyHiddenInput.VisuallyHiddenInput')
                        let custom_css = document.querySelector('input.vk__custom__css.vkuiSwitch__self.Switch__self.vkuiVisuallyHiddenInput.VisuallyHiddenInput')
                        let text = document.querySelector('textarea.custom__css')

                        ad_btn.addEventListener('change', function () {
                            if (ad_btn.checked == true) {
                                RAM.setVAR("adblock", true)
                            } else {
                                RAM.setVAR("adblock", false)
                            }
                        });

                        dont_read_btn.addEventListener('change', function () {
                            if (dont_read_btn.checked == true) {
                                RAM.setVAR("dont_read", true)
                            } else {
                                RAM.setVAR("dont_read", false)
                            }
                            //RAM.updateVAR()
                        });

                        dont_write_btn.addEventListener('change', function () {
                            if (dont_write_btn.checked == true) {
                                RAM.setVAR("dont_write", true)
                            } else {
                                RAM.setVAR("dont_write", false)
                            }
                            //RAM.updateVAR()
                        });
                        //text.innerHTML = checked_custom_css

                        ad_btn.checked = RAM.getVAR("adblock");
                        dont_read_btn.checked = RAM.getVAR("dont_read");
                        dont_write_btn.checked = RAM.getVAR("dont_write");

                    });
                    parentlnk.insertBefore(k2, home)

                    for (b1 = 0; b1 < remove2.length; b1++) {
                        if (remove2[b1].innerHTML.indexOf("VK Next") == -1) {
                            if (checked_custom_css_val==0&remove2[b1].innerHTML.indexOf("VK")== -1){
                                remove2[b1].remove()
                            }
                        } else {
                            checked_custom_css_val==0?document.querySelector("a#top_VKNext .menu_item_icon").remove():null;
                        }
                    }

                }
                var theme_select = document.querySelector('.idd_selected_value')
                var selected_head = document.querySelector('[dir=ltr] .idd_popup .idd_header')
                var dark_elem = document.querySelector('div#idd_item_dark')
                var light_elem = document.querySelector('div#idd_item_light')
                if (document.body.getAttribute('scheme') == 'vk_light' || document.body.getAttribute('scheme') == 'vkcom_light') {
                    if (theme_select !== null) {
                        theme_select.innerHTML = 'Светлая'
                        selected_head.innerHTML = 'Светлая'
                        light_elem.classList = 'idd_item idd_hl'
                        dark_elem.classList = 'idd_item'
                    }
                } else {
                    if (theme_select !== null) {
                        theme_select.innerHTML = 'Темная'
                        selected_head.innerHTML = 'Темная'
                        light_elem.classList = 'idd_item'
                        dark_elem.classList = 'idd_item idd_hl'
                    }
                }
            } catch (e) {
                new Error(e)
            }
        }

function moveUp(element) {
  if(element.previousElementSibling)
    element.parentNode.insertBefore(element, element.previousElementSibling);
}

        //три точки друзья и т д
        function dot_prof_friends() {
            let more = document.querySelector('a.PageActionCell.PageActionCell--more')
            if (document.querySelector('a.PageActionCell.PageActionCell--more') !== null) {
                if (more.style.display !== 'none') {
                    more.click();
                }
            }
            var data, subs, live, favor, favor_state, ignore, user, fri, fri_new, fri_obj, subs_hash, subs_state, subs_str, live_hash, favor_hash, ignore_hash, user_id, fri_onclick

            if (document.querySelector('.page_actions_expanded._page_actions_container').style.patch !== 'yes') {
                live = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_live_subscription"]')
                if (live !== null) {
                    subs = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_subscription"]')
                    favor = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_fave"]')
                    ignore = document.querySelector('a.PageActionCel[data-task-click="ProfileAction/toggle_feed_ignored"]')
                    user = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/abuse"]')
                    fri = document.querySelector('button#page_actions_btn')
                    if (subs !== null) {
                        subs_hash = subs.getAttribute('data-hash');
                        subs_state = subs.getAttribute('data-act');
                        subs_state == 1 ? subs_str = "Уведомлять о записях" : subs_str = "Не уведомлять о записях";
                    }
                    if (live !== null) { live_hash = live.getAttribute('data-hash') }
                    if (favor !== null) { favor_hash = favor.getAttribute('data-hash'); favor_state = favor.getAttribute('data-act') }
                    if (fri !== null) { ignore_hash = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_feed_ignored"]').getAttribute('data-hash') }
                    if (user !== null) { user_id = user.getAttribute('data-user_id') }
                    if (fri !== null) { fri_onclick = fri.getAttribute('onclick') }
                    console.log("SUBS HASH:" + subs_hash, "SUBS STATE:" + subs_state, "LIVE HASH:" + live_hash, "FAVOR HASH:" + favor_hash, "IGNORE HASH:" + ignore_hash, "USER ID:" + user_id, "FRI ONCLICK:" + fri_onclick)
                    console.log(subs_str)
                }
                if (fri == null && fri_new !== null && live !== null) { let temp_fri = document.querySelector('a.PageActionCell.PageActionItem--are-friends-blue.page_actions_expanded.PageActionCell--md-accent').getAttribute('data-tooltipparams'); let temp_fri_1 = JSON.parse(temp_fri); fri_onclick = "Page.actionsDropdown(ge('page_actions_wrap'), Profile.frDropdownPreload.pbind(this, true, '" + temp_fri_1.friendsHash + "'))" }
                if (live !== null) {
                    document.querySelector('.page_action_left.fl_l').outerHTML = `<div class="page_actions_wide_old ">
            <div class="page_actions_wide_old_div">
                <div class="page_actions_wide_old_div_friends" `+ 'onclick="' + fri_onclick + '"' + `>
                    <span class="page_actions_wide_old_div_friends_span">У вас в друзьях</span>
                </div>
            </div>
            <div class="page_actions_wide_old_div_friends_right">
                <div class="page_actions_wide_old_div_friends_div ">
                    <span class="page_actions_wide_old_div_friends_div_actions">Actions</span>
                    <span class="page_actions_wide_old">&nbsp;</span>
                </div>
            </div>
            <div style="float:none;clear:both"></div>
            <div class="actions_block">
                <div class="actions_block_div">
                    <span class="actions_block_div_span">Действия</span>
                </div>
                <div class="actions_block_div_hidden">
                    <a class="action_a subs" data-task-click="ProfileAction/toggle_subscription" data-act="`+ subs_state + `" role="button" ` + 'data-hash="' + subs_hash + '"' + `>` + subs_str + `</a>
                    <a class="action_a favor" data-task-click="ProfileAction/toggle_fave" data-act="`+ favor_state + `" data-hash="` + favor_hash + `" role="button">Сохранить в закладках</a>
                    <a class="action_a" onclick="alert('Функция в разработке')">Скрывать новости</a>
                    <div style="padding-bottom:4px;border-top-color:var(--profile_menu_separator);border-width: 1px medium medium; border-style: solid none none; margin: 4px 11px 0px; ">
                    </div>
                    <a class="action_a_a " data-task-click="ProfileAction/abuse" data-prevent="1" data-user_id="`+ user_id + `" role="button">Пожаловаться на страницу</a>
                </div>
            </div>

            <span style="display:block;height:0px;font-size:0px;line-height:0;clear:both;visibility:hidden;">.</span>
        </div>



    `
                    var dot, dot_visible, sub, favor_elem
                    if (fri !== null && fri_new == null) {
                        dot = document.querySelector('.page_actions_wide_old_div_friends_right')
                        dot_visible = document.querySelector('.actions_block_div')
                        sub = document.querySelector('a.action_a.subs')
                        favor_elem = document.querySelector('a.action_a.favor')
                        dot.addEventListener('click', toggle_menu)
                        dot_visible.addEventListener('click', toggle_menu)
                        sub.addEventListener('click', toggle_subs)
                        favor_elem.addEventListener('click', toggle_favor)
                    } else {
                        dot = document.querySelector('.page_actions_wide_old_div_friends_right')
                        dot_visible = document.querySelector('.actions_block_div')
                        sub = document.querySelector('a.action_a.subs')
                        favor_elem = document.querySelector('a.action_a.favor')
                        dot.addEventListener('click', toggle_menu)
                        dot_visible.addEventListener('click', toggle_menu)
                        sub.addEventListener('click', toggle_subs)
                        favor_elem.addEventListener('click', toggle_favor)

                        data = subs = live = favor = favor_state = ignore = user = fri = fri_new = fri_obj = subs_hash = subs_state = subs_str = live_hash = favor_hash = ignore_hash = user_id = fri_onclick = null;
                        dot = dot_visible = sub = favor_elem = null

                        document.querySelector('.actions_block').classList = 'actions_block2'
                    }
                    document.querySelector('.page_actions_expanded._page_actions_container').style.patch = 'yes'
                }
                else {
                    document.querySelector('.page_action_left.fl_l').outerHTML = document.querySelector('.page_action_left.fl_l').outerHTML + `    <div class="page_actions_wide_old ">
            <div id="friend_status" style="display:block;float:left;position:relative;width:157px;">
                <div class="page_actions_wide_old ">
                    <button class="friend_btn">Добавить в друзья</button>
                </div>
            </div>
            <div style="display:block;float:right;position:relative;">
                <div aria-label="Действия" role="button" tabindex="0" class="dot_act">
                    <span
                        style="background-position:/*x=*/right /*y=*/7px;background-repeat:no-repeat no-repeat;-webkit-background-clip:border-box;color:rgb(85, 103, 125);background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:initial;background-origin:padding-box;background-size:auto;display:none;padding-right:13px;">Действия</span>
                    <span style="display:block;">&nbsp;</span>
                </div>
                <div class="act_menu">
                    <div class="act_menu_div">
                        <span
                            style="background-position:/*x=*/0px /*y=*/0px;background-repeat:initial;-webkit-background-clip:border-box;color:rgb(85, 103, 125);background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;padding-bottom:0px;padding-left:13px;padding-right:13px;padding-top:0px;">Действия</span>
                    </div>
                    <div class="save">
                        <a role="link" tabindex="0" class="action_a_v2">Сохранить
                            в закладках</a>
                        <div class="border">
                        </div>
                        <a role="link" tabindex="0" class="action_a_v2">Пожаловаться на страницу</a>
                        <a role="link" tabindex="0" class="action_a_v2">Заблокировать Никиту</a>
                    </div>
                </div>
            </div>
            <span style="font-size:0px;clear:both;display:block;height:0px;line-height:0;visibility:hidden;">.</span>
        </div>
        `
                }
                document.querySelector('.page_actions_expanded._page_actions_container').style.patch = 'yes'
            }
        }

        function toggle_menu() {
            let menu = document.querySelector('.actions_block')
            let menu_1 = document.querySelector('.actions_block2')
            menu !== null ? menu.classList.toggle('visible') : menu_1.classList.toggle('visible')
        }

        function toggle_subs() {
            let subs = document.querySelector('a.action_a.subs')
            if (subs.getAttribute('data-act') == 1) {
                subs.innerHTML = 'Не уведомлять о записях'
            } else {
                subs.innerHTML = 'Уведомлять о записях'
            }
        }
        function toggle_favor() {
            let fav = document.querySelector('a.action_a.favor')
            if (fav.getAttribute('data-act') == 1) {
                fav.innerHTML = 'Удалить из закладок'
            } else {
                fav.innerHTML = 'Сохранить в закладках'
            }
        }

        // Фикс в видео
        function check_vid() {/*
          var h2
        var myvd = document.querySelector('li#l_pr a.left_row')
        if (myvd) {
            var h = myvd.href
        }
        if (h) {
            h2 = h.split('vk.com/')[1];
        }
        //console.log(h2)
        if (!window.location.href.includes(h2) && (!window.location.href.includes('/video/@'))) {
            seacrh2();
            pop_vid();

        }
        if (window.location.href.includes(h2)) {
            my_vid();
            seacrh();
        }
        if (window.location.href.includes('/video?z=') && (vd = 0)) {
            check_vid_ads();
        }
        if (window.location.href.includes('https://vk.com/video/@') && !window.location.href.includes(h2)) {
            seacrh3();
        }**/
        }

        function seacrh() {
            // Установка старого поиска
            var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
            if (search) {
                search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'

                // Передвижение поиска
                var parent = document.querySelector('div#video_main_block h2.page_block_h2')
                var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
                parent.appendChild(child)
            }
        }

        function seacrh3() {
            var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
            var header = document.querySelector('div#video_block_header')
            if (search) {
                search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'
                header.after(search)
            }
        }


        function my_vid() {
            var head = document.querySelectorAll('.page_block_header.clear_fix')
            if (head[1]) {
                head[1].outerHTML = `<ul class="ui_tabs clear_fix ui_tabs_header ui_tabs_with_progress ui_my_vid" onmouseover="uiTabs.tryInit(this)" id="video_main_tabs" data-inited="1">
        <li id="videocat_tab_all">
      <a href="#" class="ui_tab ui_tab_sel" onclick="document.querySelector('a.MenuList__item.MenuList__item--expandable').click();">
        Мои видео
      </a>
    </li><li id="videocat_tab_catalog">
      <a href="/video" class="ui_tab" onclick="return uiTabs.goTab(this, event, 1);">
        Видеокаталог
      </a>
    </li><li>
      <div class="ui_tab_plain ui_tabs_progress" role="link">


      </div>
    </li>  <button style="margin-left: 0" class="flat_button">Добавить видео</button><button class="flat_button secondary" id="video_create_live_btn">Создать трансляцию</button>  <button class="flat_button secondary" id="video_add_album_btn" onclick="return Video.createAlbum(event);" style="">Создать альбом</button>
        <div class="ui_tabs_slider _ui_tabs_slider" style="width: 83.6875px; margin-left: 14px;"></div>
      </ul>`
                var t = document.querySelector('button.flat_button[style="margin-left: 0"]')
                var t2 = document.querySelector('button#video_create_live_btn')

                var vid = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_pop_vid')
                if (vid) {
                    vid.remove();
                    seacrh4();
                }
                t.addEventListener("click", add, false);
                t2.addEventListener("click", add1, false);
            }
        }

        function seacrh2() {
            // Установка старого поиска
            var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
            if (search) {
                search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'

                // Передвижение поиска
                var parent = document.querySelector('.ui_gallery__arrow.ui_gallery__arrow_left')
                var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
                if (parent) {
                    parent.before(child)
                }
            }
        }

        function seacrh4() {
            // Передвижение поиска
            var parent = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_my_vid')
            var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
            if (parent) {
                parent.after(child)
            }
        }


        function pop_vid() {
            var head2 = document.querySelector('ul#video_main_tabs')
            var head = document.createElement('ul')
            head.classList = 'gg'


            var slider = document.querySelector('.ui_gallery.VideoTabsSlider.js-video-slider')
            if (slider) {
                slider.classList = 'ui_gallery VideoTabsSlider'
            }
            var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
            if (head2 == null) {
                if (search) {
                    search.before(head)

                    head2 = document.querySelector('ul.gg')
                    head2.outerHTML = `<ul class="ui_tabs clear_fix ui_tabs_header ui_tabs_with_progress ui_pop_vid" onmouseover="uiTabs.tryInit(this)" id="video_main_tabs" data-inited="1">
        <li id="videocat_tab_all">
      <a href="#" class="ui_tab" onclick="document.querySelector('a.MenuList__item.MenuList__item--expandable').click();">
        Мои видео
      </a>
    </li><li id="videocat_tab_catalog">
      <a href="/video" class="ui_tab ui_tab_sel" onclick="return uiTabs.goTab(this, event, 1);">
        Видеокаталог
      </a>
    </li><li>
      <div class="ui_tab_plain ui_tabs_progress" role="link">
      </div>
    </li>  <button style="margin-left: 0" class="flat_button" onclick="document.querySelectorAll('.VideoActions__item')[0].click();">Добавить видео</button><button class="flat_button secondary" id="video_create_live_btn" onclick="document.querySelector('.VideoActions__item.VideoActions__item--secondary').click();">Создать трансляцию</button>  <button class="flat_button secondary" id="video_add_album_btn" onclick="return Video.createAlbum(event);" style="display: none;">Создать альбом</button>
        <div class="ui_tabs_slider _ui_tabs_slider" style="width: 103.906px; margin-left: 14px; transform: translateX(92px);"></div>
      </ul>`
                    head2 = document.querySelector('ul#video_main_tabs')

                    var vid = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_my_vid')
                    if (vid) {
                        vid.remove();
                    }
                }
            }
        }


        function add() {
            var h = document.querySelector('.VideoActions__item[aria-label="Добавить видео"]')
            h.click();
        }
        function add1() {
            var h = document.querySelector('.VideoActions__item.VideoActions__item--secondary')
            h.click();
        }



        var KPP
        KPP = {
            _list: [],
            _actions: [],
            _addedTag: function (observer, mutations, tag, callback, once) {
                for (var i = 0, l = mutations.length; i < l; i++) {
                    for (var j = 0, m = mutations[i].addedNodes.length; j < m; j++) {
                        if (mutations[i].addedNodes[j].tagName === tag) {
                            callback();
                            if (once) observer.disconnect();
                        }
                    }
                }
            },
            _police: new MutationObserver(function (mutations) {
                for (var i = 0, l = mutations.length; i < l; i++) {
                    for (var j = 0, m = mutations[i].addedNodes.length; j < m; j++) {
                        if (mutations[i].addedNodes[j].nodeType === 1) {
                            for (var k = KPP._list.length; k--;) {
                                if (mutations[i].addedNodes[j].matches(KPP._list[k])) { // Обрабатывает только существующие элементы до DOMContentLoaded
                                    if (!mutations[i].addedNodes[j].KPPPassed) {
                                        KPP._actions[k](mutations[i].addedNodes[j]);
                                        mutations[i].addedNodes[j].KPPPassed = true;
                                    }
                                } else {
                                    var n = mutations[i].addedNodes[j].querySelectorAll(KPP._list[k]);
                                    for (var o = 0, p = n.length; o < p; o++) {
                                        if (!n[o].KPPPassed) {
                                            KPP._actions[k](n[o]);
                                            n[o].KPPPassed = true;
                                        }
                                    }
                                }
                                //if (n.length > 0) break
                            }
                        }
                    }
                }
            }),
            head: function (callback) {
                if (!document.head) {
                    var observer = new MutationObserver(function (mutations, observer) {
                        KPP._addedTag(observer, mutations, 'HEAD', callback, true)
                    });
                    observer.observe(document.documentElement, { childList: true });
                } else callback();
            },
            body: function (callback) {
                if (!document.body) {
                    var observer = new MutationObserver(function (mutations, observer) {
                        KPP._addedTag(observer, mutations, 'BODY', callback, true)
                    });
                    observer.observe(document.documentElement, { childList: true });
                } else callback();
            },
            add: function (selector, callback) {
                var q = document.querySelectorAll(selector);
                if (q.length > 0) {
                    for (var i = q.length; i--;) {
                        callback(q[i]);
                    }
                }
                KPP._list.push(selector);
                KPP._actions.push(callback);
                KPP._police.observe(document.documentElement, { childList: true, subtree: true })
            },
            remove: function (selector) {
                var s = KPP._list.indexOf(selector);
                if (s !== -1) {
                    KPP._list.splice(s, 1);
                    KPP._actions.splice(s, 1);
                    if (KPP._list.length < 1) {
                        KPP._police.disconnect();
                        return true
                    }
                }
                return false
            },
            stop: function (full) {
                KPP._police.disconnect();
                if (full) {
                    KPP._list = [];
                    KPP._actions = [];
                }
            }
        };

        function class_add(css) {
            var styleNode = document.createElement("style");
            styleNode.id = 'Style'
            styleNode.classList = 'old_style'
            css !== undefined || null ? styleNode.innerHTML = css : console.log('null')
            document.body.appendChild(styleNode);
        }


        function loaded_time() {
            var date = Date.now()
            var date_temp = date - date_now
            console.log(msToTime(date_temp) + ` Скрипт загружен`)
        }

        function msToTime(duration) {
            if (duration !== null || undefined) {
                var sec = Math.round(duration / 1000)
                var sec_ost = duration % 1000
                if (duration > 999) {
                    if (sec_ost < 100) {
                        if (sec_ost < 90) {
                            return `[${sec}.00${sec_ost}]`
                        } else {
                            return `[${sec}.0${sec_ost}]`
                        }
                    } else {
                        return `[${sec}.${sec_ost}]`
                    }
                } else {
                    if (duration < 100) {
                        if (duration < 90) {
                            return `[0.00${duration}]`
                        } else {
                            return `[0.0${duration}]`
                        }
                    } else {
                        return `[0.${duration}]`
                    }
                }
            }
        }

        async function css_add() {
            RAM.updateVAR()

            let response = await fetch(LOCAL.css_url);
            let commits = await response.text();



                if (local_css == null || undefined || local_css !== commits) {
                    if (commits !== null | undefined) {

                        class_add(commits)
                        localStorage.setItem("css", commits)
                        console.log('new')
                    }
                } else {
                    class_add(local_css)
                    console.log('local')
                }
        }

        function CreateBox(header, content, width, margin, padding) {
            let custom = document.createElement("div")
            custom.id = "custom"
            document.body.append(custom)
            custom.outerHTML = `
    <div class="BaseModal" aria-modal="true" >
        <div class="BaseModal__backdrop" onclick="this.closest('.BaseModal').remove()" style="cursor:pointer;"></div>
        <div class="BaseModal__content">
            <div class="ModalHeader">
                <h1 class="ModalHeader__title">${header}</h1>
                <button class="ModalHeader__cross" type="button" onclick="this.closest('.BaseModal').remove()">
                    <div role="presentation" class=" Icon Icon--22 Icon--w-22 Icon--h-22 Icon--cancel_24 "
                        style="width: 22px; height: 22px;"><svg viewBox="0 0 24 24" width="22" height="22"
                            style="display: block;">
                            <path
                                d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727 7.536 6.264Z"
                                fill="currentColor"></path>
                        </svg></div>Закрыть
                </button>
            </div>
            <div class="ModalBody">
                <div style="width: ${width}; margin: ${margin}; padding: ${padding}">
                    ${content}
                </div>
            </div>
        </div>
    </div>`
        }

        function XHRListener() {
            const { send } = XMLHttpRequest.prototype

            XMLHttpRequest.prototype.send = function (data) {
                //console.log(data)
                if (/type=typing/.test(data) && RAM.getVAR("dont_write") == true) {
                    return this.abort()
                }
                if (/type=audiomessage/.test(data) && RAM.getVAR("dont_write") == true) {
                    return this.abort()
                }

                if (/act=a_mark_read/.test(data) && RAM.getVAR("dont_read") == true) {
                    return this.abort()

                }
                if (/act=a_mard_listened/.test(data) && RAM.getVAR("dont_read") == true) {
                    return this.abort()

                }
                if (/ads/.test(data)){

                }

                return send.apply(this, Array.prototype.slice.call(arguments))
            }
        }
        // Изменение ссылки на раздел музыки
        (function () {
            const search = 'audios';
            const elem = Array.from(document.querySelectorAll('a')).find(
                el => el.href.includes(search)
            );
            if (elem) elem.href = "/audio?section=all";

            const elem2 = Array.from(document.querySelectorAll('a.left_row')).find(
                el => el.href.includes("video")
            );
            if (elem2) elem2.href = "/videos";
        })();
