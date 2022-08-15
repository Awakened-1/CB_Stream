// ==UserScript==
// @name             CBStream Grabber
// @namespace    http://tampermonkey.net/
// @version         0.2
// @description  capture CB Stream and play it
// @author         Me
// @match          *://*chaturbate.com/api/chatvideocontext/*
// @require        "https://unpkg.com/video.js/dist/video.min.js"
// @resource        "https://unpkg.com/video.js/dist/video-js.min.css"
// @run-at          document-end
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    var myBody = document.querySelector('body');
    var pre = document.querySelector('pre');
    pre.style.display = 'block';
    var text = pre.innerText;
    var link = text.slice(text.indexOf('hls_source')+14, text.indexOf('m3u8')+4);

    var tempModelName = window.location.toString().split('/')[5];
    var modelUrl = 'https://chaturbate.com/' + tempModelName;

  const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);


    const newDiv = document.createElement("div");
    const modelDiv = document.createElement("div");

   let snippet = `<video id="my-video" class="video-js" controls preload="auto" autoplay="true" muted="true" style="margin-top:0px; padding:5px; width:100%; height:100%; position:static;"
       poster="" data-setup="{}">
      <source src="${link}" type='application/x-mpegURL' />
      <p class="vjs-no-js">
           To view this video please enable JavaScript, and consider upgrading to a
           web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>`
    newDiv.innerHTML = snippet;
    newDiv.style.display = 'block';
    var insertSnippet = insertBefore(newDiv, pre);
    modelDiv.innerHTML = `Copy to add to CTBREC: <a href="${modelUrl}" target="_blank">${modelUrl}</a>` ;
    var h4 = document.querySelector('H4');
        pre.innerHTML = link + "<p>" +
   

    document.body.appendChild(modelDiv);

})();
