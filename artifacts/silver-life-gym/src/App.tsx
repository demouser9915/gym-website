import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';

// Global Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { WhatsAppButton } from '@/components/WhatsAppButton';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Coaches from '@/pages/Coaches';
import Gallery from '@/pages/Gallery';
import Membership from '@/pages/Membership';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/membership" component={Membership} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="dark">
            <CustomCursor />
            <Header />
            <main>
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
