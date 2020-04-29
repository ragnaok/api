# Api.FirmwareApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFirmwareFile**](FirmwareApi.md#getFirmwareFile) | **GET** /{version}/firmware/{firmware_id}/files | 
[**queryFirmwareList**](FirmwareApi.md#queryFirmwareList) | **GET** /{version}/firmware | 



## getFirmwareFile

> GetFirmwareFileResponse getFirmwareFile(version, firmwareId)



Get firmware file

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
var firmwareId = 56; // Number | firmware id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirmwareFile(version, firmwareId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **firmwareId** | **Number**| firmware id | 

### Return type

[**GetFirmwareFileResponse**](GetFirmwareFileResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json


## queryFirmwareList

> QueryFirmwareResponse queryFirmwareList(version, partNum, fwVer)



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

[**QueryFirmwareResponse**](QueryFirmwareResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

