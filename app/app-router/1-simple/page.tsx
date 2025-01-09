import { consoleLog } from "@/utils/console-log";

consoleLog("exec `./app/app-router/1-simple/page.tsx` file");

export default function SimplePage() {
	consoleLog("render `<SimplePage />");

	return (
		<main>
			<h1>Simple Page Component</h1>

			<p>References:</p>

			<ul>
				<li>
					<a href="https://github.com/vercel/next.js/blob/8ffa6c74b1f3fe357ce25bb455a565c6327dbd1e/docs/01-app/03-building-your-application/03-rendering/index.mdx">
						[github:
						vercel/next.js]/docs/01-app/03-building-your-application/03-rendering/index.mdx
					</a>
				</li>
			</ul>
		</main>
	);
}
