<template>
  <div>
    <section class="pageContent">
      <h2 class="page_head">Dashboard</h2>
      <v-row class="page_top_row">
        <!-- summary section  -->
        <section class="col-8 row">
          <!-- sub totals  -->
          <div
            class="col-4"
            v-for="(items, index) in cardContent"
            :key="index + 28283782"
          >
            <Cards :cardContent="items" />
          </div>
          <!-- statistics  -->
          <div class="col-12">
            <!-- Statistics -->
            <div class="card_container stats">
              <div class="mb-6 d-flex align-center justify-space-between gap-5">
                <!-- header nd label  -->
                <aside style="grid-gap: 24px" class="d-flex align-center">
                  <h4 class="mb-0 titleCard">Statistics</h4>
                  <div class="chart__label">
                    <div>
                      <span
                        style="background-color: var(--primary-color)"
                        class="ball"
                      ></span>
                      <span>Created Cards</span>
                    </div>
                    <div>
                      <span
                        style="background-color: var(--pending-color2)"
                        class="ball"
                      ></span>
                      <span>Users</span>
                    </div>
                  </div>
                </aside>
                <!-- radio filter  -->
                <div class="radio__filter">
                  <v-radio-group
                    active-class="radio_active"
                    :hide-details="true"
                    :column="false"
                    v-model="radioGroup"
                  >
                    <v-radio
                      color="var(--primary-dark-color)"
                      v-for="(item, index) in filterGroup"
                      :key="item.label + index"
                      :label="item.label"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- recent section  -->
        <section class="col-4">
          <div class="sub_break_down">
            <!-- Recent Activity Log -->
            <div class="card_container">
              <div class="mb-4 d-flex align-center justify-space-between gap-5">
                <h4 class="titleCard">Recent Activity Log</h4>
                <Button
                  :elevation="0"
                  style="padding-inline: 6px"
                  class="p-0 m-0"
                  textColor="var(--label-light3)"
                  text="Show All"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
              </div>
              <div class="img_context">
                <!-- image  -->
                <div class="img_container">
                  <img src="/images/temp/user2.jpg" alt="" />
                </div>
                <!-- activity  -->
                <p class="main_text">
                  <a href="#">John Doe</a> just upgraded his account to beezlinq
                  Pro
                </p>
                <!-- time  -->
                <p class="time_line">2 hours ago</p>
              </div>
              <div class="img_context">
                <!-- image  -->
                <div class="img_container">
                  <img src="/images/temp/user.jpg" alt="" />
                </div>
                <!-- activity  -->
                <p class="main_text">
                  <a href="#">John Doe</a> just upgraded his account to beezlinq
                  Pro
                </p>
                <!-- time  -->
                <p class="time_line">2 hours ago</p>
              </div>
            </div>
            <!-- Recent Users -->
            <div class="card_container">
              <div class="mb-4 d-flex align-center justify-space-between gap-5">
                <h4 class="titleCard">Recent Users</h4>
                <Button
                  :elevation="0"
                  style="padding-inline: 6px"
                  class="p-0 m-0"
                  textColor="var(--primary-color)"
                  text="Show All"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
              </div>
              <div
                v-for="n in 3"
                :key="n + 232323"
                class="tableFormat img_context"
              >
                <!-- image  -->
                <div class="img_container">
                  <img src="/images/temp/user2.jpg" alt="" />
                </div>
                <!-- activity  -->
                <p class="main_text">
                  <a href="#">John Doe</a>
                </p>
                <!-- time  -->
                <p class="date">25/06/2023</p>
              </div>
            </div>
            <!-- Recent Transctions -->
            <div class="card_container">
              <div class="mb-4 d-flex align-center justify-space-between gap-5">
                <h4 class="titleCard">Recent Transctions</h4>
                <Button
                  :elevation="0"
                  style="padding-inline: 6px"
                  class="p-0 m-0"
                  textColor="var(--primary-color)"
                  text="Show All"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
              </div>
              <!-- table  -->
              <v-simple-table class="card_table">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th
                        v-for="(head, id) in headers"
                        :key="head + id"
                        class="text-left"
                      >
                        {{ head }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in transactions" :key="item.name">
                      <td>
                        <a href="#">{{ item.user }}</a>
                      </td>
                      <td>{{ item.plan }}</td>
                      <td>{{ $formatDateString(new Date()) }}</td>
                      <td>{{ $formatNairaCurrency(item.amount) }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </div>
        </section>
        <!-- recent activities  -->
        <section class="col-12">
          <div style="margin-right: 24px !important" class="card_container">
            <!-- header  -->
            <div class="mb-4 d-flex align-center justify-space-between gap-5">
              <h4 class="titleCard">Recent Activities</h4>
              <div style="grid-gap: 33px" class="d-flex align-center">
                <Button
                  :elevation="0"
                  style="padding: 0"
                  class="p-0 m-0"
                  textColor="var(--primary-dark-color)"
                  text="Download"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
                <Button
                  :elevation="0"
                  style="padding: 0"
                  class="p-0 m-0"
                  textColor="var(--primary-color)"
                  text="View All"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
              </div>
            </div>
            <!-- activities  -->
            <v-row>
              <div v-for="n in 12" :key="n + 212121" class="col-4">
                <div class="img_context mb-0">
                  <!-- image  -->
                  <div class="img_container">
                    <img src="/images/temp/user2.jpg" alt="" />
                  </div>
                  <!-- content  -->
                  <div>
                    <div class="user__date">
                      <!-- activity  -->
                      <p class="main_text">
                        <a href="#">John Doe</a>
                      </p>
                      <p class="time_line">5 Mins ago</p>
                    </div>
                    <p class="label">
                      Purchased a <a href="#">Premium Plan</a>
                    </p>
                  </div>
                </div>
              </div>
            </v-row>
          </div>
        </section>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: ["User", "Plan", "Date", "Amount (N)"],
      transactions: [
        {
          user: "John Doe",
          plan: "Premium",
          date: "25-06-2023",
          amount: 23000,
        },
        {
          user: "John Doe",
          plan: "Premium",
          date: "25-06-2023",
          amount: 23000,
        },
      ],
      radioGroup: "week",
      filterGroup: [
        {
          label: "Week",
          value: "week",
        },
        {
          label: "Month",
          value: "month",
        },
        {
          label: "Year",
          value: "year",
        },
      ],
    };
  },
  computed: {
    cardContent() {
      return [
        {
          title: "Total Created cards",
          value: 45,
        },
        {
          title: "Total Scanned cards",
          value: 145,
        },
        {
          title: "Total BeezLinq cards",
          value: 14,
        },
        {
          title: "Total users",
          value: 1045,
        },
        {
          title: "Subscribed users",
          value: 845,
        },
        {
          title: "Free Users",
          value: 645,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>