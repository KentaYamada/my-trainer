import Vue from "vue";
import Navigation from "@/components/navigations/Navigation.vue";
import { mapGetters } from "vuex";
import { IS_SIGN_IN } from "@/store/auth/constatnt";

/**
 * App entry view
 */
export default Vue.extend({
  name: "app-view",
  components: {
    Navigation
  },
  computed: {
    ...mapGetters("auth", {
      isSignIn: IS_SIGN_IN
    })
  }
});
