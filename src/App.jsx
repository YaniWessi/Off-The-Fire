import { useState } from 'react';
import AppRouter from './AppRouter';
import AppLayout from './AppLayout';

function App() {

  return (
    <div className="App">
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  )
}

export default App
