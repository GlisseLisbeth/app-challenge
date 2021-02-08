import { Dispatch } from 'react';
import { UserService } from '../../services/user-service';
import { LOGIN, ILoginInfo, loginActionTypes } from '../types/auth';
import { userInfoActionTypes } from '../types/info-user';
import { ApiDataService } from './../../services/api-data';
import { saveUser } from './info-user';

export const verifyDoc = (loginInfo: ILoginInfo): any => {
  return async (dispatch: Dispatch<loginActionTypes | userInfoActionTypes>) => {
    try {
      const verifyIDoc = new UserService();

      const resp = await verifyIDoc.userExistInBD(loginInfo.document);

      if (resp) {
        const apiData = new ApiDataService();
        const resp = await apiData.getData();

        dispatch(saveUser(resp));
        loginInfo.existInDB = true;
      } else {
        loginInfo.existInDB = false;
      }

      loginInfo.isLogin = true;
      dispatch(login(loginInfo));
    } catch {
      console.log('Error db');
    }
  };
};

export const login = (loginInfo: ILoginInfo): loginActionTypes => {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
};
