<template>
  <div class="">
    <div class="d-flex justify-space-between">
      <div class="">
        <img :src="`images/temp/flags/${flag}.png`" alt="country flag" />
        <span>{{ country }}</span>
      </div>
      <div class="">
        <span>{{ $formatNumber(users) }}</span>
      </div>
    </div>
    <v-progress-linear
      class="mt-2"
      v-model="value"
      :color="color"
    ></v-progress-linear>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: String,
      default: "Nigeria",
    },
    color: {
      type: String,
      default: "#0062FF",
    },
    users: {
      type: Number,
      default: 100736,
    },
    flag: {
      type: Number,
    },
  },
  data() {
    return {
      value: 23,
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  color: var(--primary-dark-color);
  font-weight: 500;
  font-size: 1.4rem;
}

img {
  width: 1.8rem;
}
</style>