
// Note:

import { IBaseApiError } from "@/types/BaseApi";

// Blockport API returns different error structures:
// code 400 : error.response.data?.errors?.[0].payload[0].error
// code 502: error.response.data?.errors?.[0]?.payload?.message;

// User authority API returns:
// error.response.data.message
export const extractErrorMessage = (errorData: IBaseApiError) => {
  if (!errorData) {
    return 'Unknown error occurred';
  }

  if (
    errorData.errors &&
    Array.isArray(errorData.errors) &&
    errorData.errors.length > 0
  ) {
    const errorPayload = errorData.errors[0].payload;

    if (
      Array.isArray(errorPayload) &&
      errorPayload.length > 0 &&
      errorPayload[0].error
    ) {
      return errorPayload[0].error;
    }

    if (!Array.isArray(errorPayload) && errorPayload?.message) {
      return errorPayload.message;
    }
  }

  if (errorData.message) {
    return errorData.message;
  }

  return 'Unknown error occurred';
};
