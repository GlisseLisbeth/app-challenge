import { LOGIN, ILoginInfo, loginActionTypes } from '../types/auth';

const initialState: ILoginInfo = {
  isLogin: false,
  existInDB: false,
  type: '',
  document: '',
  birth: '',
  phone: '',
};

export const loginReducer = (
  state = initialState,
  action: loginActionTypes
): ILoginInfo => {
  switch (action.type) {
    case LOGIN:
      const {
        isLogin,
        existInDB,
        type,
        document,
        birth,
        phone,
      } = action.payload;
      return {
        ...state,
        isLogin,
        existInDB,
        type,
        document,
        birth,
        phone,
      };
    default:
      return state;
  }
};
