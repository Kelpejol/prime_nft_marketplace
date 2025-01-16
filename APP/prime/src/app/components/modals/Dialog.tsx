"use client"

import {  useEffect, useState } from 'react';
import useBuyModal from "@/hooks/useBuyModal";
import { useActiveAccount } from "thirdweb/react";
import { buyFromListing } from "@/app/contracts/directListing";
import toast from "react-hot-toast";
import { showToast } from "../WalletToast";
import useDialog from '@/hooks/useDialog';
import Button from '../Button';


interface DialogProps{
    content: string;  
    hasButton?: boolean
}

export const Dialog = ({
    content,
    hasButton
  
}: DialogProps) => {
  const [showDialog, setShowDialog] = useState(false);
   const account = useActiveAccount();
      const buyModal = useBuyModal();
  const dialog = useDialog();


  useEffect(() => {
    setShowDialog(dialog.isOpen);
  }, [dialog.isOpen]);

  const selectYes = () => {
  console.log('Dialog Yes clicked');
  console.log('Account:', account);
  dialog.setYes();
  if(account) {

  
  dialog.onClose();
    console.log('Listing ID:', buyModal.listingId);
  buyFromListing(account?.address!, buyModal.listingId!, account!).then((data) => {
    if(data.success) {
      toast.success(data.message!);
      buyModal.mutateListing();
    }
       else {
        toast.error(data.message!)
       }
  })
  
} else {
   dialog.onClose();
  showToast();
}
};

  const selectNo = () => {
    dialog.setNo(); 
    dialog.onClose();
    buyModal.onOpen();
  };

   

  return (
    <div className="relative flex justify-center">

      {showDialog && (
        <div
          className="fixed inset-0 overflow-y-auto transition duration-300 ease-out z-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                

                <div className="mt-2 text-center">
                  
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {content}
                  </div>
                </div>
              </div>
              
              {hasButton && (
                   <div className="mt-5 sm:flex sm:items-center sm:justify-end">

                
                  <Button
                  actionLabel='No'
                    action={selectNo}
                    ClassName="w-full px-4 py-2  mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  />
                   

                  <Button
                   actionLabel='Yes'
                   action={selectYes}
                  ClassName="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  />
                   
                
              </div>
              )}
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

