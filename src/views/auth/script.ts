import Vue from "vue";
import { mapActions } from "vuex";
import { BNoticeConfig } from "buefy/types/components";
import { AuthError } from "firebase/auth";
import { SIGN_IN } from "@/store/auth/constatnt";

/**
 * Auth view
 */
export default Vue.extend({
  name: "auth-view",
  data() {
    return {
      progressing: false
    };
  },
  methods: {
    ...mapActions("auth", {
      signIn: SIGN_IN
    }),

    handleSignIn(): void {
      this.progressing = true;
      this.signIn()
        .then(() => this.$router.push("/"))
        .catch((error: AuthError) => {
          const config: BNoticeConfig = {
            message: error.message,
            type: "is-danger"
          };
          this.$buefy.toast.open(config);
        })
        .finally(() => (this.progressing = false));
    }
  }
});
