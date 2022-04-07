import React, { FC } from "react";
import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import { auth } from "../db/firebase-config";
import { useMemo } from "react";

interface IAuthProps {
  user: any;
  loading: boolean;
  error: string | null;
  //   signInWithGoogle,
  logout: () => void;
}

const AuthContext = createContext<IAuthProps | undefined>(undefined);

const config = {
  androidClientId:
    "244860282255-3idvtvcq8g52dle31cump43vpgbpp7tt.apps.googleusercontent.com",
  iosClientId:
    "244860282255-da0e0umjtanfi4hj5c9f3ft6685fsqb8.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider: FC = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState<any>(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (_user) => {
        if (_user) {
          setUser(_user);
        } else {
          setUser(null);
        }

        setLoadingInitial(false);
      }),
    []
  );

  //   const signInWithGoogle = async () => {
  //     setLoading(true);
  //     await Google.logInAsync(config)
  //       .then(async (logInResult: ILoginResult) => {
  //         if (logInResult.type === "success") {
  //           //login...
  //           const { idToken, accessToken } = logInResult;
  //           const credential = GoogleAuthProvider.credential(
  //             idToken,
  //             accessToken
  //           );
  //           await signInWithCredential(auth, credential);
  //         } else {
  //           //error...
  //           return Promise.reject();
  //         }
  //       })
  //       .catch((error: any) => setError(error))
  //       .finally(() => setLoading(false));
  //   };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({ user, loading, error, logout }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
