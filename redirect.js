
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

var q = getParameterByName("to");
var DecryptedLink = window.atob(q);
  if (q == null) {
    window.location.href = "./redirect/error?code=1";
} else {
    window.location.href = `${DecryptedLink}`;
}