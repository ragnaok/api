# Api.BikeApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBike**](BikeApi.md#createBike) | **POST** /{version}/bike | 



## createBike

> CreateBikeResponse createBike(version, body)



Create a bike.  - &#x60;vin&#x60;: frame number of bike. - &#x60;spec_id&#x60;: spec of bike. if didn&#39;t have spec_id, could be **null**. - &#x60;parts&#x60;: bike equipped part specs. only allow parts produced by Hyena or Brose.

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
var body = new Api.CreateBikeRequest(); // CreateBikeRequest | create bike body parameters
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
 **body** | [**CreateBikeRequest**](CreateBikeRequest.md)| create bike body parameters | 

### Return type

[**CreateBikeResponse**](CreateBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

