{
	/* 
			<blockquote>
				If getServerSideProps or getInitialProps is present in a page, Next.js
				will switch to render the page on-demand, per-request (meaning
				Server-Side Rendering).
			</blockquote>

			<blockquote>
				getInitialProps is a legacy API. We recommend using getStaticProps or
				getServerSideProps instead.
			</blockquote> */
}

/**
 * Usage case:
 * - Data fetch using server resource
 *
 * @type GetServerSideProps<{}>
 */
// export async function getServerSideProps() {
// 	consoleLog("exec `getServerSideProps()`");

// 	return {
// 		props: {},
// 	};
// }

// This function gets called at build time
// export async function getStaticProps() {
// 	console.log("🤖 SERVER EXECUTE: getStaticProps");

// 	return {
// 		props: {},
// 	};
// }

// This function gets called at build time
/**
 *
 * Nots: You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps
 * @type GetStaticPaths
 */
// export async function getStaticPaths() {
// console.log("🤖 SERVER EXECUTE: getStaticPaths");

// Call an external API endpoint to get posts
// const res = await fetch("https://.../posts");
// const posts = await res.json();

// Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
// 	params: { id: post.id },
// }));

// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
// 	return { paths: [], fallback: false };
// }
