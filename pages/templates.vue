<template>
  <div>
    <section class="pageContent">
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Beezlinq Templates</h2>

        <div style="grid-gap: 8px" class="d-flex align-center flex-wrap">
          <!-- date filter  -->
          <PageDateFilter />
          <Button
            @click="$refs.create.showDialogue()"
            height="4.8rem"
            minWidth="19.1rem"
            color="var(--primary-color)"
            text="Add New Template"
            contentClass="addon"
          />
        </div>
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
        <!-- Template Usage Category -->
        <section class="col-3">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Template Usage Category</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
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
        <!-- Views and Previews -->
        <section class="col-6">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Views and Previews</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- Today  -->
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
                          >Today</v-list-item-title
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
                <!-- Template Usage  -->
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
                        text="Template Usage"
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
                          >Template Usage</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Template Previews</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <div v-if="Object.keys(barChartData).length" class="py-2">
              <ChartBar :barChartData="barChartData" />
            </div>
          </div>
        </section>
        <!-- Template use -->
        <section class="col-3">
          <div class="card_container no_inline">
            <!-- header  -->
            <div
              class="d-flex align-center justify-space-between gap-5 border__header"
            >
              <!-- header nd label  -->
              <aside style="grid-gap: 12px" class="d-flex align-center">
                <h4 class="mb-0 titleCard">Template use</h4>
                <Tooltip
                  icon="SvgInfo"
                  text="Users who recently registered on the platform"
                />
              </aside>
              <!-- controls  -->
              <div class="button__controls">
                <!-- All Template  -->
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
                        text="All Template"
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
                          >All template</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Free Template</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Premium Template</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="dropdown__list-item">
                      <v-list-item-content>
                        <v-list-item-title class="dropdown__list-title"
                          >Custom template</v-list-item-title
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
                        {{ item.name }}
                      </div>
                    </td>
                    <td>
                      <p>
                        {{ $formatNumber(item.value) }} card{{
                          item.value > 1 ? "s" : ""
                        }}
                      </p>
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
        <!--======================= temp filter  =======================-->
        <section class="col-12">
          <SearchPageTemplate />
        </section>
        <!--======================= temp content  =======================-->
        <section class="col-12 mb-15">
          <v-row class="templates__row">
            <div
              v-for="n in 24"
              :key="n + 21212121212"
              class="col-sm-2 col-md-4 col-12"
            >
              <div class="card_container no_inline templates_container">
                <!-- image  -->
                <div class="temp_img_wrapper">
                  <div class="image__box">
                    <img src="/images/temp/templates/1.png" alt="" />
                  </div>
                </div>
                <!-- conent  -->
                <div class="template__content">
                  <!-- content data  -->
                  <div>
                    <div>
                      <p class="label">Personal</p>
                      <p class="title_temp">Green Temp</p>
                    </div>
                    <p class="tag">
                      <span>free</span>
                    </p>
                  </div>
                  <!-- action  -->
                  <v-menu nudge-left="50%" offset-y min-width="15.6rem">
                    <template v-slot:activator="{ on, attrs }">
                      <div
                        v-bind="attrs"
                        v-on="on"
                        class="action__activator non_table"
                      >
                        <SvgDotsHorizontal />
                      </div>
                    </template>
                    <v-list class="dropdown__list">
                      <!-- Edit  -->
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Edit</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <!-- Archive  -->
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Archive</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <!-- Delete  -->
                      <v-list-item class="dropdown__list-item">
                        <v-list-item-content>
                          <v-list-item-title class="dropdown__list-title"
                            >Delete</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </div>
          </v-row>
        </section>
      </v-row>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCreateTemplate
      @showInfo="
        (val) => {
          $refs.info_modal.showDialogue(val);
        }
      "
      ref="create"
    />
    <ModalInfo @closePanel="$refs.create.closeAll()" ref="info_modal" />
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
          name: "Green Template",
          value: 40,
          date: 78.4,
        },
        {
          name: "Blue Template",
          value: 40,
          date: 48.4,
        },
        {
          name: "Orange Template",
          value: 30,
          date: 48.4,
        },
        {
          name: "Lucid Template",
          value: 30,
          date: 48.4,
        },
        {
          name: "Black Template",
          value: 1,
          date: 48.4,
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
  computed: {
    cardContent() {
      return [
        {
          title: "Total Templates",
          value: 24,
        },
        {
          title: "Free Templates",
          value: 10,
        },
        {
          title: "Premium Template",
          value: 4,
        },
        {
          title: "Total Template Views",
          value: 1045,
        },
        {
          title: "Custom Template",
          value: 10,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>