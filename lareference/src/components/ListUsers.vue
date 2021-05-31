<template>
  <div style="width:100%;height:auto">
    <div style="width:100%;height:100px">
      <p style="font-size:2em;line-height:3.5em;padding-left:20px;" v-for="(user,id) in users" :key="`${user.name}${id}`" @click="() => { alert = !alert;userId = id }">{{ user.name }}</p>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Retrouvez le ici !!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-icon name="mdi-facebook" style="font-size:3em;margin-left:15px;" v-if="users[userId]['media'].facebook" @click="open(`https://www.facebook.com/${users[userId]['media'].facebook}`)" />
          <q-icon name="mdi-twitter" style="font-size:3em;margin-left:15px;" v-if="users[userId]['media'].twitter" @click="open(`https://twitter.com/${users[userId]['media'].twitter}`)" />
          <q-icon name="mdi-instagram" style="font-size:3em;margin-left:15px;" v-if="users[userId]['media'].instagram" @click="open(`https://www.instagram.com/${users[userId]['media'].instagram}`)" />
          <q-icon name="mdi-youtube" style="font-size:3em;margin-left:15px;" v-if="users[userId]['media'].youtube" @click="open(`https://www.youtube.com/channel/${users[userId]['media'].youtube}`)" />
          <q-icon name="mdi-google-play" style="font-size:3em;margin-left:15px;" v-if="users[userId]['media'].android" @click="open(`https://play.google.com/store/apps/details?id=${users[userId]['media'].android}`)" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

// TYPE
import { StateInterface, AppData, IUsers } from 'src/type/appData';

const open = (el: string) => window.open(el)

export default defineComponent({
  name: 'ListCategorie',
  props: {
    usersProps: {
      type: Array,
      default: () => [1,2,3,4,5,6,7,8,9].map(x => `${x}. emmario delar`)
    }
  },
  setup (props,ctx) {
    let users = ((ctx.root.$store.state as StateInterface).produits as AppData).listUsers || props.usersProps
    const themeId = ctx.root.$route.query.id
    users = users.filter((x: IUsers) => x.themeId === themeId)

    const data = { 
      alert: false,
      userId: 0
    }

    return { users, ...data, open }
  }
});
</script>