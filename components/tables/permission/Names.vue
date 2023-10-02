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
      class="generic__table noAction no__border no__border_inline noHover"
    >
      <!-- perm  -->
      <template v-slot:item.perm="{ item }">
        <div class="user_content">
          <div class="flex-column user_content_details">
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="User Mangement"
              contentClass="permBtn active"
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Template Mangement"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Card Management"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Payment Management"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Plan Management"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Analytics Management"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Activity Management"
              contentClass="permBtn "
            />
            <Button
              :elevation="0"
              :outlined="true"
              :ripple="false"
              height="4rem"
              width="100%"
              color="var(--border)"
              text-color="var(--primary-dark-color)"
              text="Messaging Management"
              contentClass="permBtn "
            />
          </div>
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
      headers: [{ text: "ASSIGN PERMISSION", value: "perm" }],
    };
  },
  computed: {
    tableData() {
      var data = [];
      var obj = {
        perm: "Can Edit user",
      };
      for (let index = 0; index < 1; index++) {
        data.push(obj);
      }

      return data;
    },
  },
};
</script>

