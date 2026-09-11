import { motion } from 'motion/react';
import { ArrowLeft, Play } from 'lucide-react';

const PROJECTS = [
  {
    title: 'شبیه‌ساز آموزشی معماری باستانی',
    category: 'واقعیت مجازی (VR)',
    image: 'bg-gradient-to-br from-purple-900 to-[#032b59]'
  },
  {
    title: 'تور تعاملی موزه هنر معاصر',
    category: 'تجربه‌های موزه و نمایشگاه',
    image: 'bg-gradient-to-br from-[#21B9C6] to-[#011F41]'
  },
  {
    title: 'بازی جدی: مسیر توسعه پایدار',
    category: 'بازی‌های دیجیتال',
    image: 'bg-gradient-to-br from-[#EBA430] to-[#032b59]'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-[#032b59]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            تجربه‌های منتخب
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#21B9C6] mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`aspect-[4/5] w-full ${project.image} transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <Play className="text-white ml-1 w-8 h-8" />
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011F41] via-[#011F41]/50 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#EBA430] font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                
                <div className="flex items-center gap-2 text-[#21B9C6] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                  <span>مشاهده پروژه</span>
                  <ArrowLeft size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
