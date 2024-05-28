export type IParameter = {
  version: string;
  key: string;
  city: string;
  name: string;
  value?: number;
  transactionId?: string;
  message?: string;
  cep?: string;
  currency?: number; //default: 986 ('R$')
  countryCode?: string; //default: 'BR'
}

export type InputState = string;