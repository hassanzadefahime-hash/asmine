import "./globals.css";
import Flower from "@/components/layout/Flower";
import localFont from "next/font/local";
import Background from "@/components/layout/Background";

const brittanySignature = localFont({
  src: "../assets/GreatVibes-Regular.ttf",
  variable: "--font-brittany-signature",
  display: "swap",
});

const Dancing = localFont({
  src: "../assets/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancing",
  display: "swap",
});

export const metadata = {
  title: "Asmine",
  description: "Creative Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${brittanySignature.variable} ${Dancing.variable}`}
    >
      <body className="antialiased">
        <div className="h-dvh bg-gradient-to-b from-[#A66F7D] via-[#713F4D] to-[#300D1B] overflow-hidden">
          <Background />

          <div className="mt-10">
            <Flower />
          </div>

          <div className="relative h-dvh">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
