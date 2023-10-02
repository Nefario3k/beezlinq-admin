<template>
  <v-app color="white">
    <NavigationPanel />
    <NavigationBar @editProfile="$refs.editProfile.showPanel()" />
    <PanelEditProfile
      ref="editProfile"
      @editPassword="$refs.editPassword.showPanel()"
    />
    <PanelEditPassword ref="editPassword" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>