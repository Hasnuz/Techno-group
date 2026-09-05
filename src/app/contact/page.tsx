import type{Metadata}from"next";
import{MapPin,Phone,MessageCircle,Clock}from"lucide-react";
import{PageHero}from"@/components/page-hero";
import{QuoteForm}from"@/components/quote-form";
import{LocationMap}from"@/components/location-map";
export const metadata:Metadata={title:"Contact Techno Group",description:"Contact Techno Group in Thamarassery, Kozhikode for glass, plywood, hardware and fabrication enquiries.",alternates:{canonical:"/contact"}};
export default function Page(){return <><PageHero eyebrow="Contact" title="Let’s discuss your requirement." copy="Visit or message Techno Group for product enquiries, material guidance and fabrication quotations."/><section className="section"><div className="container grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="display text-3xl font-semibold">Techno Group</h2><div className="mt-8 space-y-6 text-sm"><p className="flex gap-3"><MapPin size={19}/>Thamarassery, Kozhikode, Kerala</p><p className="flex gap-3 text-[#6b6b6b]"><Phone size={19}/>Phone number to be added</p><p className="flex gap-3 text-[#6b6b6b]"><MessageCircle size={19}/>WhatsApp number to be added</p><p className="flex gap-3 text-[#6b6b6b]"><Clock size={19}/>Business hours to be added</p></div><LocationMap/></div><QuoteForm/></div></section></>}
