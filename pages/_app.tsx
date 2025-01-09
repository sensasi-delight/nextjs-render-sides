import type { AppProps } from "next/app";
import { MainLayout } from "@/components/main-layout";
import FONT from "@/statics/font";
import { consoleLog } from "@/utils/console-log";

consoleLog("exec `pages/_app.tsx`");

export default function App({ Component, pageProps }: AppProps) {
	consoleLog("render `<App />`");

	return (
		<div className={FONT.className}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</div>
	);
}
