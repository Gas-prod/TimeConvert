importScripts("/TimeConvert/sw-toolbox.js");
toolbox.precache([
    "/TimeConvert/index.html", 
    "/TimeConvert/TimeStyle.css", 
    "/TimeConvert/TimeScript.js",
    "/TimeConvert/img/fleche.svg",
    "/TimeConvert/icon/icon1.png", 
    "/TimeConvert/icon/icon2.png"
])

toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})