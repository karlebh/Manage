<template>
	<div>
		<div id="desktopSlider" class="splide desktopSlider">
			<div class="splide__track">
				<ul class="splide__list">
					<li class="splide__slide">
						<div class="w-11/12 mx-auto relative py-20">
							<div class="absolute top-10 flex justify-center w-full">
								<img class="w-20 h-20" src="../assets/images/avatar-anisha.png">
							</div>
							<div class="bg-gray-50 pt-10 pb-4">
								<h1 class="text-gray-900 font-semibold py-4 text-center">Anisha Li</h1>
								<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos"</p>
							</div>
						</div>
					</li>

					<li class="splide__slide">
						<div class="w-11/12 mx-auto relative py-20">
							<div class="absolute top-10 flex justify-center w-full">
								<img class="w-20 h-20" src="../assets/images/avatar-ali.png">
							</div>
							<div class="bg-gray-50 pt-10 pb-4 text-center">
								<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
								<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos"</p>
							</div>
						</div>
					</li>

					<li class="splide__slide">
						<div class="w-11/12 mx-auto relative py-20">
							<div class="absolute top-10 flex justify-center w-full">
								<img class="w-20 h-20" src="../assets/images/avatar-shanai.png">
							</div>
							<div class="bg-gray-50 pt-10 pb-4 text-center">
								<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
								<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos"</p>
							</div>
						</div>
					</li>

					<li class="splide__slide">
						<div class="w-11/12 mx-auto relative py-20">
							<div class="absolute top-10 flex justify-center w-full">
								<img class="w-20 h-20" src="../assets/images/avatar-richard.png">
							</div>
							<div class="bg-gray-50 pt-10 pb-4 text-center">
								<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
								<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos"</p>
							</div>
						</div>
					</li>

				</ul>
			</div>
		</div>

		<div class="mb-32 grid place-items-center mx-auto max-w-6xl">
			<button
			style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
			class="bg-bright-red rounded-full font-base py-3 px-8 text-gray-100">Get Started</button>
		</div>

	</div>
</template>

<script>
	import Splide from '@splidejs/splide'

	export default {
		components: {
		},

		mounted() {
			new Splide( '.desktopSlider', {
				type: 'loop',
				rewind: true,
				autoplay: true,
				arrows: false,
				pagination: false,
				perPage: 3,
				pauseOnFocus: false,
				pauseOnHover: false,
			} ).mount()
		}
	}
</script>