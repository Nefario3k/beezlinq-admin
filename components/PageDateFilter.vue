<template>
  <v-menu :close-on-content-click="false" :nudge-bottom="5" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <Button
          :elevation="0"
          :outlined="true"
          textColor="var(--primary-dark-color)"
          width="max-content"
          :svg="true"
          svgRight="SvgAngleDown"
          svgLeft="SvgDateSearch"
          :text="`${$formatDateString(
            dates[0] ? dates[0] : new Date()
          )} - ${$formatDateString(dates[1] ? dates[1] : new Date())}`"
          minWidth="26.6rem"
          height="4.4rem"
          color="var(--border)"
          contentClass="card__dropdown date__filter"
        />
      </div>
    </template>
    <v-list class="dropdown__list userDropDown">
      <v-list-item class="p-0 m-0 dropdown__list-item noHover">
        <v-list-item-content class="p-0">
          <v-date-picker
            color="var(--primary-color)"
            elevation="0"
            event-color="var(--primary-lte-color)"
            header-color="var(--primary-dark-color)"
            v-model="dates"
            range
          ></v-date-picker>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      dates: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>