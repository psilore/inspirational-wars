const init = () => {
  fetchNewQoute();
  setFactionColors();
}

function setFactionColors(faction) {
  const style = document.documentElement.style;
  if(faction == 'dark') {
    style.setProperty('--faction-text', '#ff5a5a');
    style.setProperty('--faction-foreground', '#280000');
    style.setProperty('--faction-background', '#1c0000');
    style.setProperty('--faction-foreground-grad', '#120000');
    style.setProperty('--faction-middle-grad', '#120000');
    style.setProperty('--faction-background-grad', '#000000');
    style.setProperty('--faction-hover', '#1c0000');
    style.setProperty('--faction-border-background', '#ff5a5a');
    style.setProperty('--faction-border-active', '#ff5a5a3b');
  } else if (faction == 'light'){
    style.setProperty('--faction-text', '#ffffff');
    style.setProperty('--faction-foreground', '#001972');
    style.setProperty('--faction-middle', '#00196c');
    style.setProperty('--faction-background', '#001764');
    style.setProperty('--faction-foreground-grad', '#011e7c');
    style.setProperty('--faction-middle-grad', '#001762');
    style.setProperty('--faction-background-grad', '#001046');
    style.setProperty('--faction-hover', '#ffffff');
    style.setProperty('--faction-border-background', '#5a8dff');
    style.setProperty('--faction-border-active', '#5a7aff3b');
  } else if (faction == 'neutral'){
    style.setProperty('--faction-text', '#ffffff');
    style.setProperty('--faction-foreground', '#7c7c7c');
    style.setProperty('--faction-middle', '#00196c');
    style.setProperty('--faction-background', '#525252');
    style.setProperty('--faction-foreground-grad', '#666666');
    style.setProperty('--faction-middle-grad', '#3c3c3c');
    style.setProperty('--faction-background-grad', '#3a3a3a');
    style.setProperty('--faction-hover', '#ffffff');
    style.setProperty('--faction-border-background', '#484848');
    style.setProperty('--faction-border-active', '#dfdfdf3b');
  }

}


function fetchNewQoute() {
  const fetchPromise = fetch("./qoutes.json");
  fetchPromise.then(response => {
    return response.json();
    }).then(body => { 
    var randomQoute = body.quotes[Math.floor(Math.random()*body.quotes.length)];
    setFaction(randomQoute.faction)
    setHtmlById('text', randomQoute.quote)
    setHtmlById('author', randomQoute.character)
    setIntent('tweet-quote', randomQoute.quote, randomQoute.character);
  });
}

function setFaction(string) {
  switch(string) {
    case 'Dark':
      setFactionColors('dark')
      break;
    case 'Light':
      setFactionColors('light')
      break;
    default:
      setFactionColors('neutral')
  }
}

function setHtmlById(id, string){
  let el = document.getElementById(id)
  if(id == 'text') {
    const leftCitationMark = '<span>&#8220;</span>'
    const rightCitationMark = '<span>&#8221;</span>'
    el.innerHTML = leftCitationMark + string + rightCitationMark
  } else if(id == 'author'){
    const emDash = '<span>&#8212;</span> ' 
    el.innerHTML = emDash + string
  }
}

function setIntent(id, text, author) {
  let el = document.getElementById(id);
  let string = text + ' -' + author
  let url = 'https://inspirational-vader.ga'
  const urlEncodedQoute = encodeURIComponent(string);
  const urlEncodedLink = encodeURIComponent(url);

  const intent = 'https://twitter.com/intent/tweet'
  const urlString = `${intent}/?text=${urlEncodedQoute}&${urlEncodedLink}`;
  console.log(urlString)
  el.setAttribute("href", urlString);
}

const newQoute = document.getElementById("new-quote");
newQoute.addEventListener("click", fetchNewQoute, false);

window.onload = init;