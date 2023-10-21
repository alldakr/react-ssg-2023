import { LoadingScreen } from '@/components';
import { Buttons, Greeting, ListRendering, ToggleButtons } from '@/demo';

function App() {
  const isLoading = !true;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Greeting />
      <Buttons hidden />
      <ToggleButtons />
      <ListRendering />
    </div>
  );
}

export default App;
