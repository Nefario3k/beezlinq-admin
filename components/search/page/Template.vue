<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative">
      <input
        required
        class="form-control input_field"
        autocomplete="off"
        type="text"
        v-model="searchInput"
        placeholder="Search here"
      />
      <Button
        title="search"
        type="submit"
        :disabled="!searchInput"
        height="100%"
        minWidth="max-content"
        color="var(--primary-color)"
        contentClass="searchBtn"
        :svg="true"
        svgLeft="SvgSearch"
      />
    </form>
    <!-- actions area  -->
    <aside class="actions__area">
      <!-- Category  -->
      <DropDownBtn
        :resetBtnStyle="{
          minWidth: '19rem',
          height: '4.8rem',
          contentClass: 'card__dropdown large',
        }"
        listNames="template category"
      />
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      menuModel: false,
      closeOnContent: false,
      searchFilter: {
        type: "",
        status: "",
        plan: "",
      },
    };
  },
};
</script>
