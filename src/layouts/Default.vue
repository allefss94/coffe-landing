<template>
  <nav class="flex bg-gradient-to-br from-amber-600 to-amber-900 w-full px-10 py-3 sticky top-0 text-white max-w-[1600px] mx-auto">
    <h1 class="w-full text-xl">
      <a href="/#home" class="flex gap-2 items-center">Meu Café

        <Icon icon="streamline:food-drinks-tea-cup-herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food" /> 
      </a>
    </h1>
    <ul class="flex gap-4 justify-between w-1/2">
      <li v-for="link in links" :key="link.name">
        <a v-if="link.href.includes('#')" :href="link.href">{{ link.name }}</a>
        <RouterLink v-else :to="{name: link.href}">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <div class="max-w-[1600px] mx-auto bg-gray-600">
    <RouterView />
  </div>
</template>

<script setup>
import {Icon} from '@iconify/vue'
const links = [
  {
    name: 'Inicio',
    href: '/#home'
  },
  {
    name: 'Produto',
    href: '/#product'
  },
  {
    name: 'Login',
    href: 'login',

  }
]
</script>