<template>
  <div class="search__area">
    <p>Administrators</p>

    <!-- actions area  -->
    <aside class="actions__area">
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
      <!-- create admin  -->
      <Button
        @click="$emit('showCreateModal')"
        :elevation="0"
        textColor="var(--text-dark)"
        width="max-content"
        text="Create Admin"
        minWidth="13rem"
        height="4.8rem"
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