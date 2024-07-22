import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viction Kit",
  description:
    "Viction Kit - Your go-to resource for blockchain development tools, kits, and knowledge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
