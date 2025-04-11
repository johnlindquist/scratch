import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const cal = localFont({
    src: "./CalSans-SemiBold.otf",
    variable: "--font-cal",
}); 