import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Use empty string for production (relative URLs) which works with Vercel routing
// In development, the proxy in package.json handles the routing
const baseQuery = fetchBaseQuery({ 
  baseUrl: process.env.NODE_ENV === 'development' ? '' : '' 
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});