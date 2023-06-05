<template>
  <div id="app" class="absolute max-w-screen h-screen">
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div class="bg-white shadow-lg w-1/2 rounded p-8 ">
        <div class="flex justify-between">
          <slot name='title'>Default Title</slot>
          <Icon @click="$emit('close')" icon="mdi:close" class="text-xl cursor-pointer"/>
        </div>
        
        <slot name="content">
          <p class="text-lg my-10">Default Content</p>
        </slot>
      </div>
    </div>
    </transition>
  </div>
</template>

<script setup>
import {Icon} from '@iconify/vue'
defineEmits(['close'])
defineProps({
  isOpen: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    required:true,
  },
  closable: {
    type: Boolean,
    default: true
  },
})
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 500ms ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
