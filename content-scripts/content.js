const elements=[
"#nhkheader",
"nr-common-footer-wrapper",
".easy-header",
".sidebar",
"#nhkfooter",
"#bottom_optout_announce",
"#js-dictionary-box",
".article-main__links",
".enquete", ".article-main__colors",
".article-main__tools",
"#js-article-figure",
"img"
];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { msg, tabId } = request;
    const { id, origin } = sender;
    if(msg==="clean"){
        elements.forEach(key => {
            document.querySelectorAll(key).forEach(ele=>{
                ele.style.display="none";
            })
            // document.querySelector(key).style.display="none";
        });
        document.querySelector(".l-container").style.width = "100%";
    }

    if(msg==="reset"){
        elements.forEach(key => {
            document.querySelectorAll(key).forEach(ele=>{
                ele.style.display="block";
            })
        });
        document.querySelector(".l-container").style.width = "987px";
    }
    
    sendResponse({ fromcontent: "This message is from content.js" });
});