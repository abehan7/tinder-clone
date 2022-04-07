export interface ILoginResult {
  type: string;
  idToken: string;
  accessToken: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export interface IMessage {
  id: string;
  uid: string;
  user: string;
  email: string;
  text: string;
  createAt: string;
}
