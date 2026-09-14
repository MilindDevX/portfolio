import Image from "next/image";
import { profile } from "@/data/portfolio";
import { ArrowMark } from "./Marks";

export function HeroAssembly() {
  return <section className="hero shell" aria-labelledby="hero-title">
    <div className="hero-status"><span className="status-dot"/> {profile.availability}</div>
    <div className="hero-title-wrap"><p className="hero-index">PORTFOLIO / 2026</p><h1 id="hero-title"><span className="hero-line">Milind</span><span className="hero-line"><em>builds the</em></span><span className="hero-line">whole path.</span></h1></div>
    <div className="hero-copy"><p>{profile.introduction}</p><a className="action-link" href="#work">View selected work <ArrowMark down /></a></div>
    <figure className="avatar-stage">
      <Image src="/images/avatar/student-developer-portrait-v2.webp" width={1226} height={1283} priority sizes="(max-width: 767px) 82vw, 38vw" alt="Illustrated student developer avatar" />
    </figure>
  </section>;
}
