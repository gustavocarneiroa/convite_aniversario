<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { checkInvitation, handleNotInvited } from './utils/guessList';
import RoundedImg from './atoms/RoundedImg.vue';
import { image } from './utils/imagePicker';
const name = ref('');
onMounted(() => {
  const invited = checkInvitation();
  if (invited) {
    name.value = invited;
    return;
  } 

  handleNotInvited();
});

</script>

<template>
  <section>
    <div class="flex">
      <RoundedImg :src="image.selectedItem" alt="Eu"></RoundedImg>
      <p>Oi <b>{{ name }}</b></p>
      <p>Você está convidado para minha comemoração</p>
      <p>de 28, <strong>SIM</strong>, 28 anos.</p>
    </div>
  </section>
  <section data-preload data-background-iframe="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.268301852395!2d-38.5627459!3d-3.7409291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749d6134a7c21%3A0x88956cd3de7a9324!2sGeek%20Bunker%20Burger%20(Parquel%C3%A2ndia)!5e0!3m2!1spt-BR!2sbr!4v1726185071679!5m2!1spt-BR!2sbr">
					<div style="position: absolute; width: 30%; right: 0; box-shadow: 0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px; font-size: 20px; text-align: left;">
						<h2>Onde vai ser?</h2>
						<p>Que bom que perguntou.</p>
						<p>Vai ser na <b>Geek Bunk Burguer - Parquelândia.</b></p>
            <p>Dia 29/09 às 19:00</p>
					</div>
  </section>
  <section data-background="#282a43">
    Problemas de memória?
    <p>O pai fez um evento para a tua agenda.</p>
    <a target="_blank" href="https://calendar.app.google/cjm32AdReHmVcTYo9">
      Clica aqui e eu juro que tu não esquece
    </a>
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