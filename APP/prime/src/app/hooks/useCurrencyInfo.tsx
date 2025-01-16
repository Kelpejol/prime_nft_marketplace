import { useCallback, useMemo } from 'react';
import useSWR from 'swr';
import {NATIVE_TOKEN} from "../contracts/constant"
import { getApprovedCurrency } from '../contracts/getPlatformInfo';



export const fetchTokenInfo = async (contractAddress: string) => {
  if(contractAddress === NATIVE_TOKEN) {
    contractAddress = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
  }
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch token info for ${contractAddress}`);
  }

  return response.json();
};

export const useCurrencyInfo = () => {
  const tokenAddresses = useMemo(async () => {
    const result = await getApprovedCurrency();
    return result;
  }, []);

  const fetchCurrency = useCallback(async () => {
    const addresses = await tokenAddresses;
    const currency = await Promise.all(
      addresses
        .filter(addr => addr !== '0x0000000000000000000000000000000000000000')
        .map(fetchTokenInfo)
    );
    return currency;
  }, [tokenAddresses]);

  const { 
    data: tokenInfos, error, isLoading 
  } = useSWR("currency", fetchCurrency, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
    revalidateOnMount: true
  });

  const currency = useMemo(() => {
    if (!tokenInfos) return [];
    return tokenInfos.map(token => ({
      value: token.id,
      symbol: token.symbol,
      image: {
        thumb: token.image.thumb,
        small: token.image.small,
        large: token.image.large
      },
      address: token.contract_address, 
    }))
  }, [tokenInfos]);

  return { 
    currency, 
    isLoading, 
    error
  };
};