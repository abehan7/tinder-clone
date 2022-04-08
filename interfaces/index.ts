import { ParamListBase } from "@react-navigation/native";

export interface ILoginResult {
  type: string;
  idToken: string;
  accessToken: string;
}
export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  uid: string;
  photoURL: string;
  createdAt: Date;
}

// id: 1,
// photoURL:

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
