<template>
  <div id="chart" class="grid grid-cols-1 max-w-screen h-fit pt-16 px-4 max-w-[1600px] mx-auto">


    <div class="flex flex-col justify-center items-center col-span-1 sm:col-span-2 lg:col-span-3">
      <h1 class=" text-3xl text-center">Relatórios</h1>

      <a href="#cats" class="w-40 text-center py-3 rounded text-white bg-blue-600 mt-4">Quero ver gatos</a>
    </div>
    <div class="flex justify-center bg-white w-fit mx-auto mt-10 h-fit shadow-md shadow-gray-400 rounded z-0">
      <apexchart width="400" type="bar" :options="chartData.options" :series="chartData.series"></apexchart>
    </div>



  </div>
  <div id="cats" class="flex flex-col items-center h-screen bg-gray-200 pt-16 max-w-[1600px] mx-auto mt-5">
    <h1 class="text-2xl">Gosta de gatos? Veja fotos aletórias:</h1>
    <div v-if="image" class="mt-8">
      <img :src="image" alt="Imagem HTTP Cat" class="w-80 h-80 aspect-square rounded shadow-lg" />
    </div>
    <div class="flex items-center mt-10 gap-2">
      <button
        class="flex items-center w-40 px-4 h-10 text-center bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="fetchImage">
        <Icon v-if="loop || isLoading" icon="mdi:loading" class=" w-full animate-spin" />
        <p v-else>Carregar Imagem</p>
      </button>
      <label class=" flex items-center">
        <input type="checkbox" class="" v-model="loop" />
        <span class="ml-2 whitespace-nowrap">Sempre uma nova Foto</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { Icon } from '@iconify/vue'

const image = ref(null);
const loop = ref(false);
const isLoading = ref(false);

watch(loop, (newValue) => {
  if (newValue) {
    fetchImage();
  }
});

onMounted(() => {
  fetchImage();
});

const fetchImage = () => {
  isLoading.value = true
  const apiUrl = `https://cataas.com/cat`;

  fetch(apiUrl, {
  }).then(res => res.blob()).then(blob => {

    image.value = URL.createObjectURL(blob);
    if (loop.value) {
      setTimeout(fetchImage, 2000); // Executa a função novamente após 2000ms (2 segundos)
    }
    isLoading.value = false
  })

};

const chartData = {
  options: {
    chart: {
      id: 'Grafico - itens por estado'
    },
    xaxis: {
      categories: ['São Paulo', 'Rio de Janeiro', 'Bahia']
    }
  },
  series: [{
    name: 'Itens',
    data: [20, 10, 20]
  }]
}

</script>