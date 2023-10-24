import { LoadingScreen, Divider } from '@/components';
import {
  Buttons,
  Greeting,
  ListRendering,
  ToggleButtons,
  ListenNow,
} from '@/demo';

function App() {
  const isLoading = !true;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Greeting />
      <Divider hidden />
      <Buttons hidden />
      <Divider />
      <ToggleButtons />
      <Divider />
      <ListRendering />
      <Divider size="40px" />
      <ListenNow hidden />
    </div>
  );
}

export default App;
