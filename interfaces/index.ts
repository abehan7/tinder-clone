import { ParamListBase } from "@react-navigation/native";

export interface ILoginResult {
  type: string;
  idToken: string;
  accessToken: string;
}
export interface IUser {
  name: string;
  uid: string;
  photoURL: string;
  createdAt: Date;
}

export interface IMessage {
  id: string;
  uid: string;
  user: string;
  email: string;
  text: string;
  createAt: string;
}

export interface IRootStackParamList extends ParamListBase {
  Home: undefined;
  Chat: undefined;
  // Chat: { uid: string };
}
