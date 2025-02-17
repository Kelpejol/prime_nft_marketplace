// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AuctionClosed extends ethereum.Event {
  get params(): AuctionClosed__Params {
    return new AuctionClosed__Params(this);
  }
}

export class AuctionClosed__Params {
  _event: AuctionClosed;

  constructor(event: AuctionClosed) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get closer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AuctionPaidOut extends ethereum.Event {
  get params(): AuctionPaidOut__Params {
    return new AuctionPaidOut__Params(this);
  }
}

export class AuctionPaidOut__Params {
  _event: AuctionPaidOut;

  constructor(event: AuctionPaidOut) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get auctionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AuctionTokenPaidOut extends ethereum.Event {
  get params(): AuctionTokenPaidOut__Params {
    return new AuctionTokenPaidOut__Params(this);
  }
}

export class AuctionTokenPaidOut__Params {
  _event: AuctionTokenPaidOut;

  constructor(event: AuctionTokenPaidOut) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get auctionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AuctionUpdated extends ethereum.Event {
  get params(): AuctionUpdated__Params {
    return new AuctionUpdated__Params(this);
  }
}

export class AuctionUpdated__Params {
  _event: AuctionUpdated;

  constructor(event: AuctionUpdated) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class CancelledAuction extends ethereum.Event {
  get params(): CancelledAuction__Params {
    return new CancelledAuction__Params(this);
  }
}

export class CancelledAuction__Params {
  _event: CancelledAuction;

  constructor(event: CancelledAuction) {
    this._event = event;
  }

  get auctionCreator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get auctionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewAuction extends ethereum.Event {
  get params(): NewAuction__Params {
    return new NewAuction__Params(this);
  }
}

export class NewAuction__Params {
  _event: NewAuction;

  constructor(event: NewAuction) {
    this._event = event;
  }

