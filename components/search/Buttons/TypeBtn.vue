<template>
  <v-menu v-model="typeMenu" :nudge-bottom="9" nudge-left="64%" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="dropDownInputFIlterContainer" v-bind="attrs" v-on="on">
        <Button
          title="Filter type"
          type="button"
          height="100%"
          :ripple="false"
          minWidth="max-content"
          color="transparent"
          :contentClass="`card__dropdown dropDownInputFIlter ${
            typeMenu ? 'active' : ''
          }`"
          :svg="true"
          svgLeft="SvgAngleDown"
        />
      </div>
    </template>
    <v-list min-width="115" class="dropdown__list userDropDown">
      <v-list-item
        v-for="(items, index) in listItems"
        :key="index + 213233"
        class="dropdown__list-item"
      >
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title">{{
            items.label
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      typeMenu: false,
    };
  },
};
</script>
