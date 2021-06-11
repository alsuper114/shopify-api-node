/* eslint-disable @typescript-eslint/naming-convention */
export interface AuthQuery {
  code: string;
  timestamp: string;
  state: string;
  shop: string;
  host: string;
  hmac?: string;
  shopify?: string[];
}

export interface AccessTokenResponse {
  access_token: string;
  scope: string;
}

export interface OnlineAccessInfo {
  expires_in: number;
  associated_user_scope: string;
  associated_user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
    account_owner: boolean;
    locale: string;
    collaborator: boolean;
  };
}
/* eslint-enable @typescript-eslint/naming-convention */

export interface OnlineAccessResponse
  extends AccessTokenResponse,
    OnlineAccessInfo {}
