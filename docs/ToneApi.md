# FinnToneApi.ToneApi

All URIs are relative to *https://finntest.commitzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loadToneById**](ToneApi.md#loadToneById) | **GET** /tone/{userId} | Get tone of a user



## loadToneById

> Tone loadToneById(userId)

Get tone of a user

### Example

```javascript
import FinnToneApi from 'finn_tone_api';

let apiInstance = new FinnToneApi.ToneApi();
let userId = "userId_example"; // String | The id of the user whose tone to retrieve
apiInstance.loadToneById(userId, (error, data, response) => {
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
 **userId** | **String**| The id of the user whose tone to retrieve | 

### Return type

[**Tone**](Tone.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

