import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";
import LocalConfig from "@/constants/config";
import { WebVitals } from "@/components/common/WebVitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Jaivik Bhanushali",
  description:
    "Welcome to Jaivik's portfolio. Explore my projects, skills, and professional journey in web development, design, and technology. Discover innovative solutions and creative designs tailored to meet diverse needs. Let's connect and collaborate on future projects.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
  keywords: [
    "jaivik bhanushali",
    "jaivik",
    "jaiv bhanushali",
    "bhanushali jaivik",
    "jaivik-bhanushali",
    "freelancer",
    "web developer",
    "full stack developer",
    "indian developer",
    "jaivik github",
  ],
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </head>

      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        {process.env.NODE_ENV === "development" ? <WebVitals /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
