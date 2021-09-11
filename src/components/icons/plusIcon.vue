<template>
    <svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		:width="width"
		:height="height"
		viewBox="0 0 24 24"
	>
		<defs>
			<path
				id="icon-plus"
				d="M13 11h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 1 1 2 0v6z"
			/>
		</defs>
		<g fill="none" fill-rule="evenodd">
			<mask id="icon-plus-mask" fill="#fff">
				<use xlink:href="#icon-plus" />
			</mask>
			<g :fill="iconColor" mask="url(#icon-plus-mask)">
				<path d="M0 0h24v24H0z" />
			</g>
			<g :fill="iconColor" mask="url(#icon-plus-mask)">
				<path d="M16 20h24v24H16z" />
			</g>
		</g>
	</svg>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
		iconName: {
			type: String,
			default: "box"
		},
		width: {
			type: [Number, String],
			default: 24
		},
		height: {
			type: [Number, String],
			default: 24
		},
		iconColor: {
			type: String,
			default: "#FFF"
		}
	}
})
</script>
