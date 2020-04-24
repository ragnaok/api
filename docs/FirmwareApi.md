# Api.FirmwareApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryFirmwareList**](FirmwareApi.md#queryFirmwareList) | **GET** /{version}/firmware | 



## queryFirmwareList

> QueryFirmwareResponseBody queryFirmwareList(version, partNum, fwVer)



Query firmware list

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.FirmwareApi();
var version = "version_example"; // String | api version
var partNum = "partNum_example"; // String | part number
var fwVer = "fwVer_example"; // String | firmware version
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryFirmwareList(version, partNum, fwVer, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **partNum** | **String**| part number | 
 **fwVer** | **String**| firmware version | 

### Return type

[**QueryFirmwareResponseBody**](QueryFirmwareResponseBody.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

