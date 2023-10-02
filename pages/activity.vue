<template>
  <div>
    <section class="pageContent">
      <!--============================= header =============================-->
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Activity Log</h2>
      </div>
      <!--========================== top section  ==========================-->
      <div
        class="mb-5 card_container user__card_container no_inline user_no_line"
      >
        <!--==================== search input  ====================-->
        <div class="border__bottom border__light search__area">
          <SearchPageActivityMain />
        </div>
        <!--========================= control area =========================-->
        <div class="control_area">
          <div
            class="mb-4 pt-3 d-flex align-center justify-space-between border__bottom border__light gap-4"
          >
            <p class="mini_subtext">Logs</p>
            <div class="d-flex align-center gap-3">
              <Button
                @click="setLayout(12)"
                title="Displays table in row format"
                :elevation="0"
                :svg="true"
                svgLeft="SvgAlignRow"
                :outlined="true"
                :contentClass="`logBtn ${currentView === 12 ? 'active' : ''}`"
                width="3.6rem"
                minWidth="3.6rem"
                height="3.6rem"
                color="var(--border4)"
              />
              <Button
                @click="setLayout(6)"
                title="Displays table in column format"
                :elevation="0"
                :svg="true"
                svgLeft="SvgAlignColumn"
                :outlined="true"
                :contentClass="`logBtn ${currentView === 6 ? 'active' : ''}`"
                width="3.6rem"
                minWidth="3.6rem"
                height="3.6rem"
                color="var(--border4)"
              />
            </div>
          </div>
        </div>
        <!--==================== table  ====================-->
        <TablesGeneralActivity
          :currentView="currentView"
          ref="generalActivity"
        />
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCardPreview ref="cardPreview" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: 6,
    };
  },
  methods: {
    setLayout(val) {
      this.currentView = val;
      this.$nextTick(() => {
        this.$refs.generalActivity.setGridLayout(val);
      });
    },
  },
  mounted() {},
};
</script>