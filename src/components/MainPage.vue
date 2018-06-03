<template>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs12>
            <v-toolbar color="blue" dark>
              <!-- <v-btn icon>
                <v-icon>arrow_back</v-icon>
              </v-btn> -->
              <v-toolbar-title>Asset overview</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-tabs v-model="activeTab">
              <!-- Tabs -->
              <v-tab ripple>
                Item1
              </v-tab>
              <v-tab ripple>
                Item2
              </v-tab>
              <v-tab ripple>
                Item3
              </v-tab>
              <v-tab ripple>
                Item4
              </v-tab>

              <!-- Tab Item -->
              <v-tab-item>
                <Charts/>
              </v-tab-item>
              <v-tab-item>
                 
              </v-tab-item>
              <v-tab-item>
    
              </v-tab-item>
              <v-tab-item>
              
              </v-tab-item>

            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import Charts from './Charts.vue'

export default {
  name: 'MainPage',
  data:() => ({
    activeTab: null
  }),
  components: {
    Charts
  }
}
</script>

<style>

</style>
