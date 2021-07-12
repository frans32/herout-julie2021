<script>
	export let articles = [];
</script>

<section>
	<h2 class="heading">Lees Verder</h2>

	{#each articles as article}
		<a class="article" href="/artikels/{article.slug}">
			<h3>{@html article.title}</h3>
			<div class="author">{article.author}</div>
		</a>
	{/each}
</section>

<style>
	section {
		padding: 20px;
		margin: 0 auto;
		max-width: 780px;
	}

	.heading {
		display: flex;
		justify-content: space-between;
		font: 400 24px/1 'Jost', sans-serif;
		color: #1c00c7;
		margin: 0;
	}

	.heading:after {
		content: '';
		background: #1c00c7;
		width: 8px;
		height: 4px;
		border-radius: 5px;
		margin: 9px 0;
	}

	.article {
		display: block;
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.article h3 {
		font: 600 24px/1.2 'Shippori Mincho', serif;
		color: #222222;
		margin: 0 0 0 0;
	}

	.article .author {
		color: #555555;
		margin-top: 8px;
	}

	.article:active {
		opacity: 0.8;
	}
</style>
