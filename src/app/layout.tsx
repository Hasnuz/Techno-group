import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./premium.css";
import "./details.css";
import "./button-fix.css";
import "./home-refine.css";
import "./scroll-reveal.css";
import "./floating-enquiry.css";
import "./floating-color-fix.css";
import "./mobile.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileActions } from "@/components/mobile-actions";
import { LocalBusinessSchema } from "@/components/schema";
import { ScrollProgress } from "@/components/scroll-progress";
import { AmbientLight } from "@/components/ambient-light";
import { FloatingEnquiry } from "@/components/floating-enquiry";
import { IntroSequence } from "@/components/intro-sequence";
import { ScrollRevealSystem } from "@/components/scroll-reveal-system";

const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const base=process.env.NEXT_PUBLIC_SITE_URL ?? "https://technogroup.example.com";
export const viewport:Viewport={width:"device-width",initialScale:1,viewportFit:"cover",themeColor:"#111111"};

export const metadata: Metadata = {
  metadataBase:new URL(base), title:{default:"Techno Group Thamarassery | Glass, Plywood & Fabrication",template:"%s | Techno Group"},
  description:"Glass, plywood, hardware, doors and professional glass fabrication solutions in Thamarassery and Kozhikode. Request a quotation.",
  alternates:{canonical:"/"}, openGraph:{type:"website",siteName:"Techno Group",locale:"en_IN",images:[{url:"/images/techno-architectural-hero.png",width:1680,height:941,alt:"Contemporary Kerala architecture with glass railing and timber details"}]},twitter:{card:"summary_large_image"}
};

export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <html data-scroll-behavior="smooth"
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body><LocalBusinessSchema/><IntroSequence/><ScrollProgress/><ScrollRevealSystem/><AmbientLight/><Header/><main>{children}</main><FloatingEnquiry/><Footer/><MobileActions/></body>
    </html>
  );
}
