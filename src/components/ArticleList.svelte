<script>
	export let articles;
</script>

<section>
	<h2 class="heading">Artikels</h2>

	{#each articles as article, i}
		<a href="/artikels/{article.slug}" class="article">
			<img loading="lazy" width="64" height="64" alt="" src="/i/192/{article.imageURL}.jpg" />
			<div>
				<h3>{@html article.title}</h3>
				<div class="author">{article.author}</div>
			</div>
		</a>
	{/each}
</section>

<style>
	section {
		padding: 24px 20px;
	}

	.heading {
		font: 600 24px/0.83 'Shippori Mincho', sans-serif;
		color: #222;
		margin: 0;
		border-bottom: 1px solid #e5e5e5;
	}

	.article {
		display: flex;
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.article > div {
		margin-left: 15px;
	}

	.article h3 {
		font: 400 24px/1.2 'Shippori Mincho', serif;
		color: #3d3d3d;
		margin: 0 0 0 0;
	}

	.article .author {
		color: #555555;
		margin-top: 12px;
	}

	.article:active {
		opacity: 0.8;
	}

	.article img {
		object-fit: cover;
		background: #f4f4f4;
		border-radius: 8px;
		box-shadow: #c4c70023 -3px 3px 0 -1px;
	}
</style>
