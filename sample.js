function searchDiki(info)
{
 var searchstring = info.selectionText;

 chrome.windows.create({
    url: "https://www.diki.pl/slownik-angielskiego?q="+searchstring,
    type: "popup",
    width: 440,
    top: 70,
    });
}
