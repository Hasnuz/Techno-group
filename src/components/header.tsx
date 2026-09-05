"use client";
import Link from"next/link";
import{Menu,X,ArrowUpRight}from"lucide-react";
import{useEffect,useState}from"react";
import{usePathname}from"next/navigation";
import{Logo}from"./logo";
const links=[["About","/about"],["Products","/products"],["Services","/services"],["Projects","/projects"],["Blog","/blog"],["Contact","/contact"]];
export function Header(){
 const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);const pathname=usePathname();
 useEffect(()=>{const fn=()=>setScrolled(scrollY>20);fn();addEventListener("scroll",fn,{passive:true});return()=>removeEventListener("scroll",fn)},[]);
 // Navigation state must close when the App Router changes route.
 // eslint-disable-next-line react-hooks/set-state-in-effect
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled||open?"border-b border-black/10 bg-white/95 text-black shadow-sm backdrop-blur-xl":"text-white"}`}>
  <div className="container flex h-20 items-center justify-between"><Logo light={!scrolled&&!open}/><nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">{links.map(([label,href])=><Link className="nav-link focus-ring text-[13px] font-medium transition-opacity hover:opacity-60" href={href} key={href}>{label}</Link>)}</nav><div className="hidden items-center gap-3 lg:flex"><Link href="/contact" className="focus-ring border border-current/25 px-4 py-3 text-sm font-semibold">Contact</Link><Link href="/get-a-quote" className={`premium-button focus-ring flex items-center gap-3 px-5 py-3 text-sm font-semibold ${scrolled?"bg-black text-white":"bg-white text-black"}`}><span>Get a Quote</span><ArrowUpRight size={16}/></Link></div><button onClick={()=>setOpen(v=>!v)} className="focus-ring flex min-h-11 items-center gap-2 p-2 text-sm font-semibold lg:hidden" aria-expanded={open} aria-controls="mobile-menu"><span>{open?"Close":"Menu"}</span>{open?<X size={20}/>:<Menu size={20}/>}</button></div>
  {open&&<nav id="mobile-menu" aria-label="Mobile navigation" className="h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-[#f7f7f5] px-5 pb-28 pt-5 text-black lg:hidden">{links.map(([label,href],i)=><Link href={href} key={href} className="flex min-h-16 items-center border-b border-black/10 font-[Manrope] text-[clamp(1.55rem,8vw,2.2rem)]"><span className="mr-5 text-[10px] text-[#b89762]">0{i+1}</span>{label}</Link>)}<Link href="/get-a-quote" className="mt-6 flex min-h-14 items-center justify-between bg-black px-5 text-sm font-semibold text-white"><span>Get a Free Quote</span><ArrowUpRight size={18}/></Link></nav>}
 </header>
}
