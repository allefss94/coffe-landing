<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { toast } from 'vue3-toastify'

import Modal from '../components/Modal.vue';
import { useRouter } from 'vue-router';


const router = useRouter()

const email = ref('')
const recoverEmail = ref('')
const password = ref('')
const isLoading = ref(false)
const resetPasswordModal = ref(false)
const handleRecoverPassword = () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    resetPasswordModal.value = false
    recoverEmail.value = ''
    toast('MOCK - Email de recuperação enviado com sucesso', { type: 'success' })
  }, 3000);
}
const handleSubmit = () => {
  isLoading.value = true
  const user = users.find(user => user.email === email.value)

  if (user && user.password === password.value) {
    toast(`Login realiazado com sucesso. Bem vindo!`, { type: 'success' })
    setTimeout(() => {
      
      router.push({ name: 'dashboard' })
    }, 2000);
  } else {
    setTimeout(() => {
      toast('Credenciais inválidas', { type: 'error' })
      email.value = '',
        password.value = '',
        isLoading.value = false
    }, 2000);
  }
}

const users = [
  {
    email: 'admin@admin.com',
    password: 'admin',
  
  },
  {
    email: 'vendedor-a@mail.com',
    password: 'vendasa',
 
  },
  {
    email: 'vendedor-b@mail.com',
    password: 'vendasb',

  }
]

</script>
<template>
  <Modal :is-open="resetPasswordModal" title="Modal" @close="resetPasswordModal = false">
    <template #title>
      <h1 class="text-xl">Esqueci minha Senha</h1>
    </template>

    <template #content>
      <p class="mt-4">
        Insira seu endereço de e-mail abaixo e enviaremos um link para redefinir sua senha.
      </p>

      <form @submit.prevent="handleRecoverPassword">
        <div class="relative z-0 w-full group my-12">

          <input type="email" name="floating_email" v-model="recoverEmail" id="floating_email"
            class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" " required autofocus />
          <label for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            E-mail
          </label>
        </div>

        <button
          class="px-4 py-2 bg-gradient-to-bl from-amber-600 to-amber-900 w-full text-white rounded mb-4 outline-none">
          <Icon v-if="isLoading" icon="mdi:loading" class="text-xl text-white animate-spin text-center w-full" />
          <p v-else>Enviar e-mail de recuperação de senha</p>
        </button>
      </form>
    </template>
  </Modal>



  <div class="bg-gray-200 grid lg:grid-cols-2 h-screen max-w-[1600px]">
    <div
      class="hidden lg:block bg-[url(https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80)] bg-center bg-cover bg-no-repeat">
    </div>
    <div class="flex justify-center items-center grid-cols-2">
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center  bg-white rounded lg:w-1/2 p-6 shadow-md">
        <div class="w-full">
          <h1 class="text-xl mb-10">Login</h1>
          <div class="relative z-0 w-full group mb-12">

            <input type="email" name="floating_email" v-model="email" id="floating_email"
              class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" " required autofocus>
            <label for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              E-mail
            </label>
          </div>
          <div class="relative z-0 w-full group mb-10">
            <!-- PATTERN PARA VALIDAÇÂO DE SENHA pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Deve conter ao menos um número, uma letra maiúscula, um minuscula e um total de no mínimo 8 caracteres" -->
            <input type="password" v-model="password" name="floating_password" id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" " required />
            <label for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Senha
            </label>
          </div>
        </div>

        <div id="actions" class="w-full">
          <button
            class="px-4 py-2 bg-gradient-to-bl from-amber-600 to-amber-900 w-full text-white rounded mb-4 outline-none">
            <Icon v-if="isLoading" icon="mdi:loading" class="text-xl text-white animate-spin text-center w-full" />
            <p v-else>Entrar</p>
          </button>
          <button type="button" href="#" class="text-center w-full" @click="resetPasswordModal = true">Esqueci minha
            senha</button>
        </div>
      </form>
    </div>
  </div>
</template>


