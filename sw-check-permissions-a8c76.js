function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "stoomawy.net",
    "resubscribeOnInstall": true,
    "zoneId": 8055531,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://stoomawy.net/act/files/sw.perm.check.min.js?r=sw');
