<template>
	<v-container
		class="bg-[url('src/assets/bg.png')] bg-[#ffffff] bg-cover bg-no-repeat h-screen"
		:fluid="true"
	>
		<v-form>
			<v-text-field
				v-model.trim="data.username"
				filled
				dark
				dense
				outlined
				required
				label="Login"
			/>
			<v-text-field
				v-model.trim="data.password"
				dark
				filled
				dense
				outlined
				required
				label="Password"
				append-icon="mdi-eye"
				:type="showPassword ? 'text' : 'password'"
				class="password-input"
				@click:append="showPassword = !showPassword"
			/>
		</v-form>
	</v-container>
</template>

<script setup>
import { ref } from 'vue';
const data = ref({
	username: null,
	password: null,
});

const showPassword = ref(false);
</script>

<style lang="scss" scoped></style>
