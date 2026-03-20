import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nozzle Flanges for Vessels & Equipment | Nozzle Flanges",
  description: "Forged nozzle flanges for pressure vessel connections, heat exchangers, and process equipment. Long weld neck and standard configurations available.",
  keywords: "nozzle flanges, vessel nozzle flanges, LWN flanges, equipment flanges, forged nozzle flanges",
  openGraph: {
    title: "Nozzle Flanges for Vessels & Equipment | Nozzle Flanges",
    description: "Forged nozzle flanges for pressure vessel connections, heat exchangers, and process equipment. Long weld neck and standard configurations available.",
    url: "https://nozzleflanges.com",
    type: "website",
    images: []
  },
  twitter: {
    card: "summary_large_image",
    title: "Nozzle Flanges for Vessels & Equipment | Nozzle Flanges",
    description: "Forged nozzle flanges for pressure vessel connections, heat exchangers, and process equipment. Long weld neck and standard configurations available."
  },
  alternates: { canonical: "https://nozzleflanges.com" }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([{
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Nozzle Flanges",
        "url":"https://nozzleflanges.com",
        "contactPoint":{"@type":"ContactPoint","telephone":"+1-281-484-8325","contactType":"sales","email":"sales@texasflange.com"}
      },{
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity":[{"@type":"Question","name":"What is a nozzle flange?","acceptedAnswer":{"@type":"Answer","text":"A nozzle flange is a weld neck or long weld neck flange that provides the connection point on a pressure vessel or equipment shell. It is welded directly to the vessel shell or head."}}]
    }])}} />

      <style dangerouslySetInnerHTML={{__html: `
        /* Hide old layout header */
        body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        .rv { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .rv.vis { opacity: 1; transform: translateY(0); }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        setTimeout(function(){
          var els = document.querySelectorAll('.rv');
          if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('vis')});return;}
          var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('vis');obs.unobserve(en.target);}});
          },{threshold:0.1});
          els.forEach(function(e){obs.observe(e);});
        }, 50);
      `}} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{background:'#92400Eee'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold text-white no-underline">Nozzle Flanges</a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white/80 hover:text-white text-sm no-underline">About</a>
            <a href="#specifications" className="text-white/80 hover:text-white text-sm no-underline">Specs</a>
            <a href="#industries" className="text-white/80 hover:text-white text-sm no-underline">Industries</a>
            <a href="#faq" className="text-white/80 hover:text-white text-sm no-underline">FAQ</a>
            <a href="https://www.texasflange.com/contact-us/" className="px-4 py-2 rounded-lg text-sm font-semibold no-underline" style={{background:'#F59E0B', color:'white'}}>Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white" style={{backgroundImage:'linear-gradient(135deg, #92400Edd, #F59E0Bbb), ', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="text-center px-6 max-w-4xl">
          <p className="text-sm font-bold tracking-[0.3em] mb-4 opacity-70">YOUR SOURCE FOR NOZZLE FLANGES</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Nozzle Flanges for Vessels & Equipment</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Forged nozzle flanges for pressure vessel connections, heat exchangers, and process equipment. Long weld neck and standard configurations available.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline" style={{background:'#F59E0B', color:'white'}}>Request a Quote</a>
            <a href="tel:281-484-8325" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline border-2 border-white/50 text-white hover:bg-white/10">Call 281-484-8325</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 sm:py-16 lg:py-20 px-6 rv">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color:'#92400E'}}>About Nozzle Flanges</h2>
            <p className="text-lg text-gray-700 leading-relaxed opacity-85">We maintain one of the largest inventories of nozzle flanges in the Houston area. Every flange is manufactured to ASME, ANSI, and API standards with full material traceability and certification.</p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4 opacity-85">Forged nozzle flanges for pressure vessel connections, heat exchangers, and process equipment. Long weld neck and standard configurations available.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1754211675787-8040a1104fac?w=600&h=400&fit=crop&auto=format&q=80" alt="Nozzle Flanges - Industrial pipe flanges" width="600" height="400" style={{width:"100%",height:"300px",borderRadius:"12px",objectFit:"cover"}} />
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#92400E08'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#92400E'}}>Product Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#92400E'}}>Material Grades</h3>
              <p className="text-gray-600">A105, A182 F304/F316, A182 F11/F22, A350 LF2</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"/><path d="M2 12l3-3"/><path d="M2 12l3 3"/><path d="M22 12h-5"/><path d="M22 12l-3-3"/><path d="M22 12l-3 3"/><path d="M12 2v5"/><path d="M12 2l3 3"/><path d="M12 2l-3 3"/><path d="M12 22v-5"/><path d="M12 22l3-3"/><path d="M12 22l-3-3"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#92400E'}}>Size Range</h3>
              <p className="text-gray-600">1/2" through 60" and larger custom sizes available</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#92400E'}}>Standards</h3>
              <p className="text-gray-600">ASME B16.5, B16.47, API 605, MSS SP-44</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-10 sm:py-16 lg:py-20 px-6 rv">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#92400E'}}>Industries Served</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-5 text-center shadow border border-gray-100"><p className="font-medium text-gray-800">Pressure Vessels</p></div>
            <div className="bg-white rounded-lg p-5 text-center shadow border border-gray-100"><p className="font-medium text-gray-800">Heat Exchangers</p></div>
            <div className="bg-white rounded-lg p-5 text-center shadow border border-gray-100"><p className="font-medium text-gray-800">Columns & Towers</p></div>
            <div className="bg-white rounded-lg p-5 text-center shadow border border-gray-100"><p className="font-medium text-gray-800">Reactors</p></div>
            <div className="bg-white rounded-lg p-5 text-center shadow border border-gray-100"><p className="font-medium text-gray-800">Storage Tanks</p></div>
          </div>
        </div>
      </section>

            <section id="datacenter" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'linear-gradient(135deg, #92400E11, #F59E0B11)'}}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8" style={{color:'#92400E'}}>Data Center Infrastructure</h2>
                <p className="text-lg text-gray-700 leading-relaxed opacity-85">We supply flanges for data center cooling systems, fire suppression piping, and critical infrastructure. Hyperscale facilities require precision-manufactured flanges that meet demanding specifications for reliability and performance.</p>
              </div>
            </section>
      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#92400E06'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#92400E'}}>Frequently Asked Questions</h2>
          <details className="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer group">
            <summary className="font-semibold text-lg list-none flex justify-between items-center" style={{color:'#92400E'}}>What is a nozzle flange?<span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span></summary>
            <p className="mt-3 text-gray-700 leading-relaxed">A nozzle flange is a weld neck or long weld neck flange that provides the connection point on a pressure vessel or equipment shell. It is welded directly to the vessel shell or head.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 lg:py-20 px-6 text-white text-center rv" style={{background:'linear-gradient(135deg, #92400E, #F59E0B)'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Contact us for competitive pricing, technical specifications, and fast delivery on nozzle flanges.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline" style={{background:'white', color:'#92400E'}}>Request a Quote</a>
            <a href="mailto:sales@texasflange.com" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline border-2 border-white/50 text-white">Email Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{background:'#92400E', color:'white'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nozzle Flanges</h3>
            <p className="text-sm opacity-70">Your source for quality industrial pipe flanges.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="#about" className="text-white no-underline hover:opacity-100">About</a>
              <a href="#specifications" className="text-white no-underline hover:opacity-100">Specifications</a>
              <a href="#industries" className="text-white no-underline hover:opacity-100">Industries</a>
              <a href="#faq" className="text-white no-underline hover:opacity-100">FAQ</a>
                  <a href="/blog" className="text-white no-underline hover:opacity-100">Blog</a>
                  <a href="/contact" className="text-white no-underline hover:opacity-100">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="tel:281-484-8325" className="text-white no-underline">281-484-8325</a>
              <a href="mailto:sales@texasflange.com" className="text-white no-underline">sales@texasflange.com</a>
              <a href="https://www.texasflange.com/contact-us/" className="text-white no-underline">Request a Quote</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Related</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="https://www.texasflange.com" className="text-white no-underline">texasflange.com</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/20 text-center text-sm opacity-60">
          <p>&copy; 2026 Nozzle Flanges &middot; Houston, Texas &middot; All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
