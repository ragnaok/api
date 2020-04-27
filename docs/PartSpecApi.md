# Api.PartSpecApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPartSpec**](PartSpecApi.md#getPartSpec) | **GET** /{version}/part_spec/{spec_id} | 



## getPartSpec

> PartSpecResponse getPartSpec(version, specId)



Get a part spec

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.PartSpecApi();
let version = "version_example"; // String | api version
let specId = "specId_example"; // String | spec id
apiInstance.getPartSpec(version, specId, (error, data, response) => {
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
 **specId** | **String**| spec id | 

### Return type

[**PartSpecResponse**](PartSpecResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

