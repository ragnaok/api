# Api.CustomerApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /{version}/customer/{customer_id} | 



## getCustomer

> CustomerResponse getCustomer(version, customerId)



Get a customer data

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.CustomerApi();
let version = "version_example"; // String | api version
let customerId = 56; // Number | customer id
apiInstance.getCustomer(version, customerId, (error, data, response) => {
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
 **customerId** | **Number**| customer id | 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

