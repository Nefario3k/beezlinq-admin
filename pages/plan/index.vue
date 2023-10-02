<template>
  <div>
    <section class="pageContent">
      <!--============================ header ============================-->
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Plan Settings</h2>
      </div>
      <!--===================== switch tabs =====================-->
      <div class="mb-2 tabsArea user userTab less__gutter pricing">
        <v-tabs
          center-active
          grow
          :show-arrows="false"
          v-model="tabIndicator"
          background-color="var(--bg-light12)"
          color="var(--primary-dark-color)"
          :hide-slider="true"
          class="v_tabs_wrapper"
        >
          <v-tab
            v-for="item in tabItems"
            :key="item"
            class="v_tabs_items"
            :ripple="false"
          >
            <span>{{ item }}</span>
          </v-tab>
        </v-tabs>
      </div>

      <v-tabs-items
        v-model="tabIndicator"
        class="tab__items project_single_tab m-0"
        style="background-color: transparent"
      >
        <!--======================= payment filter  =======================-->
        <v-tab-item class="p-0 m-0">
          <section style="" class="mb-5 mt-4">
            <SearchPagePlan :type="currentType" />
          </section>
          <!--===================== plan table  ====================-->
          <section class="px-0">
            <TablesPlanPageIndex />
          </section>
        </v-tab-item>
        <v-tab-item class="p-0 m-0">
          <section style="" class="mb-5 mt-4">
            <SearchPagePlan :type="currentType" />
          </section>
          <!--===================== feature table  ====================-->
          <section class="px-0">
            <TablesPlanFeatures />
          </section>
        </v-tab-item>
      </v-tabs-items>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCreateMessages ref="createMessage" />
    <!--===================== panels and modals go here =====================-->
    <PanelViewMessage
      @success="$refs.userEditInfo.showDialogue()"
      @showWarning="$refs.userWarning.showDialogue()"
      ref="downloadReceipt"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndicator: 0,
      tabItems: ["Plans", "Features"],
      cardContent: [
        {
          title: "Total Message Sent",
          value: "541",
        },
        {
          title: "Total Message Recipient",
          value: "450",
        },
        {
          title: "Number of Devices",
          value: "1,098",
        },
        {
          title: "IOS Device",
          value: 509,
        },
        {
          title: "Android Device",
          value: 589,
        },
      ],
    };
  },
  computed: {
    currentType() {
      return this.tabItems[this.tabIndicator];
    },
  },
};
</script>
<style lang="scss" scoped>
.pageContent {
  --radius: 0.8rem;

  .page_top_row {
    gap: 1.4rem;

    section {
      min-height: 30rem;
      background-color: var(--card1);
      border-radius: var(--radius);
    }

    section.gateway {
      width: 30%;
    }

    section.earnings {
      width: 37%;
    }

    section.country {
      width: 33%;
    }
  }
}
</style>