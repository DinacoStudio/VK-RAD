// ==UserScript==
// @name         VK
// @namespace    https://github.com/891-2/vk-old-rad/
// @version      1.0.2
// @description  Вернём старый дизайн вместе
// @author       RAM
// @match        *://*.vk.com/*
// @match        *://*.vk.ru/*
// @exclude      *://m.vk.com/*
// @exclude      https://vk.com/video_ext.php*
// @exclude      https://vk.com/widget_comments*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_webRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @connect      api.vk.com
// @connect      vk.com
// @connect      raw.githubusercontent.com
// @connect      github.com
// @resource css https://github.com/891-2/vk-old-rad/raw/main/style.css
// @updateURL    https://github.com/DinacoStudio/vk-old-rad/raw/main/pre-release.user.js
// @license MIT

// ==/UserScript==
/* КЛАСС ТАЙМЕРА */
/****************/
class Timer {
    Start() {
        this.start = new Date()
    }
    End() {
        this.end = Math.ceil((new Date() - this.start))
    }
}
class Interval{
    set(fn,time){
        if (!this.timer){
            this.timer = setInterval(fn,time)
        }
    }
    stop(){
        if (this.timer){
            this.timer = clearInterval(this.timer)
        }
    }
}
/****************/
/* КЛАСС ТАЙМЕРА */

let ads_filter = "[data-ad-view],div[data-ad-disabled-stat-impression],.wall_module .post:has(.wall_marked_as_ads),div#friends_right_blocks_root,div#apps_featured_banner,section.AppsCatalogSectionPromoBannersPair"


/* ТАЙМЕР ЗАГРУЗКИ СТРАНИЦЫ */
/***************************/
let load = new Timer();
load.Start();
/***************************/
/* ТАЙМЕР ЗАГРУЗКИ СТРАНИЦЫ */

