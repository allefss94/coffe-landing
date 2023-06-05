<template>
  
  <div class="grid lg:grid-cols-3 max-w-[1600px] h-screen  justify-center items-center text-white">
    <div id="home" class="h-full w-full col-span-2 px-10 lg:px-20 pt-16 lg:pt-10">
      <h1 class="text-8xl font-semibold mb-4 tracking-wider">Café</h1>
      <h2 class="text-5xl font-light">é a minha linguagem do amor</h2>

      <div class=" w-full lg:w-1/2 bg-gray-400 font-normal mt-10 p-4 rounded border-l-4 border-amber-800">Seja você um amante de café
        experiente
        ou alguém que está apenas começando a apreciar essa bebida maravilhosa, estamos aqui para guiá-lo em uma jornada
        que desperta os sentidos e satisfaz os desejos mais profundos. Então, pegue uma xícara, relaxe e deixe-nos levá-lo
        a uma viagem inesquecível pelo mundo dos cafés.</div>

      <div class="grid grid-cols-1 gap-4 mt-10 lg:w-1/3 text-sm">
        <a href="#product" class="text-center px-4 py-4 rounded-md bg-gradient-to-bl from-amber-600 to-amber-900 transition-all duration-200 text-white">Descubra um café
          perfeito para você</a>
      </div>
    </div>
    <div
      class="h-full w-full bg-[url(https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)] bg-cover bg-no-repeat">
    </div>
  </div>


  <div  class="h-screen max-w-[1600px] grid lg:grid-cols-3 ">
    <div
      class="bg-[url(https://images.unsplash.com/photo-1595257841720-149658af93af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)] bg-cover bg-center bg-no-repeat min-h-screen">
    </div>
    <div id="product" class="bg-gray-700 lg:col-span-2 pb-4 flex flex-col justify-center text-white px-10 lg:px-20 text-lg pt-10 lg:pt-0">
      <p class="mb-4">
        Desperte seus sentidos e mergulhe em uma sinfonia de sabores e aromas no mundo maravilhoso do café. Bem-vindo ao
        nosso santuário do café, onde cada xícara conta uma história única e nos transporta para uma jornada de prazer e
        paixão.</p>
    <p>Em nosso site, você encontrará uma seleção cuidadosamente curada dos cafés mais excepcionais e autênticos,
      provenientes de origens exóticas ao redor do mundo. Cada grão é resultado de um trabalho árduo e apaixonado, desde
      a plantação até a colheita e a torra. Nosso compromisso é trazer até você apenas os cafés da mais alta qualidade,
      que capturam a essência de seu terroir e exaltam suas características únicas.</p>
  <div class="flex justify-end mt-10">
    <RouterLink :to="{name:'login'}" class=" text-center px-4 py-2 w-full lg:w-1/3 rounded-md bg-gradient-to-tr from-amber-600 to-amber-900 transition-all duration-200 text-white">Login</RouterLink>
  </div>
  </div>
  
</div></template>
