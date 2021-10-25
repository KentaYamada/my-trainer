import Vue from "vue";
import { mapActions } from "vuex";
import { BNoticeConfig } from "buefy/types/components";
import { AuthError } from "firebase/auth";
import { SIGN_OUT } from "@/store/auth/constatnt";

/**
 * Navigation component
 */
export default Vue.extend({
  name: "navigation",
  methods: {
    ...mapActions("auth", {
      signOut: SIGN_OUT
    }),

    handleSignOut(): void {
      this.signOut()
        .then(() => {
          const config: BNoticeConfig = {
            message: "サインアウトしました",
            type: "is-success"
          };
          this.$buefy.toast.open(config);
        })
        .catch((error: AuthError) => {
          const config: BNoticeConfig = {
            message: error.message,
            type: "is-danger"
          };
          this.$buefy.toast.open(config);
        });
    }
  },
  template: "<template/>"
});
