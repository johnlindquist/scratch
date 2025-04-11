"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export default function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			{...props}
		>
			{children}
			<Toaster />
			<Analytics />
		</NextThemesProvider>
	);
}
