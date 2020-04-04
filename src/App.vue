<template>
  <v-app>
    <v-app-bar app hide-on-scroll color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <a
        class="myBlog"
        href="https://miguelmachado.dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my blog"
        >My blog</a
      >
    </v-app-bar>

    <v-content>
      <EachCountry />
    </v-content>
  </v-app>
</template>

<script>
import EachCountry from '@/components/EachCountry/EachCountry.vue';

export default {
  name: 'App',

  components: {
    EachCountry,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.myBlog {
  color: #0a3661;
  background-color: #5de2b3;
  padding: 5px 10px;
  border-radius: 3px;
  text-decoration: none;
}
</style>
