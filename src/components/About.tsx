import { motion } from 'motion/react';
import { Target, Lightbulb, Compass } from 'lucide-react';

const ABOUT_FEATURES = [
  {
    icon: <Compass className="w-8 h-8 text-[#21B9C6]" />,
    title: 'کشف مرزهای جدید',
    description: 'ما همواره در جستجوی راه‌های نوآورانه برای ترکیب هنر و تکنولوژی هستیم تا تجربه‌هایی بی‌نظیر خلق کنیم.'
  },
  {
    icon: <Target className="w-8 h-8 text-[#EBA430]" />,
    title: 'تمرکز بر معنا',
    description: 'هدف ما تنها ایجاد جلوه‌های بصری نیست، بلکه خلق آثاری است که پیامی عمیق و اثربخش برای مخاطب داشته باشند.'
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#21B9C6]" />,
    title: 'راه‌حل‌های خلاقانه',
    description: 'با بهره‌گیری از جدیدترین تکنولوژی‌ها، ایده‌های پیچیده را به تجربه‌های ملموس و تعاملی تبدیل می‌کنیم.'
  }
];

export function About() {
  return (
    <section id="about" className="py-32 relative bg-[#011F41]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              درباره <span className="text-[#21B9C6]">سدیدار</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              ما در سدیدار بر این باوریم که رسانه‌های تعاملی، قدرتمندترین ابزار برای انتقال مفاهیم در دنیای امروز هستند. تیم ما متشکل از متخصصان خلاق در حوزه‌های هنر، طراحی و برنامه‌نویسی است که با هدف ارتقای سطح کیفی محصولات فرهنگی و آموزشی گرد هم آمده‌اند.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              از طراحی محیط‌های غوطه‌ورکننده تا توسعه بازی‌های جدی، هر پروژه برای ما فرصتی است تا مرزهای خلاقیت را جابجا کنیم و اثری ماندگار خلق نماییم.
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-[#EBA430] mb-2">+۵۰</h4>
                <p className="text-gray-400">پروژه موفق</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#21B9C6] mb-2">+۱۰</h4>
                <p className="text-gray-400">سال تجربه تیمی</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-6"
          >
            {ABOUT_FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#032b59] border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-[#032b59]/80 transition-colors"
              >
                <div className="bg-[#011F41] p-4 rounded-xl shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
