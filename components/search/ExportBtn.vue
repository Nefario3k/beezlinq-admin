<template>
  <v-menu :nudge-bottom="5" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <Button
          :elevation="0"
          textColor="var(--text-dark)"
          width="max-content"
          :svg="true"
          svgRight="SvgAngleDown"
          text="Export"
          minWidth="12.4rem"
          height="4.8rem"
          color="var(--primary-color)"
          contentClass="card__dropdown large export"
        />
      </div>
    </template>
    <v-list class="dropdown__list userDropDown">
      <v-list-item class="dropdown__list-item">
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title"
            >Current table</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="dropdown__list-item">
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title"
            >All Results</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>