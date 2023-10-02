<template>
  <div class="search__area" style="grid-gap: 0px">
    <p>{{ type }}</p>

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
      <!-- create new  -->
      <Button
        @click="
          type == 'Plans'
            ? $refs.createPlan.showDialogue()
            : $refs.downloadReceipt.showPanel({ resolve: true, ...item })
        "
        height="4.8rem"
        minWidth="19.1rem"
        color="var(--primary-color)"
        :text="`Add New ${type.replace('s', '')}`"
        contentClass="addon"
      />
    </aside>
    <!--===================== panels and modals go here =====================-->
    <ModalCreatePlan ref="createPlan" />
    <PanelCreateFeature
      @success="$refs.userEditInfo.showDialogue()"
      @showWarning="$refs.userWarning.showDialogue()"
      ref="downloadReceipt"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeHolder: {
      type: String,
      default: "Search  by name, email here",
    },
    type: {
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