<template>
  <div @click="$emit('closeModal')" class="closeModal text-right">
    <Button
      title="Close"
      :elevation="0"
      style="padding: 0; margin-left: auto"
      class="p-0 m-0 close_mark"
      :svg="true"
      :ripple="false"
      svgLeft="SvgXmark"
      width="max-content"
      minWidth="max-content"
      height="max-content"
      color="transparent"
    />
  </div>
</template>
