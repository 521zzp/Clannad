<template>
	<Breadcrumb separator=">">
       <Breadcrumb-item v-for="nav in bread" :href="nav.url" key="nav">{{nav.name}}</Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
export default {
	props: {
		bread: Array
	}
}
</script>

<style>
</style>