
// Get Parameter Query
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Redirect
var protocol_ok = DecryptedLink.startsWith("http://") || DecryptedLink.startsWith("https://") || DecryptedLink.startsWith("ftp://");
var q = getParameterByName("to");
var DecryptedLink = window.atob(q);
// // // // // // //

if (!protocol_ok) {

    var finalurl = "http://" + DecryptedLink;
} else {
    var finalurl = DecryptedLink

}

if (q == null) {
    window.location.href = "./redirect/create";
} else {
    window.location.href = `${finalurl}`;
}



