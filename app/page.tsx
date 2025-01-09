export default function Home() {
	return (
		<main>
			<h1>Next.js Render Sides</h1>
			<p>
				This repository helps you to understand the various render behaviors in
				Nextjs App and Pages router.
			</p>
			<blockquote>
				Rendering converts the code you write into user interfaces
				<a href="#footnote-1">[1]</a>.
			</blockquote>
			<h2>
				Request-Response Lifecycle<a href="#footnote-1">[1]</a>
			</h2>
			<ul>
				<li>User Action</li>
				<li>HTTP Request</li>
				<li>Server</li>
				<li>HTTP Response</li>
				<li>Client</li>
				<li>
					<i>...and repeat until user leaving the page.</i>
				</li>
			</ul>

			<p>References:</p>
			<ol
				style={{
					listStyle: "none",
				}}
			>
				<li>
					<a href="https://github.com/vercel/next.js/blob/8ffa6c74b1f3fe357ce25bb455a565c6327dbd1e/docs/01-app/03-building-your-application/03-rendering/index.mdx">
						[1] Building Your Application: Rendering | Next.js (.mdx file on
						GitHub)
					</a>
				</li>
			</ol>
		</main>
	);
}
