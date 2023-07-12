const cleanbutton = document.getElementById("cleanbutton");
if (cleanbutton) {
    cleanbutton.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    msg: "clean",
                    tabId: tabs[0].id
                },
                function (response) {
                    window.close();
                }
            )
        });
    };
}

const resetbutton = document.getElementById("resetbutton");
if (resetbutton) {
    resetbutton.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    msg: "reset",
                    tabId: tabs[0].id
                },
                function (response) {
                    window.close();
                }
            )
        });
    };
}