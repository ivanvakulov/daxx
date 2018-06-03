<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
        <v-card>
          <v-toolbar color="blue" dark>
            <v-btn icon>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>Terminal overview</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-media src="https://www.portfreeport.com/hs-fs/hubfs/FreePort/images/header-img.jpg?t=1527796682547&width=1400&name=header-img.jpg" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales</div>
            </div>
          </v-card-title>
        </v-card>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Daxx Test</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <MainPage/>      
    </v-content>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage'

export default {
  name: 'App',
   data: () => ({
      dialog: false,
      drawer: null
    }),
    props: {
      source: String
    },
  components: {
    MainPage
  }
}
</script>

<style>

</style>
