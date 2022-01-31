<template>
  <div id="app" class="overflow-x-hidden">
    <Header/>

    <div class="flex flex-wrap justify-center items-center gap-3 mt-10 mx-auto relative z-10 lg:hidden">
      <Chart/>
      <BarChart/>
      <div class="">
        <div class="w-48 h-48 p-4 bg-white inline-grid gap-y-2 rounded-sm">
          <span class="text-3xl p-2 font-base bg-gray-50 pt-4 mb-3 rounded-sm inline-grid items-end">
            89.74%
          </span>
          <div class="inline-grid grid-cols-2 gap-x-2">
            <span class="bg-bright-red pl-2 pr-1 pt-4 pb-1 text-gray-100 rounded-sm mr-1 inline-grid items-end">+1.5%</span>
            <span class="pl-2 pr-1 pt-4 pb-1 rounded-sm bg-gray-50 inline-grid items-end">88.24%</span>
          </div>
        </div>
      </div>
    </div>

    <MobileMain/>
    <DesktopMain/>

    <div style="max-width: 1700px;" class="slide mt-32 mx-auto hidden md:block">
      <h1 class="text-4xl text-dark-blue-100 font-semibold leading-tight text-center mb-10">What they've said</h1>
      <DesktopSlider/>
    </div>

    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer/Index'
  import DesktopMain from '@/components/DesktopMain'
  import DesktopSlider from '@/components/DesktopSlider'
  import MobileMain from '@/components/MobileMain'
  import Chart from '@/components/Chart'
  import BarChart from '@/components/BarChart'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Header,
      Footer,
      MobileMain,
      DesktopMain,
      DesktopSlider,
      Chart,
      BarChart,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
