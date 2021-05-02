
function updateClick(version) {
    switch (version) {
        case 1013:
            window.open("https://gtimpact.space/go/releases/1.0.1.3/", "_blank");
            break;
        case 1014:
            window.open("https://gtimpact.space/go/releases/1.0.1.4/", "_blank");
            break;
    }
}

function lastUpdate(id) {
    switch (id) {
        case 1:
            document.location.href = 'https://gtimpact.space/go/releases/1.0.1.4/IMPACT-1.0.1.4-CLIENT.zip';
            break;
        case 2:
            document.location.href = 'https://gtimpact.space/go/releases/1.0.1.4/IMPACT-1.0.1.4-SERVER.zip';
            break;
    }
}

function addElementHeader() {
    let id ='elementHeader'
    let html = '<ul id="main-menu">' +
               '<li><a onclick="hrefHeader(1)" href="#" class="lng-home">Главная</a></li>' +
               '<li><a onclick="hrefHeader(3)"  href="#" class="lng-download">Скачать</a></li>' +
                '<li class="dropdown"><a onclick="hrefHeader(2)"  href="#" class="lng-about-modpack">О модпаке</a></li>' +
               '<li class="dropdown"><a onclick="hrefHeader(4)"  href="#" class="lng-wiki">Вики</a></li>' +
               '<li class="dropdown lang-selector"><a id="lang" onclick="langClick()" href="#">RU</a></li> </ul><div class="menu-right"></div>';
    try {
        let d1 = document.getElementById(id);
        d1.insertAdjacentHTML('beforeend', html);
    } catch (e) {
    }
}

function hrefHeader(id) {
    switch (id) {
        case 1:
            document.location.href = '/impact/index.html#home';
            break;
        case 2:
            document.location.href = '/impact/index.html#about';
            break;
        case 3:
            document.location.href = '/impact/index.html#download';
            break;
        case 4:
            document.location.href = '/impact/wiki.html';
            break;
        case 5:
            document.location.href = '/impact/wiki/impactcore.html';
            break;
    }
}
function addElementFooter() {
    let html = '<div class="container"> <div class="row"> <div class="col-lg-4"> <h3>IMPACT</h3><p class="lng-home-footer-desc">Где-то между паром и электричеством находится ответ на вопрос, почему мы здесь.</p></div><div class="col-lg-4"><h3 class="lng-home-footer-coop">По вопросам сотрудничества:</h3><ul class="icon-list icon-line"><li>domian844@gmail.com</li></ul></div><div class="col-lg-4"><div class="icon-links icon-social icon-links-grid social-colors"><a href="https://vk.com/gregcorporation"><i class="fab fa-vk"></i></a><a href="https://discord.gg/bMf2qvd"><i class="fab fa-discord"></i></a><a href="https://github.com/GT-IMPACT"><i class="fab fa-github"></i></a><a href="https://www.patreon.com/gtimpact"><i class="fab fa-patreon"></i></a></div><hr class="space-sm" /><p class="lng-home-footer-sub">Подпишитесь на наши социальные сети, чтобы быть вкурсе последних новостей.</p></div></div></div><div class="footer-bar"><div class="container">Copyright &copy; <script>document.write(new Date().getFullYear());</script> | Made by 4gname</div></div>';
    let id ='elementFooter'
    try {
        let d1 = document.getElementById(id);
        d1.insertAdjacentHTML('beforeend', html);
    } catch (e) {
    }
}

function addWikiMod(lngName, name, img, href) {
    let html = '<div class="grid-item"><div class="cnt-box cnt-box-side">' +
        '<a href="' + href + '" class="img-box"><img src="' + img + '" alt="" /></a>' +
        '<div class="caption"><h2 class="lng-wiki-' + lngName + '">' + name + '</h2>' +
        '<p class="lng-wiki-' + lngName + '-desc">%description%</p>' +
        '<a class="btn-text lng-wiki-' + lngName + '-more" href="' + href + '">Подробнее</a></div></div></div>';
    try {
        let d1 = document.getElementById('addMod');
        d1.insertAdjacentHTML('beforeend', html);
    } catch (e) {
    }
}

