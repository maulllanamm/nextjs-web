export interface CategoryTypes {
  id: String;
  name: String;
  __v: Number;
}

export interface GameItemTypes {
  id: String;
  status: String;
  name: String;
  thumbnail: String;
  category: CategoryTypes;
}

export interface BanksType {
  _id: String;
  name: String;
  bankName: String;
  noRekening: String;
}

export interface PaymentItemTypes {
  _id: String;
  type: String;
  status: String;
  banks: BanksType[];
}

export interface NominalsTypes {
  _id: String;
  coinQuantity: String;
  coinName: String;
  price: Number;
}

export interface LoginTypes {
  email: String;
  password: String;
}

export interface UserTypes {
  id: String;
  username: String;
  email: String;
  name: String;
  avatar: String;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: Number;
}

export interface CheckoutTypes {
  voucher: String;
  nominal: String;
  payment: String;
  bank: String;
  name: String;
  accountUser: String;
}

export interface HistoryVoucherTopupTypes {
  category: String;
  coinName: String;
  coinQuantity: String;
  gameName: String;
  price: number;
  thumbnail: String;
}

export interface HistoryTransactionTypes {
  _id: String;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: String;
}

export interface TopUpCategoryTypes {
  _id: String;
  value: number;
  name: String;
}
