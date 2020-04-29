# Api.QWICBikeApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compareQwicBike**](QWICBikeApi.md#compareQwicBike) | **POST** /{version}/bike/compare | 
[**createQwicBike**](QWICBikeApi.md#createQwicBike) | **POST** /{version}/bike/qwic | 
[**getQwicBikeModel**](QWICBikeApi.md#getQwicBikeModel) | **GET** /{version}/bike_model/qwic/{vin} | 



## compareQwicBike

> CompareQwicBikeResponse compareQwicBike(version, body)



Compare a QWIC bike, it will check whether the bike&#39;s MID meets the usage regulations. - &#x60;spec_id&#x60;: spec of bike. if didn&#39;t have spec_id, could be **null**. - &#x60;parts&#x60;: bike equipped part specs. only allow parts produced by Hyena or Brose. - There are 5 types:   - Type 1: No changed any part specs   - Type 2: New bike or change all part specs   - Type 3: Have changes part specs   - Type 4: Different bike of components   - Type 5: Wrong part number

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QWICBikeApi();
var version = "version_example"; // String | api version
var body = new Api.CompareBikeRequest(); // CompareBikeRequest | compare qwic bike body parameters
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.compareQwicBike(version, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **body** | [**CompareBikeRequest**](CompareBikeRequest.md)| compare qwic bike body parameters | 

### Return type

[**CompareQwicBikeResponse**](CompareQwicBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json


## createQwicBike

> CreateBikeResponse createQwicBike(version, body)



Create a QWIC bike. - &#x60;vin&#x60;: frame number of bike. - &#x60;spec_id&#x60;: spec of bike. if didn&#39;t have spec_id, could be **null**. - &#x60;parts&#x60;: bike equipped part specs. only allow parts produced by Hyena or Brose.

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QWICBikeApi();
var version = "version_example"; // String | api version
var body = new Api.CreateBikeRequest(); // CreateBikeRequest | create qwic bike body parameters
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQwicBike(version, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **body** | [**CreateBikeRequest**](CreateBikeRequest.md)| create qwic bike body parameters | 

### Return type

[**CreateBikeResponse**](CreateBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json


## getQwicBikeModel

> QwicBikeModelResponse getQwicBikeModel(version, vin)



Get a QWIC&#39;s bike model from QWIC API

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QWICBikeApi();
var version = "version_example"; // String | api version
var vin = "vin_example"; // String | frame number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQwicBikeModel(version, vin, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **vin** | **String**| frame number | 

### Return type

[**QwicBikeModelResponse**](QwicBikeModelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

