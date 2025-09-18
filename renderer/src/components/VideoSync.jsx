import React from 'react';
export default function VideoSync({session,onSync}){
  return (
    <div style={{background:'#fff', padding:12, borderRadius:8, marginTop:12}}>
      <h4>Video Sync</h4>
      <p style={{color:'#666'}}>Video loaded: {session.video ? session.video.name : 'no'}</p>
      <button onClick={()=>onSync(0)}>Auto-Sync (placeholder)</button>
    </div>
  );
}
