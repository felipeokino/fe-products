import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { TMeta } from '@type/paginations';
import { TProductResponse } from '@type/products';
import { useEffect, useState } from 'react';
import { AxiosApi } from '../api/axios/axios';

const useProducts = (page = 1) => {
  const [fetching, setFetching] = useState(false);

  const {data: response, isLoading, error} = useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
      const data = await AxiosApi.instance.get<TProductResponse>(`/products`, { page }).finally(() => {
        setFetching(false)
      })

      return data
    },
    placeholderData: keepPreviousData,
    enabled: fetching
  })

  useEffect(() => {
    setFetching(true)
  }, [])

  const refecth = () => {
    setFetching(true)
  }
  
  return {
    items: response?.data || [],
    meta: response?.meta || {} as TMeta,
    isLoading,
    error,
    refecth
  }

}

export default useProducts