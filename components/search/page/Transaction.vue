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
      <!-- Successful  -->
      <DropDownBtn
        :resetBtnStyle="{
          minWidth: '19rem',
          height: '4.4rem',
          contentClass: 'card__dropdown large',
        }"
        listNames="transaction status"
      />
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
