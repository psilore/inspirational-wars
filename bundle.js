(()=>{function t(t){const e=document.documentElement.style;"dark"==t?(e.setProperty("--faction-text","#ff5a5a"),e.setProperty("--faction-foreground","#280000"),e.setProperty("--faction-background","#1c0000"),e.setProperty("--faction-foreground-grad","#120000"),e.setProperty("--faction-middle-grad","#120000"),e.setProperty("--faction-background-grad","#000000"),e.setProperty("--faction-hover","#1c0000"),e.setProperty("--faction-border-background","#ff5a5a"),e.setProperty("--faction-border-active","#ff5a5a3b")):"light"==t?(e.setProperty("--faction-text","#ffffff"),e.setProperty("--faction-foreground","#001972"),e.setProperty("--faction-middle","#00196c"),e.setProperty("--faction-background","#001764"),e.setProperty("--faction-foreground-grad","#011e7c"),e.setProperty("--faction-middle-grad","#001762"),e.setProperty("--faction-background-grad","#001046"),e.setProperty("--faction-hover","#ffffff"),e.setProperty("--faction-border-background","#5a8dff"),e.setProperty("--faction-border-active","#5a7aff3b")):"neutral"==t&&(e.setProperty("--faction-text","#ffffff"),e.setProperty("--faction-foreground","#7c7c7c"),e.setProperty("--faction-middle","#00196c"),e.setProperty("--faction-background","#525252"),e.setProperty("--faction-foreground-grad","#666666"),e.setProperty("--faction-middle-grad","#3c3c3c"),e.setProperty("--faction-background-grad","#3a3a3a"),e.setProperty("--faction-hover","#ffffff"),e.setProperty("--faction-border-background","#484848"),e.setProperty("--faction-border-active","#dfdfdf3b"))}function e(){fetch("./dist/qoutes.json").then((t=>t.json())).then((e=>{var r=e.quotes[Math.floor(Math.random()*e.quotes.length)];!function(e){switch(e){case"Dark":t("dark");break;case"Light":t("light");break;default:t("neutral")}}(r.faction),o("text",r.quote),o("author",r.character),function(t,e,o){let r=document.getElementById(t),n="https://inspirational-vader.ga";const a=encodeURIComponent(e+" -"+o),f=encodeURIComponent(n),c=`https://twitter.com/intent/tweet/?text=${a}&${f}`;console.log(c),r.setAttribute("href",c)}("tweet-quote",r.quote,r.character)}))}function o(t,e){let o=document.getElementById(t);if("text"==t){const t="<span>&#8220;</span>",r="<span>&#8221;</span>";o.innerHTML=t+e+r}else if("author"==t){const t="<span>&#8212;</span> ";o.innerHTML=t+e}}document.getElementById("new-quote").addEventListener("click",e,!1),window.onload=()=>{e(),t()}})();