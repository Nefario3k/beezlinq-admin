<template>
  <tr>
    <td v-for="(header, index) in headers" :key="index">
      <slot :item="item" :name="columnName(header)">
        <div v-if="header.value == 'check'" class="user_content pe-0">
          <div class="user_content_details">
            <SvgDotsDoubleVertical />
          </div>
        </div>
        <div
          v-if="header.value == 'action'"
          class="user_content_details actions"
          style="justify-content: center; grid-gap: 5px"
        >
          <Button
            title="Edit"
            :elevation="0"
            height="3rem"
            minWidth="3rem"
            class="p-0 m-0"
            :svg="true"
            svgLeft="SvgActionsEdit"
            color="transparent"
          />
          <Button
            title="Delete"
            :elevation="0"
            height="3rem"
            minWidth="3rem"
            class="p-0 m-0 deleteBtn"
            :svg="true"
            svgLeft="SvgActionsDelete"
            color="transparent"
          />
        </div>
        <div class="user_content_details p-0" v-else>
          <p>{{ getNonSlotValue(item, header) }}</p>
        </div>
      </slot>
    </td>
  </tr>
</template>

<script>
export default {
  name: "DataTableRowHandler",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    headers: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      return this.itemClass;
    },
  },
  methods: {
    columnName(header) {
      return `item.${header.value}`;
    },
    getNonSlotValue(item, header) {
      const val = item[header.value];

      if (val) {
        return val;
      }

      return "";
    },
  },
};
</script>