<template>
   <div class="pa-4 ma-4">
       <v-select :items="layouts" label="Select a layout" v-model="selectedLayout"></v-select>
       <v-btn @click="changeLayout()">Change layout</v-btn>
   </div>
</template>

<script>
export default {
  methods: {
      changeLayout(){
          this.$store.dispatch("setLayout", this.selectedLayout.length == 0 ? this.layouts[0] : this.selectedLayout);
      }
  },
  data: () => ({
      layouts: ['baseLayout', 'discordLayout', 'systemBarLayout'],
      selectedLayout: "",
  }),
};
</script>