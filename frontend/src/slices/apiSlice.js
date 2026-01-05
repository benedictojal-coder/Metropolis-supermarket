import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// We use an empty baseQuery because we will define the URL in a separate file
const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'], // Used for caching data
  endpoints: (builder) => ({}), // We will inject endpoints from other files
});