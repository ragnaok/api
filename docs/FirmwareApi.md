# Api.FirmwareApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFirmwareFile**](FirmwareApi.md#getFirmwareFile) | **GET** /{version}/firmware/{firmware_id}/files | 
[**queryFirmwareList**](FirmwareApi.md#queryFirmwareList) | **GET** /{version}/firmware | 



## getFirmwareFile

> GetFirmwareFileResponse getFirmwareFile(version, firmwareId)



get firmware file

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.FirmwareApi();
let version = "version_example"; // String | api version
let firmwareId = 56; // Number | firmware id
apiInstance.getFirmwareFile(version, firmwareId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.FirmwareApi();
let version = "version_example"; // String | api version
let partNum = "partNum_example"; // String | part number
let fwVer = "fwVer_example"; // String | firmware version
apiInstance.queryFirmwareList(version, partNum, fwVer, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

