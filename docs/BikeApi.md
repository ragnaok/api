# Api.BikeApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBike**](BikeApi.md#createBike) | **POST** /{version}/bike | 



## createBike

> CreateBikeResponse createBike(version, body)



Create a bike

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.BikeApi();
var version = "version_example"; // String | api version
var body = new Api.CreateBikeRequestBody(); // CreateBikeRequestBody | create bike body parameters
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBike(version, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **body** | [**CreateBikeRequestBody**](CreateBikeRequestBody.md)| create bike body parameters | 

### Return type

[**CreateBikeResponse**](CreateBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

