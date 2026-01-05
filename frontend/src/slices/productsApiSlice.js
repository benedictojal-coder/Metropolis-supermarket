import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/api/products',
      }),
      keepUnusedDataFor: 5, // Caches data for 5 seconds
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `/api/products/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Export the "Hooks" that we will use in our components
export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;