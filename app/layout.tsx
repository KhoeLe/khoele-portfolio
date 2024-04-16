import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/hooks/useAOS";
import { ThemeProvider } from "@/components/theme-provider";
import GridSmallBackground from "@/components/gridsmall-background";
import { TracingBeam } from "@/components/tracing-beam";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], display: 'swap', });

export const metadata: Metadata = {
	metadataBase: new URL("https://khoele-portfolio.vercel.app/"),

	title: {
		template: "%s | Portfolio | Daily Blog",
		default: "Portfolio",
	},
	authors: {
		name: "LouisLe",
	},

	description:
		"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
	openGraph: {
		title: "Portfolio",
		description:
			"Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
		url: "https://khoele-portfolio.vercel.app/",
		siteName: "Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "LouisLe", "dailywebcoding" , "Daily Blog","My Portfolio"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, 'antialiased bg-gray-50 dark:bg-black min-h-screen'].join(' ')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange >
          <GridSmallBackground>
            <TracingBeam>
              {children}

            </TracingBeam>

          </GridSmallBackground>

        </ThemeProvider>
        <AOSInit />
      </body>
      <GoogleAnalytics gaId="G-VK5QGET3FZ" />
      <Analytics />
    </html>
  );
}
