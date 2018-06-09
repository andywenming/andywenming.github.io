function login() {
    $("#b-modal-login").modal("show");
    setCookie("this_url", window.location.href)
}
function logout() {
    $.post(logoutUrl);
    setTimeout(function () {
        location.replace(location)
    }, 500)
}

function recordId(category, id) {
    setCookie("cid", 0);
    setCookie("tid", 0);
    setCookie("search_word", 0);
    if (category != "index" && category != "/") {
        setCookie(category, id)
    }
    return true
}

/*
document.onkeydown = function () {
    if (event.keyCode == 116 || event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false
    }
};
document.oncontextmenu = function () {
    event.returnValue = false
};


*/