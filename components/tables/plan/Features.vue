<template>
  <div>
    <v-data-table
      v-if="!tableLoader"
      :headers="headers"
      :mobile-breakpoint="766"
      :disable-filtering="true"
      :disable-sort="true"
      :items="tableData"
      hide-default-footer
      :items-per-page="tableData.length"
      :page="pagination.page"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      :footer-props="{
        pagination: pagination,
        itemsPerPageText: 'Rows Per Page:',
      }"
      class="generic__table dragable__table noFooter"
    >
      <template #body="props">
        <draggable
          :list="props.items"
          tag="tbody"
          :move="onMoveCallback"
          :clone="onCloneCallback"
          @end="onDropCallback"
        >
          <data-table-row-handler
            v-for="(item, index) in props.items"
            :key="index"
            :item="item"
            :headers="headers"
            style="cursor: pointer"
          >
          </data-table-row-handler>
          <!-- check
          <template v-slot:item.check="{ item }">
            <div class="user_content pe-0">
              <div class="user_content_details">
                <SvgDotsDoubleVertical />
              </div>
            </div>
          </template> -->
          <!-- feature
          <template v-slot:item.feature="{ item }">
            <div class="user_content capital">
              <div class="user_content_details">
                <span style="color: var(--primary-dark-color)" @click="
                  $refs.downloadReceipt.showPanel({ resolve: true, ...item })
                  ">{{ item.feature }}</span>
              </div>
            </div>
          </template> -->
          <!-- description
          <template v-slot:item.description="{ item }">
            <div class="user_content">
              <div class="user_content_details">
                <p class="email" style="white-space: nowrap">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </template>  -->
          <!-- action
          <template v-slot:item.action="{ item }">
            <div class="user_content_details actions" style="justify-content: center; grid-gap: 5px">
              <Button title="Edit" :elevation="0" height="3rem" minWidth="3rem" class="p-0 m-0" :svg="true"
                svgLeft="SvgActionsEdit" color="transparent" />
              <Button title="Delete" :elevation="0" height="3rem" minWidth="3rem" class="p-0 m-0 deleteBtn" :svg="true"
                svgLeft="SvgActionsDelete" color="transparent" />
            </div>
          </template>  -->
        </draggable>
      </template>
      <!-- footer  -->
      <!-- <template v-slot:footer="{ props: { pagination, itemsPerPageText } }">
        <TablesFooter
          v-show="!tableLoader && tableData.length"
          :pagination="pagination"
          :itemsPerPageText="itemsPerPageText"
          :tableData="tableData"
          @getPerPage="
            (perPage) => {
              $emit('getPerPage', perPage);
            }
          "
          @loadMore="
            (val) => {
              $emit('loadMore', val);
            }
          "
          ref="tableFooter"
        />
      </template> -->
    </v-data-table>
    <LoaderTable v-else />
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
      tableLoader: false,
      headers: [
        {
          text: "",
          value: "check",
        },
        {
          text: "Feature",
          align: "start",
          sortable: true,
          value: "feature",
        },
        { text: "Tool Tip Description", value: "description" },
        { text: "Action", value: "action" },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
        pageStart: 1,
        pageStop: 200,
        pageCount: 1,
        itemsLength: 7,
        last_page: 200,
        itemsPerPageOptions: [5, 10, 15, 20, 25],
      },
    };
  },
  computed: {
    tableData() {
      var data = [];
      var obj = {
        feature: "Number of cards",
        description: "This pertains to the number of cards a user can create ",
      };
      for (let index = 0; index < 16; index++) {
        const newObj = structuredClone(obj);
        newObj.feature += index + 1;
        data.push(newObj);
      }

      return data;
    },
  },
  methods: {
    showPanel(type, dataToShow) {
      return;
      switch (type) {
        case "view":
          this.$refs.adminView.showPanel(dataToShow);
          break;
        case "edit":
          this.$refs.adminEdit.showPanel(dataToShow);
          break;
        case "disableAdmin":
          this.$refs.disableAdmin.showPanel(dataToShow);
          break;
        case "enableAdmin":
          this.$refs.enableAdmin.showPanel(dataToShow);
          break;

        default:
          this.$refs.adminEdit.showPanel(type);
          break;
      }
    },
    onCloneCallback(item) {
      // Create a fresh copy of item
      const cloneMe = JSON.parse(JSON.stringify(item));

      return cloneMe;
    },
    onMoveCallback(evt, originalEvent) {
      const item = evt.draggedContext.element;
      const itemIdx = evt.draggedContext.futureIndex;

      console.log("onMoveCallback");

      if (item.locked) {
        return false;
      }

      return true;
    },
    onDropCallback(evt, originalEvent) {
      console.log("onDropCallback");
    },
  },
};
</script>
<style lang="scss"></style>
