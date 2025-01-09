import { ActorRepresentation } from "@/enums/actor-representation";

export function consoleLog(msg: string) {
	const by =
		typeof window === "undefined"
			? ActorRepresentation.SERVER
			: ActorRepresentation.CLIENT;

	console.info(
		`
%c${msg}
%c${by} - ${new Date().toISOString()}
`,
		"font-size: 1rem; color: yellow;",
		"font-size: 1em; color: grey;"
	);
}
