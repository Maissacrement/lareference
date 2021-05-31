<template>
  <q-page class="row">
    <ListCategorie :categories="cats" />
    <div class="input">
      <q-input for="monInput"
        v-if="display" outlined v-model="number" prefix="$" type="number" min="0" 
        label-slot clearable class="tips" 
      >
        <template v-slot:label>
          <p style="color:black"><strong class="text-deep-orange">Please</strong>
          define an amount here <em class="q-px-sm bg-deep-orange text-white rounded-borders">Tips</em></p>
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="send" @click="sendTips(number)" @keyup.prevent="sendTips(number)" />
        </template>
      </q-input>
      <q-btn 
        style="color:black;margin:50px 0 !important;width: 80%;height:40px;position: relative;left:10%;text-transform: capitalize;" 
        rounded label="send tips" class="bg-amber-13" @click="display=!display" v-if="!display"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {Stripe, loadStripe} from '@stripe/stripe-js';
import axios, { AxiosResponse } from 'axios';

import ListCategorie from 'components/ListCategorie.vue';

import { StateInterface, AppData } from 'src/type/appData';

const sendTips = async (amountInput: string) => {
  try {
    const number = parseInt(amountInput)
    if(!number) throw new Error('Is not a number')
    const stripe: Stripe | null = await loadStripe('pk_live_51I6DDLFN8URPfkAIgbRCO5sTq1cqFKdWzEWPMYy6wB8Yy7KEMmd4L07l0BjaA4SornQDoiJ8idXGxeMJBrmdtpcr004FrmOD7k');
    const amount = window.btoa(`amount=${Math.abs(number)}`)
    const res: AxiosResponse = await axios.get(`https://payment.mayanatech.ddns.net/pay?mount=${amount}`)
    if(res.status === 200) {
      if('id' in res.data) {
        let data = (res.data as { id: string }).id
        return stripe ? stripe.redirectToCheckout({ sessionId: data }) : null
      }
    }
    throw new Error('response not unreachable')
  } catch(err) {
    if('message' in err) {
      let data: any = Object.values(err);
      data = (data as { message: string }).message;
    } else {
      console.log(JSON.stringify(err));
    }
  }
};

export default defineComponent({
  name: 'PageIndex',
  components: { ListCategorie },
  setup (_,ctx) {
    let cats = ((ctx.root.$store.state as StateInterface).produits as AppData).categorie

    let number = 0;
    let display = false;
    const fields = [
      { field: 'name', type: 'text', icon: 'account_circle', text: '' },
      { field: 'password', type: 'password', icon: 'vpn_key', text: '' },    
    ]

    return { cats, fields, number, display, sendTips }
  }
});
</script>

<style>
.input {
  position: fixed;
  width: 100%;
  height: auto;
  bottom: 0;
}
.tips {
  color:black;
  margin-top:10px !important;
  width: 80%;
  height:40px;
  position: relative;
  left:10%;
  margin: 60px 0 !important;
  text-transform: capitalize;
}
</style>
