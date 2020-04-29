# Api.PartSpecApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPartSpec**](PartSpecApi.md#getPartSpec) | **GET** /{version}/part_spec/{spec_id} | 



## getPartSpec

> PartSpecResponse getPartSpec(version, specId)



It is recognized as a specification to describe part with properties. Each manufactured part in production service should be referred to one part spec.

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.PartSpecApi();
var version = "version_example"; // String | api version
var specId = "specId_example"; // String | spec id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPartSpec(version, specId, callback);
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

