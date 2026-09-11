import { motion } from 'motion/react';
import { Glasses, Smartphone, Gamepad2, Landmark, Bot, Library } from 'lucide-react';

const ACTIVITIES = [
  {
    icon: <Glasses className="w-10 h-10 text-[#21B9C6]" />,
    title: 'واقعیت مجازی (VR)',
    description: 'طراحی محیط‌های غوطه‌ورکننده'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-[#EBA430]" />,
    title: 'واقعیت افزوده (AR)',
    description: 'ترکیب محتوای دیجیتال با دنیای واقعی'
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-[#21B9C6]" />,
    title: 'بازی‌های ویدیویی و جدی',
    description: 'توسعه بازی‌های آموزشی و سرگرمی'
  },
  {
    icon: <Landmark className="w-10 h-10 text-[#EBA430]" />,
    title: 'شبیه‌سازی تاریخی',
    description: 'بازسازی مکان‌ها و روایت‌های کهن'
  },
  {
    icon: <Bot className="w-10 h-10 text-[#21B9C6]" />,
    title: 'محتوای هوش مصنوعی',
    description: 'تولید ویدیوها و روایت‌های هوشمند'
  },
  {
    icon: <Library className="w-10 h-10 text-[#EBA430]" />,
    title: 'تجربه‌های موزه و نمایشگاه',
    description: 'دیجیتال‌سازی فضاهای فرهنگی'
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-32 relative bg-gradient-to-b from-[#011F41] to-[#032b59]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            حوزه‌های فعالیت
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#21B9C6] mx-auto rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#011F41] border border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group shadow-xl"
            >
              <div className="w-20 h-20 bg-[#032b59] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {activity.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{activity.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
