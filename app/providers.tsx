"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { type ReactNode } from "react";

// Create a separate ToasterProvider component
const ToasterProvider = () => {
	const { theme } = useTheme() as {
		theme: "light" | "dark" | "system";
	};
	return <Toaster theme={theme} />;
};

export default function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			{...props}
		>
			<ToasterProvider />
			{children}
			<Analytics />
		</NextThemesProvider>
	);
}
