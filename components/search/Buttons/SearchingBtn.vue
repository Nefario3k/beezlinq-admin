<template>
  <Button
    title="Search"
    type="submit"
    :disabled="!searchInput"
    height="100%"
    minWidth="max-content"
    color="var(--primary-color)"
    contentClass="searchBtn"
    :svg="true"
    svgLeft="SvgSearch"
  />
</template>

<script>
export default {
  props: ["searchInput"],
};
</script>