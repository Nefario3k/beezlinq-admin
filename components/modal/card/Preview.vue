<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      :persistent="persistent"
      fullscreen
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--bg-light)" class="modal_box">
        <!--========================= header  =========================-->
        <header>
          <div class="left__wing">
            <h2>My Designer Card</h2>
          </div>
          <ModalClose @closeModal="closeAll" />
        </header>
        <div class="card_preview">
          <div>
            <!--========================= iframe  =========================-->
            <iframe
              title="My Designer Card"
              src="https://beezlinq.com/card/classic?template=classic"
            ></iframe>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      width: "100%",
      persistent: false,
      menuModel: false,
      closeOnContent: false,
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll() {
      this.showModal = false;
    },
  },
};
</script>