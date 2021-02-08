import {
  SAVE_USER_INFO,
  IUserInfo,
  userInfoActionTypes,
} from '../types/info-user';

const initialState: IUserInfo = {
  direccion: '',
  nomCompleto: '',
  indCrearTercero: '',
  estadoCivil: '',
  tipoPersona: '',
  telefono: '',
  apellidoPaterno: '',
  sexo: '',
  indRequiereDireccion: '',
  paisNacimiento: '',
  nombres: '',
  stsTercero: '',
  tipoDocumento: '',
  apellidoMaterno: '',
  numDocumento: '',
  fecNacimiento: '',
  correo: '',
};

export const userInfoReducer = (
  state = initialState,
  action: userInfoActionTypes
): IUserInfo => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        direccion: action.payload.direccion,
        nomCompleto: action.payload.nomCompleto,
        indCrearTercero: action.payload.indCrearTercero,
        estadoCivil: action.payload.estadoCivil,
        tipoPersona: action.payload.tipoPersona,
        telefono: action.payload.telefono,
        apellidoPaterno: action.payload.apellidoPaterno,
        sexo: action.payload.sexo,
        indRequiereDireccion: action.payload.indRequiereDireccion,
        paisNacimiento: action.payload.paisNacimiento,
        nombres: action.payload.nombres,
        stsTercero: action.payload.stsTercero,
        tipoDocumento: action.payload.tipoDocumento,
        apellidoMaterno: action.payload.apellidoMaterno,
        numDocumento: action.payload.numDocumento,
        fecNacimiento: action.payload.fecNacimiento,
        correo: action.payload.correo,
      };
    default:
      return state;
  }
};
