import { GetterTree } from "vuex";
import { getAuth, User } from "firebase/auth";
import { RootState } from "@/store";
import { AuthState } from "@/store/auth";
import { AUTH_USER, IS_SIGN_IN } from "@/store/auth/constatnt";

const getters: GetterTree<AuthState, RootState> = {
  [AUTH_USER]: (state: AuthState): User | null => {
    return state.auth_user;
  },

  [IS_SIGN_IN]: (state: AuthState): boolean => {
    return !!state.auth_user;
  }
};

export default getters;
