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
      :page="1"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      class="generic__table no__border_inline"
    >
      <!-- perm  -->
      <template v-slot:item.perm="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.perm }}</p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details" style="justify-content: center">
          <v-switch
            class="mt-0 ms-2"
            inset
            :ripple="false"
            hide-details
            color="var(--primary-color)"
          ></v-switch>
        </div>
      </template>
    </v-data-table>
    <LoaderTable v-else />
    <!--===================== panels and modals go here =====================-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLoader: false,
      headers: [
        { text: "Permissions", value: "perm" },
        { text: "action", value: "action" },
      ],
    };
  },
  computed: {
    tableData() {
      var data = [];
      var obj = {
        perm: "Can Edit user",
      };
      for (let index = 0; index < 5; index++) {
        data.push(obj);
      }

      return data;
    },
  },
};
</script>

