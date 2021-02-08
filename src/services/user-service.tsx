export class UserService {
  document: string;

  constructor() {
    this.document = '';
  }

  async userExistInBD(data: string) {
    if (data === this.document) {
      return true;
    }

    return false;
  }
}
