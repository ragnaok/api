# Api.QwicBikeApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compareQwicBike**](QwicBikeApi.md#compareQwicBike) | **POST** /{version}/bike/compare | 
[**createQwicBike**](QwicBikeApi.md#createQwicBike) | **POST** /{version}/bike/qwic | 
[**getQwicBikeModel**](QwicBikeApi.md#getQwicBikeModel) | **GET** /{version}/bike_model/qwic/{vin} | 



## compareQwicBike

> CompareQwicBikeResponse compareQwicBike(version, body)



Compare a qwic bike

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QwicBikeApi();
var version = "version_example"; // String | api version
var body = new Api.CompareBikeRequestBody(); // CompareBikeRequestBody | compare qwic bike body parameters
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
 **body** | [**CompareBikeRequestBody**](CompareBikeRequestBody.md)| compare qwic bike body parameters | 

### Return type

[**CompareQwicBikeResponse**](CompareQwicBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json


## createQwicBike

> CreateBikeResponse createQwicBike(version, body)



Create a qwic bike

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QwicBikeApi();
var version = "version_example"; // String | api version
var body = new Api.CreateBikeRequestBody(); // CreateBikeRequestBody | create qwic bike body parameters
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
 **body** | [**CreateBikeRequestBody**](CreateBikeRequestBody.md)| create qwic bike body parameters | 

### Return type

[**CreateBikeResponse**](CreateBikeResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json


## getQwicBikeModel

> QwicBikeModelResponse getQwicBikeModel(version, vin)



Get a qwic bike model

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.QwicBikeApi();
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

