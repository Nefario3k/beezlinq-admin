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
      <!-- industries  -->
      <section class="industries">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center mb-2 mt-1">
              <h4 class="mb-0 titleCard">Industries by quantity of card</h4>
              <Tooltip icon="SvgInfo" text="View new users by country" />
            </aside>
            <!-- controls  -->
            <div class="button__controls">
              <!-- All Plans  -->
            </div>
          </div>
          <div
            class="py-2 d-flex align-center justify-space-between gap-3 w-100"
          >
            <v-simple-table class="w-100 card_table no_hover">
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in industryCards" :key="item.name" style="">
                    <td
                      style="
                        border: none;
                        font-size: 12px;
                        color: var(--primary-dark-color);
                      "
                    >
                      {{ item.name }}
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
                      {{ item.count }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </section>
      <!-- card views -->
      <section class="card-views">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center">
              <h4 class="mb-0 titleCard">Statistics of Card Views</h4>
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
                      text="This week"
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
                        >This week</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >This month</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >This year</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <!-- chart -->
          <div v-if="Object.keys(barChartData).length" class="py-2">
            <ChartBar :maxHeight="220" :barChartData="barChartData" />
          </div>
        </div>
      </section>
      <!-- card by country -->
      <section class="card-country">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center">
              <h4 class="mb-0 titleCard">Cards by Country</h4>
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
                        >All Cards</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Scanned Cards</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Beezlinq Cards</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div
            class="py-2 d-flex align-center justify-space-between gap-3 w-100"
          >
            <v-simple-table class="w-100 card_table no_hover">
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in countryCards" :key="item.name" style="">
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
                        text-align: right;
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
                      ({{ item.percent }}%)
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </section>
    </div>
    <div class="page_top_row mt-4">
      <AnalyticsCountryData name="temp cards" />
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
          title: "Total Cards",
          value: "412",
        },
        {
          title: "Total Beezlinq Cards",
          value: "245",
        },
        {
          title: "Scanned Cards",
          value: "89",
        },
        {
          title: "Public Cards",
          value: 387,
        },
        {
          title: "Private Cards",
          value: 56,
        },
        {
          title: "Active Cards",
          value: 398,
        },
        {
          title: "Inactive Cards",
          value: 11,
        },
        {
          title: "Archived Cards",
          value: 23,
        },
        {
          title: "Thrashed Card",
          value: 31,
        },
        {
          title: "Deleted Cards",
          value: 12,
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
        "Beezlinq View": [
          {
            label: "SUN",
            value: 60,
          },
          {
            label: "MON",
            value: 35,
          },
          {
            label: "TUE",
            value: 70,
          },
          {
            label: "WED",
            value: 14,
          },
          {
            label: "THU",
            value: 30,
          },
          {
            label: "FRI",
            value: 4,
          },
          {
            label: "SAT",
            value: 10,
          },
        ],
        "Guest View": [
          {
            label: "SUN",
            value: 40,
          },
          {
            label: "MON",
            value: 80,
          },
          {
            label: "TUE",
            value: 14,
          },
          {
            label: "WED",
            value: 90,
          },
          {
            label: "THU",
            value: 20,
          },
          {
            label: "FRI",
            value: 17,
          },
          {
            label: "SAT",
            value: 15,
          },
        ],
      },
      industryCards: [
        { name: "Legal", count: 56 },
        { name: "Creative", count: 49 },
        { name: "Health", count: 40 },
        { name: "Finance", count: 24 },
        { name: "Construction", count: 21 },
        { name: "Construction1", count: 21 },
        { name: "Construction2", count: 21 },
        { name: "Construction3", count: 21 },
      ],
      countryCards: [
        { name: "Nigeria", count: 56, percent: 78, flagName: "1" },
        { name: "Ghana", count: 49, percent: 48, flagName: "2" },
        { name: "Spain", count: 40, percent: 23, flagName: "3" },
        { name: "United States", count: 24, percent: 12, flagName: "5" },
        { name: "Egypt", count: 21, percent: 45, flagName: "2" },
        { name: "United Kingdom", count: 21, percent: 67, flagName: "5" },
        { name: "Nigeria", count: 21, percent: 95, flagName: "1" },
        { name: "Ghana", count: 21, percent: 20, flagName: "2" },
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

    section.industries {
      width: 29.2%;
    }

    section.card-views {
      width: 41.8%;
    }

    section.card-country {
      width: 26%;
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