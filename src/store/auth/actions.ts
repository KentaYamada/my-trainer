import { ActionTree } from "vuex";
import { getAuth, signInWithPopup, signOut, Auth, GoogleAuthProvider, UserCredential } from "firebase/auth";
import { RootState } from "@/store";
import { AuthState } from "@/store/auth";
import { SIGN_IN, SIGN_OUT, UPDATE_AUTH_USER } from "@/store/auth/constatnt";

const actions: ActionTree<AuthState, RootState> = {
  [SIGN_IN]: async ({ commit }) => {
    const auth: Auth = getAuth();
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider).then((data: UserCredential) => {
      commit(UPDATE_AUTH_USER, data.user);
    });
  },

  [SIGN_OUT]: async ({ commit }) => {
    const auth: Auth = getAuth();
    return await signOut(auth);
  }
};

export default actions;
