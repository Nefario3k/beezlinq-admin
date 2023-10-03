<template>
  <div>
    <section class="freeRoaming">
      <section class="pageContent">
        <h2 class="page_head">General Analytics</h2>
        <!-- control  -->
        <div class="tabsArea user userTab mb-0">
          <v-tabs
            center-active
            :show-arrows="false"
            v-model="tabIndicator"
            background-color="transparent"
            color="var(--primary-dark-color)"
            :hide-slider="false"
            class="v_tabs_wrapper"
          >
            <v-tab
              v-for="item in tabItems"
              :key="item"
              class="v_tabs_items"
              :ripple="false"
            >
              <span>{{ item }}</span>
            </v-tab>
          </v-tabs>
        </div>
      </section>
    </section>
    <section class="pageContent">
      <!--========================= navigation bar  =========================-->
      <div
        class="mb-5 pt-0 card_container user__card_container no_inline user_no_line"
        style="background-color: var(--primary-lte-color3)"
      >
        <!-- tab items  -->
        <v-tabs-items
          v-model="tabIndicator"
          style="background-color: transparent !important"
          class="tab__items project_single_tab m-0"
        >
          <!-- Overview -->
          <v-tab-item class="p-0 m-0">
            <SearchPageAnalytics :filterName="tabItems[0]" />
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <!-- Overview  -->
              <div class="page_top_row d-flex">
                <!-- gateway  -->
                <section class="gateway">
                  <div class="card_container no_inline">
                    <!-- header  -->
                    <div
                      class="d-flex align-center justify-space-between gap-5 border__header"
                    >
                      <!-- header nd label  -->
                      <aside style="grid-gap: 12px" class="d-flex align-center">
                        <h4 class="mb-0 titleCard">
                          Users Login & Registration
                        </h4>
                        <Tooltip
                          icon="SvgInfo"
                          text="View new users by country"
                        />
                      </aside>
                      <!-- controls  -->
                      <div class="button__controls">
                        <!-- All Plans  -->
                        <DropDownBtn listNames="analytics userAct" />
                      </div>
                    </div>

                    <ChartLine
                      :lineChartData="lineChartData"
                      :maxHeight="250"
                    />
                  </div>
                </section>
                <!-- earnings -->
                <section class="earnings">
                  <div class="card_container no_inline">
                    <!-- header  -->
                    <div
                      class="d-flex align-center justify-space-between gap-5 border__header"
                    >
                      <!-- header nd label  -->
                      <aside style="grid-gap: 12px" class="d-flex align-center">
                        <h4 class="mb-0 titleCard">User Statistics</h4>
                        <Tooltip
                          icon="SvgInfo"
                          text="View new users by country"
                        />
                      </aside>
                      <!-- controls  -->
                      <div class="button__controls">
                        <!-- All Plans  -->
                        <DropDownBtn listNames="payment all" />
                      </div>
                    </div>
                    <div
                      v-if="pieChartData.length"
                      class="py-2 d-flex align-center justify-space-between gap-3 w-100"
                    >
                      <ChartPie :maxWidth="65" :pieChartData="pieChartData" />
                      <div class="pieLabels lineBs">
                        <ul>
                          <li
                            v-for="(items, id) in pieChartData"
                            :key="id + 994488"
                          >
                            <!-- image  -->
                            <div class="img_container">
                              <img :src="items.flag" alt="" />
                            </div>
                            <!-- label name -->
                            <span>{{ items.label }}</span>
                            <!-- label % -->
                            <span class="percent">{{ items.value }}%</span>
                            <!-- label color -->
                            <span class="tag">
                              <span
                                :style="{
                                  width: `${items.value}%`,
                                  backgroundColor: items.color,
                                }"
                              ></span
                            ></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!-- users -->
              <div class="page_top_row">
                <h2 class="page_head mb-2 mt-6">Users</h2>
                <AnalyticsCountryData />
              </div>
              <!-- Templates -->
              <div class="page_top_row">
                <h2 class="page_head mb-2 mt-6">Templates</h2>
                <!-- second row  -->
                <div class="page_top_row d-flex">
                  <!-- gateway  -->
                  <section class="gateway category">
                    <div class="card_container no_inline">
                      <!-- header  -->
                      <div
                        class="d-flex align-center justify-space-between gap-5 border__header"
                      >
                        <!-- header nd label  -->
                        <aside
                          style="grid-gap: 12px"
                          class="d-flex align-center mb-2 mt-1"
                        >
                          <h4 class="mb-0 titleCard">
                            Template category Usage
                          </h4>
                          <Tooltip
                            icon="SvgInfo"
                            text="View new users by country"
                          />
                        </aside>
                        <!-- controls  -->
                        <div class="button__controls">
                          <!-- All Plans  -->
                          <a href="">View Details</a>
                        </div>
                      </div>
                      <div
                        v-if="pieChartData.length"
                        class="py-2 d-flex align-center justify-space-between gap-3 w-100"
                      >
                        <ChartPie :maxWidth="60" :pieChartData="pieChartData" />
                        <div class="pieLabels lineBs largeFont">
                          <ul>
                            <li
                              v-for="(items, id) in pieChartData"
                              :key="id + 994488"
                            >
                              <!-- label name -->
                              <span>{{ items.label }}</span>
                              <!-- label % -->
                              <span class="percent">{{ items.value }}%</span>
                              <!-- label color -->
                              <span class="tag">
                                <span
                                  :style="{
                                    width: `${items.value}%`,
                                    backgroundColor: items.color,
                                  }"
                                ></span
                              ></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- earnings -->
                  <section class="earnings country">
                    <div class="card_container no_inline">
                      <!-- header  -->
                      <div
                        class="d-flex align-center justify-space-between gap-5 border__header"
                      >
                        <!-- header nd label  -->
                        <aside
                          style="grid-gap: 12px"
                          class="d-flex align-center"
                        >
                          <h4 class="mb-0 titleCard">
                            Template Usage by Country
                          </h4>
                          <Tooltip
                            icon="SvgInfo"
                            text="View new users by country"
                          />
                        </aside>
                        <!-- controls  -->
                        <div class="button__controls">
                          <!-- All Plans  -->
                          <DropDownBtn listNames="country temp" />
                        </div>
                      </div>
                      <div v-if="Object.keys(barChartData).length" class="py-2">
                        <ChartBar
                          :maxHeight="250"
                          :barChartData="barChartData"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <!-- Payments -->
              <div class="page_top_row">
                <h2 class="page_head mb-2 mt-6">Payments</h2>
                <div class="page_top_row d-flex">
                  <!-- gateway  -->
                  <section class="gateway payment">
                    <div class="card_container no_inline">
                      <!-- header  -->
                      <div
                        class="d-flex align-center justify-space-between gap-5 border__header"
                      >
                        <!-- header nd label  -->
                        <aside
                          style="grid-gap: 12px"
                          class="d-flex align-center mb-2 mt-1"
                        >
                          <h4 class="mb-0 titleCard">Payment by Country</h4>
                          <Tooltip
                            icon="SvgInfo"
                            text="View new users by country"
                          />
                        </aside>
                        <!-- controls  -->
                        <div class="button__controls">
                          <!-- All Plans  -->
                          <a href="">View Details</a>
                        </div>
                      </div>
                      <v-simple-table class="card_table no_hover mt-2">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Country</th>
                              <th class="text-left">Users</th>
                              <th class="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in transactions" :key="item.name">
                              <td>
                                <div class="img_context mb-0">
                                  <!-- image  -->
                                  <div class="img_container small">
                                    <img :src="item.imgURL" alt="" />
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
                    </div>
                  </section>
                  <!-- earnings -->
                  <section class="earnings by_time">
                    <div class="card_container no_inline">
                      <!-- header  -->
                      <div
                        class="d-flex align-center justify-space-between gap-5 border__header"
                      >
                        <!-- header nd label  -->
                        <aside
                          style="grid-gap: 12px"
                          class="d-flex align-center"
                        >
                          <h4 class="mb-0 titleCard">Earnings</h4>
                          <Tooltip
                            icon="SvgInfo"
                            text="View new users by country"
                          />
                        </aside>
                        <!-- controls  -->
                        <div class="button__controls">
                          <!-- All Plans  -->
                          <DropDownBtn listNames="payment currency" />
                          <!-- Period  -->
                          <DropDownBtn listNames="payment perweek" />
                          <!-- Locations  -->
                          <DropDownBtn listNames="payment all" />
                        </div>
                      </div>
                      <div v-if="Object.keys(barChartData).length" class="py-2">
                        <ChartBar
                          :maxHeight="250"
                          :barChartData="barChartData"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </v-tab-item>
          <!-- Analytics USER -->
          <v-tab-item class="p-0 m-0">
            <SearchPageAnalytics :filterName="tabItems[1]" />
            <AnalyticsUsers />
          </v-tab-item>
          <!-- Analytics TEMPLATE-->
          <v-tab-item class="p-0 m-0">
            <SearchPageAnalytics :filterName="tabItems[2]" />
            <AnalyticsTemplate />
          </v-tab-item>
          <!-- Analytics CARDS-->
          <v-tab-item class="p-0 m-0">
            <SearchPageAnalytics :filterName="tabItems[3]" />
            <AnalyticsCards />
          </v-tab-item>
          <!-- Analytics FINANCE-->
          <v-tab-item class="p-0 m-0">
            <SearchPageAnalytics :filterName="tabItems[4]" />
            <AnalyticsFinance />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndicator: 0,
      tabItems: ["Overview", "Users", "Template", "Cards", "Finance"],
      transactions: [
        {
          user: "Nigeria",
          plan: "45",
          date: "N35, 009 ",
          imgURL: "/images/temp/flags/1.png",
        },
        {
          user: "Ghana",
          plan: "36",
          date: "N29,485",
          imgURL: "/images/temp/flags/2.png",
        },
        {
          user: "Spain",
          plan: "25",
          date: "N15, 000",
          imgURL: "/images/temp/flags/3.png",
        },
        {
          user: "United State",
          plan: "23",
          date: "N10, 009",
          imgURL: "/images/temp/flags/5.png",
        },
        {
          user: "United State",
          plan: "23",
          date: "N10, 009",
          imgURL: "/images/temp/flags/5.png",
        },
        {
          user: "United State",
          plan: "23",
          date: "N10, 009",
          imgURL: "/images/temp/flags/5.png",
        },
      ],
      cardContent: [
        {
          title: "Total Earnings",
          value: "N 56,098",
        },
        {
          title: "Total Subscription",
          value: "N 40,098",
        },
        {
          title: "Scan Unit Sold",
          value: "N 56,000",
        },
        {
          title: "Total Invoice",
          value: 45,
        },
        {
          title: "Pending Invoice",
          value: 45,
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
      barChartData: {
        templates: [
          {
            label: "Green Temp",
            value: 25,
          },
          {
            label: "Blue Temp",
            value: 20,
          },
          {
            label: "Orange Temp",
            value: 16,
          },
          {
            label: "Lucid Temp",
            value: 13,
          },
          {
            label: "Purple Temp",
            value: 13,
          },
          {
            label: "Blue Temp",
            value: 34,
          },
          {
            label: "Orange Temp",
            value: 34,
          },
          {
            label: "Lucid Temp",
            value: 40,
          },
          {
            label: "Lucid Temp",
            value: 9,
          },
        ],
      },
      lineChartData: {
        login: [
          {
            label: "SUN",
            value: 40,
          },
          {
            label: "MON",
            value: 30,
          },
          {
            label: "TUE",
            value: 40,
          },
          {
            label: "WED",
            value: 10,
          },
          {
            label: "THUR",
            value: 60,
          },
          {
            label: "FRI",
            value: 35,
          },
          {
            label: "SAT",
            value: 15,
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.pageContent {
  --radius: 0.8rem;

  .page_top_row {
    gap: 1.4%;
    width: 100%;

    section {
      min-height: 30rem;
      background-color: var(--card1);
      border-radius: var(--radius);
      flex-grow: 1;
    }

    section.gateway {
      width: 60%;

      &.category {
        width: 34.4%;
      }

      &.payment {
        width: 32.2%;
      }
    }

    section.earnings {
      width: 38.6%;

      &.country {
        width: 64.1%;
      }

      &.by_time {
        width: 66.3%;
      }
    }
  }

  .card_container.no_inline.user_no_line > * {
    padding: 0px;
  }

  .countries-container {
    .world {
      width: 49%;

      img {
        max-width: 100%;
      }
    }

    .countries {
      .countries-heading {
        font-size: 14px;
        color: var(--label-light3);
      }

      width: 21.2%;
    }
  }

  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-color);
  }
}
</style>