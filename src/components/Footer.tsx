import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#00132B] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EBA430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"/>
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-xl font-bold tracking-wider text-white">سدیدار</span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#21B9C6] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EBA430] transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} استودیو سدیدار. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">قوانین و مقررات</a>
            <a href="#" className="hover:text-gray-300">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
