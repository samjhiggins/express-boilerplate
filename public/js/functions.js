// check if something is a number
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// check if something is an email
function isEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// get all querystring data ready
// access through QueryString("key"). Key must be lowercase
var _requestQueryData;
(window.onpopstate = function () {
    var match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query = window.location.search.substring(1);

    _requestQueryData = {};
    while (match = search.exec(query))
        _requestQueryData[decode(match[1]).toLowerCase()] = decode(match[2]);
})();

function queryString(key) {
    return _requestQueryData[key];
}

/*
looks at the data attribues on an element and returns an object
Usage:
<meta data-order="order" data-order-id="123" />
$('meta["data-order"]').toObject();
Result:
{"orderId":123}
*/
$.fn.toObject = function () {

    var data = {};

    if (!this.length) {
        return data;
    }

    $.each(this.data(), function (i, v) {
        data[i] = v;
    });

    return data;
}

$(document).ready(function () {
    // submit any forms marked "submit-on-load". We want to do this after any other document ready events have fired, because this is probably loading AJAX content
    // http://stackoverflow.com/questions/3008696/after-all-document-ready-have-run-is-there-an-event-for-that
    $(window).load(function () {
        $('form[data-submit-on-load] input[type="submit"]').click();
    });
});
