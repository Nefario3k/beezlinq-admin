<template>
  <div>
    <section class="pageContent">
      <h2 class="page_head">Dashboard</h2>
      <v-row class="page_top_row">
        <div class="col-8 row">
          <!-- sub totals  -->
          <div
            class="col-4"
            v-for="(items, index) in cardContent"
            :key="index + 28283782"
          >
            <Cards :cardContent="items" />
          </div>
        </div>
        <div class="col-4">
          <div class="sub_break_down">
            <div class="card_container">
              <div class="mb-4 d-flex align-center justify-space-between gap-5">
                <h4 class="titleCard">Recent Activity Log</h4>
                <Button
                  @action="check"
                  :elevation="0"
                  class="p-0 m-0"
                  textColor="var(--label-light3)"
                  text="Show All"
                  width="max-content"
                  minWidth="max-content"
                  height="max-content"
                  color="transparent"
                />
              </div>
              <div class="img_context"></div>
            </div>
          </div>
        </div>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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