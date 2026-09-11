import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#011F41]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ارتباط با ما
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                برای شروع یک همکاری جدید، مشاوره یا کسب اطلاعات بیشتر درباره خدمات سدیدار، با ما در تماس باشید.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#21B9C6]/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#032b59] flex items-center justify-center shrink-0">
                  <Mail className="text-[#21B9C6]" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1 text-sm">پست الکترونیک</h4>
                  <a href="mailto:info@sadidar.com" className="text-white font-medium text-lg hover:text-[#EBA430] transition-colors">info@sadidar.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#21B9C6]/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#032b59] flex items-center justify-center shrink-0">
                  <Phone className="text-[#EBA430]" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1 text-sm">تلفن تماس</h4>
                  <a href="tel:+982100000000" className="text-white font-medium text-lg hover:text-[#EBA430] transition-colors" dir="ltr">+98 21 0000 0000</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#21B9C6]/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#032b59] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#21B9C6]" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1 text-sm">آدرس</h4>
                  <p className="text-white font-medium text-lg">تهران، ایران</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#032b59] rounded-3xl p-8 md:p-12 border border-[#EBA430]/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">ارسال پیام</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 font-medium">نام و نام خانوادگی</label>
                <input 
                  type="text" 
                  className="bg-[#011F41] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#21B9C6] transition-colors"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 font-medium">ایمیل</label>
                <input 
                  type="email" 
                  className="bg-[#011F41] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#21B9C6] transition-colors text-left"
                  placeholder="example@domain.com"
                  dir="ltr"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 font-medium">پیام شما</label>
                <textarea 
                  rows={4}
                  className="bg-[#011F41] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#21B9C6] transition-colors resize-none"
                  placeholder="متن پیام..."
                />
              </div>
              <button className="bg-[#21B9C6] hover:bg-[#1da2ae] text-[#011F41] font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mt-4">
                ارسال پیام
                <Send size={20} className="rotate-180" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
