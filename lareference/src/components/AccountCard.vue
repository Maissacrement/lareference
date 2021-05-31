<template>
  <q-page class="row">
    <div style="width:100%;/*background:blue*/;height:auto;max-height:300px;border-bottom:1px solid rgb(219,219,219);">
      <!-- RIGHT 500*** -->
      <div style="width:30%;float:left;height:300px;/*background:black;*/">
        <div class="rond head_top"></div>
      </div>
      <!-- END RIGHT -->
      <!-- LEFT -->
      <div style="width:70%;height:300px;/*background:green*/;float:left;">
        <div style="padding-top:50px;font-size:2.5em;">
          <p>emmario973</p>
          <div style="width:100%;float:left;">
            <span style="font-size:.5em;float:left;">16 posts</span>
            <span style="font-size:.5em;float:left;">16 posts</span>
            <span style="font-size:.5em;float:left;">16 posts</span>
          </div>
          <div style="width:100%;float:left;font-size:.5em;padding-top:20px;">
            <p>emmario973</p>
            <p>Paris | 973 Guyane | Bordeaux
              mail: emmariodelar@gmail.com
              Growth tech project idea
              Web, design, robotics, microservice...
            </p>
          </div>
        </div>
      </div>
      <!-- END LEFT -->
    </div>
    
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AccountCard'
});
</script>

<style>
.rond {
  border-radius:50%;
  width:100px;
  height:100px;
  background:grey;
  position:relative;
  left: calc((100% - 100px) / 2);
}
.head_top {
  top: 50px !important;
}
</style>
