<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative user_area">
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
      <!-- Active Cards  -->
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
              text="Active Cards"
              minWidth="19rem"
              height="4.4rem"
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
      <SearchButtonsExportBtn
        :outlined="outlined"
        :contentClass="contentClass"
        height="4.4rem"
        :textColor="textColor"
      />
      <!-- create card  -->
      <Button
        v-if="!tabIndicator"
        :elevation="0"
        textColor="var(--text-dark)"
        width="max-content"
        text="Create Card"
        minWidth="13rem"
        height="4.4rem"
        color="var(--primary-color)"
        contentClass="large"
      />
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
    outlined: {
      type: Boolean,
    },
    contentClass: {
      type: String,
    },
    tabIndicator: {
      type: Number || Boolean,
    },
    textColor: {
      type: String,
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
