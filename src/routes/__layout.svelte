<script>
	import './globals.css';
</script>

<slot />

<footer>
	<a href="https://dfmalan.com/" rel="norefferer noopener" target="_blank">dfmalan.com</a>
	<a href="mailto:heroutdfm@gmail.com">Kontak</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
	}

	footer a {
		color: #555555;
		text-decoration: none;
		padding: 20px;
	}

	footer a:active {
		color: #222;
	}
</style>
