import { AuthNModel } from "./enums";

export class AuthNDetails {
  model: AuthNModel;

  // Used for AuthNModel.Token
  token?: string;

  // Used for AuthNModel.Signature
  publicKey?: string;
  privateKey?: string;

  constructor(model: AuthNModel) {
    this.model = model;
  }
}