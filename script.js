// ==UserScript==
// @name         Websocket Grabber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Grab all the websockets!
// @author       Trzmielarz
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    window.sockets = [];
    const nativeWebSocket = window.WebSocket;
    window.WebSocket = function(...args){
        const socket = new nativeWebSocket(...args);
        window.sockets.push(socket);
        return socket;
    };
    setTimeout(() => {
       console.log(sockets);
    }, 1000);
   
})();
