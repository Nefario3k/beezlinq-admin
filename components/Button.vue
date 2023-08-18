<template>
  <v-btn
    @click="$emit('action')"
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
  >
    <template v-if="!isSpinner">
      <template v-if="svg && svgLeft && !svgRight">
        <div>
          <Component :is="svgLeft" />
        </div>
      </template>
      <span
        v-if="text"
        :style="{ color: textColor }"
        :class="{ textClass }"
        v-html="text"
      ></span>
      <template v-if="svg && svgRight && !svgLeft">
        <div>
          <Component :is="svgRight" />
        </div>
      </template>
    </template>
    <Progress color="var(--primary-color)" v-else />
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
      type: String,
    },
    textClass: {
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
    type: {
      type: String,
      default: "button",
    },
    height: {
      type: String || Number,
    },
    width: {
      type: String || Number,
      default: null,
    },
    minHeight: {
      type: String || Number,
    },
    minWidth: {
      type: String || Number,
    },
    maxWidth: {
      type: String || Number,
      default: "100%",
    },
    isSpinner: {
      type: Boolean,
      default: false,
    },
    svg: {
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
