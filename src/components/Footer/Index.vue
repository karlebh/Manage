<template>
	<footer style="max-width: 1700px;" class="mx-auto">
		<div class="bg-bright-red py-24 md:py-14">
			<div class="md:max-w-6xl md:mx-auto md:flex md:justify-between md:px-5 xl:px-0">
				<div class="mx-auto md:mx-0 max-w-md">
					<h1 class="leading-tight font-semibold text-gray-100 text-5xl text-center md:text-4xl md:text-left">Simplify how your team works today.</h1>
				</div>
				<div class="flex justify-center items-center">
					<button
					style="box-shadow: 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 0 hsl(12, 88%, 59%), 0 7.5px 15px -3px hsl(12, 88%, 59%);"
					class="text-bright-red rounded-full font-semibold py-3 px-8 bg-gray-50 mt-5 md:text-sm md:px-10">Get Started</button>
				</div>
			</div>
		</div>

		<div class="bg-dark-blue-200 py-10">
			<DesktopSection class="hidden md:px-5 xl:px-0 md:block"/>
			<MobileSection class="md:hidden"/>
		</div>
	</footer>
</template>

<script>
	import DesktopSection from './DesktopSection'
	import MobileSection from './MobileSection'

	export default {
		components: {
			DesktopSection,
			MobileSection,
		},
	}
</script>