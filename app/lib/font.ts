import { Young_Serif } from "next/font/google";
import localFont from "next/font/local";

export const titleFont = Young_Serif({
    weight: "400",
    subsets: ["latin"],
});

// https://open-foundry.com/fonts/cooper-hewitt

export const bodyFont = localFont({
    src: [
        { path: "../../public/fonts/CooperHewitt-Book.otf", weight: "400", style: "normal" },
        { path: "../../public/fonts/CooperHewitt-BookItalic.otf", weight: "400", style: "italic" },
        { path: "../../public/fonts/CooperHewitt-Medium.otf", weight: "500", style: "normal" },
        { path: "../../public/fonts/CooperHewitt-MediumItalic.otf", weight: "500", style: "italic" },
        { path: "../../public/fonts/CooperHewitt-Bold.otf", weight: "700", style: "normal" },
        { path: "../../public/fonts/CooperHewitt-BoldItalic.otf", weight: "700", style: "italic" },
    ],
    variable: "--font-cooper-hewitt",
});
