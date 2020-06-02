<template>
  <v-app light>
    <v-navigation-drawer
      dark
      class="blue-gradient"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!--not loged-->
      <v-list v-if="!logged">
        <center>
          <nuxt-link to="/">
          <img width="60%" height="50px" src="/logo.png" />
          </nuxt-link>
        </center>
        <br />
        <v-list-item
          v-for="(item, i) in notLoggedItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--loged-->
      <v-list v-if="logged && role == 'freelancer'">
        <center>
          <nuxt-link to="/">
          <img width="60%" height="50px" src="/logo.png" />
          </nuxt-link>
        </center>
        <br />
        <v-list-item
          v-for="(item, i) in FreelancerItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--client-->
      <v-list v-if="logged && role == 'client'">
        <center>
          <nuxt-link to="/">
          <img width="60%" height="50px" src="/logo.png" />
          </nuxt-link>
        </center>
        <br />
        <v-list-item
          v-for="(item, i) in ClientItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--not loged-->
    <v-app-bar class="blue-gradient" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        style="color: rgba(255, 255, 255, 0.87)"
        @click.stop="drawer = !drawer"
      />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon style="color: rgba(255, 255, 255, 0.87)"
          >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
        >
      </v-btn>

      <v-toolbar-title
        style="width:85%;text-align:center;color:white"
      ><img width="15%" height="50px" src="https://cdn.discordapp.com/attachments/713530507702435931/717039052578095186/Title.png" />
      </v-toolbar-title>

      <v-spacer />
      <center>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <v-switch v-if="logged"
                @change="switchRole()"
                style="width:100%;"
                class="float-right"
                color="green"
                inset
              ></v-switch>
            </div>
            <div class="col-sm-7 offset-sm-2 text-white">
              {{ role }}
            </div>
          </div>
        </div>
      </center>
      

      <v-button v-if="logged" @click="logout()" class="btn blue-gradient rounded-pill"
        ><i class="fas fa-sign-out-alt"></i
      ></v-button>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      //logged:false,
      // role:"freelancer",
      clipped: false,
      drawer: false,
      fixed: false,
      notLoggedItems: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Jobs",
          to: "/job"
        },
        {
          icon: "mdi-login",
          title: "SignIn",
          to: "/log/login"
        },
        {
          icon: "mdi-account-plus",
          title: "SignUp",
          to: "/log/register"
        }
      ],

      FreelancerItems: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/freelancer/dashboard"
        },
        {
          icon: "mdi-shield-account",
          title: "User Profile",
          to: "/user/profile"
        },
        {
          icon: "mdi-ballot-outline",
          title: "Jobs",
          to: "/job"
        }
      ],

      ClientItems: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/client/dashboard"
        },
        {
          icon: "mdi-shield-account",
          title: "User Profile",
          to: "/user/profile"
        },
        {
          icon: "mdi-briefcase-plus",
          title: "Create New Project",
          to: "/myjob/add"
        },
        {
          icon: "mdi-ballot-outline",
          title: "My Projects",
          to: "/myjob"
        }
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Freelancini"
    };
  },
  /* created(){
    this.logged = this.$store.state.user.logged 
    this.role = this.$store.state.user.role 
  },
*/ computed: {
    logged() {
      return this.$store.state.user.logged;
    },
    role() {
      return this.$store.state.user.role;
    }
  },
  methods : {
    logout () {
      this.$store.commit('user/logout')
    },
    switchRole()
    {  const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
      this.$axios.get('/api/account/switch',config).then((response) => {
        if (response.data.code == 200) {
           this.$store.commit('user/setRole', response.data.role )
        }
      }).catch((error) => console.log(erro ))
    }
  }
};
</script>
