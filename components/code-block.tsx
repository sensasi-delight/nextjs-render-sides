export function CodeBlock({ children }: { children: string }) {
	console.log();
	return (
		<pre>
			<code>{children}</code>
		</pre>
	);
}
