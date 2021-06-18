<template>
  <v-app>
      <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import DiscordLayout from './layout/Discord';
import BaseLayout from './layout/Base'
import SystemBarLayout from './layout/SystemBar'

export default{
  computed: {
    layout(){
      return this.$store.state.layout;
    }
  },
  components: {
    'discordLayout': DiscordLayout,
    'baseLayout': BaseLayout,
    'systemBarLayout': SystemBarLayout,
  }
};

</script>
