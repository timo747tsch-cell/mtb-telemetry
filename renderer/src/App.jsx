import React from 'react';
import Importer from './components/Importer';
import TelemetryChart from './components/TelemetryChart';
import VideoSync from './components/VideoSync';
import CalibrationModal from './components/CalibrationModal';

export default function App(){
  const [session, setSession] = React.useState({front:null, rear:null, video:null});
  return (
    <div style={{fontFamily:'Inter, sans-serif', padding:20, background:'#f3f4f6', minHeight:'100vh'}}>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{fontSize:22}}>MTB Telemetry Studio</h1>
      </header>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:16, marginTop:16}}>
        <div>
          <Importer onLoad={(d)=>setSession(s=>({...s, ...d}))} />
          <TelemetryChart session={session} />
        </div>
        <div>
          <VideoSync session={session} onSync={(o)=>console.log('sync',o)} />
          <CalibrationModal session={session} />
        </div>
      </div>
    </div>
  );
}
