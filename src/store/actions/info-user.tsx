import {
  SAVE_USER_INFO,
  IUserInfo,
  userInfoActionTypes,
} from 'store/types/info-user';

export const saveUser = (newUser: IUserInfo): userInfoActionTypes => {
  return {
    type: SAVE_USER_INFO,
    payload: newUser,
  };
};
