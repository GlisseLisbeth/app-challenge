export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export interface IUserInfo {
  direccion: string;
  nomCompleto: string;
  indCrearTercero: string;
  estadoCivil: string;
  tipoPersona: string;
  telefono: string;
  apellidoPaterno: string;
  sexo: string;
  indRequiereDireccion: string;
  paisNacimiento: string;
  nombres: string;
  stsTercero: string;
  tipoDocumento: string;
  apellidoMaterno: string;
  numDocumento: string;
  fecNacimiento: string;
  correo: string;
}

interface SaveUserInfoAction {
  type: typeof SAVE_USER_INFO;
  payload: IUserInfo;
}

export type userInfoActionTypes = SaveUserInfoAction;