class RAM {
    Init() {
        /* ЗАГРУЗКА СТРАНИЦЫ */
        /********************/
        window.onload = () => {
            /* НАСТРОЙКИ */
            /************/
            try {

                if (this.IsPageLoaded()) {
                    this.default_settings = {
                        adblock: true,
                        dont_write: false,
                        dont_read: false,
                        wait_token: true,
                        access_token: "",
                        apiver: 5.131
                    }
                    this.settings = {}
                    GM_getValue("Default") ? this.local_settings = JSON.parse(GM_getValue("Default")) : this.updateVAR();
                    /************/
                    /* НАСТРОЙКИ */
                    load.End()
                    this.Con(`[Event] Инициализация прошла успешно за ${load.end} ms`)
                    load = null
                    this.BlockAdsInit()
                    this.CssAdd()
                    this.FixMenu()
                    this.CheckToken();
                    this.TestWall();
                    this.Timer_Check = new Interval().set(this.TestCheck,100);
                    this.Tests();
                }
            } catch (err) {
                console.warn(err.stack)
            }
        }
        /**********************/
        /* ЗАГРУЗКА СТРАНИЦЫ */
    }
    TestCheck(){
       //onsole.log('test')
        const paths = ["dev","apps?act=manage","editapp?","stats?","login"];
        const expaths = ["bug"];
        const strs = window.location.href.split('/');

        //console.log(strs)
        /*if (paths.some(x => strs.some(t => t.includes(x)))&&!expaths.some(x => strs.some(t => t.includes(x)))){
            document.querySelector('div#side_bar').style.setProperty('display', 'none', 'important');
            document.querySelector('div#page_body').style.setProperty('width', '960px', 'important');
        }else{
            document.querySelector('div#side_bar').style.setProperty('display', 'block', 'important');
            document.querySelector('div#page_body').style.setProperty('width', '795px', 'important');
        }*/
       var a = true, b = false;

        switch(true) {
            case paths.some(x => strs.some(t => t.includes(x))):
                document.querySelector('div#side_bar')?.style.setProperty('display', 'none', 'important');
                document.querySelector('div#page_body')?.style.setProperty('width', '960px', 'important');
                document.querySelector('.BtPage.redesign_web .wide_column_right .wide_column_wrap')?.style.setProperty('margin-left', 'unset', 'important');
                break;
            case !paths.some(x => strs.some(t => t.includes(x)))&&!expaths.some(x => strs.some(t => t.includes(x))):
                document.querySelector('div#side_bar')?.style.setProperty('display', 'block', 'important');
                document.querySelector('div#page_body')?.style.setProperty('width', '795px', 'important');
                document.querySelector('.BtPage.redesign_web .wide_column_right .wide_column_wrap')?.style.setProperty('margin-left', 'unset', 'important');
                break;
            case expaths.some(x => strs.some(t => t.includes(x))):
                document.querySelector('div#side_bar')?.style.setProperty('display', 'none', 'important');
                document.querySelector('.BtPage.redesign_web .wide_column_right .wide_column_wrap')?.style.setProperty('margin-left', 'calc(230px + var(--page-block-offset, 15px))', 'important');
                document.querySelector('div#page_body')?.style.setProperty('width', '1215px', 'important');
                document.querySelector('body')?.style.setProperty('--layout-width', '1265px', 'important');
                break;
        }
    }
    CheckToken() {
        /* ПРОВЕРКА НАЛИЧИЯ ТОКЕНА И ПОЛУЧЕНИЕ ЕГО ПРИ НЕОБХОДИМОСТИ */
        /************************************************************/
        this.updateVAR();
        let token = this.settings.access_token
        let wait = this.settings.wait_token
       // console.log(this.settings)
        if (!token && wait && window.href !== "https://oauth.vk.com/authorize?client_id=2685278&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1" && window.location.href.indexOf("https://oauth.vk.com/blank.html") == -1) {
            location.href = 'https://oauth.vk.com/authorize?client_id=2685278&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1'
        }
        while (this.findElem('.oauth_bottom_wrap')) {
            this.findElem('.button_indent').click();
            break;
        }
        let tmp0 = location.href?.split("access_token=")[1]?.split("&")[0]
        if (wait && tmp0) {
            console.log("tmp0"+tmp0)
            this.setVAR("access_token", tmp0)
            this.setVAR('wait_token', false)
            GM_setValue("Default", JSON.stringify(this.settings));
            location.href = "https://vk.com/feed"
        }
        this.Con(`[Function] Токен загружен успешно`)
        /**************************************************************/
        /* ПРОВЕРКА НАЛИЧИЯ ТОКЕНА И ПОЛУЧЕНИЕ ЕГО ПРИ НЕОБХОДИМОСТИ */
    }
    async TestWall(){
        let vk_page_api,vk_page_photos,vk_page_photos_id,vk_page_followers
        this.TestWall_Timer = new Interval().set(()=>{
            if (this.IsOwnerWall()&&this.findElem('.ProfileWrapper__root.vkui__root.vkui__root--embedded.vkui--sizeX-regular')?.style?.display!=="none"){
                if (this.findElem('.ProfileWrapper__root.vkui__root.vkui__root--embedded.vkui--sizeX-regular')){this.findElem('.ProfileWrapper__root.vkui__root.vkui__root--embedded.vkui--sizeX-regular').style.display = "none"}
                if (this.findElem('.ScrollStickyWrapper')){this.findElem('.ScrollStickyWrapper').style.display = "none"}
                this.API_POST("users.getFollowers",`user_id=${vk.id}&fields=online,photo_200&count=6`).then(k=>{
                this.API_POST("users.get",`user_ids=${vk.id}&fields=activities,about,books,bdate,career,photo_200,connections,contacts,counters,country,domain,education,exports,followers_count,games,has_photo,home_town,interests,movies,music,occupation,online,personal,quotes,relation,schools,sex,status`).then(val=>{
                    vk_page_api = val[0]
                    console.dir(this.getGroupsMas())
                    console.dir(this.getFriendsMas())
                    this.API_POST("photos.get",`owner_id=${vk.id}&album_id=profile&rev=0&extended=0&photo_sizes=0`).then(val2=>{
                        vk_page_photos = val2.items[val2.items.length-1]
                        console.log(val)
                        vk_page_photos_id = vk_page_photos.id
                        vk_page_followers = k

                        if (!document.querySelector('div#profile')){ document.querySelector('.ProfileWrapper').appendChild(this.create("div",{},{innerHTML:`<div id="profile" class="profile_content">

  <div class="wide_column_right">
    <div class="narrow_column_wrap">
      <div class="narrow_column" id="narrow_column" style="margin-top: 0px;">
        <div class="page_block page_photo ProfileActions">
          <div class="owner_photo_wrap actions_with_effects" id="owner_photo_wrap">
            <div class="owner_photo_top_bubble_wrap">
              <div class="owner_photo_top_bubble">
                <div class="ui_thumb_x_button" data-title="Удалить фотографию"
                  onmouseover="showTitle(this);" tabindex="0" role="button" aria-label="Удалить фотографию">
                  <div class="ui_thumb_x"></div>
                </div>
              </div>
            </div>
            <div class="page_avatar_wrap" id="page_avatar_wrap">
              <aside aria-label="Фотография">
                <div id="page_avatar" class="page_avatar"><a id="profile_photo_link"
                    href="https://vk.com/photo${vk.id}_${vk_page_photos_id}"><img
                      class="page_avatar_img"
                      src="${vk_page_api.photo_200}"></a>
                </div>
              </aside>
            </div>
            <div class="owner_photo_bubble_wrap">
              <div class="owner_photo_bubble">
                <div class="owner_photo_bubble_action owner_photo_bubble_action_update"
                  data-task-click="Page/owner_new_photo"
                  data-options="{&quot;useNewForm&quot;:true,&quot;ownerId&quot;:${vk.id}}" tabindex="0" role="button">
                  <span class="owner_photo_bubble_action_in">Обновить фотографию</span>
                </div>
                <div class="owner_photo_bubble_action owner_photo_bubble_action_crop"
                  tabindex="0" role="button">
                  <span class="owner_photo_bubble_action_in">Изменить миниатюру</span>
                </div>
                <div class="owner_photo_bubble_action owner_photo_bubble_action_effects"
                  onclick="Page.ownerPhotoEffects('${vk.id}_${vk_page_photos_id}', ${vk.id})" tabindex="0" role="button">
                  <span class="owner_photo_bubble_action_in">Добавить эффекты</span>
                </div>
              </div>
            </div>
          </div>
          <aside aria-label="Действия со страницей">
            <div class="profile_actions">
              <div class="page_actions_wide clear_fix no_actions edit">
                <div class="page_action_left fl_l">
                  <a class="FlatButton FlatButton--secondary FlatButton--size-m FlatButton--wide" draggable="false"
                    id="profile_edit_act" href="https://vk.com/edit">
                    <span class="FlatButton__in">

                      <span class="FlatButton__content">Редактировать</span>

                    </span>
                  </a>
                </div>

              </div>
              <div class="page_actions_expanded _page_actions_container">
                <a href="https://vk.com/memories" tabindex="0" role="button" class="PageActionCell">
                  <div class="PageActionCell__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                        d="M12 7.1a.9.9 0 0 1 .9.9v3.73l2.24 2.23a.9.9 0 0 1-1.28 1.28l-2.5-2.5a.9.9 0 0 1-.26-.64V8a.9.9 0 0 1 .9-.9Z"
                        clip-rule="evenodd"></path>
                      <path
                        d="M19 5a9.87 9.87 0 0 0-7-2.9 9.87 9.87 0 0 0-7.1 3V3a.9.9 0 0 0-1.8 0v4a.9.9 0 0 0 .9.9h4a.9.9 0 0 0 0-1.8H6.45A8.07 8.07 0 0 1 12 3.9c2.24 0 4.26.9 5.73 2.37A8.07 8.07 0 0 1 20.1 12a8.07 8.07 0 0 1-2.37 5.73A8.07 8.07 0 0 1 12 20.1a8.06 8.06 0 0 1-5.2-1.9.9.9 0 1 0-1.16 1.39A9.86 9.86 0 0 0 12 21.9a9.87 9.87 0 0 0 7-2.9 9.87 9.87 0 0 0 2.9-7A9.87 9.87 0 0 0 19 5Z">
                      </path>
                    </svg></div>
                  <span class="PageActionCell__in">
                    <span class="PageActionCell__label">Воспоминания</span>

                  </span>

                </a><a data-task-click="ProfileAction/show_questions" tabindex="0" role="button"
                  class="PageActionCell MyQuestionsButton">
                  <div class="PageActionCell__icon" aria-hidden="true"><svg fill="none" height="24" viewBox="0 0 24 24"
                      width="24" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd"
                        d="M3.93 11.7c0-3.63 3.49-6.8 8.09-6.8s8.08 3.17 8.08 6.8c0 3.64-3.48 6.81-8.08 6.81a9.34 9.34 0 0 1-3.29-.58.9.9 0 0 0-1 .26c-.67.8-1.8 1.35-3.51 1.55.2-.44.4-.9.57-1.37.3-.78.53-1.66.53-2.56a.9.9 0 0 0-.18-.53 5.95 5.95 0 0 1-1.2-3.57zm8.09-8.6c-5.33 0-9.89 3.73-9.89 8.6 0 1.62.5 3.12 1.38 4.39a6.22 6.22 0 0 1-.4 1.65c-.2.53-.43 1.04-.67 1.55l-.23.52c-.39.86.28 1.83 1.21 1.79 2.2-.09 4-.64 5.25-1.8 1.05.34 2.17.51 3.35.51 5.32 0 9.88-3.73 9.88-8.6 0-4.88-4.56-8.61-9.88-8.61zM12 8.9a.6.6 0 0 0-.57.4.9.9 0 1 1-1.7-.6 2.4 2.4 0 0 1 4.67.8c0 1.1-.53 1.73-.92 2.17l-.01.02c-.4.44-.54.6-.58.91a.9.9 0 0 1-1.78-.2 3.2 3.2 0 0 1 1.02-1.92c.32-.36.47-.57.47-.98a.6.6 0 0 0-.6-.6zm1 6.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                        fill="currentColor" fill-rule="evenodd"></path>
                    </svg></div>
                  <span class="PageActionCell__in">
                    <span class="PageActionCell__label">Мои вопросы</span>

                  </span>

                </a><a href="${this.findElem("li#l_pr>a").href}?w=stories" tabindex="0" role="button" class="PageActionCell">
                  <div class="PageActionCell__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M9.1 13.4a.9.9 0 0 1 .9-.9h4a.9.9 0 1 1 0 1.8h-4a.9.9 0 0 1-.9-.9Z"
                        clip-rule="evenodd"></path>
                      <path fill-rule="evenodd"
                        d="M5 3.1A2.9 2.9 0 0 0 2.1 6v2c0 1.11.93 1.9 2 1.9V18A2.9 2.9 0 0 0 7 20.9h10a2.9 2.9 0 0 0 2.9-2.9V9.9c1.07 0 2-.79 2-1.9V6A2.9 2.9 0 0 0 19 3.1H5Zm0 1.8A1.1 1.1 0 0 0 3.9 6v2a.1.1 0 0 0 .1.1h16a.1.1 0 0 0 .1-.1V6A1.1 1.1 0 0 0 19 4.9H5Zm2 14.2A1.1 1.1 0 0 1 5.9 18V9.9h12.2V18a1.1 1.1 0 0 1-1.1 1.1H7Z"
                        clip-rule="evenodd"></path>
                      <path fill-rule="evenodd" d="M10 12.5a.9.9 0 1 0 0 1.8h4a.9.9 0 0 0 0-1.8h-4Z"
                        clip-rule="evenodd"></path>
                    </svg></div>
                  <span class="PageActionCell__in">
                    <span class="PageActionCell__label">Архив историй</span>

                  </span>

                </a><a data-task-click="ProfileAction/money_transfer_box" data-prevent="1" data-from="own_profile"
                  tabindex="0" role="button" class="PageActionCell">
                  <div class="PageActionCell__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M17.8 3.1a4.5 4.5 0 0 1 2.35.44c.56.3 1 .75 1.31 1.31.3.57.42 1.11.44 2.1V12a.9.9 0 0 1-1.8.11V8.9H3.9v5.9c0 .87.06 1.18.23 1.5.13.25.32.44.57.57.3.16.58.22 1.31.23H18.83l-1.47-1.46a.9.9 0 0 1-.08-1.18l.08-.1a.9.9 0 0 1 1.18-.08l.1.08 3 3a.9.9 0 0 1 .08 1.18l-.08.1-3 3a.9.9 0 0 1-1.36-1.18l.08-.1 1.47-1.46H6.2c-1.07 0-1.65-.1-2.21-.37l-.14-.07a3.17 3.17 0 0 1-1.32-1.31c-.3-.57-.42-1.11-.44-2.1V7.21c0-1.16.11-1.74.44-2.35a3.17 3.17 0 0 1 1.31-1.32 4.2 4.2 0 0 1 2.1-.44H17.8Zm0 1.8H6.2c-.88 0-1.18.06-1.5.23-.25.13-.44.32-.57.57-.16.3-.22.58-.23 1.31v.09h16.2v-.09c-.01-.73-.07-1.02-.23-1.3a1.37 1.37 0 0 0-.57-.58c-.3-.16-.58-.22-1.31-.23h-.2Z">
                      </path>
                    </svg></div>
                  <span class="PageActionCell__in">
                    <span class="PageActionCell__label">Денежные переводы</span>

                  </span>

                </a>
              </div>
              <div class="PageActionsClosedProfile">
                <div class="PageActionsClosedProfile__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 13a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
                      clip-rule="evenodd"></path>
                    <path fill-rule="evenodd"
                      d="M18.77 8.53a4.53 4.53 0 0 0-1.87-.4V7a4.9 4.9 0 1 0-9.8 0v1.12c-.64.03-1.3.11-1.87.4a3.9 3.9 0 0 0-1.7 1.7c-.24.48-.34.98-.39 1.54-.04.53-.04 1.2-.04 2v2.48c0 .8 0 1.47.04 2 .05.56.15 1.06.38 1.53a3.9 3.9 0 0 0 1.7 1.7c.48.24.98.34 1.54.39.53.04 1.2.04 2 .04h6.48c.8 0 1.47 0 2-.04a3.98 3.98 0 0 0 1.53-.38 3.9 3.9 0 0 0 1.7-1.71c.24-.47.34-.97.39-1.53.04-.53.04-1.2.04-2v-2.48c0-.8 0-1.47-.04-2a3.98 3.98 0 0 0-.39-1.53 3.9 3.9 0 0 0-1.7-1.7ZM6.9 9.93c-.44.04-.68.11-.85.2a2.1 2.1 0 0 0-.92.92c-.09.17-.15.4-.2.85-.03.46-.03 1.05-.03 1.9v2.4c0 .85 0 1.44.04 1.9.03.44.1.68.19.85a2.1 2.1 0 0 0 .92.92c.17.09.4.16.85.2.46.03 1.05.03 1.9.03h6.4c.86 0 1.44 0 1.9-.04.44-.03.68-.1.85-.19a2.1 2.1 0 0 0 .92-.92c.09-.17.16-.4.2-.85.03-.46.03-1.05.03-1.9v-2.4c0-.86 0-1.44-.04-1.9-.03-.44-.1-.68-.19-.85a2.1 2.1 0 0 0-.92-.92 2.24 2.24 0 0 0-.85-.2c-.46-.03-1.05-.03-1.9-.03H8.8c-.85 0-1.44 0-1.9.04ZM15.1 7a3.1 3.1 0 1 0-6.2 0v1.1h6.2V7Z"
                      clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M13 14a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="PageActionsClosedProfile__content">
                  <div class="PageActionsClosedProfile__text">Будьте в контакте с&nbsp;теми, кого нет у&nbsp;вас
                    в&nbsp;друзьях</div>
                  <a class="PageActionsClosedProfile__action" href="https://vk.com/hack1exe#" onclick="return false;"
                    data-prevent="true" data-task-click="Profile/closed_banner_open_profile" data-ref="profile"
                    data-hash="7be11a870c077a4a40">Сделать профиль открытым</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="page_block profile__moder-actions ProfileActions">
          <aside aria-label="Действия со страницей">
            <div class="profile_actions">
              <div class="page_actions_expanded _page_actions_container">
                <a href="https://vk.com/bugs?act=reporter&amp;id=625043763"
                  onclick="return nav.go(this, event, { noback: true })" tabindex="0" role="button"
                  class="PageActionCell">
                  <div class="PageActionCell__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M10.5 10.4a.9.9 0 0 1 .9-.9h1.2a.9.9 0 1 1 0 1.8h-1.2a.9.9 0 0 1-.9-.9Zm0 5a.9.9 0 0 1 .9-.9h1.2a.9.9 0 1 1 0 1.8h-1.2a.9.9 0 0 1-.9-.9Z">
                      </path>
                      <path fill-rule="evenodd"
                        d="M3 8a.9.9 0 0 1 .9-.9h2.27a6.94 6.94 0 0 1 1.77-1.88L6.27 3.54a.9.9 0 0 1 1.28-1.28L9.6 4.33A6.89 6.89 0 0 1 12 3.9c.84 0 1.65.15 2.4.43l2.06-2.07a.9.9 0 0 1 1.28 1.28l-1.68 1.68a6.94 6.94 0 0 1 1.77 1.88h2.27a.9.9 0 1 1 0 1.8h-1.47c.18.6.27 1.24.27 1.9v1.3h3.2a.9.9 0 1 1 0 1.8h-3.2V15a6.9 6.9 0 0 1-.32 2.1h1.52a.9.9 0 1 1 0 1.8h-2.4a6.9 6.9 0 0 1-5.7 3 6.9 6.9 0 0 1-5.7-3H3.9a.9.9 0 0 1 0-1.8h1.52A6.9 6.9 0 0 1 5.1 15v-1.1H1.9a.9.9 0 0 1 0-1.8h3.2v-1.3c0-.66.1-1.3.27-1.9H3.9A.9.9 0 0 1 3 8Zm3.9 2.8a5.1 5.1 0 1 1 10.2 0V15a5.1 5.1 0 0 1-10.2 0v-4.2Z"
                        clip-rule="evenodd"></path>
                      <path fill-rule="evenodd"
                        d="M10.5 10.4a.9.9 0 0 1 .9-.9h1.2a.9.9 0 1 1 0 1.8h-1.2a.9.9 0 0 1-.9-.9Zm0 5a.9.9 0 0 1 .9-.9h1.2a.9.9 0 1 1 0 1.8h-1.2a.9.9 0 0 1-.9-.9Z"
                        clip-rule="evenodd"></path>
                    </svg></div>
                  <span class="PageActionCell__in">
                    <span class="PageActionCell__label">Профиль тестировщика</span>

                  </span>

                </a>
              </div>
            </div>
          </aside>
        </div>
        <div class="page_block">
          <div class="profile_rate_warning">
            <a class="profile_warning_row clear_fix" href="https://vk.com/edit?act=contacts">
              <div class="profile_warning_img contacts"></div>
              <div class="profile_warning_hide_wrap"
                onclick="Profile.hideFillBlock(this, event, 'contacts', 'd0d0256e98e9c13ea6');"
                onmouseover="showTooltip(this, {text: 'Скрыть это уведомление', shift: [10, 3, 3], black: 1});"
                aria-label="Скрыть это уведомление">
                <span class="blind_label">Скрыть это уведомление</span>
                <div class="profile_warning_hide"></div>
              </div>
              <div class="profile_warning_label">Укажите ваши контакты</div>
            </a>
          </div>
        </div>
        <div class="page_block">
          <aside aria-label="Подарки">
            <div class="module clear profile_gifts _module" id="profile_gifts">
              <div class="header_right_link fl_r"></div>
              <a href="https://vk.com/gifts${vk.id}" onclick="return Profile.giftsBox(${vk.id}, event);"
                class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Подарки</span>
                  <span class="header_count fl_l" id="gifts_module_count">9</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <a href="https://vk.com/gifts${vk.id}" class="profile_gifts_cont"
                  onclick="return Profile.giftsBox(${vk.id}, event);">
                  <img width="64" height="64" class="profile_gift_img" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                    alt="9 мая 2021"><img width="64" height="64" class="profile_gift_img"
                    src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1" alt="Итан"><img width="64" height="64"
                    class="profile_gift_img" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1" alt="Новый год 2022">
                </a>

              </div>

            </div>
          </aside>
        </div>
        <div class="page_block">
          <aside aria-label="Друзья">
            <div class="module clear people_module _module" id="profile_friends">
              <a href="https://vk.com/feed?section=updates" class="header_right_link fl_r"
                onclick="Profile.logFriendsUpdatesClicks &amp;&amp; Profile.logFriendsUpdatesClicks(); return nav.go(this, event, {noback: false})">обновления</a>
              <a href="https://vk.com/friends?id=625043763&amp;section=all"
                onclick="return nav.go(this, event, {noback: false})" class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Друзья</span>
                  <span class="header_count fl_l">52</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <div class="people_row">
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/karasbansas"
                      onclick="return nav.go(this, event, {cl_id: 315721926})" title="Сергей Куплинов">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Сергей Куплинов">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/karasbansas" title="Сергей Куплинов">
                        Сергей
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/youart_nat"
                      onclick="return nav.go(this, event, {cl_id: 322839830})" title="Наталья Заводчикова">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Наталья Заводчикова">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/youart_nat" title="Наталья Заводчикова">
                        Наталья
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/daniil.veselov5"
                      onclick="return nav.go(this, event, {cl_id: 382000162})" title="Даниил Веселов">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Даниил Веселов">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/daniil.veselov5" title="Даниил Веселов">
                        Даниил
                      </a>
                    </div>
                  </div>
                </div>
                <div class="people_row">
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/anonimcow"
                      onclick="return nav.go(this, event, {cl_id: 383450497})" title="Екатерина Емельянова">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Екатерина Емельянова">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/anonimcow" title="Екатерина Емельянова">
                        Екатерина
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/denisegorov1233"
                      onclick="return nav.go(this, event, {cl_id: 448511856})" title="Денис Егоров">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Денис Егоров">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/denisegorov1233" title="Денис Егоров">
                        Денис
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/i_chelovek_prikin"
                      onclick="return nav.go(this, event, {cl_id: 488244791})" title="Владимир Наумов">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Владимир Наумов">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/i_chelovek_prikin" title="Владимир Наумов">
                        Владимир
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
          <aside aria-label="Друзья онлайн">
            <div class="module clear people_module _module" id="profile_friends_online">
              <div class="header_right_link fl_r"></div>
              <a href="https://vk.com/friends?id=625043763&amp;section=online"
                onclick="return nav.go(this, event, {noback: false})" class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Друзья онлайн</span>
                  <span class="header_count fl_l">4</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <div class="people_row">
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/qwedan"
                      onclick="return nav.go(this, event, {cl_id: 0})" title="Daniel Myslivets">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Daniel Myslivets">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/qwedan" title="Daniel Myslivets">
                        Daniel
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/darskll"
                      onclick="return nav.go(this, event, {cl_id: 0})" title="Дарья Сокольская">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Дарья Сокольская">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/darskll" title="Дарья Сокольская">
                        Дарья
                      </a>
                    </div>
                  </div>
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/i_nit5"
                      onclick="return nav.go(this, event, {cl_id: 0})" title="Константин'рар Язев">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Константин'рар Язев">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/i_nit5" title="Константин'рар Язев">
                        Константин'рар
                      </a>
                    </div>
                  </div>
                </div>
                <div class="people_row">
                  <div class="people_cell">
                    <a class="people_cell_ava" href="https://vk.com/what_zaaa"
                      onclick="return nav.go(this, event, {cl_id: 0})" title="Полина Иванова">
                      <img class="people_cell_img"
                        src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                        alt="Полина Иванова">
                      <span class="blind_label">.</span>
                    </a>
                    <div class="people_cell_name">
                      <a href="https://vk.com/what_zaaa" title="Полина Иванова">
                        Полина
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
        <div class="page_block" id="profile_media_narrow_block">
          <aside aria-label="Подписки">
            <div class="module clear page_list_module _module" id="profile_idols">
              <div class="header_right_link fl_r"></div>
              <a onclick="return Profile.idolsBox(625043763, event);" class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Подписки</span>
                  <span class="header_count fl_l">163</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <div class="line_cell clear_fix" data-id="-151650962">
                  <a href="https://vk.com/darkwebex" class="fl_l">
                    <div class="thumb"
                      style="background-image:url(https://sun1-99.userapi.com/s/v1/if1/8rCkORTNSEg1lxXyl-IkTTIjChR6eRoOnMkdhmNyTsLS-QTpui0fSfwB1w4uK5H_h5f7KB5g.jpg?size=50x50&amp;quality=96&amp;crop=140,125,808,808&amp;ava=1)"
                      alt="DarkWeb"></div>
                  </a>
                  <div class="fl_l desc_info">
                    <div class="group_name"><a href="https://vk.com/darkwebex">DarkWeb</a></div>
                    <div class="group_desc">Об информационной безопасности простым языком</div>
                  </div>
                </div>
                <div class="line_cell clear_fix" data-id="-169106523">
                  <a href="https://vk.com/greyteam" class="fl_l">
                    <div class="thumb"
                      style="background-image:url(https://sun1-93.userapi.com/s/v1/ig2/YZEU4oSeJJ_ZQr5ojtdYurdvv9gQLUNZfBnZoemUDpifTOuHKNFR-5dtRXl_y6WCI52dsDrLSgKqc32yJer-bKtN.jpg?size=50x50&amp;quality=96&amp;crop=181,182,297,297&amp;ava=1)"
                      alt="GreyTeam | Хакеры"></div>
                  </a>
                  <div class="fl_l desc_info">
                    <div class="group_name"><a href="https://vk.com/greyteam">GreyTeam | Хакеры</a></div>
                    <div class="group_desc">Новый эксплоит раз в 60 минут!</div>
                  </div>
                </div>
                <div class="line_cell clear_fix" data-id="-214723319">
                  <a href="https://vk.com/opium_right_guy" class="fl_l">
                    <div class="thumb"
                      style="background-image:url(https://sun1-55.userapi.com/s/v1/ig2/U_a881Nc4Lu1lE25YM2C3y62QWxxbQl8fq1fjdupMNQW_zZMj6EEbD8VoiN1h2N3GFKBjDAuA7bIgjayXzjuCdhz.jpg?size=50x50&amp;quality=95&amp;crop=286,0,1572,1572&amp;ava=1)"
                      alt="опиум правого парня"></div>
                  </a>
                  <div class="fl_l desc_info">
                    <div class="group_name"><a href="https://vk.com/opium_right_guy">опиум правого парня</a></div>
                    <div class="group_desc">Военное дело</div>
                  </div>
                </div>
                <div class="line_cell clear_fix" data-id="-82590437">
                  <a href="https://vk.com/airsoft_pain" class="fl_l">
                    <div class="thumb"
                      style="background-image:url(https://sun1-91.userapi.com/s/v1/if1/UDbRjBALHbfB5_2xxSUkOxxTXVveQEvj0Qr6E-PRNjQYq8rreQwzd40Yu6JZ-8lN0LZ_KAnq.jpg?size=50x50&amp;quality=96&amp;crop=282,282,1614,1614&amp;ava=1)"
                      alt="СтрайкБоль"></div>
                  </a>
                  <div class="fl_l desc_info">
                    <div class="group_name"><a href="https://vk.com/airsoft_pain">СтрайкБоль</a></div>
                    <div class="group_desc">Пилим мемесы каждый день 😎</div>
                  </div>
                </div>
                <div class="line_cell clear_fix" data-id="-163703907">
                  <a href="https://vk.com/haccking1" class="fl_l">
                    <div class="thumb"
                      style="background-image:url(https://sun1-21.userapi.com/s/v1/ig2/_ifCqHdAUHPHvyPc9TobqqplG8gWcuSqoj4it6hVvphxOkjPHYFKrn7DjBtyIEJt13gpD7Gr0e92lW_CJnbrJrN3.jpg?size=50x50&amp;quality=96&amp;crop=212,105,378,378&amp;ava=1)"
                      alt="Life-Hack / Жизнь-Взлом"></div>
                  </a>
                  <div class="fl_l desc_info">
                    <div class="group_name"><a href="https://vk.com/haccking1">Life-Hack / Жизнь-Взлом</a></div>
                    <div class="group_desc">Вся информация представлена исключительно в информационных целях. Никого не
                      принуждаем ни к каким действиям.</div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
          <aside aria-label="Видеозаписи">
            <div class="module clear video_module _module" id="profile_videos">
              <a href="https://vk.com/video/@hack1exe" class="header_right_link fl_r"></a>
              <a href="https://vk.com/video/@hack1exe" class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Видеозаписи</span>
                  <span class="header_count fl_l">315</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <div class="VideoSectionCard video_row fl_l">
                  <a class="video fl_l" href="https://vk.com/video268198252_456239669"
                    onclick="return showVideo(&quot;268198252_456239669&quot;, &quot;videos625043763&quot;, {&quot;autoplay&quot;:1,&quot;module&quot;:&quot;profile_video_block&quot;,&quot;playlistId&quot;:&quot;625043763_-2&quot;,&quot;shortVideo&quot;:false}, event, this);"
                    aria-label="redditsave.com_we_all_have_that_in_our_fridge-nvmr85rtzs771.mp4">
                    <span class="blind_label">redditsave.com_we_all_have_that_in_our_fridge-nvmr85rtzs771.mp4</span>


                    <div class="video_thumb_label"><span class="video_thumb_label_item"></span><span
                        class="video_thumb_label_item">0:14</span></div>
                    <div class="page_video_play_icon"></div><span class="page_video_thumb"
                      style="background-image: url('https://i.mycdn.me/getVideoPreview?id=1447133055638&amp;idx=1&amp;type=39&amp;tkn=pek_C2zkDdGkwGw1ddzXhUBA0xs&amp;fn=vid_l')"></span>
                  </a>
                  <div class="info clear">
                    <a href="https://vk.com/video268198252_456239669"
                      onclick="return showVideo(&quot;268198252_456239669&quot;, &quot;videos625043763&quot;, {&quot;autoplay&quot;:1,&quot;module&quot;:&quot;profile_video_block&quot;,&quot;playlistId&quot;:&quot;625043763_-2&quot;,&quot;shortVideo&quot;:false}, event, this);">redditsave.com_we_all_have_that_in_our_fridge-nvmr85rtzs771.mp4</a>
                  </div>
                </div>
                <div class="VideoSectionCard video_row fl_l">
                  <a class="video fl_l" href="https://vk.com/video223276911_456239405"
                    onclick="return showVideo(&quot;223276911_456239405&quot;, &quot;videos625043763&quot;, {&quot;autoplay&quot;:1,&quot;module&quot;:&quot;profile_video_block&quot;,&quot;playlistId&quot;:&quot;625043763_-2&quot;,&quot;shortVideo&quot;:false}, event, this);"
                    aria-label="Wake up its tupolev Tuesday">
                    <span class="blind_label">Wake up its tupolev Tuesday</span>


                    <div class="video_thumb_label"><span class="video_thumb_label_item"></span><span
                        class="video_thumb_label_item">1:17</span></div>
                    <div class="page_video_play_icon"></div><span class="page_video_thumb"
                      style="background-image: url('https://i.mycdn.me/getVideoPreview?id=3110909053551&amp;idx=14&amp;type=39&amp;tkn=vHVn_CUFgv7Oy4XEJhGiF5cgLQw&amp;fn=vid_l')"></span>
                  </a>
                  <div class="info clear">
                    <a href="https://vk.com/video223276911_456239405"
                      onclick="return showVideo(&quot;223276911_456239405&quot;, &quot;videos625043763&quot;, {&quot;autoplay&quot;:1,&quot;module&quot;:&quot;profile_video_block&quot;,&quot;playlistId&quot;:&quot;625043763_-2&quot;,&quot;shortVideo&quot;:false}, event, this);">Wake
                      up its tupolev Tuesday</a>
                  </div>
                </div>
              </div>

            </div>
          </aside>
          <aside aria-label="Аудиозаписи">
            <div class="module clear audios_module audio_w_covers _module" id="profile_audios">
              <div class="header_right_link fl_r"></div>
              <a href="https://vk.com/audios625043763" class="module_header">
                <div class="header_top clear_fix">
                  <span class="header_label fl_l">Аудиозаписи</span>
                  <span class="header_count fl_l">233</span>
                </div>
              </a>
              <div class="module_body clear_fix">
                <div tabindex="0"
                  class="audio_row audio_row_with_cover _audio_row _audio_row_625043763_456239363 audio_can_add audio_has_thumb audio_row2 audio_has_track_page audio_row_playable"
                  data-full-id="625043763_456239363" onclick="return getAudioPlayer().toggleAudio(this, event)"
                  data-audio="[456239363,625043763,&quot;&quot;,&quot;Кто-то&quot;,&quot;B.T.R&quot;,302,0,0,&quot;&quot;,0,66,&quot;module:625043763&quot;,&quot;[]&quot;,&quot;e8a73c50eb71e93d12\/\/710693c377e40de3b1\/96dd94f595c874f82b\/\/753a902c130f597a8a\/a3ae0372049be3b6e4&quot;,&quot;https:\/\/sun1-14.userapi.com\/impf\/DpFdDaPjuLfMyztO65K-N7RH-b8GKWrSx2LjHQ\/ihIijYiChX4.jpg?size=80x0&amp;quality=90&amp;sign=f1062dbc6b494dbf47e2e54b7c10e5eb,https:\/\/sun1-14.userapi.com\/impf\/DpFdDaPjuLfMyztO65K-N7RH-b8GKWrSx2LjHQ\/ihIijYiChX4.jpg?size=160x0&amp;quality=90&amp;sign=bc15f034c5b82ec24eb686aff972f7df&quot;,{&quot;duration&quot;:302,&quot;content_id&quot;:&quot;625043763_456239363&quot;,&quot;puid22&quot;:4,&quot;account_age_type&quot;:2,&quot;_SITEID&quot;:276,&quot;vk_id&quot;:625043763,&quot;ver&quot;:251116},&quot;&quot;,[{&quot;id&quot;:&quot;7527378814091953564&quot;,&quot;name&quot;:&quot;B.T.R&quot;}],&quot;&quot;,[-2000354483,15354483,&quot;f2a17fd837c0671cb7&quot;],&quot;590ee262MqFepY3eql4poO26JnqtV95D&quot;,0,0,true,&quot;&quot;,false,&quot;-2001585711_108585711&quot;]"
                  onmouseover="AudioUtils.onRowOver(this, event)" onmouseleave="AudioUtils.onRowLeave(this, event)">
                  <div class="audio_row_content _audio_row_content">
                    <button class="blind_label _audio_row__play_btn" aria-label="Воспроизвести "
                      onclick="getAudioPlayer().toggleAudio(this, event); return cancelEvent(event)"></button>
                    <img class="audio_row__cover" alt="Кто-то" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                      loading="lazy" decoding="async" width="40" height="40">
                    <div class="audio_row__cover_back _audio_row__cover_back"></div>
                    <div class="audio_row__cover_icon _audio_row__cover_icon">
                      <div class="audio_row__play_btn_icon--pause"><svg width="24" height="24" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="pause_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="pause_24__pause_24">
                              <path id="pause_24__Rectangle-737" d="M0 0h24v24H0z"></path>
                              <path
                                d="M6.79 5H8.7c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H6.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Zm8 0h1.92c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H14.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Z"
                                id="pause_24__Mask" fill="currentColor"></path>
                            </g>
                          </g>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg width="24" height="24" viewBox="0 0 24 24"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.67 10.92c.82.49.82 1.67 0 2.16l-8.79 5.17c-.83.5-1.88-.1-1.88-1.08V6.83c0-.97 1.05-1.57 1.88-1.08l8.8 5.17Z"
                            fill="currentColor"></path>
                        </svg></div>
                    </div>
                    <div class="audio_row__counter"></div>
                    <div class="audio_row__play_btn">
                      <div class="audio_row__play_btn_icon--pause"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zM10.6 7.1c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3zm5 0c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm5.02-11.13c.64-.39.64-1.36 0-1.74l-6.6-4C9.77 6.75 9 7.23 9 8v8c0 .76.78 1.25 1.41.87z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                    </div>

                    <div class="audio_row__inner">
                      <div class="audio_row__chart_info">


                      </div>
                      <div class="audio_row__performer_title">
                        <div onmouseover="setTitle(this)" class="audio_row__performers"><a
                            href="https://vk.com/artist/b_t_r">B.T.R</a></div>
                        <div class="audio_row__title _audio_row__title" onmouseover="setTitle(this)">
                          <a href="https://vk.com/audio-2001585711_108585711"
                            class="audio_row__title_inner _audio_row__title_inner">Кто-то</a>
                          <span class="audio_row__title_inner_subtitle _audio_row__title_inner_subtitle"></span>
                        </div>
                      </div>
                      <div class="audio_row__info _audio_row__info">
                        <div class="audio_row__duration audio_row__duration-s _audio_row__duration">5:02</div>
                      </div>
                    </div>

                    <div class="audio_player__place _audio_player__place"></div>
                  </div>
                </div>
                <div tabindex="0"
                  class="audio_row audio_row_with_cover _audio_row _audio_row_625043763_456239361 audio_can_add audio_lpb audio_has_thumb audio_row2 audio_has_track_page audio_row_playable"
                  data-full-id="625043763_456239361" onclick="return getAudioPlayer().toggleAudio(this, event)"
                  data-audio="[456239361,625043763,&quot;&quot;,&quot;Сокрушить Великих&quot;,&quot;Эпидемия и Павел Пламенев &quot;,290,0,0,&quot;&quot;,0,98,&quot;module:625043763&quot;,&quot;[]&quot;,&quot;86bba264f69c3a5084\/6d4ef570cac501f478\/38f00365acaf070ffd\/7a75e6f6cbe2accca7\/\/e520b4e4baa7aecae8\/2bcfc8ccbbe225efe8&quot;,&quot;https:\/\/sun1-22.userapi.com\/impf\/QEfMVZB6QoKtGNdmUeT4qAVaNg0f6KDH38vT4g\/1vv1zAhuqq8.jpg?size=80x0&amp;quality=90&amp;sign=01e96bcc40dfece2174ed9f717688a1a,https:\/\/sun1-22.userapi.com\/impf\/QEfMVZB6QoKtGNdmUeT4qAVaNg0f6KDH38vT4g\/1vv1zAhuqq8.jpg?size=160x0&amp;quality=90&amp;sign=acda987446cf0c3d096a3d02dd5e87d4&quot;,{&quot;duration&quot;:290,&quot;content_id&quot;:&quot;625043763_456239361&quot;,&quot;puid22&quot;:11,&quot;account_age_type&quot;:2,&quot;_SITEID&quot;:276,&quot;vk_id&quot;:625043763,&quot;ver&quot;:251116},&quot;&quot;,&quot;&quot;,&quot;&quot;,[-2000776507,13776507,&quot;b9718a68ff392bca0f&quot;],&quot;13bf8cbbp-3SCO1UdyV5L5z4QtNJpOSa&quot;,0,0,true,&quot;&quot;,false,&quot;-2001668967_100668967&quot;]"
                  onmouseover="AudioUtils.onRowOver(this, event)" onmouseleave="AudioUtils.onRowLeave(this, event)">
                  <div class="audio_row_content _audio_row_content">
                    <button class="blind_label _audio_row__play_btn" aria-label="Воспроизвести "
                      onclick="getAudioPlayer().toggleAudio(this, event); return cancelEvent(event)"></button>
                    <img class="audio_row__cover" alt="Сокрушить Великих" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                      loading="lazy" decoding="async" width="40" height="40">
                    <div class="audio_row__cover_back _audio_row__cover_back"></div>
                    <div class="audio_row__cover_icon _audio_row__cover_icon">
                      <div class="audio_row__play_btn_icon--pause"><svg width="24" height="24" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="pause_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="pause_24__pause_24">
                              <path id="pause_24__Rectangle-737" d="M0 0h24v24H0z"></path>
                              <path
                                d="M6.79 5H8.7c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H6.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Zm8 0h1.92c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H14.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Z"
                                id="pause_24__Mask" fill="currentColor"></path>
                            </g>
                          </g>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg width="24" height="24" viewBox="0 0 24 24"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.67 10.92c.82.49.82 1.67 0 2.16l-8.79 5.17c-.83.5-1.88-.1-1.88-1.08V6.83c0-.97 1.05-1.57 1.88-1.08l8.8 5.17Z"
                            fill="currentColor"></path>
                        </svg></div>
                    </div>
                    <div class="audio_row__counter"></div>
                    <div class="audio_row__play_btn">
                      <div class="audio_row__play_btn_icon--pause"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zM10.6 7.1c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3zm5 0c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm5.02-11.13c.64-.39.64-1.36 0-1.74l-6.6-4C9.77 6.75 9 7.23 9 8v8c0 .76.78 1.25 1.41.87z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                    </div>

                    <div class="audio_row__inner">
                      <div class="audio_row__chart_info">


                      </div>
                      <div class="audio_row__performer_title">
                        <div onmouseover="setTitle(this)" class="audio_row__performers"><a
                            href="https://vk.com/audio?performer=1&amp;q=%D0%AD%D0%BF%D0%B8%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%20%D0%B8%20%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB%20%D0%9F%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5%D0%B2%20">Эпидемия
                            и Павел Пламенев </a></div>
                        <div class="audio_row__title _audio_row__title" onmouseover="setTitle(this)">
                          <a href="https://vk.com/audio-2001668967_100668967"
                            class="audio_row__title_inner _audio_row__title_inner">Сокрушить Великих</a>
                          <span class="audio_row__title_inner_subtitle _audio_row__title_inner_subtitle"></span>
                        </div>
                      </div>
                      <div class="audio_row__info _audio_row__info">
                        <div class="audio_row__duration audio_row__duration-s _audio_row__duration">4:50</div>
                      </div>
                    </div>

                    <div class="audio_player__place _audio_player__place"></div>
                  </div>
                </div>
                <div tabindex="0"
                  class="audio_row audio_row_with_cover _audio_row _audio_row_625043763_456239360 audio_can_add audio_lpb audio_has_thumb audio_row2 audio_has_track_page audio_row_playable"
                  data-full-id="625043763_456239360" onclick="return getAudioPlayer().toggleAudio(this, event)"
                  data-audio="[456239360,625043763,&quot;&quot;,&quot;Holy Diver&quot;,&quot;Killswitch Engage&quot;,250,0,0,&quot;&quot;,0,98,&quot;module:625043763&quot;,&quot;[]&quot;,&quot;13832436b1f84efb6e\/\/048c4f0ebfc4a19c3f\/b01ca7662ce3ccbf25\/\/01a72bcb315b9e5287\/e4fbccefe61bd20dbf&quot;,&quot;https:\/\/sun9-83.userapi.com\/impf\/c854016\/v854016647\/1dc98\/k5Gp9ghQi4A.jpg?size=80x0&amp;quality=90&amp;sign=666655d26fa6b80038b1feb3dc6cc347,https:\/\/sun9-83.userapi.com\/impf\/c854016\/v854016647\/1dc98\/k5Gp9ghQi4A.jpg?size=160x0&amp;quality=90&amp;sign=e93b9b1f96fb931b3e11d86e5b288df3&quot;,{&quot;duration&quot;:250,&quot;content_id&quot;:&quot;625043763_456239360&quot;,&quot;puid22&quot;:4,&quot;account_age_type&quot;:2,&quot;_SITEID&quot;:276,&quot;vk_id&quot;:625043763,&quot;ver&quot;:251116},&quot;&quot;,[{&quot;id&quot;:&quot;2801993232905216063&quot;,&quot;name&quot;:&quot;Killswitch Engage&quot;}],&quot;&quot;,[-2000333064,1333064,&quot;29bd3598fd573908a7&quot;],&quot;1dc98057CmKT8d4ib7JrzdTAoaUBw8ia&quot;,0,0,true,&quot;&quot;,false,&quot;-2001208533_31208533&quot;]"
                  onmouseover="AudioUtils.onRowOver(this, event)" onmouseleave="AudioUtils.onRowLeave(this, event)">
                  <div class="audio_row_content _audio_row_content">
                    <button class="blind_label _audio_row__play_btn" aria-label="Воспроизвести "
                      onclick="getAudioPlayer().toggleAudio(this, event); return cancelEvent(event)"></button>
                    <img class="audio_row__cover" alt="Holy Diver" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                      loading="lazy" decoding="async" width="40" height="40">
                    <div class="audio_row__cover_back _audio_row__cover_back"></div>
                    <div class="audio_row__cover_icon _audio_row__cover_icon">
                      <div class="audio_row__play_btn_icon--pause"><svg width="24" height="24" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="pause_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="pause_24__pause_24">
                              <path id="pause_24__Rectangle-737" d="M0 0h24v24H0z"></path>
                              <path
                                d="M6.79 5H8.7c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H6.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Zm8 0h1.92c.45 0 .61.05.78.13.16.1.29.22.38.38.08.17.13.33.13.78V17.7c0 .45-.05.61-.13.78a.91.91 0 0 1-.38.38c-.17.08-.33.13-.78.13H14.8c-.45 0-.61-.05-.78-.13a.91.91 0 0 1-.38-.38c-.08-.17-.13-.33-.13-.78V6.3c0-.45.05-.61.13-.78.1-.16.22-.29.38-.38.17-.08.33-.13.78-.13Z"
                                id="pause_24__Mask" fill="currentColor"></path>
                            </g>
                          </g>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg width="24" height="24" viewBox="0 0 24 24"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.67 10.92c.82.49.82 1.67 0 2.16l-8.79 5.17c-.83.5-1.88-.1-1.88-1.08V6.83c0-.97 1.05-1.57 1.88-1.08l8.8 5.17Z"
                            fill="currentColor"></path>
                        </svg></div>
                    </div>
                    <div class="audio_row__counter"></div>
                    <div class="audio_row__play_btn">
                      <div class="audio_row__play_btn_icon--pause"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zM10.6 7.1c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3zm5 0c-.14-.06-.27-.1-.63-.1h-.94c-.36 0-.49.04-.62.1a.73.73 0 0 0-.3.3c-.07.14-.11.27-.11.63v7.94c0 .36.04.49.1.62.08.13.18.23.3.3.14.07.27.11.63.11h.94c.36 0 .49-.04.62-.1a.73.73 0 0 0 .3-.3c.07-.14.11-.27.11-.63V8.03c0-.36-.04-.49-.1-.62a.73.73 0 0 0-.3-.3z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                      <div class="audio_row__play_btn_icon--play"><svg fill="none" height="24" viewBox="0 0 24 24"
                          width="24" xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd"
                            d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm5.02-11.13c.64-.39.64-1.36 0-1.74l-6.6-4C9.77 6.75 9 7.23 9 8v8c0 .76.78 1.25 1.41.87z"
                            fill="currentColor" fill-rule="evenodd"></path>
                        </svg></div>
                    </div>

                    <div class="audio_row__inner">
                      <div class="audio_row__chart_info">


                      </div>
                      <div class="audio_row__performer_title">
                        <div onmouseover="setTitle(this)" class="audio_row__performers"><a
                            href="https://vk.com/artist/killswitchengage">Killswitch Engage</a></div>
                        <div class="audio_row__title _audio_row__title" onmouseover="setTitle(this)">
                          <a href="https://vk.com/audio-2001208533_31208533"
                            class="audio_row__title_inner _audio_row__title_inner">Holy Diver</a>
                          <span class="audio_row__title_inner_subtitle _audio_row__title_inner_subtitle"></span>
                        </div>
                      </div>
                      <div class="audio_row__info _audio_row__info">
                        <div class="audio_row__duration audio_row__duration-s _audio_row__duration">4:10</div>
                      </div>
                    </div>

                    <div class="audio_player__place _audio_player__place"></div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
    <div class="wide_column_wrap">
      <div class="wide_column" id="wide_column">
        <div class="page_block">
          <div id="page_info_wrap" class="page_info_wrap ">
            <div class="page_top">
              <div class="_profile_online profile_online">
                <div class="profile_online_lv">${vk_page_api.online?"online":"offline"}</div>
              </div>
              <h1 class="page_name">Миха Электронщик<span class="image_status__status image_status__status--large"
                  onclick="window.imageStatusPopup &amp;&amp; window.imageStatusPopup(event, {&quot;user_id&quot;:625043763})">
                  <img class="image_status__statusImage" src="https://sun1.ufanet.userapi.com/s/v1/ig2/FiCEEv4AAp1cQdRWRyEOJRapmxp0junYAyb-8AY32Qqz4HTZWkXZvI83h2bYknAQ1jkgqhiSdlqquhxJe48lkLjK.jpg?size=200x200&quality=95&crop=78,160,1440,1440&ava=1"
                    srcset="https://sun1-89.userapi.com/z4xizKC9WEyTukB6vWlMAOBBg3CIbxlIojq78A/NV2J4JRCoJY.png 2x">
                </span></h1>
              <div class="page_current_info" id="page_current_info">
                <div id="currinfo_editor" class="page_status_editor clear" onclick="cancelEvent(event)">
                  <div class="editor">
                    <div class="page_status_input_wrap _emoji_field_wrap">
                      <div class="emoji_smile_wrap  _emoji_wrap">
                        <div class="emoji_smile _emoji_btn" role="button"
                          title="Используйте TAB, чтобы быстрее открывать смайлы"
                          onmouseenter="return Emoji.show(this, event);" onmouseleave="return Emoji.hide(this, event);"
                          onclick="return cancelEvent(event);" aria-label="Добавить эмодзи или стикер">
                          <div class="emoji_smile_icon_inline_svg emoji_smile_icon"><svg width="24" height="24"
                              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49s1.39-.25 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13c-.27.33-.61.6-.97.83a5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5z"
                                fill="currentColor"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 2.1a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8zM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0z"
                                fill="currentColor"></path>
                            </svg></div>
                        </div>
                      </div>
                      <div class="page_status_input" id="currinfo_input" contenteditable="true" role="textbox"></div>
                    </div>
                    <div class="page_status_audio checkbox" id="currinfo_audio"
                      onclick="checkbox(this); Page.audioStatusUpdate('ef92ff3a5b5871573e');" role="checkbox"
                      aria-checked="false" tabindex="0">Транслировать музыку в статус</div>
                    <div class="page_status_app checkbox on unshown" id="currinfo_app"
                      onclick="checkbox(this); Profile.appStatusUpdate('ef92ff3a5b5871573e')" role="checkbox"
                      aria-checked="true" tabindex="0">Показывать приложение в статусе</div>
                    <button class="flat_button button_small page_status_btn_save" id="currinfo_save">Сохранить</button>
                  </div>
                </div>
                <div id="currinfo_wrap" onclick="return Page.infoEdit();" tabindex="0" role="button">
                  <span id="current_info" class="current_info"><span class="my_current_info"><span
                        class="current_text">${vk_page_api.status}</span></span></span>
                </div>
                <div id="currinfo_fake" style="display: none"><span class="my_current_info"><span
                      class="current_text">${vk_page_api.status}</span></span></div>
              </div>
            </div>
            <div class="profile_info profile_info_short" id="profile_short">
              <div class="clear_fix profile_info_row ">
                <h3 class="label fl_l">День рождения:</h3>
                <div class="labeled"><a href="${this.parseDate(vk_page_api.bdate)}">${this.parseDateSTR(vk_page_api.bdate)}</a></div>
              </div>
              <div class="clear_fix profile_info_row ">
                <h3 class="label fl_l">Страна:</h3>
                <div class="labeled"><a href="https://vk.com/search?c[name]=0&c[section]=people&c[country]=${vk_page_api.country.id}">${vk_page_api.country.title}</a></div>
              </div>
              <div class="clear_fix profile_info_row ">
                <h3 class="label fl_l">О себе:</h3>
                <div class="labeled">${vk_page_api.about}</div>
              </div>
              <div class="profile_more_info">
                <a class="profile_more_info_link">
                  <span class="profile_label_more">Показать подробную информацию</span>
                  <span class="profile_label_less">Скрыть подробную информацию</span>
                </a>
              </div>
            </div>
            <div class="profile_info profile_info_full" id="profile_full" style="display: none;">
              <div class="profile_info_block clear_fix">
                <div class="profile_info_header_wrap">
                  <a class="profile_info_edit" href="https://vk.com/edit">Редактировать</a>
                  <h2 class="profile_info_header">Основная информация</h2>
                </div>
                <div class="profile_info">
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Языки:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[lang]=-1">Русский</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[lang]=3">English</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[lang]=6">Deutsch</a></div>
                  </div>
                </div>
              </div>
              <div class="profile_info_block clear_fix">
                <div class="profile_info_header_wrap">
                  <a class="profile_info_edit" href="https://vk.com/edit?act=career">Редактировать</a>
                  <h2 class="profile_info_header">Карьера</h2>
                </div>
                <div class="profile_info">
                  <div class="clear_fix profile_info_row block">
                    <h3 class="label fl_l">Место работы:</h3>
                    <div class="labeled"><a class="fl_r profile_career_group" mention="" mention_id="club180381271"
                        onmouseover="mentionOver(this, {shift: [31, 9, 4]});" href="https://vk.com/strdev">
                      </a><a mention="" mention_id="club180381271" onmouseover="mentionOver(this);"
                        href="https://vk.com/strdev">Streleckiy Development</a><br><br><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[position]=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%20Renux%20Shell%20IDE">Разработчик
                        Renux Shell IDE</a></div>
                  </div>
                  <div class="clear_fix profile_info_row block">
                    <h3 class="label fl_l">Место работы:</h3>
                    <div class="labeled"><a class="fl_r profile_career_group" mention="" mention_id="club207245477"
                        onmouseover="mentionOver(this, {shift: [31, 9, 4]});" href="https://vk.com/studioshahta">
                      </a><a mention="" mention_id="club207245477" onmouseover="mentionOver(this);"
                        href="https://vk.com/studioshahta">SHAHTA GAMEDEV</a><br><br><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[position]=%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%2C%20%D0%BA%D0%BE%D0%B4%D0%B5%D1%80">Создатель,
                        кодер</a></div>
                  </div>
                </div>
              </div>
              <div class="profile_info_block clear_fix">
                <div class="profile_info_header_wrap">
                  <a class="profile_info_edit" href="https://vk.com/edit?act=education">Редактировать</a>
                  <h2 class="profile_info_header">Образование</h2>
                </div>
                <div class="profile_info">
                  <div class="clear_fix profile_info_row block">
                    <h3 class="label fl_l">Школа:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[school_country]=1&amp;c[school_city]=1&amp;c[school]=1823536">Международная
                        академия информационных технологий «ИТ ХАБ» (IThub College)</a><br>Москва<br><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[school_country]=1&amp;c[school_city]=1&amp;c[school]=1823536&amp;c[school_spec]=%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%20%D0%BF%D0%BE%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8">Специалист
                        по информационной безопасности</a></div>
                  </div>
                </div>
              </div>
              <div class="profile_info_block clear_fix">
                <div class="profile_info_header_wrap">
                  <a class="profile_info_edit" href="https://vk.com/edit?act=personal">Редактировать</a>
                  <h2 class="profile_info_header">Жизненная позиция</h2>
                </div>
                <div class="profile_info">
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Главное в жизни:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[personal_priority]=5">Совершенствование
                        мира</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Главное в людях:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[people_priority]=5">Смелость и
                        упорство</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Отн. к курению:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[smoking]=1">Резко
                        негативное</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Отн. к алкоголю:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[alcohol]=1">Резко
                        негативное</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Вдохновляют:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%92%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%20%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9%20%D1%80%D0%BE%D1%86%D0%BA%20%D0%B8%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB">Вдохновляет
                        хороший роцк и металл</a></div>
                  </div>
                </div>
              </div>
              <div class="profile_info_block clear_fix">
                <div class="profile_info_header_wrap">
                  <a class="profile_info_edit" href="https://vk.com/edit?act=interests">Редактировать</a>
                  <h2 class="profile_info_header">Личная информация</h2>
                </div>
                <div class="profile_info">
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Деятельность:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">Музыка</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">музыка</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%B5%D1%89%D0%B5%20%D1%80%D0%B0%D0%B7%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">еще
                        раз музыка</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%8F">звукоинженерия</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">программирование</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=&amp;c[q]=%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C">информационная
                        безопасность</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Интересы:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">Музыка</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">музыка</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%B5%D1%89%D0%B5%20%D1%80%D0%B0%D0%B7%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0">еще
                        раз музыка</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%8F">звукоинженерия</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">программирование</a>,
                      <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C">информационная
                        безопасность</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Любимая музыка:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=audio&amp;c[q]=Sabaton">Sabaton</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=audio&amp;c[q]=RADIO%20TAPOK">RADIO
                        TAPOK</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=audio&amp;c[q]=Power%20Metal">Power
                        Metal</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=audio&amp;c[q]=Heavy%20Metal">Heavy
                        Metal</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Любимые игры:</h3>
                    <div class="labeled"><a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=Forza%20Horizon%204">Forza
                        Horizon 4</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=War%20Thunder">War
                        Thunder</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=Arma%203">Arma 3</a>, <a
                        href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=BeamNG.Drive">BeamNG.Drive</a>,
                      <a href="https://vk.com/search?c[name]=0&amp;c[section]=people&amp;c[q]=Kerbal%20Space%20Program">Kerbal
                        Space Program</a></div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">Любимые цитаты:</h3>
                    <div class="labeled">Лучше уметь и не нуждаться, чем нуждаться и не уметь <br>@Роман Хорс (715 team)
                    </div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l">О себе:</h3>
                    <div class="labeled">C# Developer</div>
                  </div>
                  <div class="clear_fix profile_info_row ">
                    <h3 class="label fl_l"><a href="https://vk.com/groups?id=625043763" class="profile_label_link"
                        onclick="return nav.go(this, event, {noback: false})">Группы:</a></h3>
                    <div class="labeled"><a href="https://vk.com/tapok_records">TAPOK Records</a>, <a
                        href="https://vk.com/btr_moscow">B.T.R</a>, <a
                        href="https://vk.com/everlasting.summer.official">Бесконечное Лето Soviet Games</a>, <a
                        href="https://vk.com/warthunder">War Thunder</a>, <a
                        href="https://vk.com/brucefist_history">Исторические мемы бмш</a>, <a
                        href="https://vk.com/daneo03">Daniel Myslivets</a>, <a
                        href="https://vk.com/sovok_chan">Sovok-chan</a>, <a href="https://vk.com/strdev">Streleckiy
                        Development</a>, <a href="https://vk.com/kfest_seliger">2022 КраеФест Трек Селигер Живая
                        природа</a>, <a href="https://vk.com/cxem_net_payalnik">Радиолюбители электроника ПАЯЛЬНИК</a>,
                      <a href="https://vk.com/unfair_advantage">Unfair Advantage</a>, <a
                        href="https://vk.com/alexgyvershow">AlexGyver самоделки Arduino и электроника</a>, <a
                        href="https://vk.com/zveno_410">Призрачный Маршрут</a>, <a
                        href="https://vk.com/muztorg">Музторг</a>, <a href="https://vk.com/ckcshop">Гражданская оборона
                        Интернет-магазин</a></div>
                  </div><a class="noselect" id="profile_groups_link" href="https://vk.com/groups?id=625043763"
                    onmouseover="ajax.post('al_profile.php', {act: 'groups', id: cur.oid}, {cache: 1})"
                    onclick="return Profile.showGroups(event)">
                    Показать полный список
                  </a>
                  <div class="clear_fix miniblock" style="display: none">
                    <div class="label fl_l">&nbsp;</div>
                    <div class="labeled" id="profile_all_groups"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="counts_module"><a class="page_counter" href="https://vk.com/friends?id=${vk.id}&amp;section=all"
              onclick="return page.showPageMembers(event, ${vk.id}, 'friends');">
              <div class="count">${vk_page_api.counters.friends?vk_page_api.counters.friends:0}</div>
              <div class="label">${this.declOfNum(vk_page_api.counters.friends,["друг","друга","друзей"])}</div>
            </a><a class="page_counter" href="https://vk.com/albums${vk.id}?profile=1"
              onclick="return showAlbums(${vk.id}, {noHistory: true}, event);">
              <div class="count">${vk_page_api.counters.photos?vk_page_api.counters.photos:0}</div>
              <div class="label">${this.declOfNum(vk_page_api.counters.photos,["фото","фота","фото"])}</div>
            </a><a class="page_counter" href="https://vk.com/tag${vk.id}"
              onclick="return showPhotoTags(${vk.id}, {noHistory: true}, event);">
              <div class="count">${vk_page_api.counters.notes?vk_page_api.counters.notes:0}</div>
              <div class="label">${this.declOfNum(vk_page_api.counters.notes?vk_page_api.counters.notes:0,["отметка","отметки","отметок"])}</div>
            </a><a class="page_counter" href="https://vk.com/videos625043763"
              onclick="return page.showPageVideos(event, ${vk.id})">
              <div class="count">${vk_page_api.counters.videos?vk_page_api.counters.videos:0}</div>
              <div class="label">${this.declOfNum(vk_page_api.counters.videos,["видеозапись","видеозаписи","видеозаписей"])}</div>
            </a><a class="page_counter" href="https://vk.com/audios${vk.id}"
              onclick="return page.showPageAudios(event, ${vk.id});">
              <div class="count">${vk_page_api.counters.audios?vk_page_api.counters.audios:0}</div>
              <div class="label">${this.declOfNum(vk_page_api.counters.audios,["аудиозапись","аудиозаписи","аудиозаписей"])}</div>
            </a></div>
        </div>

      </div>
    </div>
  </div>
                        </div>`}))
                                                                this.findElem('div#wide_column').appendChild(this.findElem('div#page_block_submit_post'))
                                                                this.findElem('div#wide_column').appendChild(this.findElem('div#profile_wall'))
                                                                this.findElem('h1.page_name').innerText = `${vk_page_api.first_name} ${vk_page_api.last_name}`
                                                                this.findElem('a.profile_more_info_link').addEventListener('click',()=>{
                                                                    this.findElem('.ProfileInfo__fullInfoButton').click()
                                                                })
                                                                    window.findElem = this.findElem
                                                                if (!vk_page_api.is_closed){
                                                                    this.findElem('.PageActionsClosedProfile').remove()
                                                                }else{
                                                                    this.findElem('.PageActionsClosedProfile').addEventListener('click',()=>{
                                                                        window.findElem('.vkuiSimpleCell.vkuiSimpleCell--android.vkuiSimpleCell--mult.vkuiSimpleCell--sizeY-compact.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--hasHover.vkuiTappable--hasActive.vkuiTappable--mouse').click()
                                                                    })
                                                                }
                                                                vk_page_followers.items.forEach(elem=>{
                                                                    !elem.deactivated?console.log(elem):null
                                                                })
                                                                this.findElem('.owner_photo_bubble_action.owner_photo_bubble_action_crop').addEventListener('click',this.change)
                                                                this.findElem('.ui_thumb_x_button').addEventListener('click',this.delete)
                                                                    //for (var key of Object.keys(vk_page_api)){
                                                                    //    vk_page_api[key]&&!this.isEmpty(vk_page_api[key])?console.log(`key: ${key}||value: ${vk_page_api[key]}`):null
                                                                    //}
                    }
                    })
               })
                })
                }
        },100)
        //this.API_POST("users.get",`user_ids=${vk.id}`).then(val=>console.log(val))
    }
    Tests() {
        /* ЗДЕСЬ НАХОДЯТСЯ ФУНКЦИИ ДЛЯ ТЕСТОВ */
        /*************************************/
        /*GM_xmlhttpRequest ( {
            method:     "POST",
            url:        `https://api.vk.com/method/users.get?user_ids=hack1exe&fields=bdate,activities,site,about,last_seen,status&access_token=${this.settings.access_token}&v=${this.settings.apiver}`,
            headers:    {
            "Content-Type": "text/plain",
            "Content-Length": "0"
       },
       onload:     function (response) {
           let vk_obj = JSON.parse(response.responseText).response[0]
           console.dir(vk_obj)
           console.log (`Имя:${vk_obj.first_name} ${vk_obj.last_name} Статус:"${vk_obj.status}"`);
       }
       });*//*
        GM_xmlhttpRequest ( {
            method:     "POST",
            url:        `https://api.vk.com/method/users.get?user_ids=hack1exe&fields=bdate,activities,site,about,last_seen,status&access_token=${this.settings.access_token}&v=${this.settings.apiver}`,
            headers:    {
            "Content-Type": "text/plain",
            "Content-Length": "0"
       },
       onload:     function (response) {
           let vk_obj = JSON.parse(response.responseText).response[0]
           console.dir(vk_obj)
           console.log (`Имя:${vk_obj.first_name} ${vk_obj.last_name} Статус:"${vk_obj.status}"`);
       }
       });*/
        // ТЕМА
        /*
        GM_xmlhttpRequest ( {
            method:     "POST",
            url:        `https://vk.com/al_settings.php?act=a_save_color_scheme_mode`,
            data:`al=1&hash=${document.querySelector('.idd_wrap.SettingsColorSchemeDropdown').dataset.hash}&mode=dark`,
            headers:    {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            onload:     function (response) {
                console.log (response.responseText);
            }
       });
       */
        /***************************************/
        /* ЗДЕСЬ НАХОДЯТСЯ ФУНКЦИИ ДЛЯ ТЕСТОВ */
    }
    IsPageLoaded() {
        /* ПРОВЕРКА ЗАГРУЗКИ СТРАНИЦЫ */
        /*****************************/
        if (document.body.innerHTML.replace(/\s{2,}/g, '').length) return true
        return false
        /*******************************/
        /* ПРОВЕРКА ЗАГРУЗКИ СТРАНИЦЫ */
    }
    BlockAdsInit() {
        /* ЗАГРУЗКА БЛОКИРОВЩИКА РЕКЛАМЫ */
        /********************************/
        this.ads_timer = new Interval().set(this.ads, 100)
        GM_webRequest([{
                selector: "*://vk.*/js/lib/px.js*",
                action: "cancel"
            },
            {
                selector: "*://top-fwz1.mail.ru/*",
                action: "cancel"
            },
            {
                selector: "*://trk.mail.ru/i/*",
                action: "cancel"
            },
            {
                selector: "*://r3.mail.ru/*",
                action: "cancel"
            },
            {
                selector: "*://www.tns-counter.ru/*",
                action: "cancel"
            },
            {
                selector: "*://stats.vk-portal.net/web-stats/p",
                action: "cancel"
            },
            {
                selector: "*://vk.*/ads_rotate.php?act=al_update_ad",
                action: "cancel"
            },
            {
                selector: "*://ad.mail.ru/*",
                action: "cancel"
            },
            {
                selector: "*://top-fwz1.mail.ru/counter*",
                action: "cancel"
            },
            {
                selector: "https://vk.*/al_audio.php?act=ad_event",
                action: "cancel"
            },
            {
                selector: "https://vk.com/reaction/1-reactions*",
                action: "cancel"
            }
        ]);
        this.Con(`[Function] Блокировщик рекламы загружен успешно`)
        /********************************/
        /* ЗАГРУЗКА БЛОКИРОВЩИКА РЕКЛАМЫ */
    }
    FixMenu() {
        /* ФИКС МЕНЮ */
        /************/
        let name = this?.findElem("img.TopNavBtn__profileImg")?.alt
        let el = this?.findElem('a#top_profile_link')
        el?el.insertBefore(this.create("div", {
            paddingRight: "10px",
            display: "inline-block",
            verticalAlign: "top",
            color: "white",
            fontWeight: 500,
            "-webkit-font-smoothing": "subpixel-antialiased"
        }, {
            innerText: name
        }), el.firstChild):null
        document.querySelectorAll('#top_profile_menu.top_profile_menu_new .top_profile_mrow .menu_item_icon')?document.querySelectorAll('#top_profile_menu.top_profile_menu_new .top_profile_mrow .menu_item_icon').forEach(el=>{
            el.remove()
        }):null
        document.querySelector('a.top_profile_mrow.TopProfileItem--appearance')?document.querySelector('a.top_profile_mrow.TopProfileItem--appearance').outerHTML = `<a class="top_profile_mrow TopProfileItem--appearance" id="" href="#" style="" onclick="return false">
      <div class="menu_item_icon"><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M10.8 6.05a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14.45 8.2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM4.3 9.45a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM7.85 4.8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path><path clip-rule="evenodd" d="M14.18 14.04c2.14.23 4.32-.75 4.32-4.04A8.47 8.47 0 0010 1.5 8.47 8.47 0 001.5 10a8.47 8.47 0 008.5 8.5c1.13 0 2.25-1 1.98-2.43l-.17-.68c-.25-.94-.43-1.6 1.08-1.49l1.29.14zm.16-1.5l-.25-.02-1.1-.12a3.34 3.34 0 00-1.74.27 2 2 0 00-1.1 1.68 3.8 3.8 0 00.22 1.47l.14.54c.02.13 0 .22 0 .28a.44.44 0 01-.1.17.57.57 0 01-.41.19 6.97 6.97 0 01-7-7 6.97 6.97 0 017-7 6.97 6.97 0 017 7c0 1.3-.41 1.87-.77 2.15-.42.32-1.07.48-1.9.4z" fill-rule="evenodd"></path></g></svg></div>
      <span>
        <div class="TopProfileItem__colorSchemeLabel">
      Тема:
      <div class="idd_wrap SettingsColorSchemeDropdown" id="" data-items="[[&quot;light&quot;,&quot;Светлая&quot;],[&quot;dark&quot;,&quot;Тёмная&quot;],[&quot;auto&quot;,&quot;Системная&quot;]]" data-value="light" hash="${this.findElem("a.top_profile_mrow.TopProfileItem--appearance [data-hash]").dataset?.hash}" data-inited="1">
      <div class="idd_selected_value " tabindex="0" role="link" t>Тёмная</div>
      <input type="hidden" id="_input" name="" value="dark">
      <div class="idd_popup" id="idd_" style="margin-top: -21px;width: 94.75px;opacity: 0;margin-left: -10px;visibility:hidden;">
      <div class="idd_header_wrap mnu_clck" >
      <div class="idd_header " id="light">Тёмная</div>
      </div>
      <div class="idd_items_wrap">
      <div class="idd_items_content">
      <div class="idd_item light_btn" id="idd_item_light" data-id="light" tabindex="0" role="button">
      <div class="idd_item_name" onclick="">Светлая</div>
      </div>
      <div class="idd_item dark_btn" id="idd_item_dark" data-id="dark" tabindex="0" role="button" >
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
    </a>`:null
        let razdelitel = this.create("div",{},{
            innerHTML:`<div style="border-top-color:var(--profile_menu_separator) ;border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>`,
        })
         let razdelitel2 = this.create("div",{},{
            innerHTML:`<div style="border-top-color:var(--profile_menu_separator) ;border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>`,
        })
        let stranica = this.create("a",{},{
            className:`top_profile_mrow`,
            href:this.findElem('li#l_pr>a')?.href,
            innerText:"Моя страница"
        })
        let redaktirovat = this.create("a",{},{
            className:`top_profile_mrow`,
            id:"top_edit_link",
            href:"/edit",
            innerText:"Редактировать"
        })

        document.querySelector('div#top_profile_menu')?.insertBefore(redaktirovat,this.findElem('div#top_profile_menu').firstChild)
        document.querySelector('div#top_profile_menu')?.insertBefore(razdelitel,this.findElem('div#top_profile_menu').firstChild)
        document.querySelector('div#top_profile_menu')?.insertBefore(stranica,this.findElem('div#top_profile_menu').firstChild)
        document.querySelector('a#top_support_link')?.insertAdjacentElement('afterEnd', razdelitel2)
        this.Con(`[Function] Меню было исправлено успешно`)
        /**************/
        /* ФИКС МЕНЮ */
    }

