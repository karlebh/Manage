<template>
  <div class="lg:hidden fixed navbar z-40 w-sreen h-screen inset-0">
    <button @click="$emit('closeNav')" class="fixed navbar z-40 w-full w-full h-full inset-0 cursor-pointer"></button>
     <div class="bg-gray-100 w-10/12 py-7 mx-auto mt-28 z-50 relative overflow-scroll" style="z-index: 100;">
      <a class="block text-center font-semibold" href="#">Pricing</a>
      <a class="block text-center mt-5 font-semibold" href="#">Products</a>
      <a class="block text-center mt-5 font-semibold" href="#">About US</a>
      <a class="block text-center mt-5 font-semibold" href="#">Careers</a>
      <a class="block text-center mt-5 font-semibold" href="#">Community</a>
    </div>
</div>
</template>

<script>
  // import Logo from '@/components/Logo'

  export default {
    components: {
      // Logo
    }
  }
</script>

<style scoped>
  .navbar {
   background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.6));
 }  
</style>