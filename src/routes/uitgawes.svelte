<script>
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Uitgawes - Die Herout</title>
</svelte:head>

<Header />

<main>
	<h1>Uitgawes</h1>

	<a href="https://julie2020.herout.co.za" target="_blank"><span>1</span>Julie 2020</a>
	<a href="https://desember2020.herout.co.za" target="_blank"><span>2</span>Desember 2020</a>
	<a href="/"><span>3</span>April 2021</a>
</main>

<style>
	main {
		padding: 20px 20px 72px 20px;
		margin: 0 auto;
		width: 700px;
		max-width: 100%;
	}

	h1 {
		font: 500 24px/1 'Jost', apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
		margin: 24px 0 0;
		color: #1c00c7;
	}

	a {
		display: block;
		font: 700 28px/36px 'Shippori Mincho', serif;
		text-decoration: none;
		color: #3d3d3d;
		padding: 24px 0;
		-webkit-tap-highlight-color: transparent;
		border-bottom: 1px solid #efefef;
	}

	a:active {
		opacity: 0.8;
	}

	a span {
		color: #aaaaaa;
		margin-right: 24px;
		font: 700 24px/36px 'Shippori Mincho', serif;
	}
</style>
