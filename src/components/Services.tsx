import { motion } from 'motion/react';
import { Layers, Cuboid, MonitorPlay, Lightbulb } from 'lucide-react';

const SERVICES = [
  {
    icon: <Layers className="w-12 h-12 text-[#EBA430]" />,
    title: 'طراحی VR & AR',
    description: 'توسعه کامل برنامه‌ها و تجربه‌ها'
  },
  {
    icon: <Cuboid className="w-12 h-12 text-[#21B9C6]" />,
    title: 'ساخت پروتوتایپ',
    description: 'نمونه‌سازی سریع ایده‌های تعاملی'
  },
  {
    icon: <MonitorPlay className="w-12 h-12 text-[#EBA430]" />,
    title: 'تولید بازی دیجیتال',
    description: 'از ایده تا پیاده‌سازی فنی'
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#21B9C6]" />,
    title: 'مشاوره فناوری',
    description: 'اجرای پروژه‌های تعاملی سازمان‌ها'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#011F41]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              خدمات قابل ارائه
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              ما در سدیدار مجموعه‌ای کامل از خدمات طراحی، توسعه و مشاوره را برای خلق محصولات تعاملی و دیجیتال ارائه می‌دهیم.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block w-32 h-1 bg-[#EBA430] rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-[#032b59] to-[#011F41] border border-[#21B9C6]/20 p-8 rounded-3xl group hover:border-[#21B9C6]/60 transition-colors"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
