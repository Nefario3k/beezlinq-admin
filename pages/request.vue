<template>
  <div>
    <section class="pageContent">
      <!--========================== top section  ==========================-->
      <div
        class="mb-5 card_container user__card_container no_inline user_no_line"
      >
        <!--==================== user Header  ====================-->
        <p>Request</p>
        <!--==================== search input  ====================-->
        <div class="search__area mb-6">
          <SearchPageRequest />
        </div>
        <!--==================== table  ====================-->
        <TablesRequest class="px-0" />
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCardPreview ref="cardPreview" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>