// function addWikiItem(id, name, href, img) {
//     let redirect = href.length > 0 ? '../wiki/impactcore/Item.html#' + href : '#';
//     let html = '<div class="grid-item"><div class="cnt-box cnt-box-team" data-href="' + redirect + '" data-lightbox-anima="fade-in"><img src="' + img + '" alt="" /><div class="caption"><h2>' + name + '</h2></div></div></div>';
//     try {
//         let d1 = document.getElementById(id);
//         d1.insertAdjacentHTML('beforeend', html);
//     } catch (e) {
//     }
// }

function addWikiItems(id, name, href, img, mod) {

    let html = '<div class="grid-item"><div id="grid-item" class="cnt-box cnt-box-team" data-href="../wiki/' + mod + '/item.html#' + href + '" data-lightbox-anima="fade-in"><img src="' + img + '" alt="" /><div class="caption"><h2>' + name + '</h2></div></div></div>';

    try {
        let d1 = document.getElementById(id);
        d1.insertAdjacentHTML('beforeend', html);
    } catch (e) {
    }
    // let d2 = document.getElementById('grid-item');
    //
    // console.log(d2.dataset.href);
}


function setCookie(cookieName,cookieValue,nDays) {
    let today = new Date();
    let expire = new Date();
    if (nDays==null || nDays===0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue)
        + ";expires="+expire.toGMTString();
}

function getCookie(cookieName) {
    let theCookie=" "+document.cookie;
    let ind=theCookie.indexOf(" "+cookieName+"=");
    if (ind===-1) ind=theCookie.indexOf(";"+cookieName+"=");
    if (ind===-1 || cookieName==="") return "";
    let ind1=theCookie.indexOf(";",ind+1);
    if (ind1===-1) ind1=theCookie.length;
    return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function setLang(lang){

    if(window.hasOwnProperty('localStorage'))
        window.localStorage.setItem('lang', lang);
    document.getElementById('lang').innerHTML = lang.toUpperCase();
    for (key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key.toString()][lang];
        }
    }

    hrefLang(lang);
}

function langSetter() {
    let language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "en";
    language = language.substr(0, 2).toLowerCase();

    return language;
}

function langClick() {
    let inner = document.getElementById('lang').innerHTML;
    if (inner === "EN") {
        setLang('ru');
    } else {
        setLang('en');
    }
    location.reload();
}

$(document).ready(function() {
    let lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || langSetter();
    if (lang !== "en" && lang !== "ru") {
        lang = "en";
    }
    setLang(lang);

    let href = window.location.href;
    href = href.substr(href.length - 9, 4);
    if (href === 'item') {
        hrefHeader(4)
    }
});

function hrefLang(lang) {
    let lastChangelog = '';
    try {
        if (lang === "ru") {
            lastChangelog = "https://docs.google.com/document/d/1LebeDWaoNbqKscqCMzSA5WocuJ_RaUruF5jBYZPbKP0/edit#heading=h.78vbk1mstwyh";
            document.getElementById('changelog-1014').href = "https://docs.google.com/document/d/1LebeDWaoNbqKscqCMzSA5WocuJ_RaUruF5jBYZPbKP0/edit#heading=h.78vbk1mstwyh";
            document.getElementById('changelog-1013').href = "https://docs.google.com/document/d/1LebeDWaoNbqKscqCMzSA5WocuJ_RaUruF5jBYZPbKP0/edit#heading=h.b80bldt9pvn7";
        } else {
            lastChangelog = "https://docs.google.com/document/d/11W_P3M57shuGuRf_Uo6H90ND308NkukpL20iVnFwoHA/edit#heading=h.lvkn1kb7fu4f";
            document.getElementById('changelog-1014').href = "https://docs.google.com/document/d/11W_P3M57shuGuRf_Uo6H90ND308NkukpL20iVnFwoHA/edit#heading=h.lvkn1kb7fu4f";
            document.getElementById('changelog-1013').href = "https://docs.google.com/document/d/11W_P3M57shuGuRf_Uo6H90ND308NkukpL20iVnFwoHA/edit#heading=h.fcja1pju7er8";
        }
        document.getElementById('changelog-last').href = lastChangelog;
    } catch (e) {}
}

