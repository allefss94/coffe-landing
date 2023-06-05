<template>
  <nav class="flex bg-gradient-to-br from-blue-600 to-blue-900 w-full px-10 py-3 sticky top-0 text-white max-w-[1600px] mx-auto z-10">
    <h1 class="w-full text-xl">
      <a href="/auth/dashboard#chart" class="flex gap-2 items-center">Area Logada

        <Icon icon="streamline:interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart" /> 
      </a>
    </h1>
    <ul class="flex gap-4 justify-between w-1/2">
      <li v-for="link in links" :key="link.name">
        <a v-if="link.href.includes('#')" :href="link.href">{{ link.name }}</a>
        <RouterLink v-else :to="{path: link.href}">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <div class="max-w-[1600px] mx-auto bg-gray-00">
    <RouterView />
  </div>
</template>

<script setup>
import {Icon} from '@iconify/vue'
const links = [
  {
    name: 'Grafico',
    href: '/auth/dashboard#chart'
  },
  {
    name: 'Cats',
    href: '/auth/dashboard#cats'
  },
  {
    name: 'Sair',
    href: '/',

  }
]
</script>