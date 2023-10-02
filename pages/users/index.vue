<template>
  <div>
    <section class="pageContent">
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Users</h2>
        <!-- date filter  -->
        <PageDateFilter />
      </div>
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
        <!-- New Users -->
        <section class="col-4">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">New Users</h4>
                <Tooltip icon="SvgInfo" text="View new users by country" />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- location  -->
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
                        text="All Location"
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
            <!-- table  -->
            <v-simple-table class="card_table no_hover mt-2">
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in transactions" :key="item.name">
                    <td>
                      <div class="img_context mb-0">
                        <!-- image  -->
                        <div class="img_container small">
                          <img src="/images/temp/user2.jpg" alt="" />
                        </div>
                        <p>
                          <a href="#">{{ item.user }}</a>
                        </p>
                      </div>
                    </td>
                    <td>{{ item.plan }}</td>
                    <td class="text-right">{{ item.date }}</td>
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
        <section class="col-4">
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
                <!-- All Users  -->
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
                        text="All Users"
                        minWidth="13.4rem"
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
                          >All Users</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
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
            <div
              v-if="pieChartData.length"
              class="py-2 d-flex align-center justify-space-between gap-3 w-100"
            >
              <ChartPie :pieChartData="pieChartData" />
              <div class="pieLabels country">
                <ul>
                  <li v-for="(items, id) in pieChartData" :key="id + 994488">
                    <!-- label color -->
                    <span
                      :style="{ backgroundColor: items.color }"
                      class="tag"
                    ></span>
                    <!-- image  -->
                    <div class="img_container">
                      <img :src="items.flag" alt="" />
                    </div>
                    <!-- label name -->
                    <span>{{ items.label }}</span>
                    <!-- label % -->
                    <span class="percent">{{ items.value }}%</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- view more -->
            <div class="view__more">
              <a href="#">Show all</a>
            </div>
          </div>
        </section>
        <!-- Users by card -->
        <section class="col-4">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Users by card</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- All Location  -->
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
                        text="All Location"
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
                          >All Location</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
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

            <!-- table  -->
            <v-simple-table class="card_table no_hover">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>No. of Card</th>
                    <th>
                      <!-- view more -->
                      <div class="m-0 view__more">
                        <a href="#">View all</a>
                      </div>
                    </th>
                  </tr>
                </thead>
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
          <TablesUserPageIndex />
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
          user: "John Doe",
          plan: "Nigeria",
          date: "25-06-2023",
        },
        {
          user: "John Doe",
          plan: "Nigeria",
          date: "25-06-2023",
        },
        {
          user: "John Doe",
          plan: "Nigeria",
          date: "25-06-2023",
        },
        {
          user: "John Doe",
          plan: "United Kingdom",
          date: "25-06-2023",
        },
        {
          user: "John Doe",
          plan: "Spain",
          date: "25-06-2023",
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
      pieChartData: [
        {
          label: "Nigeria",
          value: 56,
          color: "#0062FF",
          flag: "/images/temp/flags/1.png",
        },
        {
          label: "Ghana",
          value: 24,
          color: "#FF993A",
          flag: "/images/temp/flags/2.png",
        },
        {
          label: "Spain",
          value: 12,
          color: "#00317F",
          flag: "/images/temp/flags/3.png",
        },
        {
          label: "Egypt",
          value: 8,
          color: "#C3C3FF",
          flag: "/images/temp/flags/2.png",
        },
      ],
    };
  },
  computed: {
    cardContent() {
      return [
        {
          title: "Total Users",
          value: 410235,
        },
        {
          title: "Free Users",
          value: 145,
        },
        {
          title: "Subscribed Users",
          value: 234,
        },
        {
          title: "Active Users",
          value: 1045,
        },
        {
          title: "Inactive Users",
          value: 845,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>