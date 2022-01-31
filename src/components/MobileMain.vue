<template>
	<main class="lg:hidden">
		<div class="relative z-10 mt-10 text-center">

			<div class="max-w-xl mx-auto">
				<h1 class="text-4xl sm:text-5xl px-1 text-dark-blue-100 font-semibold leading-tight">Bring everyone together to build better products.</h1>
				<p class="mt-2 px-10 sm:px-6 text-gray-400">
					Manage makes it simple for software teams to plan day-to-day tasks while keeping larger team goals in view.
				</p>
			</div>

			<button
			style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
			class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mt-5">Get Started</button>
		</div>

		<!-- Card 2 -->
		<div class="relative z-10 text-center mt-16">
			<div class="max-w-xl mx-auto">
				<h1 class="text-4xl sm:text-5xl px-1 text-dark-blue-100 font-semibold leading-tight">What's different about Manage.</h1>
				<p class="mt-2 px-10 sm:px-6 text-gray-400">
					Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
				</p>
			</div>
		</div>

		<!-- Info -->
		<div class="mt-16 text-center">
			<div class="grid place-items-end">
				<div class="bg-pale-red text-dark-blue-200 font-bold w-11/12 rounded-l-full flex items-center float-right mb-4">
					<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mr-2">01</button>
					<div class="">Track company-wide progress</div>
				</div>
			</div>
			<p class="px-1 sm:px-6 text-gray-400">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
			</p>
		</div>

		<div class="mt-16 text-center">
			<div class="grid place-items-end">
				<div class="bg-pale-red text-dark-blue-200 font-bold w-11/12 rounded-l-full flex items-center float-right mb-4">
					<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mr-2">02</button>
					<div class="">Advanced Built-in report</div>
				</div>
			</div>
			<p class="px-1 sm:px-6 text-gray-400">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
			</p>
		</div>

		<div class="mt-16 text-center">
			<div class="grid place-items-end">
				<div class="bg-pale-red text-dark-blue-200 font-bold w-11/12 rounded-l-full flex items-center float-right mb-4">
					<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mr-2">03</button>
					<div class="">Everything you need in one place</div>
				</div>
			</div>
			<p class="px-1 sm:px-6 text-gray-400">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
			</p>
		</div>


		<!-- Slides -->
		<div class="relative z-10 text-center mt-16 mb-10 md:hidden">
			<div class="max-w-xl mx-auto">
				<h1 class="text-4xl sm:text-5xl px-1 text-dark-blue-100 font-semibold leading-tight">What they've said</h1>
				<MobileSlider/>
			</div>
			<button
			style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
			class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mt-9">Get Started</button>
		</div>
	</main>
</template>

<script>
	import MobileSlider from '@/components/MobileSlider'

	export default {
		components: {
			MobileSlider
		}
	}
</script>