import { Star, ArrowRight, ArrowUpRight, Hexagon, Circle, Triangle, Square, Diamond } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-inter text-gray-900 selection:bg-blue-100">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full bg-[#60B1FF] mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#319AFF] mix-blend-multiply filter blur-[120px] opacity-30 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col min-h-screen">

        {/* Navbar */}
        <nav className="sticky top-[30px] mx-auto w-fit z-50 flex items-center justify-between px-6 py-3 gap-8 backdrop-blur-[50px] bg-white/30 rounded-[16px] border border-black/10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.25)]">
          <div className="font-fustat font-bold text-2xl tracking-tight">Taskly</div>
          <div className="hidden md:flex items-center gap-8 font-medium text-[15px] text-gray-700">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Features</a>
            <a href="#" className="hover:text-black transition-colors">Company</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 shadow-sm font-medium text-[15px] hover:bg-white/60 transition-colors">
            SignUp
            <ArrowRight size={16} />
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 px-6 lg:px-16 pt-[120px] pb-[80px]">

          {/* Hero Left: Content */}
          <div className="flex flex-col items-start z-20">
            {/* Social Proof */}
            <div className="flex items-center gap-3 mb-8 px-4 py-2 bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-full">
              <div className="flex gap-1 text-[#FF801E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">Rated 4.9/5 by 2700+ customers</span>
            </div>

            {/* Headline */}
            <h1 className="font-fustat font-bold text-[50px] lg:text-[75px] leading-[1.05] tracking-[-2px] text-gray-900 mb-6">
              Work smarter,<br className="hidden lg:block" /> achieve faster
            </h1>

            {/* Subheadline */}
            <p className="font-inter text-[18px] tracking-[-1px] text-gray-600 leading-relaxed max-w-[540px] mb-10">
              Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.
            </p>

            {/* Primary CTA */}
            <button className="group flex items-center gap-3 px-8 py-4 bg-[rgba(0,132,255,0.8)] backdrop-blur-[2px] rounded-[16px] text-white shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] hover:scale-[1.02] transition-transform duration-300 font-medium text-lg">
              Get Started Now
              <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-[rgba(0,132,255,1)] group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Hero Right: Glassy Orb Video */}
          <div className="relative flex justify-center items-center w-full h-[400px] lg:h-[700px] z-10 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute mix-blend-screen scale-125 lg:scale-[1.3] translate-x-4 lg:translate-x-12 w-full max-w-[800px] object-contain"
              style={{ filter: 'hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)' }}
            >
              <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
            </video>
          </div>
        </main>

        {/* Footer Logos */}
        <footer className="w-full pb-[60px] flex flex-col items-center justify-center border-t border-gray-100 pt-10 mt-auto">
          <p className="text-sm font-medium text-gray-400 mb-8 tracking-wide uppercase">
            Trusted by Top-tier product companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-[100px] text-gray-400 grayscale opacity-60">
            <Hexagon size={40} />
            <Circle size={40} />
            <Triangle size={40} />
            <Square size={40} />
            <Diamond size={40} />
          </div>
        </footer>
      </div>
    </div>
  );
}
