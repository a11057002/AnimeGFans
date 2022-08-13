<template>
  <v-app>
    <v-app-bar app color="primary mx-auto">
      <router-link to="/home">
        <v-toolbar-title @click="resetPage"> AnimeGFans </v-toolbar-title>
        <!-- <v-btn text rounded @click="resetPage">首頁</v-btn> -->
      </router-link>
      <v-spacer />
      <v-text-field
        v-if="routerHome()"
        append-icon="mdi-magnify"
        hide-details
        solo-inverted
        rounded
        style="margin-right: 10px; max-width: 300px; margin-left: 10px"
        v-model="keywords"
        @input="resetPage"
      />

      <!-- <v-btn text rounded to="/about">About</v-btn> -->
      <v-btn v-if="activeUser()" @click="Logout()">登出</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view
          :keywords="keywords"
          :page="page"
          @update-page="updatePage"
        />
      </v-container>
    </v-main>
    <v-footer v-if="visits">
      瀏覽人次 : {{ visits }}
    </v-footer>  
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            keywords: "",
            page: 1,
        };
    },
    methods: {
        resetPage() {
            this.page = 1;
        },
        updatePage(page) {
            this.page = page;
        },
        routerHome() {
            return this.$router.history.current["path"] == "/home";
        },
        Logout() {
            this.$store.dispatch("logOut").then(() => {
                this.$router.push({ name: "Login" });
            });
        },
        activeUser() {
            return localStorage.getItem("user");
        },
    },
    computed: {
        visits() {
            var nameEQ = "visits" + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ")
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    this.$store.commit("SET_VISITS", c.substring(nameEQ.length, c.length));
            }
            return this.$store.state.visits;
        },
    },
};
</script>

<style lang="scss">
html {
  overflow: auto !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}

// 拿掉彈幕前頭像
.baberrage-item .baberrage-avatar {
  display: none !important;
}
</style>
