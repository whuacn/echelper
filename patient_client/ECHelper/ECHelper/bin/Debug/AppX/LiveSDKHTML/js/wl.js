//! Copyright (c) Microsoft Corporation. All rights reserved.
// WL.JS Version 5.0.3245.0220

(function() {
if (!window.WL) {



var API_JSONP_CALLBACK_NAMESPACE_PREFIX = "WL.Internal.jsonp.",
    API_JSONP_URL_LIMIT = 2000,
    API_PARAM_BODY = "body",
    API_PARAM_CALLBACK = "callback",
    API_PARAM_CODE = "code",
    API_PARAM_ERROR = "error",
    API_PARAM_ERROR_DESC = "error_description",
    API_PARAM_LOGGING = "logging",
    API_PARAM_TRACING = "tracing",
    API_PARAM_MESSAGE = "message",
    API_PARAM_METHOD = "method",
    API_PARAM_FILEINPUT = "file_input",
    API_PARAM_FILENAME = "file_name",
    API_PARAM_FILEOUTPUT = "file_output",
    API_PARAM_OVERWRITE = "overwrite",
    API_PARAM_PATH = "path",
    API_PARAM_PRETTY = "pretty",
    API_PARAM_RESULT = "result",
    API_PARAM_STATUS = "status",
    API_PARAM_SSLRESOURCE = "return_ssl_resources",
    API_STATUS_SUCCESS = "success",
    API_STATUS_ERROR = "error",
    API_SUPPRESS_REDIRECTS = "suppress_redirects",
    API_SUPPRESS_RESPONSE_CODES = "suppress_response_codes",
    API_X_HTTP_LIVE_LIBRARY = "x_http_live_library";

/**
 * Application status values indicating whether the app has invoked WL.init(...).
 */
var APP_STATUS_NONE = 0,
    APP_STATUS_INITIALIZED = 1;

/**
 * Auth parameter key values used in multiple occassions: redirect_url parameter, auth cookie sub-key, auth response properties.
 */
var AK_ACCESS_TOKEN = "access_token",
    AK_AUTH_TOKEN = "authentication_token",
    AK_CLIENT_ID = "client_id",
    AK_DISPLAY = "display",
    AK_CODE = "code",
    AK_ERROR = "error",
    AK_ERROR_DESC = "error_description",
    AK_EXPIRES = "expires",
    AK_EXPIRES_IN = "expires_in",
    AK_LOCALE = "locale",
    AK_REDIRECT_URI = "redirect_uri",
    AK_RESPONSE_TYPE = "response_type",
    AK_REQUEST_TS = "request_ts",
    AK_SCOPE = "scope",
    AK_SESSION = "session",
    AK_SECURE_COOKIE = "secure_cookie",
    AK_STATE = "state",
    AK_STATUS = "status";

var AK_COOKIE_KEYS = [AK_ACCESS_TOKEN, AK_AUTH_TOKEN, AK_SCOPE, AK_EXPIRES_IN, AK_EXPIRES];

/**
 * Auth session status.
 */
var AS_CONNECTED = "connected", // The user is connected and signed in.
    AS_NOTCONNECTED = "notConnected", // The user is not connected.
    AS_UNCHECKED = "unchecked",   // We haven't checked the status yet.
    AS_UNKNOWN = "unknown",   // The user is unknown.
    AS_EXPIRING = "expiring", // The token will expire soon.
    AS_EXPIRED = "expired"; // The token is expired.

var BT_GROUP_UPLOAD = "live-sdk-upload",
    BT_GROUP_DOWNLOAD = "live-sdk-download";

/**
 * Compatible parameter keys(names).
 */
var CK_APPID = "appId",
    CK_CHANNELURL = "channelUrl";

/**
* Cookie names.
*/
var COOKIE_AUTH = "wl_auth";  // This cookie stores the Auth information.
    
/**
* Display types.
*/
var DISPLAY_APP = "app",
    DISPLAY_POPUP = "popup",
    DISPLAY_PAGE = "page",
    DISPLAY_TOUCH = "touch",
    DISPLAY_NONE = "none";
    
/**
 * Event types.
 */
var EVENT_AUTH_LOGIN = "auth.login",
    EVENT_AUTH_LOGOUT = "auth.logout",
    EVENT_AUTH_SESSIONCHANGE = "auth.sessionChange",
    EVENT_AUTH_STATUSCHANGE = "auth.statusChange",
    EVENT_LOG = "wl.log";

var ERROR_ACCESS_DENIED = "access_denied",
    ERROR_CONNECTION_FAILED = "connection_failed",
    ERROR_COOKIE_ERROR = "invalid_cookie",
    ERROR_REQ_CANCEL = "request_canceled",
    ERROR_REQUEST_FAILED = "request_failed",
    ERROR_TIMEDOUT = "timed_out",
    ERROR_UKNOWN_USER = "unknown_user",
    ERROR_USER_REJECTED = "user_rejected",
    ERROR_DESC_BROWSER_ISSUE = "The request could not be completed due to browser issues.",
    ERROR_DESC_BROWSER_LIMIT = "The request could not be completed due to browser limitations.",
    ERROR_DESC_CANCEL = "METHOD: The operation has been canceled.",
    ERROR_DESC_COOKIE_INVALID = "The 'wl_auth' cookie is not valid.",
    ERROR_DESC_COOKIE_OVERWRITE = "The 'wl_auth' cookie has been modified incorrectly. Ensure that the redirect URI only modifies sub-keys for values received from the OAuth endpoint.",
    ERROR_DESC_COOKIE_MULTIPLEVALUE = "The 'wl_auth' cookie has multiple values. Ensure that the redirect URI specifies a cookie domain and path when setting cookies.",
    ERROR_DESC_DOM_INVALID = "METHOD: The input parameter 'PARAM' does not reference a valid DOM element.",
    ERROR_DESC_EXCEPTION = "METHOD: An exception was received for EVENT. Detail: MESSAGE",
    ERROR_DESC_ENSURE_INIT = "METHOD: The WL object must be initialized with WL.init() prior to invoking this method.",
    ERROR_DESC_FAIL_CONNECT = "A connection to the server could not be established.",
    ERROR_DESC_FAIL_IDENTIFY_USER = "The user could not be identified.",
    ERROR_DESC_LOGIN_CANCEL = "The pending login request has been canceled.",
    ERROR_DESC_PARAM_INVALID = "METHOD: The input parameter 'PARAM' is not valid.",
    ERROR_DESC_PARAM_MISSING = "METHOD: The input parameter 'PARAM' must be included.",
    ERROR_DESC_PARAM_TYPE_INVALID = "METHOD: The type of the provided value for the input parameter 'PARAM' is not valid.",
    ERROR_DESC_PENDING_LOGIN_IGNORED = "WL.login: There is a pending WL.login request, the current call will be ignored.",
    ERROR_DESC_REDIRECTURI_MISSING = "METHOD: The input parameter 'redirect_uri' is required if the value of the 'response_type' parameter is 'code'.",
    ERROR_DESC_UNSUPPORTED_API_CALL = "METHOD: The api call is not supported on this platform.",
    ERROR_DESC_UNSUPPORTED_RESPONSE_TYPE_CODE = "WL.init: The response_type value 'code' is not supported on this platform.",
    ERROR_DESC_URL_SSL = "METHOD: The input parameter 'redirect_uri' must use https: to match the scheme of the current page.",
    ERROR_TRACE_AUTH_TIMEOUT = "The auth request is timed out.",
    ERROR_TRACE_AUTH_CLOSE = "The popup is closed without receiving consent.";

/**
 * Flash initialization status.
 */
var FLASH_STATUS_NONE = 0,
    FLASH_STATUS_INITIALIZING = 1,
    FLASH_STATUS_INITIALIZED = 2,
    FLASH_STATUS_ERROR = 3;

/**
* Http method names
*/
var HTTP_METHOD_GET = "get",
    HTTP_METHOD_POST = "post",
    HTTP_METHOD_PUT = "put",
    HTTP_METHOD_DELETE = "delete",
    HTTP_METHOD_COPY = "copy",
    HTTP_METHOD_MOVE = "move";

/**
 * The maximum time in milliseconds to expire a getLoginStatus() request.
 */
var MAX_GETLOGINSTATUS_TIME = 30000;

/**
 * Promise class event names
 */
var PROMISE_EVENT_ONSUCCESS = "onSuccess",
    PROMISE_EVENT_ONERROR = "onError",
    PROMISE_EVENT_ONPROGRESS = "onProgress";

/** 
 * Response type values.
 */
var RESPONSE_TYPE_CODE = "code",
    RESPONSE_TYPE_TOKEN = "token";

/**
* Url scheme values.
*/
var SCHEME_HTTPS = "https:",
    SCHEME_HTTP = "http:";

/**
 * Scope deliminators
 */
var SCOPE_SIGNIN = "wl.signin", 
    SCOPE_DELIMINATOR = /\s|,/;

/**
 * Type names
 */
var TYPE_BOOLEAN = "boolean",
    TYPE_FUNCTION = "function",
    TYPE_NUMBER = "number",
    TYPE_STRING = "string",
    TYPE_OBJECT = "object",
    TYPE_STRINGORARRAY = "string_or_array";


var UI_PARAM_NAME = "name",
    UI_PARAM_ELEMENT = "element",
    UI_PARAM_BRAND = "brand",
    UI_PARAM_TYPE = "type",
    UI_PARAM_SIGN_IN_TEXT = "sign_in_text",
    UI_PARAM_SIGN_OUT_TEXT = "sign_out_text",
    UI_PARAM_THEME = "theme";

var UI_BRAND_MESSENGER = "messenger",
    UI_BRAND_HOTMAIL = "hotmail",
    UI_BRAND_SKYDRIVE = "skydrive",
    UI_BRAND_WINDOWS = "windows",
    UI_BRAND_WINDOWSLIVE = "windowslive",
    UI_BRAND_NONE = "none";

var UI_SIGNIN = "signin",
    UI_SIGNIN_TYPE_SIGNIN = UI_SIGNIN,
    UI_SIGNIN_TYPE_LOGIN = "login",
    UI_SIGNIN_TYPE_CONNECT = "connect",
    UI_SIGNIN_TYPE_CUSTOM = "custom";

var UI_SIGNIN_THEME_BLUE = "blue",
    UI_SIGNIN_THEME_WHITE = "white",
    UI_SIGNIN_THEME_DARK = "dark",
    UI_SIGNIN_THEME_LIGHT = "light";

var WL_SDK_ROOT = "sdk_root",
    WL_TRACE = "wl_trace";

var expectedCallback_Optional = {
    name: API_PARAM_CALLBACK,
    type: TYPE_FUNCTION,
    optional: true
};

var expectedCallback_Required = {
    name: API_PARAM_CALLBACK,
    type: TYPE_FUNCTION,
    optional: false
};

window.WL = {
    init: function (properties) {
        /// <summary>
        /// Initializes the JavaScript library.
        /// An application must call this function before making other function
        /// calls in the library except for subscribing to events.
        /// </summary>
        /// <param name="properties" type="Object">
        /// Required. A JSON object that includes the following properties:
        /// &#10; client_id:  Required only for Web applications. The OAuth client ID of your application.
        /// &#10; scope:  Optional. The scope values used to determine if the user has logged in.
        /// &#10; redirect_uri:  Optional. The default redirect URI used for OAuth authentication. 
        /// The OAuth server redirects to this URI during the OAuth flow. This is only supported in Web applications.
        /// &#10; response_type:  Optional. The OAuth response_type value. It can be either "code" or "token".
        /// If set to "token" (default), the client will receive the access token directly. If set to "code"
        /// the client will receive an authorization code and the application server that serves the redirect_uri 
        /// page should handle retrieving the access token from the OAuth server using the authorization 
        /// code and client secret. The "code" response_type scenarios are only supported in Web applications.
        /// &#10; logging: Optional. If set to true (default), the library logs error information to the web browser console and
        /// notifies the application through "wl.log" event.
        /// &#10; status: Optional. If set to true (default), the library attempts to get the login status of the user from 
        /// Windows Live.
        /// &#10; secure_cookie: Optional. If set to true, the library will specify secure attribute when writting cookie on an
        /// https page. The default value is false.
        /// </param>

        try {

            var clonedProperties = cloneObject(properties);

            // Validate parameters
            validateParams(
                clonedProperties,
                {
                    name: "properties",
                    type: "properties",
                    optional: false,
                    properties: [
                        { name: AK_CLIENT_ID, altName: CK_APPID, type: TYPE_STRING, optional: !requireClientId() },
                        { name: AK_SCOPE, type: TYPE_STRINGORARRAY, optional: true },
                        { name: AK_REDIRECT_URI, altName: CK_CHANNELURL, type: "url", optional: true },
                        { name: AK_RESPONSE_TYPE, type: TYPE_STRING, allowedValues: [RESPONSE_TYPE_CODE, RESPONSE_TYPE_TOKEN], optional: true },                        
                        { name: API_PARAM_LOGGING, type: TYPE_BOOLEAN, optional: true },
                        { name: AK_STATUS, type: TYPE_BOOLEAN, optional: true }
                        ]
                },
                "WL.init");

            if (!clonedProperties[AK_REDIRECT_URI] && clonedProperties[AK_RESPONSE_TYPE] === AK_CODE) {
                throw new Error(ERROR_DESC_REDIRECTURI_MISSING.replace("METHOD", "WL.init"));
            }

            if (clonedProperties[AK_STATUS] == null) {
                clonedProperties[AK_STATUS] = true;
            }

            wl_app.appInit(clonedProperties);
        }
        catch (e) {
            logError(e.message);
        }
    },

    login: function (properties, callback) {
        /// <summary>
        /// Signs the user in or expands the user's permission set.
        /// This function can result in launching the consent page popup. Therefore, it should only be 
        /// called in response to a user action such as clicking a button.  
        /// Otherwise, the web browser may block the popup.
        /// </summary>
        /// <param name="properties" type="Object">
        /// Required. A JSON object with the following properties:
        /// &#10; redirect_uri: Optional. By default, the redirect_uri parameter supplied to WL.init is used. 
        /// An application can override it for specific scenarios with this parameter.
        /// &#10; scope: Required. The scopes for the user to authorize. It can be an array
        /// of scope string values or a string value of multiple scopes delimited by a space character.
        /// &#10; theme: Optional. For Web apps, the property has no impact. For Windows Metro style HTML apps, the options
        /// are "dark" (default) and "light".
        /// </param>
        /// <param name="callback" type="Function" >Optional. A function that is invoked when login is completed.</param>

        try {
            var args = normalizeArguments(arguments);

            // Validate parameters
            validateProperties(
                args,
                [
                    { name: AK_SCOPE, type: TYPE_STRINGORARRAY, optional: true },
                    { name: AK_REDIRECT_URI, type: "url", optional: true },
                    expectedCallback_Optional
                ],
                "WL.login");

            return wl_app.login(args);
        }
        catch (e) {
            return handleAsyncCallingError("WL.login", e);
        }
    },

    getSession: function () {
        /// <summary>
        /// A synchronous function that gets the current session object, if it exists.
        /// </summary> 

        try {
            return wl_app.getSession();
        }
        catch (e) {
            logError(e.message);
        }
    },

    getLoginStatus: function (callback, force) {
        /// <summary>
        /// Returns the status of the current user. If the user is signed in and 
        /// connected to your application, it returns the session object.
        /// This is an asynchronous function that returns the user's status by contacting the Windows Live 
        /// OAuth server. If the user status is already known, the library may return what is cached.
        /// However, you can force the library to retrieve up-to-date status by setting the "force" 
        /// parameter to true. 
        /// </summary>
        /// <param name="callback" type="Function">Optional. The callback function that is invoked when the user's login status is retrieved.</param>
        /// <param name="force" type="Boolean">Optional. If set to false (default), the function may return an existing user status, if it exists. 
        /// Otherwise, if set to true, the function contacts the server to determine the user's status.</param>

        try {
            return wl_app.getLoginStatus(
            {
                callback: findArgumentByType(arguments, TYPE_FUNCTION, 2),
                internal: false
            },
            findArgumentByType(arguments, TYPE_BOOLEAN, 2));
        }
        catch (e) {
            return handleAsyncCallingError("WL.getLoginStatus", e);
        }
    },

    logout: function (callback) {
        /// <summary>
        /// Logs the user out of Windows Live and clears any user state that is maintained 
        /// by the JavaScript library, such as cookies.
        /// </summary>
        /// <param name="callback" type="Function">Optional. Specifies a callback function that is invoked when logout is complete.</param>

        try {
            validateParams(callback, expectedCallback_Optional, "WL.logout");
            return wl_app.logout({ callback: callback });
        }
        catch (e) {
            return handleAsyncCallingError("WL.logout", e);
        }
    },

    ui: function (properties, callback) {
        /// <summary>
        /// Creates a user interface control on the current page.
        /// </summary>
        /// <param name="properties" type="Object">Required. A JSON object containing properties for creating the user interface element.
        /// &#10; name: Required. Specifies the name of the UI element to create. For the sign-in control, it is "signin".
        /// &#10; element: Required. The DOM element to attach to the UI element.
        /// &#10; brand: Optional. Defines the brand, or type of icon, used with the signin control. It can be one of the following
        /// values: "hotmail", "messenger", "windows"(default), "skydrive", or "none".
        /// &#10; theme: Optional. For Web apps, the options are "blue" (default) and "white". For Windows Metro style HTML apps, the options
        /// are "dark" (default) and "light".
        /// &#10; type: Optional. Defines the type of the sign-in control. It can be one of the following values: "signin" (default), "login", "connect", 
        /// or "custom". 
        /// &#10; sign_in_text: If the type value is "custom", defines the signin text displayed in the sign-in control.
        /// &#10; sign_out_text: If the type value is "custom", defines the sign out text displayed in the sign-in control.
        /// </param>
        /// <param name="callback" type="Function">Optional. A callback function that is invoked when the UI element is rendered.</param>

        try {
            var args = normalizeArguments(arguments);

            // Validate parameters
            validateProperties(
                args,
                [{ name: UI_PARAM_NAME, type: TYPE_STRING, allowedValues: [UI_SIGNIN], optional: false },
                expectedCallback_Optional],
                "WL.ui");

            wl_app.ui(args);

        }
        catch (e) {
            logError(e.message);
        }
    },

    api: function (properties, callback) {
        /// <summary>
        /// Makes a call to the Windows Live REST API.
        /// </summary>
        /// <param name="properties" type="Object">Required. A JSON object containing the properties for making the API call:
        /// &#10; path: Required. The path to the REST API object.
        /// &#10; method: The HTTP method. Supported values include "GET" (default), "PUT", "POST", "DELETE", "MOVE", and "COPY".
        /// &#10; body: A JSON object containing all necessary properties for making the REST API request.
        /// </param>
        /// <param name="callback" type="Function">Required. A callback function that is invoked when the REST API call is complete.</param>

        try {
            var args = normalizeApiArguments(arguments);

            // Validate parameters
            validateProperties(args,
                [{ name: API_PARAM_PATH, type: TYPE_STRING, optional: false },
                { name: API_PARAM_METHOD, type: TYPE_STRING, optional: true },
                    expectedCallback_Optional],
                "WL.api");
                
            return wl_app.api(args);
        }
        catch (e) {
            return handleAsyncCallingError("WL.api", e);
        }
    },

    download: function (properties, callback) {
        /// <summary>
        /// Makes a call to download a file from SkyDrive.
        /// </summary>
        /// <param name="properties" type="Object">Required. A JSON object containing the properties for downloading a file:
        /// &#10; path: Required. The path to the file to download.
        /// &#10; file_output: Required. The file output object where to write the downloaded file data.
        /// </param>
        /// <param name="callback" type="Function">Optional. A callback function that is invoked when the download call is complete.</param>

        try {
            if (!wl_app.download) {
                throw new Error(ERROR_DESC_UNSUPPORTED_API_CALL.replace("METHOD", "WL.download"));
            }

            var args = normalizeArguments(arguments);
            validateProperties(
                args,
                [{ name: API_PARAM_PATH, type: TYPE_STRING, optional: false },
                 { name: API_PARAM_FILEOUTPUT, type: TYPE_OBJECT, optional: false },
                 expectedCallback_Optional],
                "WL.download");

            return wl_app.download(args);
        }
        catch (e) {
            return handleAsyncCallingError("WL.download", e);
        }
    },

    upload: function (properties, callback) {
        /// <summary>
        /// Makes a call to upload a file to SkyDrive.
        /// </summary>
        /// <param name="properties" type="Object">Required. A JSON object containing the properties for uploading a file:
        /// &#10; path: Required. The path to the file to download.
        /// &#10; file_name: the name of the file.
        /// &#10; file_input: Required. The file input object where to read the upload file data.
        /// &#10; overwrite: Indicates if the uploading action should overwrite a file that already exists. This only applies to when uploading to a folder.
        /// </param>
        /// <param name="callback" type="Function">Optional. A callback function that is invoked when the upload call is complete.</param>

        try {

            if (!wl_app.upload) {
                throw new Error(ERROR_DESC_UNSUPPORTED_API_CALL.replace("METHOD", "WL.upload"));
            }

            var args = normalizeArguments(arguments);
            validateProperties(
                args,
                [{ name: API_PARAM_PATH, type: TYPE_STRING, optional: false },
                 { name: API_PARAM_FILENAME, type: TYPE_STRING, optional: true },
                 { name: API_PARAM_FILEINPUT, type: TYPE_OBJECT, optional: false },
                 { name: API_PARAM_OVERWRITE, type: TYPE_BOOLEAN, optional: true },
                 expectedCallback_Optional],
                "WL.upload");

            return wl_app.upload(args);

        } catch (e) {
            return handleAsyncCallingError("WL.upload", e);
        }
    }
};

var allowedEvents = [EVENT_AUTH_LOGIN, EVENT_AUTH_LOGOUT, EVENT_AUTH_SESSIONCHANGE, EVENT_AUTH_STATUSCHANGE, EVENT_LOG];
WL.Event = {

    subscribe: function (event, callback) {
        /// <summary>
        /// Adds a handler to an event.
        /// </summary>
        /// <param name="event" type="String">Required. The name of the event to add a handler to. 
        /// Available events are: "auth.login", "auth.logout", "auth.sessionChange", 
        /// "auth.statusChange", and "wl.log".</param>
        /// <param name="callback" type="Function">Required. The event handler function to be added to the event.</param>

        try {
            // Validate parameters
            validateParams(
                [event, callback],
                [{ name: "event", type: TYPE_STRING, allowedValues: allowedEvents, caseSensitive: true, optional: false },
                    expectedCallback_Required],
                "WL.Event.subscribe");

            wl_event.subscribe(event, callback);
        }
        catch (e) {
            logError(e.message);
        }
    },

    unsubscribe: function (event, callback) {
        /// <summary>
        /// Removes a handler from an event.
        /// </summary>
        /// <param name="event" type="String">Required. The name of the event from which to remove a handler.</param>
        /// <param name="callback" type="Function">Optional. Removes the callback from the event. If this parameter is omitted, all 
        /// callback functions registered to the event are removed.</param>
        
        try {
            // Validate parameters
            validateParams([event, callback],
                [{ name: "event", type: TYPE_STRING, allowedValues: allowedEvents, caseSensitive: true, optional: false },
                expectedCallback_Optional],
                "WL.Event.unsubscribe");
            wl_event.unsubscribe(event, callback);
        }
        catch (e) {
            logError(e.message);
        }
    }
};

WL.Internal = {};

function normalizeArguments(args) {
    var receivedArgs = cloneArray(args),
        properties = null,
        callback = null;

    for (var i = 0; i < receivedArgs.length; i++) {
        var arg = receivedArgs[i],
            argType = typeof arg;

        if (argType === TYPE_OBJECT && properties === null) {
            properties = cloneObject(arg);
        }
        else if (argType === TYPE_FUNCTION && callback === null) {
            callback = arg;
        }
    }

    properties = properties || {};

    if (callback) {
        properties.callback = callback;
    }

    return properties;
}

function normalizeApiArguments(args) {
    var receivedArgs = cloneArray(args),
        path = null,
        method = null;

    if (typeof receivedArgs[0] === TYPE_STRING) {
        // Read path
        path = receivedArgs.shift();

        if (typeof receivedArgs[0] === TYPE_STRING) {
            // Read method
            method = receivedArgs.shift();
        }
    }

    normalizedArgs = normalizeArguments(receivedArgs);

    if (path !== null) {
        normalizedArgs[API_PARAM_PATH] = path;

        if (method != null) {
            normalizedArgs[API_PARAM_METHOD] = method;
        }
    }

    return normalizedArgs;
}

function handleAsyncCallingError(name, err) {
    var error = createExceptionResponse(name, name, err);
    logError(error.message);
    return createCompletePromise(name, false, null, error);
}

var wl_event = {
    subscribe: function (event, callback) {
        trace("Subscribe " + event);

        var handlers = wl_event.getHandlers(event);
        handlers.push(callback);
    },

    unsubscribe: function (event, callback) {
        trace("Unsubscribe " + event);

        var oldHandlers = wl_event.getHandlers(event);
        var newHandlers = [];

        // Constructs a new list with one callback removed.
        // If callback is not available, we remove all.
        if (callback != null) {
            var found = false;
            for (var i = 0; i < oldHandlers.length; i++) {
                if (found || oldHandlers[i] != callback) {
                    newHandlers.push(oldHandlers[i]);
                } else {
                    found = true;
                }
            }
        }

        wl_event._eHandlers[event] = newHandlers;
    },

    getHandlers: function (event) {

        if (!wl_event._eHandlers) {
            wl_event._eHandlers = {};
        }

        var eHandlers = wl_event._eHandlers[event];
        
        if (eHandlers == null) {
            wl_event._eHandlers[event] = eHandlers = [];
        }

        return eHandlers;
    },

    notify: function (event, data) {
        trace("Notify " + event)

        var handlers = wl_event.getHandlers(event);

        for (var i = 0; i < handlers.length; i++) {
            handlers[i](data);
        }
    }
};

/**
 * The wl_app type encapsulates the implementation of all inteface methods.
 */
var wl_app = { _status: APP_STATUS_NONE, _statusRequests: [] };

/**
 * The implementation of WL.init().
 */
wl_app.appInit = function (properties) {

    // If app has already invoked WL.init(), ignore this call.
    if (wl_app._status == APP_STATUS_INITIALIZED)
        return;

    var sdkRoot = WL[WL_SDK_ROOT];
    if (sdkRoot) {
        if (sdkRoot.charAt(sdkRoot.length - 1) !== "/") {
            sdkRoot += "/";
        }

        wl_app[WL_SDK_ROOT] = sdkRoot;
    }

    var logging = properties[API_PARAM_LOGGING];
    if (logging === false) {
        wl_app._logEnabled = logging;
    }

    wl_app._authScope = normalizeScopeValue(properties[AK_SCOPE]);
    wl_app._secureCookie = normalizeBooleanValue(properties[AK_SECURE_COOKIE]);
    appInitPlatformSpecific(properties);
    
    var authSession = new AuthSession(properties[AK_CLIENT_ID], COOKIE_AUTH);
    wl_app._session = authSession;

    wl_app._status = APP_STATUS_INITIALIZED;

    var sessionStatus = authSession.getNormalStatus(),
        status = sessionStatus[AK_STATUS];
    if (status == AS_CONNECTED) {
        wl_event.notify(EVENT_AUTH_SESSIONCHANGE, sessionStatus);
        wl_event.notify(EVENT_AUTH_STATUSCHANGE, sessionStatus);
        wl_event.notify(EVENT_AUTH_LOGIN, sessionStatus);
    }
    else if (properties[AK_STATUS]) {
        wl_app.getLoginStatus({ internal: true }, shouldForceGetLoginStatusOnInit()/*force*/);
    }
};

/**
 * This is the very first method invoked after the script is loaded.
 */
wl_app.onloadInit = function () {
    detectBrowsers();
    handlePageLoad();
};

function ensureAppInited(method) {
    if (wl_app._status === APP_STATUS_NONE) {
        throw new Error(ERROR_DESC_ENSURE_INIT.replace("METHOD", method));
    }
}

wl_app.api = function (properties) {

    ensureAppInited("WL.api");

    var body = properties[API_PARAM_BODY];
    if (body) {
        properties = cloneObject(flattenApiBody(body), properties);
        delete properties[API_PARAM_BODY];
    }

    var method = properties[API_PARAM_METHOD];
    properties[API_PARAM_METHOD] = ((method != null) ? stringTrim(method) : HTTP_METHOD_GET).toLowerCase();

    return new APIRequest(properties).execute();
};

var generateApiRequestId = function () {
    var ticketNumber = wl_app.api.lastId,
        id;
    ticketNumber = (ticketNumber === undefined) ? 1 : ticketNumber + 1;
    id = "WLAPI_REQ_" + ticketNumber + "_" + (new Date().getTime());
    wl_app.api.lastId = ticketNumber;

    return id;
};

var APIRequest = function (properties) {
    var request = this;
    request._properties = properties;
    request._completed = false;
    request._id = generateApiRequestId();
    properties[API_PARAM_PRETTY] = false;
    properties[API_PARAM_SSLRESOURCE] = wl_app._isHttps;
    properties[API_X_HTTP_LIVE_LIBRARY] = wl_app[API_X_HTTP_LIVE_LIBRARY];

    var path = properties[API_PARAM_PATH];
    request._url = getApiServiceUrl() + (path.charAt(0) === "/" ? path.substring(1) : path);
    request._promise = new Promise("WL.api", null, null);
};

APIRequest.prototype = {
    execute: function () {
        executeApiRequest(this);
        return this._promise;
    },

    onCompleted: function (response) {
        if (this._completed) {
            return;
        }

        this._completed = true;
        invokeCallback(this._properties.callback, response, true/*synchronous*/);

        if (response[AK_ERROR]) {
            this._promise[PROMISE_EVENT_ONERROR](response);
        }
        else {
            this._promise[PROMISE_EVENT_ONSUCCESS](response);
        }
    }
};

function processXDRResponse(request, status, responseText, errorDescription) {

    responseText = responseText ? stringTrim(responseText) : "";
    var response = (responseText !== "") ? deserializeJSON(responseText) : null;
    if (response === null) {
        response = {};
        if ((status / 100) !== 2) {
            response[API_PARAM_ERROR] = createErrorObject(status, errorDescription);
        }
    }

    request.onCompleted(response);
}

function createErrorObject(status, errorDescription) {
    var errorObj = {};
    errorObj[API_PARAM_CODE] = ERROR_REQUEST_FAILED;
    errorObj[API_PARAM_MESSAGE] = (errorDescription || ERROR_DESC_FAIL_CONNECT);

    return errorObj;
}

function getAccessTokenForApi() {

    var token = null,
        status = wl_app._session.getStatus();

    if (status.status === AS_EXPIRING || status.status === AS_CONNECTED) {
        token = status.session[AK_ACCESS_TOKEN];
    }

    return token;
}

function flattenApiBody(body) {
    // If the WL.api body parameter is a nested JSON object, we convert it into a flattened dictionary that has one layer
    // and maps each leaf node value on the original JSON tree hierarchy with a key value joining each sub key on the
    // path with a dot character. E.g. { contact { name: "Lin" } } will be converted into: {"contact.name" : "Lin"}
    // If array is used in the structure, the array index value will be part of the key.
    // E.g. { employmentHistory: [ { employer: "Microsoft", period: "2007-2011"} ] } will output the following entries:
    //  {"employmentHistory.0.employer" : "Microsoft", "employmentHistory.0.period" : "2007-2011" }

    var dict = {};
    for (var key in body) {
        var value = body[key],
            type = typeof(value);

        if (value instanceof Array) {
            for (var i = 0; i < value.length; i++) {
                // Note: we shouldn't have immediate nested array cases.
                var elementValue = value[i],
                    elementValueType = typeof (elementValue);
                if (type == TYPE_OBJECT && !(value instanceof Date)) {
                    var elementDict = flattenApiBody(elementValue);
                    for (var elementSubKey in elementDict) {
                        dict[key + "." + i + "." + elementSubKey] = elementDict[elementSubKey];
                    }
                }
                else {
                    dict[key + "." + i] = elementValue;
                }
            }
        }
        else if (type == TYPE_OBJECT && !(value instanceof Date)) {
            var vDic = flattenApiBody(value);
            for (var subKey in vDic) {
                dict[key + "." + subKey] = vDic[subKey];
            }
        }
        else {
            dict[key] = value;
        }
    }

    return dict;
}

function sendAPIRequestViaXHR(request) {

    if (!canDoXHR()) {
        return false;
    }

    var xdrParams = prepareXDRRequest(request),
        xdr = new XMLHttpRequest();

    xdr.open(xdrParams.method, xdrParams.url, true);
    var requestMethod = request._properties[API_PARAM_METHOD];
    if (xdrParams.method != HTTP_METHOD_GET) {
        xdr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    xdr.onreadystatechange = function () {
        if (xdr.readyState == 4) {
            processXDRResponse(request, xdr.status, xdr.responseText);
        }
    };

    xdr.send(xdrParams.body);

    return true;
}

function prepareXDRRequest(request) {
    var params = cloneObjectExcept(
            request._properties,
            null,
            [API_PARAM_CALLBACK, API_PARAM_PATH, API_PARAM_METHOD]),
        method = request._properties[API_PARAM_METHOD],
        url = appendUrlParameters(request._url, {'ts': (new Date().getTime())}),
        token = getAccessTokenForApi(),
        reqBody,
        xdrMethod;

    params[API_SUPPRESS_REDIRECTS] = "true";
    // Flash(built with Adobe Flex) and Firefox 3.5/3.6 does not return response content when http status code is not 200.
    // We use suppress_response_codes to indicate this so that the server will always return 200.
    params[API_SUPPRESS_RESPONSE_CODES] = "true";

    if (token != null) {
        params[AK_ACCESS_TOKEN] = token;
    }

    if (method === HTTP_METHOD_GET || method === HTTP_METHOD_DELETE) {
        reqBody = null;
        xdrMethod = HTTP_METHOD_GET;
        url += "&" + serializeParameters(params);        
    }
    else {
        reqBody = serializeParameters(params);
        xdrMethod = HTTP_METHOD_POST;
    }

    url += "&method=" + method;

    return {
        url: url,
        method: xdrMethod,
        body: reqBody
    };
}

/**
 * The implementation of WL.login() method.
 */
wl_app.login = function (properties, internal) {

    ensureAppInited("WL.login");
    
    normalizeLoginScope(properties);

    if (!handlePendingLogin(internal)) {
        return createCompletePromise("WL.login", false/*succeeded*/, null, createErrorResponse(ERROR_REQUEST_FAILED, ERROR_DESC_PENDING_LOGIN_IGNORED));
    }

    var response = wl_app._session.tryGetResponse(properties.normalizedScope);
    if (response != null) {
        return createCompletePromise("WL.login", true/*succeeded*/, properties.callback, response);
    }

    wl_app._pendingLogin = createLoginRequest(properties, onAuthRequestCompleted);
    return wl_app._pendingLogin.execute();
}

function onAuthRequestCompleted(requestProperties, response) {

    wl_app._pendingLogin = null;

    var error = response[AK_ERROR];
    if (error) {
        if (error == ERROR_USER_REJECTED) {
            trace("wl_app-onAuthRequestCompleted: " + response[AK_ERROR_DESC]);
        }
        else {
            log("WL.login: " + response[AK_ERROR_DESC]);
        }

        return;
    }
    else {
        invokeCallback(requestProperties.callback, response, true/*synchronous*/);
    }
}

function normalizeLoginScope(properties) {
    var scope = normalizeScopeValue(properties[AK_SCOPE]);    
    if (scope === "") {
        scope = wl_app._authScope;
    }

    if (!scope || scope === "") {
        throw createMissingParamError(AK_SCOPE, "WL.login");
    }

    properties.normalizedScope = scope;
}

function normalizeScopeValue(scopeValue) {

    var scope = scopeValue || "";
    if (scope instanceof Array) {
        scope = scope.join(" ");
    }

    return stringTrim(scope);
}

/**
 * The implementation of WL.getSession() method.
 */
wl_app.getSession = function () {
    ensureAppInited("WL.getSession");
    return wl_app._session.getStatus()[AK_SESSION];
};

/**
 * The implementation of WL.getLoginStatus() method.
 */
wl_app.getLoginStatus = function (properties, force) {

    ensureAppInited("WL.getLoginStatus");

    properties = properties || {};

    if (!force) {
        var response = wl_app._session.tryGetResponse();
        if (response) {
            return createCompletePromise("WL.getLoginStatus", true/*succeeded*/, properties.callback, response);
        }
    }

    trace("wl_app:getLoginStatus");

    var pendingQueue = wl_app._statusRequests,
        request = null;

    if (!wl_app._pendingStatusRequest) {
        request = createLoginStatusRequest(properties, onGetLoginStatusCompleted);
        wl_app._pendingStatusRequest = request;
    }

    pendingQueue.push(properties);

    if (request != null) {
        request.execute(); 
    }

    return wl_app._pendingStatusRequest._promise;
}

function onGetLoginStatusCompleted(requestProperties, response) {
    var pendingQueue = wl_app._statusRequests;
    wl_app._pendingStatusRequest = null;

    trace("wl_app:onGetLoginStatusCompleted");

    var error = response[AK_ERROR],
        hasAppRequest = false;

    while (pendingQueue.length > 0) {
        var reqProperties = pendingQueue.shift(),
            responseForCallback = cloneObject(response);
        if (!error || reqProperties.internal) {
            invokeCallback(reqProperties.callback, responseForCallback, true/*synchronous*/);
        }

        if (!reqProperties.internal) {
            hasAppRequest = true;
        }
    }

    if (error) {
        if (hasAppRequest && error !== ERROR_TIMEDOUT) {
            log("WL.getLoginStatus: " + response[AK_ERROR_DESC]);
        }
        else {
            trace("wl_app-onGetLoginStatusCompleted: " + response[AK_ERROR_DESC]);            
        }
    }
}


/**
 * The implementation of WL.logout() method.
 */
wl_app.logout = function (properties) {

    ensureAppInited("WL.logout");

    var promise = new Promise("WL.logout", null, null);

    var f = function () {
        var resp = authSession.getNormalStatus()
        invokeCallback(properties.callback, resp, false/*synchronous*/);
        promise[PROMISE_EVENT_ONSUCCESS](resp);
    };

    var authSession = wl_app._session;
    if (authSession.isSignedIn()) {
        authSession.updateStatus(AS_UNKNOWN);
        logoutWindowsLive(f);
    } else {
        f();
    }

    return promise;
};

wl_app.ui = function (properties) {

    ensureAppInited("WL.ui");

    if (properties.name === UI_SIGNIN) {
        new SignInControl(properties);
    }
}

// We store css styles.
wl_app.ui.styles = {};

var SignInControl = function (properties) {

    var control = this;

    control._properties = properties;

    var signInControlInit = createDelegate(control, control.init);

    checkDocumentReady(signInControlInit);    
};

SignInControl.prototype = {
    init: function () {
        if (this._inited === true) {
            return;
        }

        this._inited = true;

        try {
            this.validate();

            var control = this,
            properties = control._properties,
            element = properties[UI_PARAM_ELEMENT],
            type = properties[UI_PARAM_TYPE],
            callback = properties[API_PARAM_CALLBACK],
            signinText = properties[UI_PARAM_SIGN_IN_TEXT],
            signoutText = properties[UI_PARAM_SIGN_OUT_TEXT];
            
            normalizeSignInControlScope(properties);
            
            element = (typeof (element) === TYPE_STRING) ? getElementById(properties[UI_PARAM_ELEMENT]) : element;
            control._element = element;

            type = type != null ? type : UI_SIGNIN_TYPE_SIGNIN;
            if (type == UI_SIGNIN_TYPE_SIGNIN) {
                signinText = WLText.signIn;
                signoutText = WLText.signOut;
            }
            else if (type == UI_SIGNIN_TYPE_LOGIN) {
                signinText = WLText.login;
                signoutText = WLText.logout;
            }
            else if (type == UI_SIGNIN_TYPE_CONNECT) {
                signinText = WLText.connect;
                signoutText = WLText.signOut;
            }

            control[UI_PARAM_SIGN_IN_TEXT] = signinText;
            control[UI_PARAM_SIGN_OUT_TEXT] = signoutText;

            setInnerHtml(element, buildSignInControlHtml(properties));

            control.setText(wl_app._session.isSignedIn() ? signoutText : signinText);

            attachSignInControlMouseEvents(control, element.childNodes[0]);

            wl_event.subscribe(EVENT_AUTH_LOGIN, createDelegate(control, control.onLoggedIn));
            wl_event.subscribe(EVENT_AUTH_LOGOUT, createDelegate(control, control.onLoggedOut));

            wl_app.getLoginStatus({ internal: true });

            // We don't need to store the callback for sign-in and 
            // we don't want it to be invoked when login completes
            delete properties[API_PARAM_CALLBACK];
            invokeCallback(callback, properties, false/*synchronous*/);
        }
        catch (e) {
            logError(e.message);
        }
    },

    validate: function () {
        var properties = this._properties;
        validateProperties(
            properties,
            [{
                name: UI_PARAM_ELEMENT,
                type: "dom",
                optional: false
            },
             {
                 name: UI_PARAM_TYPE,
                 allowedValues: [UI_SIGNIN_TYPE_SIGNIN, UI_SIGNIN_TYPE_LOGIN, UI_SIGNIN_TYPE_CONNECT, UI_SIGNIN_TYPE_CUSTOM],
                 type: TYPE_STRING,
                 optional: true
             },
             { name: AK_SCOPE, type: TYPE_STRINGORARRAY, optional: true }
            ],
            "WL.ui(name:'signin')");

        validateSignInControlPlatformSpecificParameters(properties);

        // Validate custom sign-in control text values
        var type = properties[UI_PARAM_TYPE];
        if (type == UI_SIGNIN_TYPE_CUSTOM) {
            validateProperties(
                properties,
                [{
                    name: UI_PARAM_SIGN_IN_TEXT,
                    type: TYPE_STRING,
                    optional: false
                },
                 {
                     name: UI_PARAM_SIGN_OUT_TEXT,
                     type: TYPE_STRING,
                     optional: false
                 }
                ],
                "WL.ui(name:'signin')");
        }
    },

    onClick: function () {
        if (this._element.childNodes.length == 0) {
            // The button has been cleared.
            detachSignInControlMouseEvents(this);
            return;
        }

        if (wl_app._session.isSignedIn()) {
            wl_app.logout({});
        }
        else {
            wl_app.login(this._properties, true/*internal*/);
        }

        return false;
    },

    onLoggedIn: function () {
        this.setText(this[UI_PARAM_SIGN_OUT_TEXT])
    },

    onLoggedOut: function () {
        this.setText(this[UI_PARAM_SIGN_IN_TEXT]);
    }
};

function normalizeSignInControlScope(properties) {
    if (wl_app._authScope && wl_app._authScope !== "") {
        // We use the scope values passed in from WL.init.
        // If it isn't available, the scope value from SignInControl will be used for backward compatibility.
        properties[AK_SCOPE] = wl_app._authScope;
    }

    if (!properties[AK_SCOPE]) {
        // If no scope is available, we use wl.signin as default for auth UI flow.
        properties[AK_SCOPE] = SCOPE_SIGNIN;
    }
}

function getImagePath() {
    return wl_app[WL_SDK_ROOT] + "images";
}

function createSignInControlEventHandler(name, control, callback) {
    control._handlers = control._handlers || {};
    var handler = createDelegate(control, callback);
    control._handlers[name] = handler;
    return handler;
}

function getSignInControlEventHandler(name, control) {
    return control._handlers[name];
}

function getCookie(name) {
    var cookies = document.cookie;

    // Look for 'name='
    name += "=";

    var start = cookies.indexOf(name);
    if (start >= 0) {
        start += name.length;

        var end = cookies.indexOf(';', start);
        if (end < 0) {
            end = cookies.length;
        }
        else {
            postCookie = cookies.substring(end);
            if (postCookie.indexOf(name) >= 0) {
                throw new Error(ERROR_DESC_COOKIE_MULTIPLEVALUE);
            }
        }

        var value = cookies.substring(start, end);
        
        return value;
    }

    return "";
}

function setCookie(name, value, domain, secondsToExpiry) {
    value = value ? value : '';
    var cookie = name + "=" + value + "; path=/";
    if (domain && domain != "localhost") {
        cookie += "; domain=" + encodeURIComponent(domain);
    }

    if (secondsToExpiry != null) {
        var expires = new Date(0);

        if (secondsToExpiry > 0) {
            expires = new Date();
            expires.setTime(expires.getTime() + secondsToExpiry * 1000);
        }

        cookie += ";expires=" + expires.toUTCString();
    }

    if (wl_app._isHttps && wl_app._secureCookie) {
        cookie += ";secure";
    }

    document.cookie = cookie;
}

var CookieState = function (cookieName, properties) {
    this._cookieName = cookieName;
    this._states = properties || {};
    this._listeners = [];
};

CookieState.prototype = {

    getStates: function () {
        return this._states;
    },

    get: function (key) {
        return this._states[key];
    },

    set: function (key, value) {
        this._states[key] = value;
    },

    remove: function (key) {
        if (this._states[key]) {
            delete this._states[key];
        }
    },

    load: function () {
        try {
            var rawValue = getCookie(this._cookieName);
            if (this._rawValue != rawValue) {

                trace("Cookie changed: " + this._cookieName + "=" + rawValue);

                this._rawValue = rawValue;
                this._states = deserializeParameters(rawValue);
                for (var i = 0; i < this._listeners.length; i++) {
                    this._listeners[i]();
                }
            }
        }
        catch (error) {
            logError(error.message);
            this.stopMonitor();
        }
    },

    flush: function (data) {
        this._states = data;
        this.save();
    },

    populate: function (data) {
        cloneObject(data, this._states);
        this.save();
    },

    save: function () {
        setCookie(
            this._cookieName,
            serializeParameters(this._states),
            getCookieDomain(),  // store in the right domain 
            null); // secondsToExpiry: set as session cookie.
    },

    clear: function () {
        this._states = {};
        setCookie(
            this._cookieName,
            "",
            getCookieDomain(),
            0);
    }
};

var AuthSession = function (client_id, cookieName) {
    this._state = {};
    this._state[AK_CLIENT_ID] = client_id;
    this._state[AK_STATUS] = AS_UNCHECKED;
    this._cookieName = cookieName;
    this.init();
};

AuthSession.prototype = {
    get: function (key) {
        return this._state[key];
    },

    save: function () {
        if (this._stateDirty) {
            this._cookie.flush(this._state);
            this._stateDirty = false;
        }
    },

    init: function () {

        var cookieState = new CookieState(this._cookieName);

        cookieState.load();
        this._cookie = cookieState;

        if (cookieState.get(AK_CLIENT_ID) != this._state[AK_CLIENT_ID]) {
            cookieState.clear();
            cookieState.flush(this._state);
        }
        else {
            this._state = cookieState.getStates();
        }

        this.initPlatformSpecific();
    },

    refresh: function () {
        wl_app.getLoginStatus({ internal: true }, true/*force*/);
        this._refresh = undefined;
    },

    scheduleRefresh: function () {
        this.cancelRefresh();
        var refresh_in = (this.tokenExpiresIn() - 600) * 1000;
        if (refresh_in > 0) {
            this._refresh = window.setTimeout(createDelegate(this, this.refresh), refresh_in);
        }
    },

    cancelRefresh: function () {
        if (this._refresh) {
            window.clearTimeout(this._refresh);
            this._refresh = undefined;
        }
    },

    updateStatus: function (status) {
        var oldStatus = this._state[AK_STATUS],
            oldToken = this._state[AK_ACCESS_TOKEN];
        if (oldStatus != status) {
            this._state[AK_STATUS] = status;
            this._stateDirty = true;
            this.onStatusChanged(oldStatus, status);
            this.save();

            if (oldToken != this._state[AK_ACCESS_TOKEN]) {
                wl_event.notify(EVENT_AUTH_SESSIONCHANGE, this.getNormalStatus());
            }
        }
    },

    onStatusChanged: function (oldStatus, newStatus) {

        trace("AuthSession: Auth status changed: " + oldStatus + "=>" + newStatus);

        if (oldStatus != newStatus) {
            var wasSignedin = (oldStatus == AS_CONNECTED),
            isSignedIn = (newStatus == AS_CONNECTED);

            if (!isSignedIn) {
                // Clear the session data, if the user is signed out.
                for (var i = 0; i < AK_COOKIE_KEYS.length; i++) {
                    var authKey = AK_COOKIE_KEYS[i];
                    if (this._state[authKey]) {
                        delete this._state[authKey];
                    }
                }

                this._stateDirty = true;
                this.save();
            }

            if (normalizeResponseStatus(oldStatus) != normalizeResponseStatus(newStatus)) {
                wl_event.notify(EVENT_AUTH_STATUSCHANGE, this.getNormalStatus());
            }

            if (isSignedIn != wasSignedin) {
                if (isSignedIn) {
                    wl_event.notify(EVENT_AUTH_LOGIN, this.getNormalStatus());
                }
                else {
                    wl_event.notify(EVENT_AUTH_LOGOUT, this.getNormalStatus());
                }
            }
        }
    },

    isSignedIn: function () {
        return this._state[AK_STATUS] === AS_CONNECTED;
    },

    getNormalStatus: function () {
        var authStatus = this.getStatus();
        authStatus[AK_STATUS] = normalizeResponseStatus(authStatus[AK_STATUS]);
        return authStatus;
    },

    tokenExpiresIn: function () {
        var state = this._state,
            status = state[AK_STATUS],
            expires = parseInt(state[AK_EXPIRES]);

        if (status === AS_CONNECTED) {
            return expires - getCurrentSeconds();
        }

        return -1;
    }
};

function isScopeSatisfied(existingScopeValue, requestingScopeValue) {
    if (requestingScopeValue == null || stringTrim(requestingScopeValue) == "") {
        return true;
    }

    var requestingScopes = requestingScopeValue.split(SCOPE_DELIMINATOR),
        existingScopeString = existingScopeValue.join(" ");

    for (var i = 0; i < requestingScopes.length; i++) {
        var requestingScope = stringTrim(requestingScopes[i]);
        if (requestingScope != "" && existingScopeString.indexOf(requestingScope) < 0) {
            return false;
        }
    }

    return true;
}

function computeStatus(state, authResponse) {

    var status = state[AK_STATUS],
        errorCode = authResponse[AK_ERROR];

    if (state[AK_ACCESS_TOKEN]) {
        status = AS_CONNECTED;
    }
    else if (errorCode === ERROR_UKNOWN_USER) {
        status = AS_UNKNOWN;
    }
    else if (errorCode === ERROR_ACCESS_DENIED) {
        status = AS_NOTCONNECTED;
    }
    else if (status != AS_UNCHECKED) {
        status = AS_UNKNOWN;
    }

    return status;
}

function stringTrim(value) {
    return value.replace(/^\s+|\s+$/g, '');
}

/**
 * Create a cloned object.(one level clone)
 */
function cloneObject(obj, target) {
    var clonedObj = target || {};
    if (obj != null) {
        for (var key in obj)
            clonedObj[key] = obj[key];
    }
    return clonedObj;
}

/**
 * Create a cloned object and remove some properties.
 */
function cloneObjectExcept(obj, target, exceptionlist) {
    var clonedObject = cloneObject(obj, target);
    for (var i = 0; i < exceptionlist.length; i++) {
        delete clonedObject[exceptionlist[i]];
    }

    return clonedObject;
}

/**
 * Create a cloned array.
 */
function cloneArray(array) {
    return Array.prototype.slice.call(array);
}

/**
 * Create a delegate for a instance method.
 */
function createDelegate(instance, method) {
    return function () {
        if (typeof (method) === TYPE_FUNCTION) {
            return method.apply(instance, arguments);
        }
    }
}

/**
* Log message into console
*/
function writeLog(text, type) {
    text = "[WL]" + text;
    var c = window.console;
    if (c && c.log) {
        switch (type) {
            case "warning":
                c.warn(text);
                break;
            case "error":
                c.error(text);
                break;
            default:
                c.log(text);
        }
    }

    var o = window.opera;
    if (o) {
        o.postError(text);
    }

    var d = window.debugService;
    if (d) {
        d.trace(text);
    }
}

function trace(text) {
    if (wl_app._traceEnabled) {
        writeLog(text);
    }
}

function log(text, type) {
    if (wl_app._logEnabled || wl_app._traceEnabled) {
        writeLog(text, type);
    }

    wl_event.notify(EVENT_LOG, text);
}

WL.Internal.trace = trace;
WL.Internal.log = log;

function logError(text) {
    log(text, "error");
}

function createHiddenIframe(url, id) {
    var iframe = createHiddenElement("iframe");
    iframe.id = id;
    iframe.src = url;
    document.body.appendChild(iframe);

    return iframe;
}

function createHiddenElement(tagName) {
    var element = document.createElement(tagName);
    element.style.position = "absolute";
    element.style.top = "-1000px";
    element.style.width = "300px";
    element.style.height = "300px";

    return element;
}

function createUniqueElementId() {

    var id = null;

    while (id == null) {
        id = "wl_" + Math.floor(Math.random() * 1024 * 1024);

        if (getElementById(id) != null) {
            id = null;
        }
    }

    return id;
}

function getElementById(id) {
    return document.getElementById(id);
}

function setElementText(element, text) {
    if (element) {
        if (element.innerText) {
            element.innerText = text;
        }
        else {
            // Firefox does not have innerText property. So, we do it differently.
            var textNode = document.createTextNode(text);
            element.innerHTML = '';
            element.appendChild(textNode);
        }
    }
}

function Uri(url) {
    cloneObject(parseUri(url), this);
}

Uri.prototype = {
    toString: function () {
        var uri = this;
        s = (uri.scheme != "" ? uri.scheme + "//" : "") + uri.host + (uri.port != "" ? ":" + uri.port : "") + uri.path;
        return s;
    },

    resolve: function () {
        var uri = this;

        if (uri.scheme == "") {
            var port = window.location.port,
                host = window.location.host;

            uri.scheme = window.location.protocol;
            uri.host = host.split(":")[0];
            uri.port = port != null ? port : "";

            if (uri.path.charAt(0) != "/") {
                uri.path = resolveRelativePath(uri.host, window.location.href, uri.path);
            }
        }
    }
};

function parseUri(url) {
    // Assume url never be null or empty.

    var scheme = (url.indexOf(SCHEME_HTTPS) == 0) ? SCHEME_HTTPS : (url.indexOf(SCHEME_HTTP) == 0) ? SCHEME_HTTP : "",
        host = "",
        port = "",
        path;

    if (scheme != "") {
        var urlPart = url.substring(scheme.length + 2),
            hostEnd = urlPart.indexOf("/"),
            hostPortStr = (hostEnd > 0) ? urlPart.substring(0, hostEnd) : urlPart,
            hostport = hostPortStr.split(":"),
            host = hostport[0],
            port = (hostport.length > 1) ? hostport[1] : "",
            path = (hostEnd > 0) ? urlPart.substring(hostEnd) : "";
    }
    else {
        path = url;
    }

    return { scheme: scheme, host: host, port: port, path: path };
}

function resolveRelativePath(hostname, href, url) {
    var trimRight = function (url, char) {
        charIdx = href.indexOf(char);
        url = (charIdx > 0) ? url.substring(0, charIdx) : url;
        return url;
    };

    href = trimRight(trimRight(href, "?"), "#");

    var hostIndex = href.indexOf(hostname),
        path = href.substring(hostIndex + hostname.length),
        pathIdx = path.indexOf("/"),
        folderIndex = path.lastIndexOf('/');
    path = (folderIndex >= 0) ? path.substring(pathIdx, folderIndex) : path;

    return path + "/" + url;
}

function trimUrlQuery(url) {
    var queryStart = url.indexOf("?");
    if (queryStart > 0) {
        url = url.substring(0, queryStart);
    }

    queryStart = url.indexOf("#");
    if (queryStart > 0) {
        url = url.substring(0, queryStart);
    }

    return url;
}

function invokeCallback(callback, resp, synchronous, state) {
    if (callback != null) {

        if (state) {
            resp[AK_STATE] = state;
        }

        if (synchronous) {
            callback(resp);
        }
        else {
            window.setTimeout(function () { callback(resp); }, 1);
        }
    }
}

function deserializeJSON(text) {
    if (window.JSON) {
        return JSON.parse(text);
    }
    else {
        return eval("(" + text + ")");
    }
}

function getCurrentSeconds() {
    // Get current timestamp in seconds
    return Math.floor(new Date().getTime() / 1000);
}

function foreach(elementList, processElement) {
    var count = elementList.length;
    for (var i = 0; i < count; i++) {
        processElement(elementList[i]);
    }
}

function createAuthError(error, description) {
    var errorObj = {};
    errorObj[AK_ERROR] = error;
    errorObj[AK_ERROR_DESC] = description;
    return errorObj;
}

function createErrorResponse(code, message) {
    var errorObj = {}, errorResponse = {};

    errorObj[API_PARAM_CODE] = code,
    errorObj[API_PARAM_MESSAGE] = message;
    errorResponse[API_PARAM_ERROR] = errorObj;

    return errorResponse;
}

function createExceptionResponse(opName, event, err) {
    return createErrorResponse(
        ERROR_REQUEST_FAILED,
        ERROR_DESC_EXCEPTION.replace("METHOD", opName).replace("EVENT", event).replace("MESSAGE", err.message)
        );
}

function trimVersionBuildNumber(version) {
    var versionArr = version.split(".");
    return versionArr[0] + "." + versionArr[1];
}

function detectBrowsers() {
    var ua = navigator.userAgent.toLowerCase();
    wl_app._browser = {
        "firefox": /firefox/.test(ua),
        "firefox1.5": /firefox\/1\.5/.test(ua),
        "firefox2": /firefox\/2/.test(ua),
        "firefox3": /firefox\/3/.test(ua),
        "firefox4": /firefox\/4/.test(ua),
        "ie": /msie/.test(ua) && !/opera/.test(ua),
        "ie6": false,
        "ie7": false,
        "ie8": false,
        "ie9": false,
        "opera": /opera/.test(ua),
        "webkit": /webkit/.test(ua),
        "mobile": /mobile/.test(ua) || /phone/.test(ua)
    };

    if (wl_app._browser["ie"]) {
        // detect the rendering engine IE is using.
        // if documentMode is defined, we rely on its value to determine the rendering engine.
        var engine = 0;

        if (document.documentMode) {
            engine = document.documentMode;
        } 
        else {
            // if we're in a browser that doesn't support documentMode (IE6, IE7) we need to do some more sniffing.
            if (/msie 7/.test(ua)) {
                engine = 7;
            }
        }

        // clamp the engine on 6,9
        engine = Math.min(9, Math.max(engine, 6));

        wl_app._browser["ie" + engine] = true;
    }
}

/**
 * Deserializes name/value pair parameters from a string into a dictionary object.
 */
function deserializeParameters(value, existingDict) {
    var dict = (existingDict != null) ? existingDict : {};

    if (value != null) {
        var properties = value.split('&');
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i].split('=');
            if (property.length == 2) {
                dict[decodeURIComponent(property[0])] = decodeURIComponent(property[1]);
            }
        }
    }

    return dict;
}

/**
 * Serializes a dictionary object into a string value in a format n1=v1&n2=v2&... 
 */
function serializeParameters(dict) {
    var serialized = "";
    if (dict != null) {
        for (var key in dict) {
            var separator = (serialized.length == 0) ? "" : "&";
            var value = dict[key];
            serialized += separator + encodeURIComponent(key) + "=" + encodeURIComponent(stringifyParamValue(value));
        }
    }

    return serialized;
}

/**
 * Serializes a value into string.
 */
function stringifyParamValue(v) {

    if (v instanceof Date) {
        var padding = function (n, c) {
            switch (c) {
                case 2:
                    return n < 10 ? '0' + n : n;
                case 3:
                    return (n < 10 ? '00' : (n < 100 ? '0' : '')) + n;
            }
        };

        return v.getUTCFullYear() + '-' +
            padding(v.getUTCMonth() + 1, 2) + '-' +
            padding(v.getUTCDate(), 2) + 'T' +
            padding(v.getUTCHours(), 2) + ':' +
            padding(v.getUTCMinutes(), 2) + ':' +
            padding(v.getUTCSeconds(), 2) + '.' +
            padding(v.getUTCMilliseconds(), 3) + 'Z';
    }

    return "" + v;
}

/**
 * Read Url parameters.
 */
function readUrlParameters(url) {

    var queryStart = url.indexOf('?') + 1,
        hashStart = url.indexOf('#') + 1,
        dict = {};

    if (queryStart > 0) {
        var queryEnd = (hashStart > queryStart) ? (hashStart - 1) : url.length;
        dict = deserializeParameters(url.substring(queryStart, queryEnd), dict);
    }
    
    if (hashStart > 0) {
        dict = deserializeParameters(url.substring(hashStart), dict);
    }

    return dict;
}

/**
 * Appends an object of parameters to the base url.
 * The function checks the base url for existing params
 * and appropriately appends a ? or an & to the base url
 * before appending the parameters
 */
function appendUrlParameters(path, params) {
    return path + ((path.indexOf("?") < 0) ? "?" : "&") + serializeParameters(params);
}

/**
 * Normalize a parameter value into boolean type.
 */
function normalizeBooleanValue(value) {
    switch (typeof (value)) {
        case TYPE_BOOLEAN:
            return value;
        case TYPE_NUMBER:
            return !!value;
        case TYPE_STRING:
            return value.toLowerCase() === "true";
        default:
            return false;
    }
}

function validateParams(params, expectedParams, method) {
    if (params instanceof Array) {
        for (var i = 0; i < params.length; i++) {
            validateParam(params[i], expectedParams[i], method); 
        }
    } 
    else {
        validateParam(params, expectedParams, method);
    }
}

function validateParam(param, expectedParam, method) {
    validateParamType(param, expectedParam, method);

    if (expectedParam.type === "properties") {
        validateProperties(param, expectedParam.properties, method);
    }
}

function validateParamType(param, expected, method) {
    var paramName = expected.name,
        paramType = typeof (param),
        expectedType = expected.type;

    if (paramType === "undefined" || param == null) {
        if (expected.optional) {
            return;
        }
        else {
            throw createMissingParamError(paramName, method);
        }
    }

    switch (expectedType) {
        case "string":
        case "url":
            {
                if (paramType !== TYPE_STRING) {
                    throw createParamTypeError(paramName, method);                    
                }
                if (!expected.optional && stringTrim(param) === "") {
                    throw createMissingParamError(paramName, method);
                }
            }
            break;
        case "properties":
            {
                if (paramType != TYPE_OBJECT) {
                    throw createParamTypeError(paramName, method);
                }
            }
            break;
        case "function":
            {
                if (paramType != TYPE_FUNCTION) {
                    throw createParamTypeError(paramType, method);                    
                }
            }
            break;
        case "dom":
            {
                if (paramType == TYPE_STRING) {
                    if (getElementById(param) == null) {
                        throw new Error(ERROR_DESC_DOM_INVALID.replace("METHOD", method).replace("PARAM", paramName));
                    }
                }
                else if (paramType != TYPE_OBJECT) {
                    throw createParamTypeError(paramName, method);
                }
            }
            break;
        case "string_or_array":
            {
                if (paramType !== TYPE_STRING && !(param instanceof Array)) {
                    throw createParamTypeError(paramType, method);
                }
            }
            break;
        default:
            if (paramType !== expectedType) {
                throw createParamTypeError(paramName, method);
            }
            break;
    }
    
    if (expected.allowedValues != null) {
         validateAllowedValue(param, expected.allowedValues, expected.caseSensitive, paramName, method);
    }
}

function validateProperties(param, expectedProperties, method) {
    var properties = param || {};
    for (var i = 0; i < expectedProperties.length; i++) {
        var expectedProperty = expectedProperties[i],
            actualProperty = properties[expectedProperty.name] || properties[expectedProperty.altName];
        validateParamType(actualProperty, expectedProperty, method);
    }
}

function validateAllowedValue(value, allowedValues, caseSensitive, paramName, method) {
    var isString = typeof (allowedValues[0]) === TYPE_STRING;
    for (var i = 0; i < allowedValues.length; i++) {
        if (isString && !caseSensitive) {
            if (value.toLowerCase() === allowedValues[i].toLowerCase()) {
                return;
            }
        }
        else if (value === allowedValues[i]) {
            return;
        }
    }

    throw createInvalidParamValue(paramName, method);    
}

function createParamTypeError(paramName, method) {
    return new Error(ERROR_DESC_PARAM_TYPE_INVALID.replace("METHOD", method).replace("PARAM", paramName));
}

function createMissingParamError(paramName, method) {
    return new Error(ERROR_DESC_PARAM_MISSING.replace("METHOD", method).replace("PARAM", paramName));
}

function createInvalidParamValue(paramName, method) {
    return new Error(ERROR_DESC_PARAM_INVALID.replace("METHOD", method).replace("PARAM", paramName));
}

function findArgumentByType(args, type, maxToRead) {
    if (args) {
        for (var i = 0; i < maxToRead && i < args.length; i++) {
            if (type === typeof args[i]) {
                return args[i];
            }
        }
    }

    return undefined;
}

var Promise = function (opName, op, uplinkPromise) {
    this._name = opName;
    this._op = op; 
    this._uplinkPromise = uplinkPromise;
    this._isCompleted = false;
    this._listeners = [];
};

Promise.prototype = {
    then: function (onSuccess, onError, onProgress) {
        var chainedPromise = new Promise(null, null, this),
            listener = {};
        listener[PROMISE_EVENT_ONSUCCESS] = onSuccess;
        listener[PROMISE_EVENT_ONERROR] = onError;
        listener[PROMISE_EVENT_ONPROGRESS] = onProgress;
        listener.chainedPromise = chainedPromise;

        this._listeners.push(listener);

        return chainedPromise;
    },

    cancel: function () {
        if (this._isCompleted) return;

        if (this._uplinkPromise && !this._uplinkPromise._isCompleted) {
            // If there is incomplete uplink promise, we cancel that one and let the flow propagate to this one.
            this._uplinkPromise.cancel();
        }
        else {
            // We need to cancel the current one, if we can.
            var opCancel = (this._op) ? this._op.cancel : null;
            if (typeof (opCancel) === TYPE_FUNCTION) {
                this._op.cancel();
            }
            else {
                this.onError(
                    createErrorResponse(ERROR_REQ_CANCEL, ERROR_DESC_CANCEL.replace("METHOD", this._getName()))
                );
            }
        }
    },

    _getName: function () {
        
        if (this._name) {
            return this._name;
        }

        if (this._op && typeof (this._op._getName) === TYPE_FUNCTION) {
            return this._op._getName();
        }

        if (this._uplinkPromise) {
            return this._uplinkPromise._getName();
        }

        return "";
    },

    _onEvent: function (args, name) {
        if (this._isCompleted) return;
        this._isCompleted = (name !== PROMISE_EVENT_ONPROGRESS);

        this._notify(args, name);
    },

    _notify: function (args, event) {
        var currentPromise = this;
        foreach(this._listeners, function (listener) {
            var callback = listener[event],
                chainedPromise = listener.chainedPromise,
                isPromiseCompleted = (event !== PROMISE_EVENT_ONPROGRESS);

            if (callback) {                
                try {
                    var chainedPromiseOrigin = callback.apply(listener, args);
                    if (isPromiseCompleted && chainedPromiseOrigin && chainedPromiseOrigin.then) {
                        // We need to link and fulfill the chained promise with the one returned from callback
                        // if this is onSuccess or onError. 
                        // Also, set the new promise as the _op of the chained promise in case cancel is invoked.
                        chainedPromise._op = chainedPromiseOrigin;
                        chainedPromiseOrigin.then(
                            function (result) {
                                chainedPromise[PROMISE_EVENT_ONSUCCESS](result);
                            },
                            function (error) {
                                chainedPromise[PROMISE_EVENT_ONERROR](error);
                            },
                            function (progress) {
                                chainedPromise[PROMISE_EVENT_ONPROGRESS](progress);
                            }
                        );
                    }
                }
                catch (err) {
                    if (isPromiseCompleted) {
                        // The the callback throws an error, that should be forwarded to the chained promise.
                        chainedPromise.onError(
                            createExceptionResponse(currentPromise._getName(), event, err)
                        );
                    }
                }
            }
            else {
                if (isPromiseCompleted) {
                    // If no onSuccess/onError is handled, we forward event to the chained promise.
                    chainedPromise[event].apply(chainedPromise, args);
                }
            }
        });
    }
};

Promise.prototype[PROMISE_EVENT_ONSUCCESS] = function () {
    this._onEvent(arguments, PROMISE_EVENT_ONSUCCESS);
};

Promise.prototype[PROMISE_EVENT_ONERROR] = function () {
    this._onEvent(arguments, PROMISE_EVENT_ONERROR);
};

Promise.prototype[PROMISE_EVENT_ONPROGRESS] = function () {
    this._onEvent(arguments, PROMISE_EVENT_ONPROGRESS);
};

function createCompletePromise(opName, succeeded, callback, result) {
    var promise = new Promise(opName, null, null),
        completeEvent = succeeded? PROMISE_EVENT_ONSUCCESS: PROMISE_EVENT_ONERROR;

    window.setTimeout(
        function () {
            promise[completeEvent](result);
        },
        1);

    if (typeof (callback) === TYPE_FUNCTION) {
        promise.then(function (rs) {
            callback(rs);
        });
    }
    
    return promise;
}


var AK_COOKIE_KEYS = [AK_ACCESS_TOKEN, AK_AUTH_TOKEN, AK_SCOPE, AK_EXPIRES_IN, AK_EXPIRES];

var APISERVICE_URI = "apiservice_uri",
    AUTH_SERVER = "auth_server";

var IDS_NON_CONNECTED_ACCOUNT_ERROR_CODE = -2147023579;

var SDK_ROOT_PATH = "///LiveSDKHTML/",
    SDK_RESOURCE_PATH = "ms-resource:///WLText/";

var WLText = null;

/**
 * The WWA version of appInitPlatformSpecific() method.
 */
function appInitPlatformSpecific(properties) {

    if (properties[AK_RESPONSE_TYPE] === AK_CODE) {
        throw new Error(ERROR_DESC_UNSUPPORTED_RESPONSE_TYPE_CODE);
    }

    wl_app[API_X_HTTP_LIVE_LIBRARY] = "Windows/HTML8_" + trimVersionBuildNumber(wl_app._version);

    // let's assume the user is connected, and we will correct this when we invoke Authenticator.
    wl_app._isConnected = true;
    // let's run as ssl so that api service will return us ssl resources.
    wl_app._isHttps = true;

    if (properties[API_PARAM_TRACING]) {
        wl_app._traceEnabled = true;
    }
        
    wl_app._env = "PROD";

    if (!wl_app[WL_SDK_ROOT]) {
        wl_app[WL_SDK_ROOT] = SDK_ROOT_PATH;
    }

    if (wl_app.testInit) {
        wl_app.testInit(properties);
    }

    initLocale();

    var psid = Windows.Security.Authentication.Web.WebAuthenticationBroker.getCurrentApplicationCallbackUri().absoluteUri;

    // TODO: remove this logic once login site accepts the ending slash.
    psid = psid.charAt(psid.length - 1) === '/' ? psid.substr(0, psid.length - 1) : psid;    
    properties[AK_CLIENT_ID] = psid;

    wl_app._redirect_uri = psid;
    wl_app._response_type = RESPONSE_TYPE_TOKEN;

    cleanPendingBackgroundTransferOperations();
}

function initLocale() {

    try {
        var ns = Windows.ApplicationModel.Resources.Core,
            rm = ns.ResourceManager,
            locale = rm.current.defaultContext.languages[0],
            resources = ns.ResourceManager.current.mainResourceMap;

        wl_app._locale = ((locale || "en").toLowerCase());

        WLText = {
            signIn: resources.getValue(SDK_RESOURCE_PATH + "signIn").toString(),
            signOut: resources.getValue(SDK_RESOURCE_PATH + "signOut").toString(),
            login: resources.getValue(SDK_RESOURCE_PATH + "login").toString(),
            logout: resources.getValue(SDK_RESOURCE_PATH + "logout").toString(),
            connect: resources.getValue(SDK_RESOURCE_PATH + "connect").toString()
        };
                
    } catch (error) {
        log(error.message);
    }
}

/**
 * The WWA version of handlePageLoad() method.
 */
function handlePageLoad() {

    // set default log/trace settings.
    wl_app._logEnabled = true;
    wl_app._traceEnabled = false;

    checkDocumentReady(function () {
        // Invoke wlAsyncInit, if it is defined.
        var appInit = window.wlAsyncInit;
        if (appInit && (typeof (appInit) === TYPE_FUNCTION)) {
            appInit.call();
        }
    });
}

function normalizeRedirectUrl(url) {
    return url;
}

/**
 * The WWA version of requireClientId() method.
 */
function requireClientId() {
    return false;
}

/**
 * The WWA version of shouldForceGetLoginStatusOnInit() method.
 */
function shouldForceGetLoginStatusOnInit() {
    // On Win8, we don't need to detect auth session change for cross page scenarios.
    return false;
}

/**
 * Reattach pending upload/download background transfer operations in order to clean up unnecessary memory usage.
 */
function cleanPendingBackgroundTransferOperations() {
    var ns = Windows.Networking.BackgroundTransfer;
    var attachPendingBackgroundOperations = function (operation) {
        try{
            // Since can't link to app handlers, we just let the pending operations to end silently.
            var promise = operation.attachAsync().then(
                function (resp) { },
                function (error) { },
                function (progress) { }
            );
        }
        catch (error) {
        }
    };

    ns.BackgroundDownloader.getCurrentDownloadsAsync(BT_GROUP_DOWNLOAD).then(
        function (downloads) {
            if (downloads && downloads.size > 0) {
                for (i = 0; i < downloads.size; i++) {
                    attachPendingBackgroundOperations(downloads[i]);
                }
            }
        }
    );

    ns.BackgroundUploader.getCurrentUploadsAsync(BT_GROUP_UPLOAD).then(
        function (uploads) {
            if (uploads && uploads.size > 0) {
                for (i = 0; i < uploads.size; i++) {
                    attachPendingBackgroundOperations(uploads[i]);
                }
            }
        }
    );
}

/**
 * The WWA version of handlePendingLogin() method.
 */
function handlePendingLogin(internal) {
    var pendingRequest = wl_app._pendingLogin;
    if (pendingRequest != null) {
        if (!internal) {
            log(ERROR_DESC_PENDING_LOGIN_IGNORED);
        }

        return false;
    }

    return true;
}

/**
 * The WWA version of createLoginRequest() method.
 */
function createLoginRequest(properties, onAuthRequestCompleted) {
    properties[UI_PARAM_THEME] = properties[UI_PARAM_THEME] || UI_SIGNIN_THEME_DARK;

    return new AuthRequest(DISPLAY_PAGE, properties.normalizedScope, properties, onAuthRequestCompleted);
}

/**
 * The WWA version of createLoginStatusRequest() method.
 */
function createLoginStatusRequest(properties, onGetLoginStatusCompleted) {
    return new AuthRequest(DISPLAY_NONE, wl_app._authScope, properties, onGetLoginStatusCompleted);
}

/**
 * The WWA version of logoutWindowsLive() method.
 */
function logoutWindowsLive(callback) {

    try {
        var authServer = getAuthServerName(),
            path = (authServer === "oauth.live.com") ? "/logout.srf?ts=" : "/oauth20_logout.srf?",
            authServer = (authServer === "oauth.live.com") ? "login.live.com" : authServer,
            params = {},
            clientId = wl_app._session.get(AK_CLIENT_ID);
        params[AK_CLIENT_ID] = clientId;
        params[AK_REDIRECT_URI] = clientId;
        params["ts"] = new Date().getTime();

        var authUrl = "https://" + authServer + path + serializeParameters(params);

        launchWebAuth(authUrl, DISPLAY_NONE,
            function (response) {
                var clientAuth = new Windows.Security.Authentication.OnlineId.OnlineIdAuthenticator();
                clientAuth.signOutUserAsync();
                callback();
            });
    }
    catch (error) {
        log(error);
        callback();
    }
}

function validateSignInControlPlatformSpecificParameters(properties) {
    validateProperties(
        properties,
        [{
            name: UI_PARAM_THEME,
            allowedValues: [UI_SIGNIN_THEME_DARK, UI_SIGNIN_THEME_LIGHT],
            type: TYPE_STRING,
            optional: true
        },
        {
            name: UI_PARAM_BRAND,
            allowedValues: [UI_BRAND_MESSENGER, UI_BRAND_HOTMAIL, UI_BRAND_SKYDRIVE, UI_BRAND_WINDOWS, UI_BRAND_NONE],
            type: TYPE_STRING,
            optional: true
        }],
        "WL.ui(name:'signin')");

    properties[UI_PARAM_THEME] = properties[UI_PARAM_THEME] || UI_SIGNIN_THEME_DARK;
    properties[UI_PARAM_BRAND] = properties[UI_PARAM_BRAND] || UI_BRAND_WINDOWS;
}

function buildSignInControlHtml(properties) {
    var brand = (properties[UI_PARAM_BRAND]),
        theme = (properties[UI_PARAM_THEME]),
        imgHtml = buildSignInControlIconHtml(brand, theme),
        textHtml = buildSignInControlTextHtml(brand),
		buttonHtml = "<button style=\"text-align: center;\">" + imgHtml + textHtml + "</button>";

    return buttonHtml;
}

function buildSignInControlIconHtml(brand, theme) {
    var html = "";
    if (brand !== UI_BRAND_NONE) {
        var imgName = brand + (theme === UI_SIGNIN_THEME_DARK ? "_white.png" : "_black.png");
        html = "<img alt=\"\" src=\"" + getImagePath() +"/SignInControl/"+ imgName + "\" style=\"vertical-align: middle;\">";
    }
    return html;
}

function buildSignInControlTextHtml(brand) {
    var html = (brand !== UI_BRAND_NONE) ? "<span style=\"margin: 0px 4px; text-align: center; vertical-align: middle;\"></span>" : "";
    return html;
}

SignInControl.prototype.setText = function (text) {
    if (this._element.childNodes.length == 0) {
        // The button has been cleared.
        detachSignInControlMouseEvents(this);
        return;
    }

    if (text != this._text) {
        var button = this._element.childNodes[0],
            textContainer = (this._properties[UI_PARAM_BRAND] === UI_BRAND_NONE) ? button : button.childNodes[1];

        setElementText(textContainer, text);
        this._text = text;
    }
};

SignInControl.prototype.onMouseDown = function (e) {
    this.mousedown = true;
    OnSignControlMouseEvent(this);
};

SignInControl.prototype.onMouseUp = function (e) {
    this.mousedown = false;
    OnSignControlMouseEvent(this);
};

SignInControl.prototype.onMouseEnter = function (e) {
    this.mousein = true;
    OnSignControlMouseEvent(this);
};

SignInControl.prototype.onMouseLeave = function (e) {
    this.mousein = false;
    OnSignControlMouseEvent(this);
};

function OnSignControlMouseEvent(signInControl) {
    var properties = signInControl._properties,
        brand = properties[UI_PARAM_BRAND];

    if (brand === UI_BRAND_NONE){
        return;
    }

    if (signInControl._element.childNodes.length == 0) {
        // The button has been cleared. 
        detachSignInControlMouseEvents(signInControl);
        return;
    }

    var imgEl = signInControl._element.childNodes[0].childNodes[0],
        theme = (properties[UI_PARAM_THEME]),
        useWhite = (theme === UI_SIGNIN_THEME_DARK),
        invert = signInControl.mousedown && signInControl.mousein;
    useWhite = invert ? !useWhite : useWhite;
    

    var imgName = brand + (useWhite ? "_white.png" : "_black.png");
    imgEl.src = getImagePath() + "/SignInControl/" + imgName;
}

function attachSignInControlMouseEvents(control, button) {
    control._button = button;
    button.addEventListener("click", createSignInControlEventHandler("click", control, control.onClick), false);
    button.addEventListener("mouseenter", createSignInControlEventHandler("mouseenter", control, control.onMouseEnter), false);
    button.addEventListener("mouseleave", createSignInControlEventHandler("mouseleave", control, control.onMouseLeave), false);
    document.addEventListener("mousedown", createSignInControlEventHandler("mousedown", control, control.onMouseDown), false);
    document.addEventListener("mouseup", createSignInControlEventHandler("mouseup", control, control.onMouseUp), false);
}

function detachSignInControlMouseEvents(control) {
    var button = control._button;
    if (button) {
        button.removeEventListener("click", getSignInControlEventHandler("click", control), false);
        button.removeEventListener("mouseenter", getSignInControlEventHandler("mouseenter", control), false);
        button.removeEventListener("mouseleave", getSignInControlEventHandler("mouseleave", control), false);
        document.removeEventListener("mousedown", getSignInControlEventHandler("mousedown", control), false);
        document.removeEventListener("mouseup", getSignInControlEventHandler("mouseup", control), false);
        delete control._button;
    }
}


/** 
 * The WWA version of getCookieDomain() method.
 */
function getCookieDomain() {
    return null;
}

var AuthRequest = function (display, scope, properties, callback) {
    var request = this;
    request._display = display;
    request._completed = false;
    request._requestFired = false;
    request._properties = properties;
    request._callback = callback;
    request._scope = scope;
    var opName = (display === DISPLAY_NONE) ? "WL.login" : "WL.getLoginStatus";
    request._promise = new Promise(opName, null, null);
};

AuthRequest.prototype = {

    execute: function () {
        var request = this,
            oAuthUrl = buildAuthUrl(request._display, request._scope, request._properties[UI_PARAM_THEME]),
            onCompleteDelegate = createDelegate(request, request._onComplete);

        if (wl_app._isConnected) {
            // For connected account, we will try to refresh ticket and detect if this is not a connected account.
            authenticateUser(Windows.Security.Authentication.OnlineId.CredentialPromptType.doNotPrompt, function (response) {
                launchWebAuth(oAuthUrl, request._display, onCompleteDelegate);
            });
        }
        else {

            launchWebAuth(oAuthUrl, request._display, onCompleteDelegate);
        }

        return request._promise;
    },

    _onComplete: function (response) {
        if (!this._completed) {
            this._completed = true;

            // Let the app session absorb the response.
            wl_app._session.onAuthResponse(response);

            var hasError = false,
                appResp = wl_app._session.tryGetResponse();

            if (this._display === DISPLAY_NONE) {
                // For getLoginStatus, error means we can't reach the OAuth server or we may experiencing a failure to refresh an existing one.
                hasError = (response[AK_ERROR] === ERROR_REQUEST_FAILED) || (appResp == null);
            }
            else {
                // For login, error means we can't get access token, regardless of any reason.
                hasError = (response[AK_ACCESS_TOKEN] == null);
            }

            var appResp = hasError ? response : appResp;

            this._callback(this._properties, appResp);

            if (hasError) {
                this._promise[PROMISE_EVENT_ONERROR](appResp);
            }
            else {
                this._promise[PROMISE_EVENT_ONSUCCESS](appResp);
            }
        }
    }
};

function buildAuthUrl(display, scope, theme) {

    var responseType = (display === DISPLAY_NONE) ? RESPONSE_TYPE_TOKEN : wl_app._response_type;

    var params = {};
    params[AK_CLIENT_ID] = wl_app._session.get(AK_CLIENT_ID);
    params[AK_DISPLAY] = display;
    params[AK_LOCALE] = wl_app._locale;
    params[AK_REDIRECT_URI] = wl_app._redirect_uri;
    params[AK_RESPONSE_TYPE] = responseType;
    params[AK_SCOPE] = scope;
    if (display == DISPLAY_PAGE) {
        params[UI_PARAM_THEME] = theme;
    }

    var authServer = getAuthServerName(),
        path = (authServer === "oauth.live.com") ? "/authorize?" : "/oauth20_authorize.srf?",
        url = "https://" + authServer + path + serializeParameters(params);

    return url;
}

function launchWebAuth(oauthUrl, display, onComplete) {

    try {
        trace("launching WebAuth");
        var startURI = new Windows.Foundation.Uri(oauthUrl);

        var onWebAuth = function (result) {
            var response = null;

            if (result.name === "Error") {
                response =  createAuthError(ERROR_REQUEST_FAILED, result.number + ": " + result.message);

            }
            else if (result.responseData) {
                response = readUrlParameters(result.responseData);
            }

            if (!response || (!response[AK_ACCESS_TOKEN] && !response[AK_ERROR])) {
                response = createAuthError(ERROR_REQUEST_FAILED, "Failed to get result from Live OAuth endpoint.");
            }

            onComplete(response);
        };

        var webAuthNs = Windows.Security.Authentication.Web,
            webAuthBroker = webAuthNs.WebAuthenticationBroker,
            authOption = (display === DISPLAY_NONE) ? webAuthNs.WebAuthenticationOptions.silentMode : webAuthNs.WebAuthenticationOptions.none;

        webAuthBroker.authenticateAsync(authOption, startURI).then(onWebAuth, onWebAuth);

    } catch (err) {
        response = createAuthError(ERROR_REQUEST_FAILED,"Failed to launch WebAuthBroker: " + err);

        onComplete(response);
    }
}

function authenticateUser(uiOption, callback) {
    var onAuthUserCompleted = function (response) {
        if (response && response.number === IDS_NON_CONNECTED_ACCOUNT_ERROR_CODE) {
            //"The specified account does not exist.
            wl_app._isConnected = false;
        }

        callback();
    }

    try {
        var ns = Windows.Security.Authentication.OnlineId,
            clientAuth = new ns.OnlineIdAuthenticator();

        var request = new ns.OnlineIdServiceTicketRequest(getLiveIdServiceName(), "JWT");
        var authOperation = clientAuth.authenticateUserAsync([request], "", (uiOption || ns.CredentialPromptType.promptIfNeeded));

        authOperation.then(onAuthUserCompleted, onAuthUserCompleted);
    }
    catch (error) {
        callback();
    }
}

AuthSession.prototype.initPlatformSpecific = function () {

    // If the cookie indicates we have already checked user status, we mark statusChecked as true
    // so that we may skip sending getLoginStatus request to oauth server.
    this._statusChecked = (this._state[AK_STATUS] !== AS_UNCHECKED);
};

AuthSession.prototype.getStatus = function () {
    var session = null,
        status = this._state[AK_STATUS];

    if (status === AS_CONNECTED) {
        var expiresIn = this.tokenExpiresIn();
        // We leave 10s for expiring state enough to make a call for api/upload/download
        if (expiresIn <= 10) {
            status = AS_EXPIRED;
        }
        else {
            if (expiresIn < 60) {
                status = AS_EXPIRING;
            }
        }

        if (status === AS_EXPIRED && !wl_app._isConnected) {
            // We can't refresh for user accounts that are not connected to a live Id.
            // In this case, update the status as unknown.
            this.updateStatus(AS_UNKNOWN);
            status = AS_UNKNOWN;
        }
        else {
            session = {};
            session[AK_ACCESS_TOKEN] = this._state[AK_ACCESS_TOKEN];
            session[AK_AUTH_TOKEN] = this._state[AK_AUTH_TOKEN];
            session[AK_SCOPE] = this._state[AK_SCOPE].split(" ");
            session[AK_EXPIRES_IN] = expiresIn;
            session[AK_EXPIRES] = this._state[AK_EXPIRES];
        }
    }
    else {
        if (!this._statusChecked) {
            status = AS_UNCHECKED;
        }
    }

    return { status: status, session: session };
};

AuthSession.prototype.tryGetResponse = function (scope) {

    trace("AuthSession.tryGetResponse: scope = " + scope);

    var sessionStatus = this.getStatus(),
        status = sessionStatus[AK_STATUS],
        session = sessionStatus[AK_SESSION];

    if (status == AS_UNCHECKED || status == AS_EXPIRING || status == AS_EXPIRED) {
        // We haven't checked yet or the ticket is on expiring/expired state.
        return null;
    }

    // This is a initial try for login()/getLoginStatus() in order to determine
    // if we need to send a request to server.
    if (scope) {
        // Assuming scope is always needed for login() call.
        return (session && isScopeSatisfied(session[AK_SCOPE], scope)) ? sessionStatus : null;
    }
    else {
        // For loginStatus, just return whatever we have, since it is not expiring or unchecked.
        return sessionStatus;
    }
};

AuthSession.prototype.onAuthResponse = function (response) {

    var sessionChanged = false,
            state = this._state,
            oldStatus = state[AK_STATUS],
            newToken = response[AK_ACCESS_TOKEN];

    if (newToken && state[AK_ACCESS_TOKEN] != newToken) {

        state[AK_ACCESS_TOKEN] = newToken;
        state[AK_SCOPE] = response[AK_SCOPE];
        state[AK_EXPIRES_IN] = response[AK_EXPIRES_IN];
        state[AK_EXPIRES] = getCurrentSeconds() + parseInt(response[AK_EXPIRES_IN]);

        if (response[AK_AUTH_TOKEN]) {
            state[AK_AUTH_TOKEN] = response[AK_AUTH_TOKEN];
        }
        else {
            delete state[AK_AUTH_TOKEN];
        }

        this._stateDirty = true;
        sessionChanged = true;
    }

    var newStatus = computeStatus(this._state, response);

    // Process state change
    if (oldStatus != newStatus) {
        this._statusChecked = true;
        state[AK_STATUS] = newStatus;
        this._stateDirty = true;
        this.onStatusChanged(oldStatus, newStatus);
    }

    if (sessionChanged) {
        wl_event.notify(EVENT_AUTH_SESSIONCHANGE, this.getNormalStatus());
    }

    this.save();
};

function computeStatus(state, authResponse) {

    var status = state[AK_STATUS],
        errorCode = authResponse[AK_ERROR];

    if (state[AK_ACCESS_TOKEN]) {
        status = AS_CONNECTED;
    }
    else if (errorCode === ERROR_UKNOWN_USER) {
        status = AS_UNKNOWN;
    }
    else if (errorCode === ERROR_ACCESS_DENIED) {
        status = AS_NOTCONNECTED;
    }
    else if (status != AS_UNCHECKED) {
        status = AS_UNKNOWN;
    }

    return status;
}

function normalizeResponseStatus(status) {
    return (status === AS_UNCHECKED) ? AS_UNKNOWN : ((status === AS_EXPIRING || status === AS_EXPIRED) ? AS_CONNECTED : status);
}

/**
 * The WWA version of executeApiRequest() method.
 */
function executeApiRequest(request) {

    var f = function () {
        sendAPIRequestViaXHR(request);
    };

    wl_app.getLoginStatus({ internal: true, callback: f });
}

/**
 * The WWA version of canDoXHR() method.
 */
function canDoXHR() {
    return true;
}

/**
 * The WWA version of getAuthServerName() method.
 */
function getAuthServerName() {
    return wl_app._settings[wl_app._env][AUTH_SERVER];
}

/**
 * The WWA version of getApiServiceUrl() method.
 */
function getApiServiceUrl() {
    return wl_app._settings[wl_app._env][APISERVICE_URI];
}



/**
 * The WWA version of executeApiRequest() method.
 */
function executeApiRequest(request) {

    var f = function () {
        sendAPIRequestViaXHR(request);
    };

    wl_app.getLoginStatus({ internal: true, callback: f });
}

/**
 * The WWA version of canDoXHR() method.
 */
function canDoXHR() {
    return true;
}

/**
 * The WWA version of getAuthServerName() method.
 */
function getAuthServerName() {
    return wl_app._settings[wl_app._env][AUTH_SERVER];
}

/**
 * The WWA version of getApiServiceUrl() method.
 */
function getApiServiceUrl() {
    return wl_app._settings[wl_app._env][APISERVICE_URI];
}



wl_app.download = function (properties) {

    ensureAppInited("WL.download");

    return new DownloadOperation(properties).execute();    
};

function buildFilePathUrlString(path, extra_params) {

    if (!isPathFullUrl(path)) {
        path = getApiServiceUrl() + (path.charAt(0) === "/" ? path.substring(1) : path);
    }

    var params = extra_params || {},
        token = getAccessTokenForApi();
    if (token) {
        params[AK_ACCESS_TOKEN] = token;
    }

    params[API_X_HTTP_LIVE_LIBRARY] = wl_app[API_X_HTTP_LIVE_LIBRARY];

    return appendUrlParameters(path, params);
}

function startDownloadViaBackgroundTransfer(path, file_output, op) {
    
    var downloadPathString = isPathFullUrl(path) ? path : buildFilePathUrlString(path),
        downloadPathUri = new Windows.Foundation.Uri(downloadPathString);

    try {
        var downloader = new Windows.Networking.BackgroundTransfer.BackgroundDownloader();
        downloader.group = BT_GROUP_DOWNLOAD;
        var downloadOp = downloader.createDownload(downloadPathUri, file_output);
        var promise = downloadOp.startAsync().then(
            function (response) {
                op.downloadComplete(true, response || {});
            },
            function (error) {
                handleDownloadErrorResponse(error.message, op);
            },
            function (response) {
                var progress = response.progress;
                var downloadProgress = {
                    bytesTransferred: progress.bytesReceived,
                    totalBytes: progress.totalBytesToReceive,
                    progressPercentage: (progress.totalBytesToReceive == 0) ? 0 : (progress.bytesReceived / progress.totalBytesToReceive) * 100
                };

                op.downloadProgress(downloadProgress);
            });
        op._cancel = createDelegate(promise, promise.cancel);
    }
    catch (error) {
        handleDownloadErrorResponse(error.message, op);
    }
}

function isPathFullUrl(path) {
    return path.indexOf("https://") === 0 || path.indexOf("http://") === 0;
}

function handleDownloadErrorResponse(errorMessage, op) {
    op.downloadComplete(false, createErrorResponse(ERROR_REQUEST_FAILED, "WL.download:" + errorMessage));
}

var DOWNLOAD_OPSTATE_NOTSTARTED = "notStarted",
    DOWNLOAD_OPSTATE_READY = "ready",
    DOWNLOAD_OPSTATE_DOWNLOADCOMPLETED = "downloadCompleted",
    DOWNLOAD_OPSTATE_DOWNLOADFAILED = "downloadFailed",
    DOWNLOAD_OPSTATE_CANCELED = "canceled",
    DOWNLOAD_OPSTATE_COMPLETED = "completed";

// DownloadOperation type.
function DownloadOperation(properties) {
    if (!(properties[API_PARAM_FILEOUTPUT] instanceof Windows.Storage.StorageFile)) {
        throw new Error("WL.download: unsupported file_output object type");
    }

    this._properties = properties;
    this._status = DOWNLOAD_OPSTATE_NOTSTARTED;
}

DownloadOperation.prototype = {
    execute: function () {
        this._promise = new Promise("WL.download", this, null);
        this._process();
        return this._promise;
    },

    cancel: function () {
        this._status = DOWNLOAD_OPSTATE_CANCELED;
        if (this._cancel) {
            try {
                this._cancel();
            }
            catch (ex) {
            }
        }
        else {
            this._result = createErrorResponse(ERROR_REQ_CANCEL, ERROR_DESC_CANCEL.replace("METHOD", "WL.download"));
            this._process();
        }
    },

    downloadComplete: function (succeeded, result) {
        var op = this;
        op._result = result;
        op._status = succeeded ? DOWNLOAD_OPSTATE_DOWNLOADCOMPLETED : DOWNLOAD_OPSTATE_DOWNLOADFAILED;
        op._process();
    },

    downloadProgress: function (progress) {
        this._promise[PROMISE_EVENT_ONPROGRESS](progress);
    },

    _process: function () {
        switch (this._status) {
            case DOWNLOAD_OPSTATE_NOTSTARTED:
                this._start();
                break;
            case DOWNLOAD_OPSTATE_READY:
                this._download();
                break;
            case DOWNLOAD_OPSTATE_DOWNLOADCOMPLETED:
            case DOWNLOAD_OPSTATE_DOWNLOADFAILED:
            case DOWNLOAD_OPSTATE_CANCELED:
                this._complete();
                break;
        }
    },

    _start: function () {
        var op = this;
        
        wl_app.getLoginStatus({
            internal: true,
            callback: function () {
                    op._status = DOWNLOAD_OPSTATE_READY;
                    op._process()
                }
        });
    },

    _download: function () {
        var op = this,
            props = op._properties,
            path = props[API_PARAM_PATH],
            file_output = props[API_PARAM_FILEOUTPUT];
        startDownloadViaBackgroundTransfer(path, file_output, op);
    },

    _complete: function () {
        var op = this,
            result = op._result,
            promiseEvent = (op._status === DOWNLOAD_OPSTATE_DOWNLOADCOMPLETED) ? PROMISE_EVENT_ONSUCCESS : PROMISE_EVENT_ONERROR;

        op._status = DOWNLOAD_OPSTATE_COMPLETED;

        var callback = op._properties[API_PARAM_CALLBACK];
        if (callback) {
            callback(result);
        }

        op._promise[promiseEvent](result);        
    }
};

wl_app.upload = function (properties) {

    ensureAppInited("WL.upload");

    return new UploadOperation(properties).execute();
}

function isUploadSupported(file) {

    if (file instanceof Windows.Storage.StorageFile) {
        return true;
    }
    else if (file instanceof File) {
        return true;
    }

    return false;
}

function uploadFile(uploadUrl, file, op) {

    var params = {};
    params[API_SUPPRESS_RESPONSE_CODES] = "true";
    uploadUrl = appendUrlParameters(uploadUrl, params);

    if (file instanceof Windows.Storage.StorageFile) {
        startUploadViaBackgroundTransfer(uploadUrl, file, op);
    }
    else if (file instanceof File) {
        startUploadViaXHR(uploadUrl, file, op);
    }
}

function startUploadViaXHR(uploadUrl, file_input, op) {
    
    var reader = new FileReader();
    reader.readAsArrayBuffer(file_input);
    reader.onload = function (evt) {
        var data = evt.target.result;
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", uploadUrl, true);
        xhr.onload = function (e) {
            handleUploadResponse(e.currentTarget.responseText, op);
        };

        xhr.onerror = function (e) {
            handleUploadErrorResponse(e.currentTarget.statusText, op);
        };
        xhr.onprogress = function (e) {
            // input-File upload only raise the event at the end. We just ignore this.
        };

        op._cancel = createDelegate(xhr, xhr.abort);
        xhr.send(data);
    };    
}

function startUploadViaBackgroundTransfer(uploadUrl, file_input, op) {
    
    var uploadPathUri = new Windows.Foundation.Uri(uploadUrl);

    try {

        var uploader = new Windows.Networking.BackgroundTransfer.BackgroundUploader();
        uploader.group = BT_GROUP_UPLOAD;
        uploader.method = "PUT";
        var uploadOp = uploader.createUpload(uploadPathUri, file_input);
        var promise = uploadOp.startAsync().then(
            function (arg) {
                var text = "";
                var resultStream = uploadOp.getResultStreamAt(0);
                if (resultStream) {

                    var reader = new Windows.Storage.Streams.DataReader(resultStream);
                    var onRead = function (result) {

                        if (result) {
                            var text = reader.readString(result);
                        }

                        handleUploadResponse(text, op);
                    };

                    reader.loadAsync(10000).then(onRead, onRead);
                }
                else {
                    handleUploadResponse(text, op);
                }
            },
            function (error) {
                handleUploadErrorResponse(error.message, op);
            },
            function (response) {
                var progress = response.progress;
                var uploadProgress = {
                    bytesTransferred: progress.bytesSent,
                    totalBytes: progress.totalBytesToSend,
                    progressPercentage: (progress.totalBytesToSend == 0) ? 0 : (progress.bytesSent / progress.totalBytesToSend) * 100
                };

                op.uploadProgress(uploadProgress);
            }
        );

        op._cancel = createDelegate(promise, promise.cancel);

    } catch (error) {
        handleUploadErrorResponse(error.message, op);
    }
}

function buildUploadToFolderUrlString(location, file_name, file_input, overwrite) {
    // We only apply "overwrite" parameter when upload to a folder.    
    var name = file_name || file_input.name,
        path = location + name,
        params = {};
    params[API_PARAM_OVERWRITE] = overwrite;
    params[API_X_HTTP_LIVE_LIBRARY] = wl_app[API_X_HTTP_LIVE_LIBRARY];

    return buildFilePathUrlString(path, params);
}


function handleUploadResponse(responseText, op) {
    responseText = responseText ? stringTrim(responseText) : "";
    var response = (responseText !== "") ? deserializeJSON(responseText) : null;
    response = response || {};

    op.uploadComplete((response.error == null), response);
}

function handleUploadErrorResponse(errorMessage, op) {
    op.uploadComplete(false, createErrorResponse(ERROR_REQUEST_FAILED, "WL.upload:" + errorMessage));
}

function handleErrorResponse(errorMessage, callback) {
    var response = {};
    response[API_PARAM_ERROR] = createErrorObject(errorMessage);
    invokeCallback(callback, response, true);
}

var UPLOAD_OPSTATE_NOTSTARTED = "notStarted",
    UPLOAD_OPSTATE_AUTHREADY = "authReady",
    UPLOAD_OPSTATE_UPLOADREADY = "uploadReady",
    UPLOAD_OPSTATE_UPLOADCOMPLETED = "uploadCompleted",
    UPLOAD_OPSTATE_UPLOADFAILED = "uploadFailed",
    UPLOAD_OPSTATE_CANCELED = "canceled",
    UPLOAD_OPSTATE_COMPLETED = "completed";

// UploadOperation type.
function UploadOperation(properties) {
    if (!isUploadSupported(properties[API_PARAM_FILEINPUT])) {
        throw new Error("WL.upload: unsupported file_input object type");
    }

    this._properties = properties;
    this._status = UPLOAD_OPSTATE_NOTSTARTED;
}

UploadOperation.prototype = {
    execute: function () {
        this._promise = new Promise("WL.upload", this, null);
        this._process();
        return this._promise;
    },

    cancel: function () {
        this._status = UPLOAD_OPSTATE_CANCELED;
        
        if (this._cancel) {
            try {
                this._cancel();
            }
            catch (ex) {
            }
        }
        else {
            this._result = createErrorResponse(ERROR_REQ_CANCEL, ERROR_DESC_CANCEL.replace("METHOD", "WL.upload"));
            this._process();
        }
    },

    uploadComplete: function (succeeded, result) {
        var op = this;
        op._result = result;
        op._status = succeeded ? UPLOAD_OPSTATE_UPLOADCOMPLETED : UPLOAD_OPSTATE_UPLOADFAILED;
        op._process();
    },

    uploadProgress: function (progress) {
        this._promise[PROMISE_EVENT_ONPROGRESS](progress);
    },

    _process: function () {
        switch (this._status) {
            case UPLOAD_OPSTATE_NOTSTARTED:
                this._start();
                break;
            case UPLOAD_OPSTATE_AUTHREADY:
                this._getUploadPath();
                break;
            case UPLOAD_OPSTATE_UPLOADREADY:
                this._upload();
                break;
            case UPLOAD_OPSTATE_UPLOADCOMPLETED:
            case UPLOAD_OPSTATE_UPLOADFAILED:
            case UPLOAD_OPSTATE_CANCELED:
                this._complete();
                break;
        }
    },

    _start: function () {
        var op = this;
        wl_app.getLoginStatus({
            internal: true,
            callback: function () {
                op._status = UPLOAD_OPSTATE_AUTHREADY;
                op._process()
            }
        });
    },

    _getUploadPath: function () {
        var op = this,
            props = op._properties,
            path = props[API_PARAM_PATH];

        if (isPathFullUrl(path)) {
            op._uploadPath = path;
            op._status = UPLOAD_OPSTATE_UPLOADREADY;
            op._process();
            return;
        }

        wl_app.api({ path: path }).then(
            function (response) {
                var location = response.upload_location;

                if (location) {
                    var file_name = props[API_PARAM_FILENAME],
                        file_input = props[API_PARAM_FILEINPUT],
                        overwrite = !!(props[API_PARAM_OVERWRITE]);

                    op._uploadPath = buildUploadToFolderUrlString(location, file_name, file_input, overwrite);
                    op._status = UPLOAD_OPSTATE_UPLOADREADY;
                    
                }
                else {
                    op._result = createErrorResponse(ERROR_REQUEST_FAILED, "WL.upload: Failed to get upload_location of the resource.");
                    op._status = UPLOAD_OPSTATE_UPLOADFAILED;
                }
                
                op._process();
            },
            function (error) {
                op._result = error;
                op._status = UPLOAD_OPSTATE_UPLOADFAILED;
                op._process();
            }
        );
    },

    _upload: function () {
        var op = this;

        uploadFile(op._uploadPath, op._properties[API_PARAM_FILEINPUT], op);
    },

    _complete: function () {
        var op = this,
            result = op._result,
            promiseEvent = (op._status === UPLOAD_OPSTATE_UPLOADCOMPLETED) ? PROMISE_EVENT_ONSUCCESS : PROMISE_EVENT_ONERROR;

        op._status = UPLOAD_OPSTATE_COMPLETED;

        var callback = op._properties[API_PARAM_CALLBACK];
        if (callback) {
            callback(result);
        }

        op._promise[promiseEvent](result);
    }
};

/**
 * The WWA version of checkDocumentReady() method.
 */
function checkDocumentReady(onDocReady) {

    var readyState = document.readyState;
    if (readyState === "complete" || document.body !== null) {
        onDocReady();
    }
    else {
        window.addEventListener("DOMContentLoaded", onDocReady, false);
    }
}

/**
 * The WWA version of setInnerHtml() method.
 */
function setInnerHtml(element, content) {
    MSApp.execUnsafeLocalFunction(function () {
        element.innerHTML = content;
    });
}


wl_app._version = "5.0.3245.0220";

if (!wl_app._settings) {
	wl_app._settings = {};
}

var settings = wl_app._settings;

var prodSettings = {},
    authServer = "oauth.live.com";
// TODO: revert back to PROD endpoint after beta period.
prodSettings[APISERVICE_URI] = "https://beta.apis.live.net/v5.0/";
prodSettings[AUTH_SERVER] = authServer;
settings["PROD"] = prodSettings;


function getLiveIdServiceName() {
    
    switch (wl_app._env) {
        case "PROD":
        case "BETA":
            return "jwt.oauth.live.net";
        default:
            return "jwt.oauth.live-int.net";
    }
}


    wl_app.onloadInit();
}
})();
