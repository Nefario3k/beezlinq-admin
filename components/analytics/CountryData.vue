<template>
  <section class="">
    <div class="card_container no_inline">
      <!-- header  -->
      <div
        class="d-flex align-center justify-space-between gap-5 border__header"
      >
        <!-- header nd label  -->
        <!-- controls  -->
        <div class="button__controls">
          <template v-if="name.includes('temp')">
            <p style="font-weight: 700">
              <span v-if="name === 'temp'">Usage by Country</span>
              <span v-else-if="name.includes('finances')"
                >Payment by Country</span
              >
              <span v-else>Card Created by Country</span>
            </p>
            <!-- All Template  -->
            <DropDownBtn listNames="template type" />
          </template>
          <template v-else>
            <!-- All Users  -->
            <DropDownBtn listNames="users type" />
            <p style="font-weight: 700">by Country</p>
          </template>
        </div>
        <aside style="grid-gap: 12px" class="d-flex align-center">
          <h4 class="titleCardLink">View Details</h4>
        </aside>
      </div>
      <div class="countries-container py-2 d-flex justify-space-between w-100">
        <div class="world">
          <!-- <img src="images/temp/world_map.png" alt="users on world map" /> -->
          <ChartWorld :chartData="infovert" v-if="infovert.length" />
        </div>
        <div class="countries">
          <div
            class="countries-heading d-flex align-center justify-space-between mb-4"
          >
            <span>Country</span><span>No. Users</span>
          </div>
          <div class="countryLoop">
            <CountryInfo
              v-for="(items, id) in infovert"
              :key="id + 32424"
              :country="items.title"
              :flag="items.flag"
              :color="items.color"
              :users="items.users"
            />
          </div>
        </div>
        <div class="countries">
          <div
            class="countries-heading d-flex align-center justify-space-between mb-4"
          >
            <span>Country</span><span>No. Users</span>
          </div>
          <div class="countryLoop">
            <CountryInfo
              v-for="(items, id) in infovert"
              :key="id + 32424"
              :country="items.title"
              :flag="items.flag"
              :color="items.color"
              :users="items.users"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "user",
    },
  },
  data() {
    return {};
  },
  computed: {
    infovert() {
      return [
        {
          title: "Nigeria",
          color: this.$getChartColor(411100736),
          flag: 1,
          users: 411100736,
        },
        {
          title: "Spain",
          color: this.$getChartColor(100736),
          flag: 3,
          users: 100736,
        },
        {
          title: "Ghana",
          color: this.$getChartColor(3000),
          flag: 2,
          users: 3000,
        },
        {
          title: "United States of America",
          color: this.$getChartColor(1532007),
          flag: 5,
          users: 1532007,
        },
        {
          title: "United Kingdom",
          color: this.$getChartColor(5000032),
          flag: 3,
          users: 5000032,
        },
        {
          title: "Brazil",
          color: this.$getChartColor(1620232),
          flag: 3,
          users: 1620232,
        },
        {
          title: "Russia",
          color: this.$getChartColor(1600),
          flag: 3,
          users: 1600,
        },
        {
          title: "South Africa",
          color: this.$getChartColor(2323323),
          flag: 3,
          users: 2323323,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.countryLoop {
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
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
</style>