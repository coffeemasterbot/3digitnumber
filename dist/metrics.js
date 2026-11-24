(() => {
  const id = name => document.getElementById(name);
  const names = {garden:'預算守護花園 / Budget Garden',runner:'散紙追蹤 / Change Chase',jet:'優惠氣流 / Deal Jet',forest:'冰火同行 / Fire & Ice',defence:'預算防衛戰 / Budget Defence'};
  const setText = (parent, tag, text) => {
    const element = document.createElement(tag);
    element.textContent=String(text);
    parent.append(element);
  };
  const form=id('metrics-unlock');
  const input=form.querySelector('input');
  const exportButton=id('metrics-export-sid');
  async function exportSids(key) {
    const status=id('metrics-export-status');
    exportButton.disabled=true;
    try {
      const response=await fetch('/api/survey/verification',{headers:{'x-pfap-metrics-key':encodeURIComponent(key)}});
      if(!response.ok)throw new Error('Unavailable');
      const {entries}=await response.json();
      // Keep student numbers as strings so leading zeroes survive the export.
      const file=new Blob([JSON.stringify(entries,null,2)],{type:'application/json'});
      const url=URL.createObjectURL(file);
      const link=document.createElement('a');
      link.href=url;
      link.download='pfap-private-sid-verification.json';
      link.click();
      setTimeout(()=>URL.revokeObjectURL(url),5000);
      status.textContent='已下載核對檔，請私下保存。 / Private verification file downloaded.';
    } catch { status.textContent='未能匯出核對檔。 / Verification export unavailable.'; }
    finally { exportButton.disabled=false; }
  }
  async function load(key) {
    const status=id('metrics-status');
    status.textContent='載入中… / Loading…';
    try {
      const response=await fetch('/api/activity/summary',{headers:{'x-pfap-metrics-key':encodeURIComponent(key)}});
      if (response.status===403) {
        status.textContent='未能開啟報表，請核對隊伍密碼。 / Check the team access key.';
        return;
      }
      if (!response.ok) throw new Error('Unavailable');
      const data=await response.json();
      form.hidden=true;
      status.textContent=data.first_event ? '開始記錄 / Since '+new Intl.DateTimeFormat('en-HK',{timeZone:'Asia/Hong_Kong',dateStyle:'medium'}).format(data.first_event):'暫時未有記錄。 / No activity yet.';
      const totals=id('metrics-totals');
      for(const [label,value] of [['網站訪客 / Website visitors',data.visitors],['已開局玩家 / Players',data.players]]) {
        setText(totals,'dt',label);setText(totals,'dd',value);
      }
      if (data.survey) {
        const survey=data.survey;
        const average=value=>value===null?'—':Number(value).toFixed(2);
        for(const [label,value] of [
          ['前測 / Before',survey.before_count],['後測 / After',survey.after_count],
          ['已配對 / Matched pairs',survey.paired],
          ['配對態度自評 / Matched attitude',average(survey.attitude_before)+' → '+average(survey.attitude_after)],
          ['配對知識自評 / Matched knowledge',average(survey.knowledge_before)+' → '+average(survey.knowledge_after)],
        ]) {
          setText(totals,'dt',label);setText(totals,'dd',value);
        }
      }
      for(const [game,label] of Object.entries(names)){
        const row=id('metrics-games').insertRow();
        const counts=data.games.find(item=>item.game===game);
        for(const value of [label,counts?.players??0,counts?.starts??0])setText(row,'td',value);
      }
      id('metrics-results').hidden=false;
      exportButton.onclick=()=>exportSids(key);
    } catch { status.textContent='未能載入數據。 / Metrics are temporarily unavailable.'; }
  }
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const key=input.value;
    input.value='';
    const button=form.querySelector('button');
    button.disabled=true;
    try{await load(key)}finally{button.disabled=false}
  });
})();
