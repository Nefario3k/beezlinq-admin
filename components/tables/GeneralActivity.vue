<template>
  <div>
    <v-row :class="`log__row ${currentView === 6 ? 'active' : ''}`">
      <div :class="`col-12 col-sm-${currentView}`">
        <div
          v-for="n in setValues().firstVal"
          :key="n + 232323"
          class="tableFormat small justify-space-between img_context"
        >
          <div
            :style="`max-width: ${maxWidth}%`"
            class="w-100 d-flex align-center gap-3"
          >
            <!-- image  -->
            <div class="img_container">
              <img src="/images/temp/user2.jpg" alt="" />
            </div>
            <!-- activity  -->
            <p class="main_text">
              <strong>Finance Admin</strong> Initiated a pending Subscription
              payment resolution with transaction ID:
            </p>
          </div>
          <!-- day  -->
          <p class="date">25/06/2023</p>
          <!-- time  -->
          <p class="label">09:09AM</p>
        </div>
      </div>
      <div :class="`col-12 col-sm-${currentView}`">
        <div
          v-for="n in setValues().secondVal"
          :key="n + 232323"
          class="tableFormat small justify-space-between img_context"
        >
          <div
            :style="`max-width: ${maxWidth}%`"
            class="w-100 d-flex align-center gap-3"
          >
            <!-- image  -->
            <div class="img_container">
              <img src="/images/temp/user2.jpg" alt="" />
            </div>
            <!-- activity  -->
            <p class="main_text">
              <strong>Finance Admin</strong> Initiated a pending Subscription
              payment resolution with transaction ID:
            </p>
          </div>
          <!-- day  -->
          <p class="date">25/06/2023</p>
          <!-- time  -->
          <p class="label">09:09AM</p>
        </div>
      </div>
    </v-row>
    <TablesFooter
      v-show="!tableLoader && total"
      :pagination="pagination"
      :tableData="['wdwd']"
      ref="tableFooter"
      class="px-0"
    />
  </div>
</template>

<script>
export default {
  props: ["currentView"],
  data() {
    return {
      maxWidth: 65,
      total: 15,
      tableLoader: false,
      pagination: {
        page: 1,
        itemsPerPage: 10,
        pageStart: 1,
        pageStop: 200,
        pageCount: 1,
        itemsLength: 7,
        last_page: 200,
        itemsPerPageOptions: [10, 20, 30, 40, 50],
      },
    };
  },
  methods: {
    setValues() {
      const firstVal = Math.ceil(this.total / 2);
      const secondVal = this.total - firstVal;
      return {
        firstVal: firstVal,
        secondVal: secondVal,
      };
    },
    setGridLayout(val) {
      window.localStorage.setItem("logGridLayout", val);
      switch (this.currentView) {
        case 12:
          this.maxWidth = 35;
          break;
        case 6:
          this.maxWidth = 65;
          break;

        default:
          break;
      }
    },
  },
  mounted() {
    var logGridLayout = window.localStorage.getItem("logGridLayout");
    console.log(logGridLayout);
    if (logGridLayout != null) this.setGridLayout(Number(logGridLayout));
  },
};
</script>
