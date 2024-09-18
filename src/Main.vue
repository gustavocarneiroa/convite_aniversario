<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { allGuests, checkInvitation, getLocation, handleNotInvited } from './utils/guessList';
import RoundedImg from './atoms/RoundedImg.vue';
import { image } from './utils/imagePicker';
import PIX from './assets/pix.png';
import { getMessageFromVariation, gustavinhoGetter, quoteGetter } from './utils/messageFragments';

const name = ref('');
let fragments = {
  after: '',
  before: '',
}
let location = {
  url: '',
  name: '',
  dateAndHour: '',
  eventLink: '',
};
onMounted(() => {
  const { decodedName, inviteHash } = checkInvitation()!;
  if (!decodedName) {
    handleNotInvited();
    return;
  }
  name.value = decodedName;
  fragments = getMessageFromVariation(allGuests, inviteHash);
  location = getLocation(inviteHash);
});
const { message: quote, who } = quoteGetter()
</script>

<template>
  <section>
    <div class="flex">
      <RoundedImg :src="image.selectedItem" alt="Eu"></RoundedImg>
      <p class="r-fit-text"><b>{{ name }}</b></p>
      <p>{{ fragments.before }}<br>{{ fragments.after }} minha comemoração de <b>28</b> anos.</p>
      <p><i>Arrasta para cima ou para o lado, para saber mais tá?</i></p>
    </div>
  </section>
  <section data-preload :data-background-iframe="location.url">
    <div
      style="position: absolute; width: 70%; right: 0; bottom: -500px; box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px; text-align: left;">
      <h3><b>Onde vai ser?</b></h3>
      <p>Que bom que perguntou.</p>
      <p>Teje lá no <b>{{ location.name }}.</b></p>
      <p>{{ location.dateAndHour }}</p>
      <p> <i>(Usa essa caixinha para arrastar)</i></p>
    </div>
  </section>
  <section data-background="#282a43">
    Problemas de memória?
    <p>{{ gustavinhoGetter() }} fez um evento para a tua agenda.</p>
    <a target="_blank" :href="location.eventLink">
      Clica aqui e eu juro que tu não esquece
    </a>
  </section>
  <section>
    <section>
      <h2 class="r-fit-text">Sobre presentes:</h2>
      <p>Eu geralmente não peço presentes, não gosto de pressionar ninguém a me dar nada.</p>
      <p>Mas, se alguém quiser <b>não obrigatoriamente</b> me dar algo, segue a listinha:</p>
      <h3>⬇️</h3>
    </section>
    <section>
      <h3>Presentes digitais:</h3>
      <ul>
        <li>Aqueles <b>cartãozinho de Uber</b> <small><i>(to falindo visitando minha mãe)</i></small></li>
        <li><b>Cartão-presente</b> de lojas ou restaurantes (amo)</li>
        <li>Mandar um <b>iFood</b> quando lembrar de mim</li>
        <li>Jogos de <b>Nintendo Switch</b>: <i>Zelda, Breath of The Wild | Super mario 3D World | Super Mario Party</i>
        </li>
      </ul>

      <p><b>AVISO:</b> Presentes em RP estão banidos, to tentando parar com League of Legends.</p>
    </section>
    <section>
      <h3>Roupas ou calçados</h3>
      <ul>
        <li>Blusas, calças e cuecas (😳) tamanho <b>M</b></li>
        <li>Sapatos, meias e chinelo, tamanho <b>42</b></li>
        <li>Não uso boné, nem colares, mas to me acostumando com relógios <i>rs</i></li>
      </ul>
    </section>
    <section>
      <h2>Mas se nenhum desses for interessante...</h2>
    </section>
    <section>
      <h3>Campanha: vaquinha da vasectomia</h3>
      <b>Cortar o ligamento entre o mundo carnal e o espiritual custa caro</b>
      <p>Faça um pix de qualquer valor com a mensagem:</p>
      <b>"corte corte imediatamente 🥚🥚"</b>
      <p>para contribuir com essa campanha</p>
      <a href="https://nubank.com.br/cobrar/1h57ok/66e4832a-823b-43b5-8d84-32f25d50a471">
        <img :src="PIX"
          alt="00020126910014BR.GOV.BCB.PIX013645469c3b-a8d6-4fa5-80f1-d343b53cea5e0229Me auxilie pfvr, somos amigos5204000053039865802BR5925Gustavo Carneiro de Almei6009SAO PAULO62140510xsKeUfXltD63047CF2">
        <p>Ou clique no QR code acima!</p>
      </a>
    </section>
  </section>
  <section>
    <h2>Espero você! 🐏💙</h2>
    <q>{{ quote }}</q>
    <p>{{ who }}</p>
  </section>
</template>

<style>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>