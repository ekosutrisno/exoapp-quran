import { useToast } from "vue-toastification";
import { auth, firestore, googleProvider } from "../../service/firebase";

const toast = useToast();

const account = {
  namespaced: true,
  state: () => {
    return {
      isLoading: false,
      currentUser: {},
      meId: null,
      bacaanku: {},
      ayatFavorit: [],
    };
  },
  mutations: {
    SET_IS_LOADING: (state, payload) => (state.isLoading = payload),
    SET_CURRENT_USER: (state, payload) => (state.currentUser = payload),
    SET_ME_ID: (state, payload) => (state.meId = payload),
    SET_BACAANKU: (state, payload) => (state.bacaanku = payload),
    SET_AYAT_FAVORIT: (state, payload) => (state.ayatFavorit = payload),
  },
  actions: {
    async loginWithGoogle({ commit }) {
      var provider = googleProvider;
      provider.addScope("profile");
      provider.addScope("email");

      await auth.signInWithPopup(provider).then(async (res) => {
        var user = res.user;

        const userData = {
          user_id: user.uid,
          username: user.displayName,
          email: user.email,
          join_at: Date.now(),
          photo_url: user.photoURL,
        };

        await firestore
          .collection("account")
          .doc(user.uid)
          .get()
          .then(async (doc) => {
            if (doc.exists) {
              localStorage.setItem("user_id", user.uid);
              commit("SET_CURRENT_USER", doc.data());
              toast.info(`${user.displayName} berhasil Login.`);
            } else {
              await firestore
                .collection("account")
                .doc(user.uid)
                .set(userData)
                .then(async () => {
                  localStorage.setItem("user_id", user.uid);
                  await commit("SET_CURRENT_USER", userData);
                  toast.info(`Welcome ${user.displayName}.`);
                });
            }
          });
      });
    },

    onAuthStateChange({ commit }) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          commit("SET_ME_ID", user.uid);

          firestore
            .collection("account")
            .doc(user.uid)
            .get()
            .then(async (doc) => {
              if (doc.exists) {
                localStorage.setItem("user_id", user.uid);
                commit("SET_CURRENT_USER", doc.data());
              }
            });

          localStorage.setItem("user_id", user.uid);
        } else {
          commit("SET_ME_ID", null);
          commit("SET_CURRENT_USER", null);
          localStorage.removeItem("user_id");
        }
      });
    },

    logoutFromGoogle({ commit }) {
      auth.signOut().then(async () => {
        localStorage.removeItem("user_id");
        await commit("SET_CURRENT_USER", {});
        toast.info(`Kamu berhasil Logout.`);
      });
    },

    async onMarkBacaanku({ commit }, payload) {
      var user_id = auth.currentUser ? auth.currentUser.uid : null;
      if (user_id) {
        await firestore
          .collection("account")
          .doc(user_id)
          .set({ bacaanku: payload.nextBacaan }, { merge: true })
          .then(async () => {
            commit("SET_BACAANKU", payload.nextBacaan);
            toast.info(`Ditandai sebagai Bacaanku.`);
          });
      } else {
        toast.warning(`Fitur ini hanya aktif setelah Login!`);
      }
    },

    async onGetBacaanku({ commit }) {
      var user_id = auth.currentUser.uid;
      await firestore
        .collection("account")
        .doc(user_id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("SET_BACAANKU", doc.data().bacaanku);
          }
        });
    },

    async onMarkFavorit({ dispatch }, payload) {
      var user_id = auth.currentUser ? auth.currentUser.uid : null;
      if (user_id) {
        await firestore
          .collection("account")
          .doc(user_id)
          .collection("favorits")
          .doc(payload.aya_id.toString())
          .get()
          .then(async (doc) => {
            if (!doc.exists) {
              await firestore
                .collection("account")
                .doc(user_id)
                .collection("favorits")
                .doc(payload.aya_id.toString())
                .set(payload)
                .then(() => {
                  dispatch("onGetFavorit");
                  toast.info(`Ditambahkan ke favorit.`);
                });
            }
          });
      } else {
        toast.warning(`Fitur ini hanya aktif setelah Login!`);
      }
    },

    async onGetFavorit({ commit }) {
      var user_id = auth.currentUser.uid;
      await firestore
        .collection("account")
        .doc(user_id)
        .collection("favorits")
        .get()
        .then((doc) => {
          let dataAyat = [];
          doc.docs.forEach((ayat) => {
            dataAyat.push(ayat.data());
          });

          commit("SET_AYAT_FAVORIT", dataAyat);
        });
    },
    async onRemoveFavorit({ dispatch }, payload) {
      var user_id = auth.currentUser.uid;
      await firestore
        .collection("account")
        .doc(user_id)
        .collection("favorits")
        .doc(payload.aya_id.toString())
        .delete()
        .then(() => {
          dispatch("onGetFavorit");
          toast.error(`Berhasil dihapus dari favorit.`);
        });
    },
  },
};

export default account;
