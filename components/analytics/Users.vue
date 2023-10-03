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
            <aside style="grid-gap: 12px" class="d-flex align-center">
              <h4 class="mb-0 titleCard">Users active</h4>
              <Tooltip icon="SvgInfo" text="View new users by country" />
            </aside>
            <!-- controls  -->
            <div class="button__controls">
              <!-- Period  -->
              <DropDownBtn listNames="payment perThis" />
              <!-- All Plans  -->
              <DropDownBtn listNames="users type" />
            </div>
          </div>
          <div v-if="Object.keys(barChartData).length" class="py-2">
            <ChartBar :maxHeight="250" :barChartData="barChartData" />
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
              <h4 class="mb-0 titleCard">User Statistics</h4>
              <Tooltip icon="SvgInfo" text="View new users by country" />
            </aside>
            <!-- controls  -->
            <div class="button__controls">
              <!-- All Plans  -->
              <DropDownBtn listNames="users dividen" />
            </div>
          </div>
          <div
            v-if="pieChartData.length"
            class="py-2 d-flex align-center justify-space-between gap-3 w-100"
          >
            <ChartPie :maxWidth="65" :pieChartData="pieChartData" />
            <div class="pieLabels lineBs">
              <ul>
                <li v-for="(items, id) in pieChartData" :key="id + 994488">
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
    <div class="page_top_row mt-4">
      <AnalyticsCountryData />
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
          title: "Total Users",
          value: "1,023",
        },
        {
          title: "Free Users",
          value: "786",
        },
        {
          title: "Subscribed Users",
          value: "237",
        },
        {
          title: "Active Users",
          value: 908,
        },
        {
          title: "Inactive Users",
          value: 115,
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