import { ResearchArea } from '@/contents/research-areas';
import { icons } from './research-icons';
import cn from 'classnames';
import { motion } from 'framer-motion';

export function ResearchAreaCard({ area }: { area: ResearchArea }) {
  const IconComponent = icons[area.slug];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        'relative overflow-hidden',
        'bg-base-100/80 dark:bg-gray-900/80',
        'rounded-2xl p-8',
        'border border-gray-200/50 dark:border-gray-800/50',
        'transition-all duration-300 ease-out',
        'hover:shadow-xl hover:shadow-blue-600/10',
        'backdrop-blur-sm',
        'group'
      )}
    >
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.07] dark:opacity-[0.05]">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        <div className="flex items-start space-x-5 mb-6">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <div className={cn(
              'w-14 h-14 flex items-center justify-center rounded-2xl',
              'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900',
              'shadow-lg shadow-gray-200/50 dark:shadow-none',
              'transform transition-all duration-300 group-hover:rotate-6'
            )}>
              <IconComponent className="w-7 h-7 text-primary transform transition-transform duration-300 group-hover:scale-110" />
            </div>
          </motion.div>
          <div>
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1"
            >
              {area.title}
            </motion.h3>
            <p className="text-primary font-medium tracking-wide">
              {area.subtitle}
            </p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {area.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {area.keywords.map((keyword, index) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              key={keyword}
              className={cn(
                'px-4 py-1.5 text-sm rounded-full',
                'bg-gray-50 dark:bg-gray-800/80',
                'text-gray-700 dark:text-gray-300',
                'border border-gray-200/50 dark:border-gray-700/50',
                'shadow-sm',
                'transition-all duration-200',
                'hover:bg-blue-50',
                'hover:text-primary'
              )}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 