<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { checkInvitation, getLocation, getMessageFromVariation, handleNotInvited } from './utils/guessList';
import RoundedImg from './atoms/RoundedImg.vue';
import { image } from './utils/imagePicker';
import PIX from './assets/pix.png';

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
  fragments = getMessageFromVariation(inviteHash);
  location = getLocation(inviteHash);
});

</script>

<template>
  <section>
    <div class="flex">
      <RoundedImg :src="image.selectedItem" alt="Eu"></RoundedImg>
      <p><b>{{ name }}</b></p>
      <p>{{ fragments.before }}<br>{{ fragments.after}} minha comemoração de <b>28</b> anos.</p>
      <small>Arrasta para cima ou para o lado, para saber mais tá?</small>
    </div>
  </section>
  <section data-preload :data-background-iframe="location.url">
					<div style="position: absolute; width: 30%; right: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px; font-size: 20px; text-align: left;">
						<h2>Onde vai ser?</h2>
						<p>Que bom que perguntou.</p>
						<p>Vai ser na <b>{{ location.name }}.</b></p>
            <p>{{ location.dateAndHour}}</p>
            <small>(Usa essa caixinha para arrastar)</small>
					</div>
  </section>
  <section data-background="#282a43">
    Problemas de memória?
    <p>O pai fez um evento para a tua agenda.</p>
    <a target="_blank" :href="location.eventLink">
      Clica aqui e eu juro que tu não esquece
    </a>
  </section>
  <section>
    <section>
      <div>Sobre presentes:</div>
      <p>Eu geralmente não ligo para presente</p>
      <h1>MAS</h1>
      <p>Se alguém quiser <b>não obrigatoriamente</b> me dar algo, segue a listinha:</p>
      <h1>⬇️</h1>
    </section>
    <section>
      <h1>Presentes digitais:</h1>
      <ul>
        <li>Aqueles cartãozinho de Uber (to falindo visitando minha mãe)</li>
        <li>Cartão-presente de lojas ou restaurantes (super válido)</li>
        <li>Mandar um iFood quando lembrar de mim</li>
        <li>Jogos de Nintendo Switch: Zelda, Breath of The Wild | Super mario 3D World | Super Mario Party</li>
      </ul>

      <p><b>AVISO:</b> Presentes em RP estão banidos, to tentando parar com League of Legends.</p>
    </section>
    <section>
      <h1>Roupas ou calçados</h1>
      <ul>
        <li>Blusas, calças e cuecas (😳) tamanho <b>M</b></li>
        <li>Sapatos, meias e chinelo, tamanho <b>42</b></li>
        <li>Não uso boné, nem colares, mas to me acostumando com relógios</li>
      </ul>
    </section>
    <section>
      <h1>Campanha: vaquinha da vasectomia</h1>
      <h3>Cortar o ligamento entre o mundo carnal e o espiritual custa caro</h3>
      <h2>Faça um pix de qualquer valor com a mensagem: "corte imediatamente 🥚🥚" para contribuir com essa campanha</h2>
      <img :src="PIX" alt="00020126910014BR.GOV.BCB.PIX013645469c3b-a8d6-4fa5-80f1-d343b53cea5e0229Me auxilie pfvr, somos amigos5204000053039865802BR5925Gustavo Carneiro de Almei6009SAO PAULO62140510xsKeUfXltD63047CF2">
      <p><a href="https://nubank.com.br/cobrar/1h57ok/66e4832a-823b-43b5-8d84-32f25d50a471">Ou clique no link acima!</a></p>
    </section>
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