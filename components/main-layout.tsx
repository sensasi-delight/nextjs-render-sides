"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Nav />

			{children}
		</>
	);
}

function Nav() {
	const currentPathUrl = usePathname();

	return (
		<nav
			style={{
				display: "flex",
				gap: "4em",
			}}
		>
			{routeGroups.map((group, i) => (
				<div key={i}>
					{group.name}

					<ol
						style={{
							listStyleType: "none",
							paddingLeft: "2em",
						}}
					>
						{group.subpaths.map((route, ii) => {
							const href = "/" + group.path + "/" + route.path;
							const isHere = currentPathUrl === href;

							return (
								<li key={ii}>
									{isHere ? (
										route.title + " <--- YOU ARE HERE"
									) : (
										<Link href={href}>{route.title}</Link>
									)}
								</li>
							);
						})}
					</ol>
				</div>
			))}
		</nav>
	);
}

const routeGroups = [
	{
		name: "App Router:",
		path: "app-router",
		subpaths: [
			{
				title: "1. Simple Page Component",
				path: "1-simple",
			},
			{
				title: "2. Server Components",
				path: "2-server-components",
			},
			{
				title: "3. Client Components",
				path: "3-client-components",
			},
			{
				title: "4. Composition Patterns",
				path: "4-composition-patterns",
			},
			{
				title: "5. Partial Prerendering",
				path: "5-partial-prerendering",
			},
			{
				title: "6. Runtimes",
				path: "6-runtimes",
			},
		],
	},
	{
		name: "Pages Router:",
		path: "pages-router",
		subpaths: [
			{
				title: "1. Simple Page Component",
				path: "1-simple",
			},
			{
				title: "2. Server-side Rendering (SSR)",
				path: "2-ssr",
			},
			{
				title: "3. Static Site Generation (SSG)",
				path: "3-ssg",
			},
			{
				title: "4. Automatic Static Optimization",
				path: "4-aso",
			},
			{
				title: "5. Client-side Rendering (CSR)",
				path: "5-csr",
			},
			{
				title: "6. Edge and Node.js Runtimes",
				path: "6-en-runtimes",
			},
		],
	},
];
