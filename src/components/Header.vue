<template>
  <div>

    <!-- Background SVG -->
    <div style="max-width: 1700px;" class="relative">
      <!-- Left  -->
      <svg style="top: 960px;left: -480px;" class="absolute hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>

      <!-- Right -->
      <svg class="absolute hidden md:block -right-10 -top-48" xmlns="http://www.w3.org/2000/svg" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
    </div>

    <!-- Moile Header -->
    <header class="lg:hidden relative">
      <svg class="absolute left-10 -top-64 md:hidden" xmlns="http://www.w3.org/2000/svg" width="814" height="814"><rect width="436" height="970" x="774" y="-62" fill="#FFF0EC" fill-rule="evenodd" rx="218" transform="rotate(45 718.814 -291.157)"/></svg>
      <div class="flex justify-between px-8 pt-14 pb-5 relative z-40">
        <Logo/>
        <button @click="isOpen = !isOpen">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>
          <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg>
        </button>
      </div>

      <transition name="fade">
        <NavBar @closeNav="isOpen = !isOpen" v-if="isOpen"/>
      </transition>
    </header>

    <!-- Desktop Header -->
    <header class="mx-auto mt-12 max-w-6xl relative md:px-5 xl:px-0">


      <div class="relative z-10 hidden lg:flex items-center justify-between">
        <Logo/>
         <div class="">
            <a class="text-xs font-semibold mr-8 text-gray-500" href="#">Pricing</a>
            <a class="text-xs font-semibold mr-8 text-gray-500" href="#">Products</a>
            <a class="text-xs font-semibold mr-8 text-gray-500" href="#">About US</a>
            <a class="text-xs font-semibold mr-8 text-gray-500" href="#">Careers</a>
            <a class="text-xs font-semibold mr-8 text-gray-500" href="#">Community</a>
          </div>
          <button
        style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
        class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-200">Get Started</button>
      </div>
    </header>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import Logo from '@/components/Logo'
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    components: {
      NavBar,
      Logo,
    },
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 1;
  }
</style>

