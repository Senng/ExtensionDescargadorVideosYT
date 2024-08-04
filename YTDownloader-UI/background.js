chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        updateIcon(tab);
    }
});

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, updateIcon);
});

function updateIcon(tab) {
    if (tab.url.includes("youtube.com/watch?")) {
        chrome.action.enable(tab.id);
    } else {
        chrome.action.disable(tab.id);
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("youtube.com/watch?")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    }
});
