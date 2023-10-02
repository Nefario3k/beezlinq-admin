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
      <section class="gateway category">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center mb-2 mt-1">
              <h4 class="mb-0 titleCard">Template Usage</h4>
              <Tooltip icon="SvgInfo" text="View new users by country" />
            </aside>
            <!-- controls  -->
            <div class="button__controls">
              <!-- All Plans
                                <a href="">View Details</a>  -->
            </div>
          </div>
          <div
            v-if="pieChartData.length"
            class="py-2 d-flex align-center justify-space-between gap-3 w-100"
          >
            <ChartPie
              :cutout="15"
              :maxWidth="60"
              :pieChartData="pieChartData"
            />
            <div class="pieLabels templates">
              <ul>
                <li v-for="(items, id) in pieChartData" :key="id + 994488">
                  <!-- label name -->
                  <span>{{ items.label }}</span>
                  <!-- label color -->
                  <span
                    :style="{ backgroundColor: items.color }"
                    class="tag"
                  ></span>
                  <!-- label % -->
                  <span class="percent">{{ items.value }}%</span>
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
            <aside style="grid-gap: 12px" class="d-flex align-center">
              <h4 class="mb-0 titleCard">Usage by Country</h4>
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
          <div v-if="Object.keys(barChartData).length" class="py-2">
            <ChartBar :barChartData="barChartData" :maxHeight="220" />
          </div>
        </div>
      </section>
    </div>
    <div class="page_top_row d-flex mt-4">
      <!-- gateway  -->
      <section class="gateway category">
        <div class="card_container no_inline">
          <!-- header  -->
          <div
            class="d-flex align-center justify-space-between gap-5 border__header"
          >
            <!-- header nd label  -->
            <aside style="grid-gap: 12px" class="d-flex align-center mb-2 mt-1">
              <h4 class="mb-0 titleCard">Template use</h4>
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
                      text="Today"
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
                        >Overall</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Today</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >This Week</v-list-item-title
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
                  <tr v-for="item in templateInfo" :key="item.name" style="">
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
                      {{ item.info }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
            <aside style="grid-gap: 12px" class="d-flex align-center">
              <h4 class="mb-0 titleCard">Use per Template</h4>
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
                      text="All template"
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
                        >Green Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Orange Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Purple Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Red Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Lucid Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="dropdown__list-item">
                    <v-list-item-content>
                      <v-list-item-title class="dropdown__list-title"
                        >Dark Template</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div v-if="Object.keys(barChartData).length" class="py-2">
            <ChartBar :barChartData="barChartData" :maxHeight="220" />
          </div>
        </div>
      </section>
    </div>
    <div class="page_top_row mt-4">
      <AnalyticsCountryData name="temp" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardContent: [
        {
          title: "Total Templates",
          value: "24",
        },
        {
          title: "Free Template",
          value: "10",
        },
        {
          title: "Premium Template",
          value: "14",
        },
        {
          title: "Total Template Views",
          value: 865,
        },
        {
          title: "Custom Template",
          value: 11,
        },
      ],
      pieChartData: [
        {
          label: "Free Template",
          value: 56,
          color: "#0062FF",
        },
        {
          label: "Paid Templates",
          value: 34,
          color: "#FF993A",
        },
        {
          label: "Custom Templates",
          value: 10,
          color: "#00317F",
        },
      ],
      barChartData: {
        Usage: [
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
      templateInfo: [
        { name: "Lucid Template", info: "22 cards (32.0%)" },
        { name: "Black Template", info: "18 cards (24.0%)" },
        { name: "Orange Template", info: "28 cards (32.0%)" },
        { name: "Black Template", info: "18 cards (24.0%)" },
        { name: "Orange Template", info: "28 cards (32.0%)" },
        { name: "Black Template", info: "18 cards (24.0%)" },
        { name: "Orange Template", info: "28 cards (32.0%)" },
        { name: "Orange Template", info: "28 cards (32.0%)" },
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

  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-color);
  }
}
</style>