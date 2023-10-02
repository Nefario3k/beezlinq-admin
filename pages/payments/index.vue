<template>
  <div>
    <section class="pageContent">
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Payment</h2>
        <!-- date filter  -->
        <div class="d-flex align-center gap-3">
          <PageDateFilter />
          <v-menu :nudge-bottom="5" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <Button
                  :elevation="0"
                  :outlined="true"
                  textColor="var(--primary-dark-color)"
                  width="max-content"
                  :svg="true"
                  svgLeft="SvgLogoNflag"
                  svgRight="SvgAngleDown"
                  text="Naira"
                  minWidth="11.8rem"
                  height="4.4rem"
                  color="var(--border)"
                  contentClass="card__dropdown"
                />
              </div>
            </template>
            <v-list class="dropdown__list userDropDown">
              <v-list-item class="dropdown__list-item">
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Naira</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="dropdown__list-item">
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Dollar</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="card_wrapper">
        <Cards
          v-for="(items, index) in cardContent"
          :key="index + 28283782"
          :cardContent="items"
        />
      </div>
      <!-- second row  -->
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
                <h4 class="mb-0 titleCard">Payment Gateway</h4>
                <Tooltip icon="SvgInfo" text="View new users by country" />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- All Plans  -->
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
                        text="All Plans"
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
                          >All Plans</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Subscription</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Scan Unit</v-list-item-title
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
              <ChartPie :maxWidth="60" :pieChartData="pieChartData" />
              <div class="pieLabels">
                <ul>
                  <li v-for="(items, id) in pieChartData" :key="id + 994488">
                    <!-- label color -->
                    <span
                      :style="{ backgroundColor: items.color }"
                      class="tag"
                    ></span>
                    <!-- label name -->
                    <span>{{ items.label }}</span>
                    <!-- label % -->
                    <span class="percent">{{ items.value }}%</span>
                  </li>
                </ul>
              </div>
            </div>
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
                <h4 class="mb-0 titleCard">Earnings</h4>
                <Tooltip icon="SvgInfo" text="View new users by country" />
              </aside>
              <!-- controls  -->
              <div class="d-flex align-center">
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
                          text="Monthly"
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
                            >Weekly</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Monthly</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Yearly</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <div class="button__controls ml-2">
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
                          text="Subscription"
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
                            >All Payment</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Plan Subscription</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Scan Unit</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </div>
            <!-- chart -->
            <div v-if="Object.keys(barChartData).length" class="py-2">
              <ChartBar
                type="payment"
                :maxHeight="210"
                :barChartData="barChartData"
              />
            </div>
          </div>
        </section>
        <!-- country -->
        <section class="country">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Subscribed Users by Country</h4>
                <Tooltip icon="SvgInfo" text="View new users by country" />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- All Plans  -->
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
                        text="All Plans"
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
                          >All Plans</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Subscription</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Scan Unit</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <!-- table  -->
            <!-- view more -->
            <div class="view__more">
              <a href="#">View all</a>
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
      </div>
      <v-row class="mt-4">
        <!--======================= payment filter  =======================-->
        <section class="col-12">
          <SearchPagePayment />
        </section>
        <!--===================== payment history table  ====================-->
        <section class="col-12">
          <TablesPaymentHistory />
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
          label: "Paystack",
          value: 56,
          color: "#0062FF",
        },
        {
          label: "Google IAP",
          value: 24,
          color: "#FF993A",
        },
        {
          label: "Flutterwave",
          value: 10,
          color: "#00317F",
        },
        {
          label: "Apple IAP",
          value: 10,
          color: "#E2E2FF",
        },
      ],
      barChartData: {
        Earnings: [
          {
            label: "Jan 2023",
            value: 6000,
          },
          {
            label: "Feb 2023",
            value: 11000,
          },
          {
            label: "Mar 2023",
            value: 3345,
          },
          {
            label: "Apr 2023",
            value: 5000,
          },
          {
            label: "May 2023",
            value: 1200,
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
    gap: 1.4rem;

    section {
      min-height: 30rem;
      background-color: var(--card1);
      border-radius: var(--radius);
    }

    section.gateway {
      width: 30%;
    }

    section.earnings {
      width: 37%;
    }

    section.country {
      width: 33%;
    }
  }
}
</style>