function addWikiMain(lng, mod, name, img, panelsActive, panel, panels) {
    try {
        document.getElementById('href-back').insertAdjacentHTML('beforeBegin',
            '<h1 class="lng-header-name-'+ lng +'">%name%</h1><h2 class="lng-header-tooltip-'+ mod +'">%mod%</h2>'
        );
        document.getElementById('pic-wiki-main').insertAdjacentHTML('beforeend', '<ul><img src="'+ img +'" alt="" /></ul>');

        for(let i = 1; i <= panelsActive; i++) {
            document.getElementById('panel-active').insertAdjacentHTML('beforeend',
                '<li><h3 class="lng-wiki-title-active-'+ lng + i +'"></h3><p class="lng-wiki-desc-active-'+ lng + i +'">%description%</p></li>');
        }
        for(let i = 1; i <= panel; i++) {
            document.getElementById('navigation-wiki').insertAdjacentHTML('beforeBegin',
                '<div class="panel"><ul class="text-list text-list-base" id="panel-wiki-' + i + '"></ul></div>');
            for(let j = 1; j <= panels[i-1]; j++) {
                document.getElementById('panel-wiki-' + i).insertAdjacentHTML('beforeend',
                    '<li><h3 class="lng-wiki-title-panel-'+ lng + i + "-" + j +'">%title ' + j + ' %</h3><p class="lng-wiki-desc-panel-'+ lng + i + "-" + j +'">%description ' + j + ' %</p></li>');
            }
        }
        document.getElementById('navigation-wiki').insertAdjacentHTML('beforeend',
            '<li class="active"><a href="#" class="lng-panel-' + lng + '1' + '">%desc%</a></li>');

        for(let i = 1; i <= panel; i++) {
            let idP = i + 1;
            document.getElementById('navigation-wiki').insertAdjacentHTML('beforeend',
                '<li><a href="#" class="lng-panel-'+ lng + idP + '">%desc%</a></li>');
        }
        document.getElementById('title').innerHTML = name;
    } catch (e) {
    }
}

function addDude(key) {
    let path = window.location.hash.substr(1);
    console.log(key[0]);
    addWikiItems('ItemsImpact', key[0], key[1], '../media/gregtech/'+key[1]+'.png', 'impactcore');
    if (path === key[1]) {
        addWikiMain(key[1], "ImpactCore", key[0], '../../media/gregtech/'+key[1]+'.png', key[2], key[3], key[4]);
    }
}

function primitiveWater() {
    let biomewater  = document.getElementById('biomewater').value;
    let tierwater  = document.getElementById('tierwater').value;
    if(biomewater === "Биом"){
        document.getElementById('totalwater').innerHTML = "Biome missing";
    } else if(tierwater === "Хэтч"){
        document.getElementById('totalwater').innerHTML = "Output Hatch missing";
    } else {
        let totalwater = biomewater * tierwater;
        document.getElementById('totalwater').innerHTML = ""+ totalwater + " L/s";
    }
}
function elWater() {
    let biomewater  = document.getElementById('biomewater').value;
    let tierwater  = document.getElementById('tierwater').value;
    if(biomewater === "Биом"){
        document.getElementById('totalwater').innerHTML = "Biome missing";
    } else if(tierwater === "Хэтч"){
        document.getElementById('totalwater').innerHTML = "Hatch missing";
    } else {
        let totalwater = (1 << tierwater - 1) * 2 * biomewater * 20;
        document.getElementById('totalwater').innerHTML = "" + totalwater + " L/s";
    }
}
