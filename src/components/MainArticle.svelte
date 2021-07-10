<script>
	import { fly } from 'svelte/transition';

	export let mainArticle;
</script>

<div class="background">
	<slot />
	<section class="articleInfo">
		<div class="catagory">{mainArticle.catagory}</div>
		<h1 in:fly={{ duration: 500, y: 20, opacity: 0 }}>{mainArticle.title}</h1>
		<div in:fly={{ delay: 100, duration: 500, y: 15, opacity: 0 }} class="author">
			{mainArticle.author}
		</div>
	</section>
	<div class="heroImage">
		<picture>
			<source
				srcset="/i/720/{mainArticle.imageURL}.webp 1125w, /i/480/{mainArticle.imageURL}.webp 750w, /i/240/{mainArticle.imageURL}.webp 375w"
				type="image/webp"
			/>
			<source
				srcset="/i/720/{mainArticle.imageURL}.jpg 1125w, /i/480/{mainArticle.imageURL}.jpg 750w, /i/240/{mainArticle.imageURL}.jpg 375w"
				type="image/jpeg"
			/>
			<img class="heroImg" src="/i/720/{mainArticle.imageURL}.jpg" alt="" />
		</picture>
		<a class="btnLees" href="/artikels/{mainArticle.slug}">Lees</a>
	</div>
</div>

<style>
	.background {
		background: #fff0c9;
	}

	.articleInfo {
		padding: 20px;
	}

	.catagory {
		text-transform: uppercase;
		font: 500 14px/1 'Jost', apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
		color: #555555;
	}

	h1 {
		margin: 12px 0 16px;
		font: 600 32px/1.2 'Shippori Mincho', serif;
		color: #303030;
	}

	.author {
		color: #555;
		font-size: 18px;
	}

	.heroImage {
		position: relative;
		display: block;
		padding: 0px 0px 20px 20px;
	}

	.heroImage img {
		display: block;
		width: 100%;
		height: 200px;
		border-radius: 10px 0 0 10px;
		object-fit: cover;
	}

	@media (min-width: 700px) {
		.heroImage img {
			height: 300px;
		}
	}

	.btnLees {
		position: absolute;
		right: 20px;
		bottom: 40px;
		display: block;
		background: #fafafa;
		color: #292929;
		font-weight: 400;
		line-height: 1;
		padding: 11px 17px;
		text-align: center;
		border-radius: 12px;
		text-decoration: none;
		user-select: none;
		border: #eaeaea 2px solid;
	}
</style>
