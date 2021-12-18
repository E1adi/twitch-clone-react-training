import './app.css';
import Story from './components/story/story';
import StreamingPlatform from './components/streamingPlatform/streamingPlatform';
import StageProvider from './hooks/stageProvider';
import ThumbnailProvider from './hooks/thumbnailProvider';

function App() {
  return (
    <div className="app">
      <StageProvider>
          <ThumbnailProvider>
          <div className='app__main'>
            <StreamingPlatform />
            <Story />
          </div>
          </ThumbnailProvider>
      </StageProvider>
    </div>
  );
}

export default App;
