import { render, screen } from '@testing-library/react';
import { TechStrip } from '@/components/sections/TechStrip';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';

describe('TechStrip', () => {
  it('renders the built-with technologies', () => {
    render(<TechStrip />);

    expect(screen.getByText('OpenAI')).toBeInTheDocument();
    expect(screen.getByText('Ollama')).toBeInTheDocument();
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('LangChain')).toBeInTheDocument();
    expect(screen.getByText(/Self-hosted/)).toBeInTheDocument();
  });

  it('is labelled as the technology stack', () => {
    render(<TechStrip />);
    expect(screen.getByLabelText('Technology stack')).toBeInTheDocument();
  });
});

describe('Button', () => {
  it('renders children and primary styling', () => {
    render(<Button>Get Started Free</Button>);
    expect(screen.getByRole('button', { name: /get started free/i })).toBeInTheDocument();
  });

  it('respects disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled();
  });
});

describe('Footer', () => {
  it('renders product links', () => {
    render(<Footer />);
    expect(screen.getByRole('navigation', { name: 'Footer' })).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
