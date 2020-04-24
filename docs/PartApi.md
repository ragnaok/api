# Api.PartApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPart**](PartApi.md#createPart) | **POST** /{version}/part | 



## createPart

> PartResponseBody createPart(version, body)



Create part

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.PartApi();
var version = "version_example"; // String | api version
var body = new Api.PartRequestBody(); // PartRequestBody | create part body parameters
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPart(version, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **body** | [**PartRequestBody**](PartRequestBody.md)| create part body parameters | 

### Return type

[**PartResponseBody**](PartResponseBody.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

