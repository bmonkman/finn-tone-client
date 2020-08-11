# FinnToneApi.StatusApi

All URIs are relative to *https://finntest.commitzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**livenessCheck**](StatusApi.md#livenessCheck) | **GET** /status/alive | Kubernetes liveness check
[**readinessCheck**](StatusApi.md#readinessCheck) | **GET** /status/ready | Kubernetes readiness check



## livenessCheck

> livenessCheck()

Kubernetes liveness check

### Example

```javascript
import FinnToneApi from 'finn_tone_api';

let apiInstance = new FinnToneApi.StatusApi();
apiInstance.livenessCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## readinessCheck

> readinessCheck()

Kubernetes readiness check

### Example

```javascript
import FinnToneApi from 'finn_tone_api';

let apiInstance = new FinnToneApi.StatusApi();
apiInstance.readinessCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

