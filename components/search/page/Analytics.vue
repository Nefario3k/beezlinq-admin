<template>
  <div class="d-flex align-center justify-space-between mb-5">
    <!-- title -->
    <h2 class="page_head mb-0 capital">{{ filterName }}</h2>
    <div class="d-flex align-center gap-3">
      <!-- date filter  -->
      <PageDateFilter />
      <!-- country filter  -->
      <DropDownBtn
        :resetBtnStyle="{ svgLeft: 'SvgGlobalSearch', height: '4.4rem' }"
        listNames="country world"
      />
      <!-- export button  -->
      <v-menu :nudge-bottom="5" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <Button
              :elevation="0"
              textColor="var(--primary-lte-color4)"
              width="max-content"
              :svg="true"
              svgRight="SvgAngleDown"
              text="Export"
              minWidth="11.8rem"
              height="4.4rem"
              color="var(--primary-color)"
              :contentClass="`card__dropdown large export`"
            />
          </div>
        </template>
        <v-list class="dropdown__list userDropDown">
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Current Range</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >All Records</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>