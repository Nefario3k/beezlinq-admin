<template>
  <div>
    <section class="pageContent">
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Cards</h2>
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
        <!-- Top Seven Industries by quantity of card -->
        <section class="col">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">
                  Top Seven Industries by quantity of card
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
        <!-- Card Views -->
        <section class="col-5">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Card Views</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- Weekly  -->
                <DropDownBtn listNames="cards perweek" />
              </div>
            </div>
            <!-- chart -->
            <div v-if="Object.keys(barChartData).length" class="py-2">
              <ChartBar
                :maxHeight="210"
                :legend="true"
                :barChartData="barChartData"
              />
            </div>
          </div>
        </section>
        <!-- Cards by Country -->
        <section class="col">
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
                <DropDownBtn listNames="cards users" />
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
          <SearchPageCards />
        </section>
        <!--======================= user table  =======================-->
        <section class="col-12">
          <TablesCardsPageIndex />
        </section>
      </v-row>
    </section>
    <!--===================== panels and modals go here =====================-->
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
      barChartData: {
        "Beezlinq View": [
          {
            label: "SUN",
            value: 25,
          },
          {
            label: "MON",
            value: 5,
          },
          {
            label: "TUE",
            value: 16,
          },
          {
            label: "WED",
            value: 14,
          },
          {
            label: "THU",
            value: 14,
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
            value: 18,
          },
          {
            label: "MON",
            value: 14,
          },
          {
            label: "TUE",
            value: 14,
          },
          {
            label: "WED",
            value: 19,
          },
          {
            label: "THU",
            value: 3,
          },
          {
            label: "FRI",
            value: 17,
          },
          {
            label: "SAT",
            value: 4,
          },
        ],
      },
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
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>