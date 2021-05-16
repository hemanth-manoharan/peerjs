import { AuthNModel } from "./enums";
import { AuthNDetails } from "..";


export class AuthNDetailsImpl implements AuthNDetails {
  model: AuthNModel;

  // Used for AuthNModel.Token
  token?: string;

  // Used for AuthNModel.Signature
  publicKeyJWK?: string;
  privateKey?: CryptoKey;

  constructor(model: AuthNModel) {
    this.model = model;
  }
}