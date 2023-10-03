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
      <DropDownBtn
        v-if="!tabIndicator || tabIndicator === 2"
        :resetBtnStyle="{
          minWidth: '19rem',
          height: '4.4rem',
          contentClass: 'card__dropdown large',
        }"
        listNames="cards status"
      />
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
        @click="$emit('showCreateModal')"
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
