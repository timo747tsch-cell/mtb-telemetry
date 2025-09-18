import React from 'react';
export default function Importer({onLoad}){
  const handleCSV = (e, which)=>{
    const f = e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      onLoad({[which]:{raw: text}});
    }
    reader.readAsText(f);
  }
  const handleVideo = (e)=>{
    const f = e.target.files[0];
    onLoad({video: f});
  }
  return (
    <div style={{background:'#fff', padding:12, borderRadius:8}}>
      <h3>Import</h3>
      <div style={{marginTop:8}}>
        <label>Front CSV <input type="file" accept=".csv" onChange={(e)=>handleCSV(e,'front')} /></label>
      </div>
      <div style={{marginTop:8}}>
        <label>Rear CSV <input type="file" accept=".csv" onChange={(e)=>handleCSV(e,'rear')} /></label>
      </div>
      <div style={{marginTop:8}}>
        <label>GoPro/Video <input type="file" accept="video/*" onChange={handleVideo} /></label>
      </div>
    </div>
  );
}
