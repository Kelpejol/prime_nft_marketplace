import { getContract } from "thirdweb";
import { anvil } from "thirdweb/chains";
import { contractAddress } from "./constant";
import { client } from "../client";


export const contract = getContract({
  address: contractAddress,
  chain: anvil,
  client,
  abi: [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_nativeTokenWrapper",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "_msgData",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_msgSender",
      "inputs": [],
      "outputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approveBuyerForListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" },
        { "name": "_buyer", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "buyFromListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" },
        { "name": "_buyFor", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "cancelListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "checkUpkeep",
      "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        { "name": "upkeepNeeded", "type": "bool", "internalType": "bool" },
        { "name": "performData", "type": "bytes", "internalType": "bytes" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "createListing",
      "inputs": [
        {
          "name": "_params",
          "type": "tuple",
          "internalType": "struct IDirectListings.ListingParameters",
          "components": [
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "listingType",
              "type": "uint8",
              "internalType": "enum IDirectListings.ListingType"
            },
            { "name": "reserved", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [
        { "name": "_id", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getAllListings",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct IDirectListings.Listing[]",
          "components": [
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "endTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "listingCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IDirectListings.TokenType"
            },
            {
              "name": "listingType",
              "type": "uint8",
              "internalType": "enum IDirectListings.ListingType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IDirectListings.Status"
            },
            { "name": "reserved", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAllValidListings",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct IDirectListings.Listing[]",
          "components": [
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "endTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "listingCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IDirectListings.TokenType"
            },
            {
              "name": "listingType",
              "type": "uint8",
              "internalType": "enum IDirectListings.ListingType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IDirectListings.Status"
            },
            { "name": "reserved", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getApprovedBuyer",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "buyer", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IDirectListings.Listing",
          "components": [
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "endTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "listingCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IDirectListings.TokenType"
            },
            {
              "name": "listingType",
              "type": "uint8",
              "internalType": "enum IDirectListings.ListingType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IDirectListings.Status"
            },
            { "name": "reserved", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getListingType",
      "inputs": [
        {
          "name": "_listingType",
          "type": "uint8",
          "internalType": "enum IDirectListings.ListingType"
        }
      ],
      "outputs": [
        { "name": "", "type": "uint128", "internalType": "uint128" },
        { "name": "", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPlatformFee",
      "inputs": [
        { "name": "_currency", "type": "address", "internalType": "address" },
        { "name": "_price", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "fee", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "performUpkeep",
      "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "removeApprovedBuyerForListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateListing",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_params",
          "type": "tuple",
          "internalType": "struct IDirectListings.UpdateListingParameters",
          "components": [
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updatedListingPlan",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_listingType",
          "type": "uint8",
          "internalType": "enum IDirectListings.ListingType"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "BuyerApprovedForListing",
      "inputs": [
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "buyer",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "BuyerRemovedForListing",
      "inputs": [
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CancelledListing",
      "inputs": [
        {
          "name": "listingCreator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CurrencyApprovedForListing",
      "inputs": [
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "currency",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "pricePerToken",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ListingPlanUpdated",
      "inputs": [
        {
          "name": "endTime",
          "type": "uint128",
          "indexed": true,
          "internalType": "uint128"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ListingUpdated",
      "inputs": [
        {
          "name": "currency",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "pricePerToken",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NewListingCreated",
      "inputs": [
        {
          "name": "listingCreator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "assetContract",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "listing",
          "type": "tuple",
          "indexed": false,
          "internalType": "struct IDirectListings.Listing",
          "components": [
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "pricePerToken",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "startTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "endTimestamp",
              "type": "uint128",
              "internalType": "uint128"
            },
            {
              "name": "listingCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IDirectListings.TokenType"
            },
            {
              "name": "listingType",
              "type": "uint8",
              "internalType": "enum IDirectListings.ListingType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IDirectListings.Status"
            },
            { "name": "reserved", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NewSale",
      "inputs": [
        {
          "name": "listingCreator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "assetContract",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "buyer",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "totalPricePaid",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "CurrencyTransferLibMismatchedValue",
      "inputs": [
        { "name": "expected", "type": "uint256", "internalType": "uint256" },
        { "name": "actual", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_BuyerNotApproved",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_CanOnlyApproveABuyer",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_CanOnlyRemoveApprovedBuyer",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_CannotBuyWithThisCurrency",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_InsufficientFunds",
      "inputs": [
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidAccessToCall",
      "inputs": [
        { "name": "_sender", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidAssetContract",
      "inputs": [
        {
          "name": "_assetContract",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidEndTime",
      "inputs": [
        { "name": "_endTime", "type": "uint128", "internalType": "uint128" }
      ]
    },
    { "type": "error", "name": "__DirectListing_InvalidId", "inputs": [] },
    {
      "type": "error",
      "name": "__DirectListing_InvalidListerRequirements",
      "inputs": [
        {
          "name": "_assetContract",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_tokenType",
          "type": "uint8",
          "internalType": "enum IDirectListings.TokenType"
        },
        { "name": "_tokenId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidListingCurrency",
      "inputs": [
        { "name": "_currency", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidListingDuration",
      "inputs": [
        { "name": "_duration", "type": "uint128", "internalType": "uint128" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_InvalidRequirementToCompleteASale",
      "inputs": [
        { "name": "_buyFor", "type": "address", "internalType": "address" },
        {
          "name": "_listingStatus",
          "type": "uint8",
          "internalType": "enum IDirectListings.Status"
        },
        { "name": "_isMarketApproved", "type": "bool", "internalType": "bool" }
      ]
    },
    {
      "type": "error",
      "name": "__DirectListing_ListingNotFound",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_NotAValidAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_NotAuthorizedToApproveBuyerForListing",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_NotAuthorizedToCancel",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__DirectListing_NotAuthorizedToUpdate",
      "inputs": []
    },
    { "type": "error", "name": "__DirectListing_TransferFailed", "inputs": [] },
    {
      "type": "error",
      "name": "__DirectListing_UnauthorizedToRemoveBuyerForListing",
      "inputs": []
    },
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_nativeTokenWrapper",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "_msgData",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_msgSender",
      "inputs": [],
      "outputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "acceptOffer",
      "inputs": [
        { "name": "_offerId", "type": "uint256", "internalType": "uint256" },
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "cancelOffer",
      "inputs": [
        { "name": "_offerId", "type": "uint256", "internalType": "uint256" },
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getAllOffers",
      "inputs": [
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct IOffer.Offer[]",
          "components": [
            {
              "name": "totalPrice",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "expirationTimestamp",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "offeror", "type": "address", "internalType": "address" },
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IOffer.Status"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOffer",
      "inputs": [
        { "name": "_offerId", "type": "uint256", "internalType": "uint256" },
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IOffer.Offer",
          "components": [
            {
              "name": "totalPrice",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "expirationTimestamp",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "offeror", "type": "address", "internalType": "address" },
            {
              "name": "listingId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IOffer.Status"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "makeOffer",
      "inputs": [
        {
          "name": "_params",
          "type": "tuple",
          "internalType": "struct IOffer.OfferParams",
          "components": [
            {
              "name": "totalPrice",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "duration", "type": "uint128", "internalType": "uint128" }
          ]
        },
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "_id", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rejectOffer",
      "inputs": [
        { "name": "_offerId", "type": "uint256", "internalType": "uint256" },
        { "name": "_listingId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AcceptedOffer",
      "inputs": [
        {
          "name": "offeror",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "totalPrice",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "offerId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CancelledOffer",
      "inputs": [
        {
          "name": "offeror",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "offerId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NewOffer",
      "inputs": [
        {
          "name": "totalPrice",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "expirationTime",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "offerId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RejectedOffer",
      "inputs": [
        {
          "name": "lister",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "offerId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "listingId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "CurrencyTransferLibMismatchedValue",
      "inputs": [
        { "name": "expected", "type": "uint256", "internalType": "uint256" },
        { "name": "actual", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "__Offer_InsufficientFunds",
      "inputs": [
        { "name": "amount", "type": "uint256", "internalType": "uint256" }
      ]
    },
    { "type": "error", "name": "__Offer_InvalidListing", "inputs": [] },
    { "type": "error", "name": "__Offer_MarketplaceUnapproved", "inputs": [] },
    { "type": "error", "name": "__Offer_UnauthorizedToCall", "inputs": [] },
    
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_nativeTokenWrapper",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "_msgData",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_msgSender",
      "inputs": [],
      "outputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "bidInAuction",
      "inputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" },
        { "name": "bidAmount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "cancelAuction",
      "inputs": [
        { "name": "_auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "collectAuctionPayout",
      "inputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "collectAuctionTokens",
      "inputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createAuction",
      "inputs": [
        {
          "name": "_params",
          "type": "tuple",
          "internalType": "struct IAuction.AuctionParameters",
          "components": [
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "minimumBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "buyoutBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bidBufferBps",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "startTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "endTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            }
          ]
        }
      ],
      "outputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getAllAuctions",
      "inputs": [],
      "outputs": [
        {
          "name": "auctions",
          "type": "tuple[]",
          "internalType": "struct IAuction.Auction[]",
          "components": [
            {
              "name": "auctionId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "minimumBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "buyoutBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bidBufferBps",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "startTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "endTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "auctionCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IAuction.TokenType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IAuction.Status"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAuction",
      "inputs": [
        { "name": "_auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "auction",
          "type": "tuple",
          "internalType": "struct IAuction.Auction",
          "components": [
            {
              "name": "auctionId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "minimumBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "buyoutBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bidBufferBps",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "startTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "endTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "auctionCreator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "assetContract",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenType",
              "type": "uint8",
              "internalType": "enum IAuction.TokenType"
            },
            {
              "name": "status",
              "type": "uint8",
              "internalType": "enum IAuction.Status"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getWinningBid",
      "inputs": [
        { "name": "_auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "bidder", "type": "address", "internalType": "address" },
        { "name": "currency", "type": "address", "internalType": "address" },
        { "name": "bidAmount", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isAuctionExpired",
      "inputs": [
        { "name": "_auctionId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isNewWinningBid",
      "inputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" },
        { "name": "bidAmount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "isWinningBid", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "updateAuction",
      "inputs": [
        { "name": "auctionId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_params",
          "type": "tuple",
          "internalType": "struct IAuction.UpdateAuctionParameters",
          "components": [
            {
              "name": "currency",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "minimumBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "buyoutBidAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bidBufferBps",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "startTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "endTimestamp",
              "type": "uint64",
              "internalType": "uint64"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AuctionClosed",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "closer",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "bidAmount",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AuctionPaidOut",
      "inputs": [
        {
          "name": "recipient",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AuctionTokenPaidOut",
      "inputs": [
        {
          "name": "recipient",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AuctionUpdated",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CancelledAuction",
      "inputs": [
        {
          "name": "auctionCreator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NewAuction",
      "inputs": [
        {
          "name": "auctionCreator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "assetContract",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NewBid",
      "inputs": [
        {
          "name": "auctionId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "bidder",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "bidAmount",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "CurrencyTransferLibMismatchedValue",
      "inputs": [
        { "name": "expected", "type": "uint256", "internalType": "uint256" },
        { "name": "actual", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "__AuctionLogic_BuyoutBidMustBeGreater",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__AuctionLogic_InvalidAssetContract",
      "inputs": [
        {
          "name": "_assetContract",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "__AuctionLogic_InvalidAuctionCurrency",
      "inputs": [
        { "name": "_currency", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "__AuctionLogic_InvalidAuctionState",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__AuctionLogic_InvalidBidAmount",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__AuctionLogic_InvalidBidBuffer",
      "inputs": []
    },
    { "type": "error", "name": "__AuctionLogic_InvalidDuration", "inputs": [] },
    { "type": "error", "name": "__AuctionLogic_InvalidTime", "inputs": [] },
    { "type": "error", "name": "__AuctionLogic_NoBidYet", "inputs": [] },
    { "type": "error", "name": "__AuctionLogic_TransferFailed", "inputs": [] },
    {
      "type": "error",
      "name": "__AuctionLogic_UnauthorizedToCall",
      "inputs": []
    },
    {
      "type": "error",
      "name": "__Auction_InvalidAccessToCall",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ]
    },
    { "type": "error", "name": "__Auction_InvalidBidTime", "inputs": [] }
  ]
  
});