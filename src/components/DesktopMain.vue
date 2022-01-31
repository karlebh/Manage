<template>
	<main class="hidden lg:block max-w-6xl mx-auto md:px-5 xl:px-0">
		<div class="flex justify-between mt-20">
			<div class="relative z-10 mt-10 text-left w-1/3">
				<div class="max-w-xl">
					<h1 class="text-5xl text-dark-blue-100 font-semibold leading-tight">Bring everyone together to build better products.</h1>
					<p class="mt-8 text-gray-400 max-w-xs">
						Manage makes it simple for software teams to plan day-to-day tasks while keeping larger team goals in view.
					</p>
				</div>

				<button
				style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
				class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 mt-8">Get Started</button>
			</div>
			
			<div class="w-1/2 relative z-10">
				<Illustration/>
			</div>
		</div>

		<section class="mt-20">
			<!-- What's different about us -->
			<div class="text-justify flex justify-between">
				<div class="relative z-10 text-left">
				<div class="max-w-lg">
					<h1 class="text-4xl text-dark-blue-100 font-semibold leading-tight">What's different about Manage?</h1>
					<p class="mt-2 text-gray-400 max-w-xs">
						Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
					</p>
				</div>
			</div>
			<!--  -->

			<section>
				<div class="max-w-xl flex">
					<div class="mr-6">
						<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100">01</button>
					</div>
					<div class="">
						<div class="font-semibold">Track company-wide progress</div>
						<p class="text-gray-400 mt-3">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
						</p>
					</div>
				</div>


				<div class="max-w-xl flex mt-10">
					<div class="mr-6">
						<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 flex-grow-0 ">02</button>
					</div>
					<div class="">
						<div class="font-semibold">Advanced built-in reports</div>
						<p class="text-gray-400 mt-3">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
						</p>
					</div>
				</div>


				<div class="max-w-xl flex mt-10">
					<div class="mr-6">
						<button class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100 flex-grow-0 ">03</button>
					</div>
					<div class="">
						<div class="font-semibold">Everything you need in one place.</div>
						<p class="text-gray-400 mt-3">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga inventore ea incidunt architecto molestias dignissimos sed cum doloremque eos est.
						</p>
					</div>
				</div>
			</section>
		</div>
		</section>
	</main>
</template>

<script>
	import Illustration from '@/components/Illustration'

	export default {
		components: {
			Illustration,
		}
	}
</script>