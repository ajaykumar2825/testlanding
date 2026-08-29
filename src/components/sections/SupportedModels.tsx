'use client';

import { motion } from 'framer-motion';

const modelProviders = [
  { name: 'OpenAI GPT', models: ['GPT-4o', 'GPT-4 Turbo', 'GPT-3.5 Turbo'], color: 'from-green-500 to-green-600' },
  { name: 'Google Gemini', models: ['Gemini 1.5 Pro', 'Gemini 1.5 Flash', 'Gemini 1.0 Ultra'], color: 'from-blue-500 to-blue-600' },
  { name: 'Anthropic Claude', models: ['Claude 3.5 Sonnet', 'Claude 3 Opus', 'Claude 3 Haiku'], color: 'from-orange-500 to-orange-600' },
  { name: 'DeepSeek', models: ['DeepSeek V3', 'DeepSeek R1', 'DeepSeek Coder'], color: 'from-purple-500 to-purple-600' },
  { name: 'Ollama Local', models: ['Llama 3.1', 'Mistral', 'Qwen 2.5', 'CodeLlama'], color: 'from-teal-500 to-teal-600' },
  { name: 'Custom APIs', models: ['OpenAI-Compatible', 'vLLM', 'TGI', 'Custom Endpoints'], color: 'from-gray-500 to-gray-600' },
];

export const SupportedModels = () => {
  return (
    <section id="models" className="py-20 lg:py-28 bg-black/2" aria-labelledby="models-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="models-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Use your favorite AI model — <br />
            <span className="text-[#0084FF]">or switch anytime</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          role="list"
          aria-label="AI model providers"
        >
          {modelProviders.map((provider, index) => (
            <motion.article
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300 group"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-bold text-white text-lg">{provider.name.split(' ')[0][0]}</span>
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-3">{provider.name}</h3>
              <ul className="space-y-2" role="list">
                {provider.models.map((model, i) => (
                  <li key={model} className="font-sans text-[15px] text-black/60 leading-relaxed flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] flex-shrink-0 mt-2" aria-hidden="true" />
                    {model}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 lg:p-12 rounded-[24px] text-center"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,132,255,0.05), rgba(0,132,255,0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,132,255,0.15)',
          }}
        >
          <h3 className="font-outfit font-bold text-[24px] sm:text-[32px] leading-[1.1] tracking-[-2px] text-black mb-4">
            Switch providers without changing workflows
          </h3>
          <p className="font-sans text-[16px] text-black/60 leading-relaxed max-w-[600px] mx-auto">
            Run models locally for complete privacy and data sovereignty, or deploy to the cloud for scale. Your agent logic stays the same — only the model endpoint changes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};