<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" style="border-bottom:1px solid;border-bottom-color:rgb(219,219,219);" >
      <q-toolbar>
        <q-toolbar-title style="color:black">
          Les très bons
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout'
});
</script>
