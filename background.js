//Background JavaScript file

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == "import") {
        fields = request.fields; // use the data
        sendResponse({ response: "imported" });
    }
});

