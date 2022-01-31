<template>
	<div id="slider" class="splide">
		<div class="splide__track">
			<ul class="splide__list">
				<li class="splide__slide">
					<div style="max-width: 100%;" class="w-11/12 mx-auto relative py-20">
						<div class="absolute top-10 flex justify-center w-full">
							<img class="w-20 h-20" src="../assets/images/avatar-anisha.png">
						</div>
						<div class="bg-gray-50 pt-10 pb-4">
							<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
							<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos, dolores dignissimos incidunt iusto! Soluta saepe laboriosam repellendus quaerat dolorem, quis."</p>
						</div>
					</div>
				</li>

				<li class="splide__slide">
					<div style="max-width: 100%;" class="w-11/12 mx-auto relative py-20">
						<div class="absolute top-10 flex justify-center w-full">
							<img class="w-20 h-20" src="../assets/images/avatar-ali.png">
						</div>
						<div class="bg-gray-50 pt-10 pb-4">
							<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
							<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos, dolores dignissimos incidunt iusto! Soluta saepe laboriosam repellendus quaerat dolorem, quis."</p>
						</div>
					</div>
				</li>

				<li class="splide__slide">
					<div style="max-width: 100%;" class="w-11/12 mx-auto relative py-20">
						<div class="absolute top-10 flex justify-center w-full">
							<img class="w-20 h-20" src="../assets/images/avatar-shanai.png">
						</div>
						<div class="bg-gray-50 pt-10 pb-4">
							<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
							<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos, dolores dignissimos incidunt iusto! Soluta saepe laboriosam repellendus quaerat dolorem, quis."</p>
						</div>
					</div>
				</li>

				<li class="splide__slide">
					<div style="max-width: 100%;" class="w-11/12 mx-auto relative py-20">
						<div class="absolute top-10 flex justify-center w-full">
							<img class="w-20 h-20" src="../assets/images/avatar-richard.png">
						</div>
						<div class="bg-gray-50 pt-10 pb-4">
							<h1 class="text-gray-900 font-semibold py-4">Anisha Li</h1>
							<p class="px-4 text-gray-400 text-md">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum, alias fuga repellendus impedit adipisci dicta temporibus vel, quos, dolores dignissimos incidunt iusto! Soluta saepe laboriosam repellendus quaerat dolorem, quis."</p>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</div>
</template>
<style>
	.splide__pagination__page {
		background: transparent !important;
		border: 2px solid hsl(12, 88%, 59%) !important;
	}
	.splide__pagination__page.is-active {
		background: hsl(12, 88%, 59%) !important;
	}
</style>
<script>
	import Splide from '@splidejs/splide'

	export default {
		components: {
		},

		mounted() {
			new Splide( '#slider', {
				type: 'loop',
				rewind: true,
				autoplay: true,
				arrows: false
			} ).mount()
		}
	}
</script>