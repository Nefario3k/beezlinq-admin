<template>
  <v-btn
    @click="$emit('click')"
    :to="to"
    :outlined="outlined"
    :type="type"
    :disabled="disabled"
    :elevation="elevation"
    :class="`Btn ${contentClass}`"
    :height="height"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :max-width="maxWidth"
    :color="color"
    :ripple="ripple"
  >
    <template v-if="!isSpinner">
      <!-- svg left  -->
      <template v-if="svg && svgLeft">
        <div class="d-flex align-center h-100">
          <Component :is="svgLeft" />
        </div>
      </template>
      <!-- icon left  -->
      <template v-if="svgIcon && !svg && svgLeft">
        <div class="d-flex align-center h-100">
          <i :class="`fa-solid fa-${svgLeft}`"></i>
        </div>
      </template>
      <span
        v-if="text"
        :style="{ color: textColor, fontSize: textSize }"
        :class="{ textClass }"
        v-html="text"
      ></span>
      <!-- svg right  -->
      <template v-if="svg && svgRight">
        <div class="d-flex align-center h-100">
          <Component :is="svgRight" />
        </div>
      </template>
      <!-- icon right  -->
      <template v-if="svgIcon && !svg && svgRight">
        <div class="d-flex align-center h-100">
          <i :class="`fa-solid fa-${svgRight}`"></i>
        </div>
      </template>
    </template>
    <Progress :color="spinnerColor" v-else />
  </v-btn>
</template>

<script>
export default {
  props: {
    contentClass: {
      type: String,
    },
    color: {
      type: String,
    },
    text: {
      type: String | Number,
    },
    textClass: {
      type: String,
    },
    textSize: {
      type: String,
    },
    textColor: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "button",
    },
    height: {
      type: String | Number,
    },
    width: {
      type: String | Number,
      default: null,
    },
    minHeight: {
      type: String | Number,
    },
    minWidth: {
      type: String | Number,
    },
    maxWidth: {
      type: String | Number,
      default: "100%",
    },
    isSpinner: {
      type: Boolean,
      default: false,
    },
    spinnerColor: {
      type: String,
      default: "var(--primary-color)",
    },
    svg: {
      type: Boolean,
      default: false,
    },
    svgIcon: {
      type: Boolean,
      default: false,
    },
    svgLeft: {
      type: String,
      default: "",
    },
    svgRight: {
      type: String,
      default: "",
    },
    elevation: {
      type: Number,
      default: 0,
    },
    to: {
      type: String || null,
      default: null,
    },
    outlined: {
      type: Boolean || null,
      default: null,
    },
  },
};
</script>