  get auctionCreator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get auctionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get assetContract(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewBid extends ethereum.Event {
  get params(): NewBid__Params {
    return new NewBid__Params(this);
  }
}

export class NewBid__Params {
  _event: NewBid;

  constructor(event: NewBid) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AuctionLogic__createAuctionInput_paramsStruct extends ethereum.Tuple {
  get assetContract(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get minimumBidAmount(): BigInt {
    return this[3].toBigInt();
  }

  get buyoutBidAmount(): BigInt {
    return this[4].toBigInt();
  }

  get bidBufferBps(): BigInt {
    return this[5].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[7].toBigInt();
  }
}

export class AuctionLogic__getAllAuctionsResultAuctionsStruct extends ethereum.Tuple {
  get auctionId(): BigInt {
    return this[0].toBigInt();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get minimumBidAmount(): BigInt {
    return this[2].toBigInt();
  }

  get buyoutBidAmount(): BigInt {
    return this[3].toBigInt();
  }

  get bidBufferBps(): BigInt {
    return this[4].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[5].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get auctionCreator(): Address {
    return this[7].toAddress();
  }

  get assetContract(): Address {
    return this[8].toAddress();
  }

  get currency(): Address {
    return this[9].toAddress();
  }

  get tokenType(): i32 {
    return this[10].toI32();
  }

  get status(): i32 {
    return this[11].toI32();
  }
}

export class AuctionLogic__getAuctionResultAuctionStruct extends ethereum.Tuple {
  get auctionId(): BigInt {
    return this[0].toBigInt();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get minimumBidAmount(): BigInt {
    return this[2].toBigInt();
  }

  get buyoutBidAmount(): BigInt {
    return this[3].toBigInt();
  }

  get bidBufferBps(): BigInt {
    return this[4].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[5].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get auctionCreator(): Address {
    return this[7].toAddress();
  }

  get assetContract(): Address {
    return this[8].toAddress();
  }

  get currency(): Address {
    return this[9].toAddress();
  }

  get tokenType(): i32 {
    return this[10].toI32();
  }

  get status(): i32 {
    return this[11].toI32();
  }
}

export class AuctionLogic__getWinningBidResult {
  value0: Address;
  value1: Address;
  value2: BigInt;

  constructor(value0: Address, value1: Address, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getBidder(): Address {
    return this.value0;
  }

  getCurrency(): Address {
    return this.value1;
  }

  getBidAmount(): BigInt {
    return this.value2;
  }
}

export class AuctionLogic extends ethereum.SmartContract {
  static bind(address: Address): AuctionLogic {
    return new AuctionLogic("AuctionLogic", address);
  }

  _msgData(): Bytes {
    let result = super.call("_msgData", "_msgData():(bytes)", []);

    return result[0].toBytes();
  }

  try__msgData(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("_msgData", "_msgData():(bytes)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _msgSender(): Address {
    let result = super.call("_msgSender", "_msgSender():(address)", []);

    return result[0].toAddress();
  }

  try__msgSender(): ethereum.CallResult<Address> {
    let result = super.tryCall("_msgSender", "_msgSender():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createAuction(
    _params: AuctionLogic__createAuctionInput_paramsStruct,
  ): BigInt {
    let result = super.call(
      "createAuction",
      "createAuction((address,uint256,address,uint256,uint256,uint64,uint64,uint64)):(uint256)",
      [ethereum.Value.fromTuple(_params)],
    );

    return result[0].toBigInt();
  }

  try_createAuction(
    _params: AuctionLogic__createAuctionInput_paramsStruct,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAuction",
      "createAuction((address,uint256,address,uint256,uint256,uint64,uint64,uint64)):(uint256)",
      [ethereum.Value.fromTuple(_params)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllAuctions(): Array<AuctionLogic__getAllAuctionsResultAuctionsStruct> {
    let result = super.call(
      "getAllAuctions",
      "getAllAuctions():((uint256,uint256,uint256,uint256,uint64,uint64,uint64,address,address,address,uint8,uint8)[])",
      [],
    );

    return result[0].toTupleArray<AuctionLogic__getAllAuctionsResultAuctionsStruct>();
  }

  try_getAllAuctions(): ethereum.CallResult<
    Array<AuctionLogic__getAllAuctionsResultAuctionsStruct>
  > {
    let result = super.tryCall(
      "getAllAuctions",
      "getAllAuctions():((uint256,uint256,uint256,uint256,uint64,uint64,uint64,address,address,address,uint8,uint8)[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<AuctionLogic__getAllAuctionsResultAuctionsStruct>(),
    );
  }

  getAuction(_auctionId: BigInt): AuctionLogic__getAuctionResultAuctionStruct {
    let result = super.call(
      "getAuction",
      "getAuction(uint256):((uint256,uint256,uint256,uint256,uint64,uint64,uint64,address,address,address,uint8,uint8))",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );

    return changetype<AuctionLogic__getAuctionResultAuctionStruct>(
      result[0].toTuple(),
    );
  }

  try_getAuction(
    _auctionId: BigInt,
  ): ethereum.CallResult<AuctionLogic__getAuctionResultAuctionStruct> {
    let result = super.tryCall(
      "getAuction",
      "getAuction(uint256):((uint256,uint256,uint256,uint256,uint64,uint64,uint64,address,address,address,uint8,uint8))",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<AuctionLogic__getAuctionResultAuctionStruct>(
        value[0].toTuple(),
      ),
    );
  }

  getWinningBid(_auctionId: BigInt): AuctionLogic__getWinningBidResult {
    let result = super.call(
      "getWinningBid",
      "getWinningBid(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );

    return new AuctionLogic__getWinningBidResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
    );
  }

  try_getWinningBid(
    _auctionId: BigInt,
  ): ethereum.CallResult<AuctionLogic__getWinningBidResult> {
    let result = super.tryCall(
      "getWinningBid",
      "getWinningBid(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionLogic__getWinningBidResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
      ),
    );
  }

  isAuctionExpired(_auctionId: BigInt): boolean {
    let result = super.call(
      "isAuctionExpired",
      "isAuctionExpired(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );

    return result[0].toBoolean();
  }

  try_isAuctionExpired(_auctionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAuctionExpired",
      "isAuctionExpired(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isNewWinningBid(auctionId: BigInt, bidAmount: BigInt): boolean {
    let result = super.call(
      "isNewWinningBid",
      "isNewWinningBid(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(auctionId),
        ethereum.Value.fromUnsignedBigInt(bidAmount),
      ],
    );

    return result[0].toBoolean();
  }

  try_isNewWinningBid(
    auctionId: BigInt,
    bidAmount: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isNewWinningBid",
      "isNewWinningBid(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(auctionId),
        ethereum.Value.fromUnsignedBigInt(bidAmount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _nativeTokenWrapper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BidInAuctionCall extends ethereum.Call {
  get inputs(): BidInAuctionCall__Inputs {
    return new BidInAuctionCall__Inputs(this);
  }

  get outputs(): BidInAuctionCall__Outputs {
    return new BidInAuctionCall__Outputs(this);
  }
}

export class BidInAuctionCall__Inputs {
  _call: BidInAuctionCall;

  constructor(call: BidInAuctionCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BidInAuctionCall__Outputs {
  _call: BidInAuctionCall;

  constructor(call: BidInAuctionCall) {
    this._call = call;
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CollectAuctionPayoutCall extends ethereum.Call {
  get inputs(): CollectAuctionPayoutCall__Inputs {
    return new CollectAuctionPayoutCall__Inputs(this);
  }

  get outputs(): CollectAuctionPayoutCall__Outputs {
    return new CollectAuctionPayoutCall__Outputs(this);
  }
}

export class CollectAuctionPayoutCall__Inputs {
  _call: CollectAuctionPayoutCall;

  constructor(call: CollectAuctionPayoutCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CollectAuctionPayoutCall__Outputs {
  _call: CollectAuctionPayoutCall;

  constructor(call: CollectAuctionPayoutCall) {
    this._call = call;
  }
}

export class CollectAuctionTokensCall extends ethereum.Call {
  get inputs(): CollectAuctionTokensCall__Inputs {
    return new CollectAuctionTokensCall__Inputs(this);
  }

  get outputs(): CollectAuctionTokensCall__Outputs {
    return new CollectAuctionTokensCall__Outputs(this);
  }
}

export class CollectAuctionTokensCall__Inputs {
  _call: CollectAuctionTokensCall;

  constructor(call: CollectAuctionTokensCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CollectAuctionTokensCall__Outputs {
  _call: CollectAuctionTokensCall;

  constructor(call: CollectAuctionTokensCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _params(): CreateAuctionCall_paramsStruct {
    return changetype<CreateAuctionCall_paramsStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateAuctionCall_paramsStruct extends ethereum.Tuple {
  get assetContract(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get minimumBidAmount(): BigInt {
    return this[3].toBigInt();
  }

  get buyoutBidAmount(): BigInt {
    return this[4].toBigInt();
  }

  get bidBufferBps(): BigInt {
    return this[5].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[6].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[7].toBigInt();
  }
}

export class UpdateAuctionCall extends ethereum.Call {
  get inputs(): UpdateAuctionCall__Inputs {
    return new UpdateAuctionCall__Inputs(this);
  }

  get outputs(): UpdateAuctionCall__Outputs {
    return new UpdateAuctionCall__Outputs(this);
  }
}

export class UpdateAuctionCall__Inputs {
  _call: UpdateAuctionCall;

  constructor(call: UpdateAuctionCall) {
    this._call = call;
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _params(): UpdateAuctionCall_paramsStruct {
    return changetype<UpdateAuctionCall_paramsStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }
}

export class UpdateAuctionCall__Outputs {
  _call: UpdateAuctionCall;

  constructor(call: UpdateAuctionCall) {
    this._call = call;
  }
}

export class UpdateAuctionCall_paramsStruct extends ethereum.Tuple {
  get currency(): Address {
    return this[0].toAddress();
  }

  get minimumBidAmount(): BigInt {
    return this[1].toBigInt();
  }

  get buyoutBidAmount(): BigInt {
    return this[2].toBigInt();
  }

  get bidBufferBps(): BigInt {
    return this[3].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[4].toBigInt();
  }

  get endTimestamp(): BigInt {
    return this[5].toBigInt();
  }
}
