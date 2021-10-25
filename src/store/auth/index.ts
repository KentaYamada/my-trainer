import { Module } from "vuex";
import { User } from "firebase/auth";
import { RootState } from "@/store";
import actions from "@/store/auth/actions";
import getters from "@/store/auth/getters";
import mutations from "@/store/auth/mutations";

export interface AuthState {
  auth_user: User | null;
}

const state: AuthState = {
  auth_user: null
};
const module: Module<AuthState, RootState> = {
  namespaced: true,
  actions: actions,
  getters: getters,
  mutations: mutations,
  state: state
};

export default module;
