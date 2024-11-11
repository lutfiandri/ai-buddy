import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/layout';
import { Input } from '@/components/ui/input';
import { SendIcon } from 'lucide-react';

function App() {
  return (
    <Layout>
      <div className="flex-1 container p-4 grid place-items-center">
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input type="text" placeholder="Ask me anything..." />
          <Button>
            <SendIcon></SendIcon>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
