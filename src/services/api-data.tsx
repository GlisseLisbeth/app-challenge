import Axios from 'axios';

export class ApiDataService {
  preventCors = 'https://cors-anywhere.herokuapp.com/';
  apiUrl = 'https://freestyle.getsandbox.com/dummy/obtenerdatospersona';

  async getData() {
    try {
      const data = await Axios({
        method: 'get',
        url: `${this.preventCors}${this.apiUrl}`,
        data: {},
      });

      return data.data.data.tercero;
    } catch (err) {
      const message = err.response.data.errors[0].message;
      alert(`Hubo un problema con el API: ${message}`);
    }
  }
}
