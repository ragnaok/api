# Api.QwicBikeApi

All URIs are relative to *https://api-dev-hst.hylink.io*

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
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.QwicBikeApi();
let version = "version_example"; // String | api version
let body = new Api.CompareBikeRequest(); // CompareBikeRequest | compare qwic bike body parameters
apiInstance.compareQwicBike(version, body, (error, data, response) => {
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



Create a qwic bike

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.QwicBikeApi();
let version = "version_example"; // String | api version
let body = new Api.CreateBikeRequest(); // CreateBikeRequest | create qwic bike body parameters
apiInstance.createQwicBike(version, body, (error, data, response) => {
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



Get a qwic bike model

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.QwicBikeApi();
let version = "version_example"; // String | api version
let vin = "vin_example"; // String | frame number
apiInstance.getQwicBikeModel(version, vin, (error, data, response) => {
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
 **vin** | **String**| frame number | 

### Return type

[**QwicBikeModelResponse**](QwicBikeModelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

