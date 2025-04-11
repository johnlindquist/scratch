import "@/app/globals.css";
import "@/styles/prosemirror.css";
import "katex/dist/katex.min.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";

const title = "Novel Editor Standalone";
const description = "Standalone instance of the Novel editor.";

export const metadata: Metadata = {
	title,
	description,
};

export const viewport: Viewport = {
	themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
