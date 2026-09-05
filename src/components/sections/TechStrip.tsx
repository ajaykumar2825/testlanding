import { Sparkles } from 'lucide-react';

const technologies = ['OpenAI', 'Ollama', 'FastAPI', 'Docker', 'PostgreSQL', 'LangChain'];

export function TechStrip() {
  return (
    <section aria-label="Technology stack" className="border-y border-ink/5 bg-white/60 py-10">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-ink/60">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          Self-hosted. Cloud-ready. Open Architecture.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4" aria-label="Built with">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="text-base font-semibold tracking-tight text-ink/40 transition-colors hover:text-ink/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
