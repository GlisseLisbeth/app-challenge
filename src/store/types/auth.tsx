export const LOGIN = 'LOGIN';

export interface ILoginInfo {
  isLogin?: boolean;
  existInDB?: boolean;
  type: string;
  document: string;
  birth: string;
  phone: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: ILoginInfo;
}

export type loginActionTypes = LoginAction;