    CssAdd() {
    let th = this
    let cssload = new Timer()
    cssload.Start();
    this.GET(`https://github.com/891-2/vk-old-rad/raw/main/style.css?${Math.random() *100}`).then(val => {
        if (!localStorage.getItem("css") || localStorage.getItem("css") !== val) {
            GM_addStyle(val)
            localStorage.setItem("css", val)
            cssload.End();
            document.querySelectorAll('style').forEach(elem => {
                if (elem.innerText.includes('brightness(94%)')) {
                    th.classID = elem.id
                }
            })
            th.class_timer = new Interval().set(function() {
                if (!document.getElementById(th.classID)) {
                    th.CssAdd()
                }
            }, 100)
            th.Con(`[Event] Реинициализация css успешно за ${cssload.end} ms, CssID = ${this.classID}`)
        } else {
            GM_addStyle(val)
            cssload.End();
            document.querySelectorAll('style').forEach(elem => {
                if (elem.innerText.includes('brightness(94%)')) {
                    th.classID = elem.id
                }
            })
            th.class_timer = new Interval().set(function() {
                if (!document.getElementById(th.classID)) {
                    th.CssAdd()
                }
            }, 100)
            th.Con(`[Event] Инициализация css успешно за ${cssload.end} ms, CssID = ${this.classID}`)
        }
    })
}
    /*ОСТАЛЬНЫЕ ФУНКЦИИ*/
    /******************/
    Err(message) {
        console.log(`%c${message}`, 'background: #222; color: #e70002')
    }
    Con(message) {
        console.log(`%c${message}`, 'background: #222; color: #bada55')
    }
    Dir(message) {
        console.dir(message)
    }
    Info(message) {
        throw new Error(message)
    }
    findElem(elem) {
        if (elem) {
            let mas = document.querySelectorAll(elem);
            let temp = document.querySelector(elem);

            if (mas.length > 1) {
                if (mas !== undefined) {
                    return mas;
                }
            } else {
                if (temp) {
                    return temp;
                }
            }

            return false
        }
    }
    setVAR(param, value) {
        this.settings ? (this.settings[param] = value, GM_setValue("Default", JSON.stringify(this.settings))) : (this.settings = {
            ...this.settings,
            ...this.default_settings
        }, this.settings[param]);
    }
    getVAR(param) {
        this.settings = JSON.parse(GM_getValue("Default"))
        return this.settings ? this.settings[param] : this.default_settings[param]
    }
    declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }
    change(){
        function changeAvatar(){
            setTimeout(function (){
                document.querySelectorAll('.DropdownActionSheet .vkuiSimpleCell--sizeY-compact')[2].click()
            },200)
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').removeEventListener('mouseenter',changeAvatar)
            }
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').addEventListener('mouseenter',changeAvatar)
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));
    }
    delete(){
        function deleteAvatar(){
            setTimeout(function (){
                document.querySelectorAll('.DropdownActionSheet .vkuiSimpleCell--sizeY-compact')[4].click()
            },200)
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').removeEventListener('mouseenter',deleteAvatar)
            }
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').addEventListener('mouseenter',deleteAvatar)
            document.querySelector('.OwnerPageAvatar.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--mouse').dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));
    }
    updateVAR() {
        this.local_settings ? this.settings = {
            ...this.settings,
            ...this.local_settings
        } : this.settings = {
            ...this.settings,
            ...this.default_settings
        }
        GM_setValue("Default", JSON.stringify(this.settings));
    }
    create(name, styles, options) {
        let tmp = document.createElement(name)
        if (styles) {
            for (var style in styles) {
                tmp.style[style] = styles[style]
            }
        }
        if (options) {
            for (var option in options) {
                tmp[option] = options[option]
            }
        }
        return tmp;
    }
    ads() {
        if (window && window.vk) {
            vk.audioAdsConfig = null;
            ap.ads._adEvents = [];
            ap.ads._isPlaying = false;
            window.noAdsAtAll = true
            PageBottomBanners.initUnauthBanner = function() {}
            window.Unauthorized2 = undefined
        }
        if (document.querySelector(ads_filter)){
            document.querySelectorAll(ads_filter).forEach((el)=>{
              el.remove();
           })
        }
    }
    getGroupsMas(){
        let t = []
        document.querySelectorAll('a.ProfileSubscriptions__item.vkuiSimpleCell.vkuiSimpleCell--android.vkuiSimpleCell--sizeY-compact.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--hasHover.vkuiTappable--hasActive.vkuiTappable--mouse').forEach(elem=>{
        let caption = elem.querySelector('span.vkuiSimpleCell__text.vkuiSimpleCell__subtitle.vkuiCaption.vkuiCaption--l-2')
        let image = elem.querySelector('img.AvatarRich__img')
        let name = elem.querySelector('span.vkuiSimpleCell__children.vkuiHeadline.vkuiHeadline--android.vkuiHeadline--sizeY-compact.vkuiHeadline--l-1.vkuiHeadline--w-3')
        if (caption){
            let ob = {}
            ob.href = elem.href
            ob.caption = caption.innerText
            ob.image = image.src
            ob.name = name.innerText
            t.push(ob)
            ob = null
        }else{
            let ob = {}
            ob.href = elem.href
            ob.caption = ""
            ob.image = image.src
            ob.name = name.innerText
            t.push(ob)
            ob = null
        }
    })
        return t
    }
    parseDate(date){
        date = date.split('.')
        if (date.length==2) return `https://vk.com/search?c[section]=people&c[bday]=${date[0]}&c[bmonth]=${date[1]}`
        if (date.length==3) return `https://vk.com/search?c[section]=people&c[byear]=${date[2]}`
    }
    parseDateSTR(date){
        date = date.split('.')
        return date.length==2?`${date[0]} ${this.parseMonth(+date[1])}`:`${date[0]} ${this.parseMonth(+date[1])} ${date[2]} г.`
    }
    parseMonth(m){
        return ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][m-1]
    }
    getFriendsMas(){
        let t = []
        document.querySelectorAll('.ProfileFriends__item.vkuiHorizontalCell.vkuiHorizontalCell--s').forEach(elem=>{
        let href = elem.querySelector('a.vkuiHorizontalCell__body.vkuiTappable.vkuiTappable--sizeX-regular.vkuiTappable--hasHover.vkuiTappable--hasActive.vkuiTappable--mouse')
        let image = elem.querySelector('img.AvatarRich__img')
        let name = elem.querySelector('span.vkuiHorizontalCell__title.vkuiCaption.vkuiCaption--l-2')
            let ob = {}
            ob.href = href.href
            ob.image = image.src
            ob.name = name.innerText
            t.push(ob)
            ob = null
    })
        return t
    }
   IsOwnerWall(){
       return document.location.href.includes(this.findElem("li#l_pr>a").href)
   }
  isEmpty(obj) {
      if (typeof obj =="object"&&obj){
      for(var prop in obj) {
          if(obj[prop]) {
              return false;
          }
     }}else{
         return false
     }
      return true;
    }
    POST(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: url,
                synchronous: true,
                nocache:true ,
                headers: {
                    "Content-Type": "text/plain",
                    "Content-Length": "0",
                    "Cache-Control":"no-cache"
                },
                onload: function(response) {
                    resolve(response.responseText);
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        })
    }
    GET(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                synchronous: true,
                nocache:true ,
                headers: {
                    "Content-Type": "text/plain",
                    "Content-Length": "0",
                    "Cache-Control":"no-cache"
                },
                onload: function(response) {
                    resolve(response.responseText);
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        })
    }
    API_POST(method,params) {
        return new Promise((resolve, reject) => {
            //console.log(`https://api.vk.com/method/${method}?${params}&access_token=${this.settings.access_token}&v=${this.settings.apiver}`)
            GM_xmlhttpRequest({
                method: "POST",
                url: `https://api.vk.com/method/${method}?${params}&access_token=${this.settings.access_token}&v=${this.settings.apiver}`,
                synchronous: true,
                nocache:true ,
                headers: {
                    "Content-Type": "text/plain",
                    "Content-Length": "0",
                    "Cache-Control":"no-cache"
                },
                onload: function(response) {
                    resolve(JSON.parse(response.responseText).response);
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        })
    }
    Clear(){
        this.class_timer = clearInterval(this.class_timer)
        this.ads_timer = clearInterval(this.ads_timer)
        this.TestWall_Timer = clearInterval(this.TestWall_Timer)
        this.Timer_Check = clearInterval(this.Timer_Check)
    }
    /********************/
    /*ОСТАЛЬНЫЕ ФУНКЦИИ*/
}
/* ИНИЦИАЛИЗАЦИЯ */
/******************/
var RAM_VAR = new RAM();
RAM_VAR.Init();
/******************/
/* ИНИЦИАЛИЗАЦИЯ */


/*          BLUR OR FOCUS         */
/*********************************/
window.addEventListener('visibilitychange',(ev)=>{
    if (ev.path[0].hidden){
        RAM_VAR.Clear()
    }else{
        RAM_VAR.Init()
    }
})
window.addEventListener('mozvisibilitychange',(ev)=>{
    if (ev.path[0].hidden){
        RAM_VAR.Clear()
    }else{
        RAM_VAR.Init()
    }
})
window.addEventListener('webkitvisibilitychange',(ev)=>{
    if (ev.path[0].hidden){
        RAM_VAR.Clear()
    }else{
        RAM_VAR.Init()
    }
})
window.addEventListener('msvisibilitychange',(ev)=>{
    if (ev.path[0].hidden){
        RAM_VAR.Clear()
    }else{
        RAM_VAR.Init()
    }
})
/***********************************/
/*          BLUR OR FOCUS         */
