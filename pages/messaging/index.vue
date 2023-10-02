<template>
  <div>
    <section class="pageContent">
      <!--============================ header ============================-->
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Messages and Notification</h2>
        <Button
          @click="$refs.createMessage.showDialogue()"
          height="4.8rem"
          minWidth="19.1rem"
          color="var(--primary-color)"
          text="New Message"
          contentClass="addon"
        />
      </div>
      <!--========================== card wrapper ==========================-->
      <div class="card_wrapper">
        <Cards
          v-for="(items, index) in cardContent"
          :key="index + 28283782"
          :cardContent="items"
        />
      </div>
      <!--============================ content ============================-->
      <div class="mt-5 card_container user__card_container no_inline">
        <!--======================= payment filter  =======================-->
        <section style="padding-inline: 29px" class="mb-5">
          <SearchPageMessaging />
        </section>
        <!--===================== payment history table  ====================-->
        <section class="px-0">
          <TablesMessagingHistory />
        </section>
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <ModalCreateMessages ref="createMessage" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardContent: [
        {
          title: "Total Message Sent",
          value: "541",
        },
        {
          title: "Total Message Recipient",
          value: "450",
        },
        {
          title: "Number of Devices",
          value: "1,098",
        },
        {
          title: "IOS Device",
          value: 509,
        },
        {
          title: "Android Device",
          value: 589,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.pageContent {
  --radius: 0.8rem;

  .page_top_row {
    gap: 1.4rem;

    section {
      min-height: 30rem;
      background-color: var(--card1);
      border-radius: var(--radius);
    }

    section.gateway {
      width: 30%;
    }

    section.earnings {
      width: 37%;
    }

    section.country {
      width: 33%;
    }
  }
}
</style>