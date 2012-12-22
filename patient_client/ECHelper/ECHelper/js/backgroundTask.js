(function () {

    Windows.Storage.ApplicationData.current.localSettings.values[Windows.UI.WebUI.WebUIBackgroundTaskInstance.current.task.name] = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current.triggerDetails.content;

})();