# Api.BikeBundleApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryBikeBundle**](BikeBundleApi.md#queryBikeBundle) | **GET** /{version}/bike/bundles | 



## queryBikeBundle

> QueryBikeBundleResponse queryBikeBundle(version, opts)



Query bike bundle

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.BikeBundleApi();
let version = "version_example"; // String | api version
let opts = {
  'mid': "mid_example", // String | mid
  'bikeId': "bikeId_example", // String | bike id
  'partType': "partType_example" // String | part type
};
apiInstance.queryBikeBundle(version, opts, (error, data, response) => {
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
 **mid** | **String**| mid | [optional] 
 **bikeId** | **String**| bike id | [optional] 
 **partType** | **String**| part type | [optional] 

### Return type

[**QueryBikeBundleResponse**](QueryBikeBundleResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

