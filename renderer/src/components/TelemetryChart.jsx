import React from 'react';
export default function TelemetryChart({session}){
  return (
    <div style={{marginTop:12, background:'#fff', padding:12, borderRadius:8}}>
      <h3>Telemetry Chart</h3>
      <p style={{color:'#666'}}>Imported front: {session.front ? 'yes' : 'no'} — rear: {session.rear ? 'yes' : 'no'}</p>
      <div style={{height:300, border:'1px dashed #ddd', display:'flex', alignItems:'center', justifyContent:'center'}}>Chart area (placeholder)</div>
    </div>
  );
}
