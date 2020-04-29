# Api.BikeBundleApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryBikeBundle**](BikeBundleApi.md#queryBikeBundle) | **GET** /{version}/bike/bundles | 



## queryBikeBundle

> QueryBikeBundleResponse queryBikeBundle(version, opts)



Query bike&#39;s equipped part specs. - use case:   1. use &#x60;MID&#x60; query &#x60;bike id&#x60;   2. use &#x60;bike ID&#x60; query &#x60;MIDs&#x60;   3. use &#x60;bike ID&#x60; and &#x60;part_type&#x60; query specified type &#x60;MID&#x60;

### Example

```javascript
var Api = require('api');
var defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Api.BikeBundleApi();
var version = "version_example"; // String | api version
var opts = {
  'mid': "mid_example", // String | mid
  'bikeId': "bikeId_example", // String | bike id
  'partType': "partType_example" // String |   - B: Battery   - C: Console   - D: Driver   - G: Dongle   - M: Motor   - P: Display
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryBikeBundle(version, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| api version | 
 **mid** | **String**| mid | [optional] 
 **bikeId** | **String**| bike id | [optional] 
 **partType** | **String**|   - B: Battery   - C: Console   - D: Driver   - G: Dongle   - M: Motor   - P: Display | [optional] 

### Return type

[**QueryBikeBundleResponse**](QueryBikeBundleResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

