<template>
  <div class="row" style="width:100%;height:100%;">
    <div class="col-xs-6 col-sm-4 col-xl-3" style="height:200px;" v-for="(categorie,id) in categories" :key="`${categorie.id}${id}`" @click="$router.push({ path: 'users', query: { id: categorie.id } })">
      <p style="width:100%;line-height:7em;font-size:2em;text-align:center;">{{ categorie['theme'] }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ListCategorie',
  props: {
    categories: {
      type: Array,
      default: () => [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(x => `Music ${x}`)
    }
  }
});
</script>