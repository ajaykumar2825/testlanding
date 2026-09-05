import { Bot } from 'lucide-react';
import Link from 'next/link';

const links = [
  { label: 'Docs', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white" role="contentinfo">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-lg font-bold text-ink">
            <Bot className="h-6 w-6 text-primary" aria-hidden="true" />
            AgentForge
          </div>
          <p className="max-w-xs text-sm text-ink/60">
            The AI project manager that runs sprints, standups, meeting notes, and reports for your team.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-ink/60 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink/5 py-5">
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <p className="text-xs text-ink/50">© {new Date().getFullYear()} AgentForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
