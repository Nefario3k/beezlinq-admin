<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="width"
    :mini-variant="mini"
    mini-variant-width="92"
    mobile-breakpoint="1270"
    :clipped="clipped"
    :permanent="!$vuetify.breakpoint.mdAndDown"
    app
    color="var(--primary-dark-color)"
    class="navBar"
  >
    <div
      style="height: 100%; grid-gap: 7px"
      class="d-flex flex-column justify-space-between"
    >
      <v-list class="list_container topNav nav__list">
        <!-- nav control  -->
        <v-list-item
          :class="{ mini: mini }"
          class="dropdown__list-item noHover beezlinq"
        >
          <template v-if="!mini">
            <div
              :class="{ 'mr-2': !mini }"
              class="d-flex align-center justify-center nav_svg transleft"
            >
              <Component :is="`SvgLogoMain`" />
            </div>
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title transleft">
                Beezlinq</v-list-item-title
              >
            </v-list-item-content>
            <div @click="check" class="arrowed transleft">
              <SvgAngleLeft />
            </div>
          </template>

          <template v-else>
            <Button
              @click="check"
              :elevation="0"
              width="100%"
              style="padding: 0"
              class="p-0 m-0 transleft"
              minWidth="max-content"
              height="max-content"
              color="transparent"
              :svg="true"
              svgLeft="SvgHamburger"
            />
            <!-- svgLeft="SvgHamburger" -->
          </template>
        </v-list-item>
        <!-- nav links  -->
        <div v-for="(nav, index) in items" :key="index + 223232">
          <v-tooltip
            right
            :disabled="!mini"
            nudge-right="10"
            transition="fade-transition"
            color="var(--primary-dark-color)"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
                :to="nav.link"
                :class="{ mini: mini }"
                class="dropdown__list-item"
              >
                <div
                  :class="{ 'mr-2': !mini }"
                  class="d-flex align-center justify-center nav_svg"
                >
                  <Component :is="nav.svg" />
                </div>

                <v-list-item-content v-show="!mini">
                  <v-list-item-title class="dropdown__list-title">
                    {{ nav.title }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>
              {{ nav.title }}
            </span>
          </v-tooltip>
        </div>
      </v-list>
      <!-- logout area  -->
      <div class="bottomNavContainer">
        <v-list class="list_container nav__list bottomNav">
          <v-tooltip
            right
            :disabled="!mini"
            nudge-right="10"
            transition="fade-transition"
            color="var(--primary-dark-color)"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
                to="/auth/login"
                :class="{ mini: mini }"
                class="dropdown__list-item"
              >
                <div
                  :class="{ 'mr-2': !mini }"
                  class="d-flex align-center justify-center nav_svg"
                >
                  <Component :is="`SvgSideBarLogout`" />
                </div>

                <v-list-item-content v-show="!mini">
                  <v-list-item-title class="dropdown__list-title">
                    Logout</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
            <span> Logout </span>
          </v-tooltip>
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      width: 280,
      drawer: false,
      clipped: false,
      fixed: false,
      // must be the same value
      showme: false,
      mini: false,
      miniVariant: true,
      youCannotCreateMoreCardDialog: false,

      isOpen: false,
      selectedOption: "",
      options: ["Option 1", "Option 2", "Option 3"],
    };
  },
  watch: {
    showme() {
      if (this.showme) {
        this.isOpen = true;
      }
    },
  },
  computed: {
    items() {
      return [
        {
          title: "Dashboard",
          link: "/",
          svg: "SvgSideBarDashboard",
        },
        {
          title: "Users",
          link: "/users",
          svg: "SvgSideBarUsers",
        },
        {
          title: "Templates",
          link: "/templates",
          svg: "SvgSideBarTemplates",
        },
        {
          title: "Cards",
          link: "/cards",
          svg: "SvgSideBarCards",
        },
        {
          title: "Payments",
          link: "/payments",
          svg: "SvgSideBarPayments",
        },
        {
          title: "Plan",
          link: "/plan",
          svg: "SvgSideBarPlan",
        },
        {
          title: "Admin Settings",
          link: "/manage",
          svg: "SvgSideBarManage",
        },
        {
          title: "Analytics",
          link: "/analytics",
          svg: "SvgSideBarAnalytics",
        },
        {
          title: "Activity log",
          link: "/activity",
          svg: "SvgSideBarActivity",
        },
        {
          title: "Messaging",
          link: "/messaging",
          svg: "SvgSideBarMessaging",
        },
        {
          title: "Request",
          link: "/request",
          svg: "SvgSideBarRequest",
        },
        {
          title: "Settings",
          link: "/settings",
          svg: "SvgSideBarSettings",
        },
      ];
    },
  },
  mounted() {
    var adminPanel = window.localStorage.getItem("adminPanel");
    var nx = window.innerWidth;
    if (adminPanel != null && nx >= 1269) {
      this.mini = true;
      this.showme = true;
    }
  },
  methods: {
    check() {
      this.mini = !this.mini;
      this.showme = !this.showme;
      if (this.mini) {
        window.localStorage.setItem("adminPanel", "adminPanel");
      } else {
        window.localStorage.removeItem("adminPanel");
      }
    },
    showNav() {
      this.drawer = true;
      this.showme = false;
      this.mini = false;
    },
  },
};
</script>
