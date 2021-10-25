import { MutationTree } from "vuex";
import { User } from "firebase/auth";
import { AuthState } from "@/store/auth";
import { UPDATE_AUTH_USER } from "@/store/auth/constatnt";

const mutations: MutationTree<AuthState> = {
  [UPDATE_AUTH_USER]: (state: AuthState, payload: User | null): void => {
    state.auth_user = payload;
  }
};

export default mutations;
