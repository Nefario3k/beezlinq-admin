<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative">
      <input
        required
        class="form-control input_field"
        autocomplete="off"
        :type="inputType"
        v-model="searchInput"
        :placeholder="placeHolder"
      />
      <!-- type drop down  -->
      <SearchButtonsTypeBtn :listItems="listItems" />
      <!-- search btn  -->
      <SearchButtonsSearchingBtn :searchInput="searchInput" />
    </form>
    <!-- actions area  -->
    <aside class="actions__area">
      <!-- All  -->
      <v-menu :nudge-bottom="5" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <Button
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              :svg="true"
              svgRight="SvgAngleDown"
              text="All"
              minWidth="19rem"
              height="4.8rem"
              color="var(--border)"
              contentClass="card__dropdown large"
            />
          </div>
        </template>
        <v-list class="dropdown__list userDropDown">
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Registration</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Free Users</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Subscribed Users</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Suspend User</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- export  -->
      <SearchButtonsExportBtn />
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    placeHolder: {
      type: String,
      default: "Search  by name, email here",
    },
  },
  data() {
    return {
      inputType: "text",
      searchInput: "",
      menuModel: false,
      closeOnContent: false,
      searchFilter: {
        type: "",
        status: "",
        plan: "",
      },
      listItems: [
        {
          label: "First Name",
          value: "First Name",
        },
        {
          label: "Last Name",
          value: "Last Name",
        },
        {
          label: "Email",
          value: "Email",
        },
      ],
    };
  },
};
</script>
