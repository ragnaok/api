# Api.MessageGatewayApi

All URIs are relative to *https://api-dev-hst.hylink.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMessageGateway**](MessageGatewayApi.md#getMessageGateway) | **GET** /{version}/message_gateway/version | 



## getMessageGateway

> MessageGatewayResponse getMessageGateway(version)



Get message gateway

### Example

```javascript
import Api from 'api';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new Api.MessageGatewayApi();
let version = "version_example"; // String | api version
apiInstance.getMessageGateway(version, (error, data, response) => {
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

### Return type

[**MessageGatewayResponse**](MessageGatewayResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

