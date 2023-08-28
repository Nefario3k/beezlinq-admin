<template>
  <div>
    <section class="pageContent">
      <h2 class="page_head">Cards</h2>
      <!-- flex cards  -->
      <div class="card_wrapper">
        <Cards
          v-for="(items, index) in cardContent"
          :key="index + 28283782"
          :cardContent="items"
        />
      </div>
      <!-- second row  -->
      <v-row class="page_top_row">
        <!--======================= stats sections  =======================-->
        <!-- Top Five Industries by quantity of card -->
        <section class="col-3">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">
                  Top Five Industries by quantity of card
                </h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
            </div>
            <!-- table  -->
            <v-simple-table class="card_table no_hover mt-2">
              <template v-slot:default>
                <tbody>
                  <tr
                    class="large1"
                    v-for="item in transactions"
                    :key="item.name"
                  >
                    <td>
                      {{ item.user }}
                    </td>
                    <td class="text-right">
                      <p>{{ item.date }}</p>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <!-- view more -->
            <div class="view__more">
              <a href="#">View all table</a>
            </div>
          </div>
        </section>
        <!-- Statistics -->
        <section class="col-6">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Statistics</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- Registration  -->
                <v-menu :nudge-bottom="5" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <Button
                        :elevation="0"
                        :outlined="true"
                        textColor="var(--primary-dark-color)"
                        width="max-content"
                        :svg="true"
                        svgRight="SvgAngleDown"
                        text="Registration"
                        minWidth="11.4rem"
                        height="3rem"
                        color="var(--border)"
                        contentClass="card__dropdown"
                      />
                    </div>
                  </template>
                  <v-list class="dropdown__list userDropDown">
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Registration</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Free Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Subscribed Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Suspend User</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <!-- view more -->
            <div class="view__more">
              <a href="#">Show all</a>
            </div>
          </div>
        </section>
        <!-- Cards by Country -->
        <section class="col-3">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Cards by Country</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- All Cards  -->
                <v-menu :nudge-bottom="5" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <Button
                        :elevation="0"
                        :outlined="true"
                        textColor="var(--primary-dark-color)"
                        width="max-content"
                        :svg="true"
                        svgRight="SvgAngleDown"
                        text="All Cards"
                        minWidth="11.4rem"
                        height="3rem"
                        color="var(--border)"
                        contentClass="card__dropdown"
                      />
                    </div>
                  </template>
                  <v-list class="dropdown__list userDropDown">
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Registration</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Subscribed Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Free Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Suspended Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Disabled Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <!-- view more -->
            <div class="view__more">
              <a href="#">View all</a>
            </div>
            <!-- table  -->
            <v-simple-table class="card_table no_hover">
              <template v-slot:default>
                <tbody>
                  <tr class="large1" v-for="item in country" :key="item.name">
                    <td>
                      <div class="img_context mb-0">
                        <!-- image  -->
                        <div class="img_container small">
                          <img :src="item.flag" alt="" />
                        </div>
                        {{ item.name }}
                      </div>
                    </td>
                    <td>
                      <p>{{ $formatNumber(item.value) }}</p>
                    </td>
                    <td class="text-right">
                      <p>({{ item.date }}%)</p>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </section>
        <!--======================= user filter  =======================-->
        <section class="col-12">
          <SearchPageUserOrigin />
        </section>
        <!--======================= user table  =======================-->
        <section class="col-12">
          <TablesCards />
        </section>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          user: "Legal",
          date: 56,
        },
        {
          user: "Legal",
          date: 56,
        },
        {
          user: "Legal",
          date: 56,
        },
        {
          user: "Legal",
          date: 56,
        },
        {
          user: "Legal",
          date: 56,
        },
      ],
      country: [
        {
          name: "Nigeria",
          flag: "/images/temp/flags/1.png",
          value: 400000,
          date: 78.4,
        },
        {
          name: "Ghana",
          flag: "/images/temp/flags/2.png",
          value: 40,
          date: 48.4,
        },
        {
          name: "Spain",
          flag: "/images/temp/flags/3.png",
          value: 30,
          date: 48.4,
        },
        {
          name: "Egypt",
          flag: "/images/temp/flags/3.png",
          value: 30,
          date: 48.4,
        },
        {
          name: "United Kingdom",
          flag: "/images/temp/flags/3.png",
          value: 30,
          date: 48.4,
        },
      ],
    };
  },
  computed: {
    cardContent() {
      return [
        {
          title: "Total Cards",
          value: 410235,
        },
        {
          title: "Total Beezlinq Cards",
          value: 410235,
        },
        {
          title: "Scanned Cards",
          value: 410235,
        },
        {
          title: "Public Cards",
          value: 410235,
        },
        {
          title: "Private Cards",
          value: 410235,
        },
        {
          title: "Active Cards",
          value: 410235,
        },
        {
          title: "Inactive Cards",
          value: 410235,
        },
        {
          title: "Archived Cards",
          value: 410235,
        },
        {
          title: "Thrashed Card",
          value: 410235,
        },
        {
          title: "Deleted Cards",
          value: 410235,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>