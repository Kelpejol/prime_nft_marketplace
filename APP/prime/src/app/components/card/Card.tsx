'use client'
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Button';
import useDialog from '@/hooks/useDialog';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useOfferModal from '@/hooks/useOfferModal';
import useBuyModal from '@/hooks/useBuyModal';
import { fetchTokenInfo } from '@/hooks/useCurrencyInfo';
import useSWR from 'swr';


 interface CardProps{
  src: string,
  name: string,
  tokenId: string,
  price: string,
  listingId: bigint,
  symbol: string
 }

const Card = ({src, name, tokenId, price, listingId, symbol}: CardProps) => {
  const [rotation, setRotation] = useState(132);
    const dialog = useDialog();
    const router = useRouter();
    const offer = useOfferModal();
     const buyModal = useBuyModal();

   const buyListing = useCallback(() => {
    buyModal.setListingId(listingId) 
    dialog.onOpen();
  }, [buyModal, dialog, listingId])

  const makeOffer = useCallback(() => {
   offer.setListingId(listingId);
   offer.onOpen();
  }, [listingId, offer]) 

 


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
   
    <div className="flex flex-col items-center" >
      <div className="relative w-full aspect-[3/4] max-w-xs group" onClick={()=> router.push(`/marketplace/listing/${listingId.toString()}`)}>
        {/* Animated border gradient */}
        <div 
          className="absolute inset-[-1%] rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-200"
          style={{
            backgroundImage: `linear-gradient(${rotation}deg, #5ddcff, #3c67e3 43%, #4e00c2)`,
          }}
        />
        
        {/* Blur effect */}
        <div
          className="absolute top-1/6 inset-x-0 w-full h-full mx-auto scale-80 opacity-100 group-hover:opacity-0 transition-opacity duration-500 blur-xl"
          style={{
            backgroundImage: `linear-gradient(${rotation}deg, #5ddcff, #3c67e3 43%, #4e00c2)`,
            zIndex: -1,
          }}
        />

        {/* Main card content */}
        <div className="relative h-full overflow-hidden rounded-sm md:rounded-md bg-[#191c29] cursor-pointer">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 hover:bg-[rgba(0,0,0,0.78)] z-10 transition-colors duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[15]">
              <div className="flex-col space-y-6">
                <Button actionLabel='Buy listing' size='small' color='magic' action={buyListing} />
                <Button actionLabel='Make Offer' size='small' color='magic' action={makeOffer}
                />
              </div>
            </div>             

            <div className="relative w-full h-[85%]">
              <Image
                className="rounded-t-md transition-transform duration-500 group-hover:scale-[0.93]"
                src={src}
                alt="Card image"
                quality={90}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
              />
            </div>
           
            <div className="flex flex-col justify-center items-start h-[15%] px-3 py-3 text-[12px]">
              <div className="flex justify-between items-center w-full">
                <div className="text-[rgb(88,199,250)] transition-colors duration-1000 capitalize md:text-sm text-xs truncate">{name}</div>
                <div className="text-[rgb(88,199,250)] transition-colors duration-1000 md:text-sm text-xs">#{tokenId}</div>
              </div>
              <div className="text-[rgb(88,199,250)] transition-colors duration-1000 md:text-sm text-xs truncate">{price}<span className='space-x-1'>{symbol}</span></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          0% { --rotate: 0deg; }
          100% { --rotate: 360deg; }
        }

        @property --rotate {
          syntax: "<angle>";
          initial-value: 132deg;
          inherits: false;
        }
      `}</style>
    </div>
  );
};

export default Card;
