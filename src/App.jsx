import  { useState } from 'react';

const EventsComponent = () => {
  const [activeView, setActiveView] = useState('eject');

  const toggleView = (view) => {
    setActiveView(view);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <header className="mb-8">
        <nav className="flex justify-end mb-4 flex-col gap-5">
          <button 
            className={`px-4 py-2 mx-[80vh] rounded-full ${activeView === 'Elicit' ? 'bg-red-700' : 'bg-gray-700'}`}
            onClick={() => toggleView('Elicit')}
          >
            Elicit
          </button>
          <button 
            className={`px-4 py-2 mx-[80vh] rounded-full ${activeView === 'rte' ? 'bg-red-700' : 'bg-gray-700'}`}
            onClick={() => toggleView('rte')}
          >
            RTE
          </button>
        </nav>
        <h1 className="text-red-500 mx-[40vh] text-center my-20px text-4xl">Events</h1>
      </header>
      <main>
        <div className="border border-gray-700 p-4 h-64">
          {activeView === 'rte' && (
            <div className="flex justify-between">
              {[1, 2, 3].map((box) => (
                <div key={box} className="w-1/4 h-32 bg-white relative">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full" />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventsComponent;
