import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "100", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "100", "700", "900"],
});

export const metadata: Metadata = {
  title: "ChadLearners",
  description: "ChadLearners is a platform designed to help individuals learn and grow through interactive courses and tutorials.",
  keywords: "learning, tutorials, courses, education, development, ChadLearners",
  authors: [{
    name: "ChadLearners Team",
    url: "https://chadlearners.site",
  },],
  robots: "index, follow", // Instructs search engines to index the page and follow links
  // openGraph: {
  //   type: "website",
  //   url: "https://chadlearners.site", // Replace with your actual site URL
  //   title: "ChadLearners",
  //   description: "Learn and grow with ChadLearners through engaging tutorials and courses.",
  //   images: [
  //     {
  //       url: "/path-to-your-image.jpg", // Replace with the actual image URL for social sharing
  //       width: 800,
  //       height: 600,
  //       alt: "ChadLearners Logo",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image", // Twitter card type (for rich media previews)
  //   site: "@ChadLearners", // Twitter handle of your project or company
  //   title: "ChadLearners",
  //   description: "Learn and grow with ChadLearners through engaging tutorials and courses.",
  //   images: [
  //     {
  //       url: "/path-to-your-image.jpg", // Replace with the actual image URL for Twitter preview
  //       width: 800,
  //       height: 600,
  //       alt: "ChadLearners Logo",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
