<template>
  <div>
    <!--==================== search input  ====================-->
    <div class="search__area">
      <div class="card_wrapper">
        <Cards
          v-for="(items, index) in cardContent"
          :key="index + 28283782"
          :cardContent="items"
        />
      </div>
    </div>
    <div class="page_top_row d-flex">
      <!-- gateway  -->
      <section class="gateway">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center mb-2 mt-1">
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
                        >Nigeria</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Ghana</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Panama</v-list-item-title
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
      <!-- users income by country -->
      <section class="earnings-country">
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
                        >Nigeria</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Ghana</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Panama</v-list-item-title
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
            <v-simple-table class="w-100 card_table no_hover">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      class="text-left"
                      style="
                        text-align: left;
                        border: none;
                        font-size: 12px;
                        color: var(--label-light3);
                        font-weight: 500;
                      "
                    >
                      Country
                    </th>
                    <th
                      class="text-left"
                      style="
                        text-align: left;
                        border: none;
                        font-size: 12px;
                        color: var(--label-light3);
                        font-weight: 500;
                      "
                    >
                      Users
                    </th>
                    <th
                      class="text-right"
                      style="
                        text-align: left;
                        border: none;
                        font-size: 12px;
                        color: var(--label-light3);
                        font-weight: 500;
                      "
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in countryUsers" :key="item.name" style="">
                    <td
                      style="
                        border: none;
                        font-size: 12px;
                        color: var(--primary-dark-color);
                      "
                    >
                      <img
                        :src="`images/temp/flags/${item.flagName}.png`"
                        width="20"
                        :alt="`${item.name} flag`"
                      />
                      {{ item.name }}
                    </td>
                    <td
                      style="
                        text-align: left;
                        border: none;
                        font-size: 12px;
                        color: #00317f;
                        font-weight: 500;
                      "
                    >
                      {{ item.count }}
                    </td>
                    <td
                      style="
                        text-align: right;
                        border: none;
                        font-size: 12px;
                        color: #00317f;
                        font-weight: 500;
                      "
                    >
                      {{ item.amount }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </section>
    </div>
    <div class="page_top_row d-flex mt-4">
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
                      text="All Currency"
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
                        >All Currency</v-list-item-title
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
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Naira</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
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
                        >Daily</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
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
          <div v-if="Object.keys(barChartData).length" class="py-2">
            <ChartBar :maxHeight="300" :barChartData="barChartData" />
          </div>
        </div>
      </section>
    </div>
    <div class="page_top_row mt-4">
      <AnalyticsCountryData name="temp finances" />
    </div>
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
      countryUsers: [
        { name: "Nigeria", count: 56, flagName: "1", amount: "N35, 009 " },
        { name: "Ghana", count: 49, flagName: "2", amount: "N29, 485 " },
        { name: "Spain", count: 40, flagName: "3", amount: "N15, 000 " },
        {
          name: "United States",
          count: 24,
          flagName: "5",
          amount: "N10, 009 ",
        },
        { name: "Egypt", count: 21, flagName: "2", amount: "N10, 009 " },
      ],
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
      width: 34.2%;
    }

    section.earnings-country {
      width: 64.3%;
    }

    section.earnings {
      width: 100%;
    }
  }

  .card_container.no_inline.user_no_line > * {
    padding: 0px;
  }

  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-color);
  }
}
</style>