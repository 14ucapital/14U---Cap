import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-brand-surface px-6 text-center">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[40rem] h-[40rem] bg-brand-primary/10 blur-[150px] rounded-full mx-auto mt-32" />
      </div>

      {/* Changed Icon to be more professional */}
      <h1 className="text-7xl font-bold text-brand-primary">
        🚧
      </h1>

      <h2 className="mt-6 text-4xl font-bold text-brand-text">
        Page Under Construction
      </h2>

      <p className="mt-4 text-lg text-brand-muted max-w-lg">
        We're currently building something amazing for this page. It will be available soon. Our team is working hard to bring it to you!
      </p>

      <Button href="/" variant="primary" size="lg" className="mt-10">
        Go Back Home
      </Button>
    </div>
  );
}