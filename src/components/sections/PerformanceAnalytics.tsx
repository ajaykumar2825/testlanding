'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Coins, CheckCircle, XCircle, History, Users, BarChart3, Cpu, Zap } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, title: 'Agent Executions', description: 'Track total runs, success rates, and trends over time' },
  { icon: Clock, title: 'Response Time', description: 'Monitor latency percentiles (p50, p95, p99) per agent' },
  { icon: Coins, title: 'Token Usage & Costs', description: 'Real-time token consumption and estimated API costs by model' },
  { icon: CheckCircle, title: 'Success Rate', description: 'Percentage of successful vs failed executions with drill-down' },
  { icon: XCircle, title: 'Failure Analysis', description: 'Categorized errors, retry rates, and root cause insights' },
  { icon: History, title: 'Workflow History', description: 'Full execution traces with step-by-step timing and outputs' },
  { icon: Users, title: 'User Activity', description: 'Active users, session duration, and feature adoption metrics' },
  { icon: BarChart3, title: 'Model Comparison', description: 'Side-by-side performance comparison across providers' },
  { icon: Cpu, title: 'Resource Utilization', description: 'CPU, memory, and GPU usage for local deployments' },
];

export const PerformanceAnalytics = () => {
  return (
    <section id="analytics" className="py-20 lg:py-28" aria-labelledby="analytics-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="analytics-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Monitor every AI execution <br />
            <span className="text-[#0084FF]">in real time</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          role="list"
          aria-label="Analytics metrics"
        >
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.03 }}
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{metric.title}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed">{metric.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden glass-panel aspect-video"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,0,0,0.03), rgba(0,0,0,0.01))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 shadow-lg border border-black/10">
                <Zap className="w-10 h-10 text-[#0084FF]" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[24px] text-black mb-2">Live Analytics Dashboard</h3>
              <p className="font-sans text-[16px] text-black/60 max-w-md mx-auto">
                Real-time monitoring with customizable dashboards, alerts, and exportable reports.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};