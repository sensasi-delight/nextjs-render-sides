import { ActorRepresentation } from "@/enums/actor-representation";
import { CodeBlock } from "@/components/code-block";
import { consoleLog } from "@/utils/console-log";

consoleLog("exec `pages/pages-router/1-simple.tsx`");

export default function SimplePage() {
	consoleLog("render `<SimplePage />`");

	return (
		<main>
			<h1>Simple page example</h1>

			<blockquote>
				By default, Next.js <b>pre-renders</b> every page
				<a href="#footnote-1">[1]</a>. ....
			</blockquote>

			<h2>Logs</h2>

			<p>The server start executing after receiving request from client.</p>

			<p>
				Open your terminal and browser consoles. You should see the same
				behavior.
			</p>

			<p>
				If "React Strict Mode" was enabled, you should see the{" "}
				{ActorRepresentation.CLIENT} only will render <code>{`<App />`}</code>{" "}
				and <code>{`<SimplePage />`}</code> twice.
			</p>

			<h3>{ActorRepresentation.SERVER + "'s Console Output"}</h3>

			<CodeBlock>{SERVER_LOG}</CodeBlock>

			<h3>{ActorRepresentation.CLIENT + "'s Console Output"}</h3>

			<CodeBlock>{CLIENT_LOG}</CodeBlock>

			<p>References:</p>

			<ul>
				<li>
					<a href="https://github.com/vercel/next.js/blob/8ffa6c74b1f3fe357ce25bb455a565c6327dbd1e/docs/02-pages/02-building-your-application/02-rendering/index.mdx">
						Nextjs.org (.mdx file on GitHub)
					</a>
				</li>
			</ul>
		</main>
	);
}

/**
 * @todo  show the real-time current logs if possible.
 */
const SERVER_LOG = `✓ Compiled /pages-router/1-simple in 112ms

exec \`pages/pages-router/_app.tsx\`
${ActorRepresentation.SERVER} - 2025-01-08T18:53:21.244Z

exec \`pages/pages-router/1-simple.tsx\`
${ActorRepresentation.SERVER} - 2025-01-08T18:53:21.288Z

render \`<App />\`
${ActorRepresentation.SERVER} - 2025-01-08T18:53:21.292Z

render \`<SimplePage />\`
${ActorRepresentation.SERVER} - 2025-01-08T18:53:21.298Z

// Send response
GET /pages-router/1-simple 200 in 307ms
GET /favicon.ico 200 in 167ms`;

const CLIENT_LOG = `exec \`pages/pages-router/_app.tsx\`
${ActorRepresentation.CLIENT} - 2025-01-08T18:53:21.630Z

exec \`pages/pages-router/1-simple.tsx\`
${ActorRepresentation.CLIENT} - 2025-01-08T18:53:21.661Z

websocket.ts:32 [HMR] connected
hot-reloader-client.ts:277 [Fast Refresh] rebuilding

render \`<App />\`
${ActorRepresentation.CLIENT} - 2025-01-08T18:53:21.873Z

render \`<SimplePage />\`
${ActorRepresentation.CLIENT} - 2025-01-08T18:53:21.875Z

hot-reloader-client.ts:277 [Fast Refresh] rebuilding
hot-reloader-client.ts:277 [Fast Refresh] rebuilding
hot-reloader-client.ts:277 [Fast Refresh] rebuilding`;
