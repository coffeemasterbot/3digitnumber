/* Shared artwork for the live preview and offline exports. */
window.ActionCard = (() => {
  const width = 1080;
  const height = 1920;
  const ink = '#1e3a2f';
  const paper = '#fff8ed';
  const orange = '#db6a32';
  const handle = '@poor_guysssss';

  function draw(canvas, card) {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    const en = card.en;
    const rect = (x, y, w, h, radius, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, radius);
      ctx.fill();
    };
    const font = (size, weight = 700) => {
      ctx.font = weight + ' ' + size + 'px "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif';
    };
    const label = (value, x, y, size, color = ink, weight = 700) => {
      font(size, weight);
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.fillText(value, x, y);
    };
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#a96a43';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 11]);
    ctx.strokeRect(42, 42, 996, 1836);
    ctx.setLineDash([]);

    for (const [x, y, radius] of [[126, 305, 28], [946, 330, 36], [114, 1645, 24], [969, 1615, 18]]) {
      ctx.fillStyle = orange;
      ctx.beginPath();
      ctx.moveTo(x, y - radius);
      ctx.quadraticCurveTo(x + 5, y - 5, x + radius, y);
      ctx.quadraticCurveTo(x + 5, y + 5, x, y + radius);
      ctx.quadraticCurveTo(x - 5, y + 5, x - radius, y);
      ctx.quadraticCurveTo(x - 5, y - 5, x, y - radius);
      ctx.fill();
    }
    ctx.strokeStyle = orange;
    ctx.lineWidth = 4;
    for (const radius of [22, 15]) {
      ctx.beginPath();
      ctx.arc(122, 385, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    rect(124, 100, 832, 74, 36, ink);
    label('HKUST 戶口三位數 · poor_guysssss', 540, 148, 34, paper);
    label(en ? 'My 7-Day Action' : '我的七日行動', 540, 337, en ? 80 : 96);
    rect(92, 402, 896, 62, 15, '#f5d8bc');
    label('Personal Finance Ambassador Programme 2026–27 · 人生財開始', 540, 443, 24);

    rect(92, 507, 896, 508, 34, ink);
    rect(238, 550, 604, 60, 30, '#f5d8bc');
    label(card.tag, 540, 591, 32);
    const commitment = en ? 'When ' + card.timing + ', I will ' + card.action : '當 ' + card.timing + '，我會 ' + card.action;
    const parts = globalThis.Intl?.Segmenter
      ? [...new Intl.Segmenter(en ? 'en' : 'zh-HK', { granularity: 'word' }).segment(commitment)].map(item => item.segment)
      : Array.from(commitment);
    const wrap = size => {
      font(size);
      const rows = [];
      let row = '';
      for (const part of parts) {
        if (row && ctx.measureText(row + part).width > 760) {
          rows.push(row.trimEnd());
          row = '';
        }
        for (const char of ctx.measureText(part).width > 760 ? Array.from(part) : [part]) {
          if (row && ctx.measureText(row + char).width > 760) {
            rows.push(row.trimEnd());
            row = '';
          }
          row += row ? char : char.trimStart();
        }
      }
      if (row) rows.push(row);
      return rows;
    };
    let size = 68;
    let rows = wrap(size);
    while (rows.length * size * 1.3 > 324 && size > 23) rows = wrap(--size);
    rows.forEach((row, i) => label(row, 540, 814 + (i - (rows.length - 1) / 2) * size * 1.3, size, paper));

    for (let day = 0; day < 7; day++) {
      const x = day < 4 ? 116 + day * 218 : 225 + (day - 4) * 218;
      const y = day < 4 ? 1070 : 1307;
      const stamp = card.stamps[day];
      const restart = day === 3;
      rect(x, y, 194, 209, 24, restart ? '#f5d8bc' : '#e2ead9');
      label('DAY ' + (day + 1), x + 97, y + 49, 25);
      ctx.strokeStyle = restart ? '#a34a22' : ink;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(x + 97, y + 103, 27, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      if (stamp) {
        ctx.moveTo(x + 83, y + 103);
        ctx.lineTo(x + 93, y + 113);
        ctx.lineTo(x + 111, y + 93);
      } else if (restart) {
        ctx.moveTo(x + 97, y + 120);
        ctx.quadraticCurveTo(x + 94, y + 98, x + 80, y + 92);
        ctx.quadraticCurveTo(x + 78, y + 108, x + 94, y + 108);
        ctx.quadraticCurveTo(x + 103, y + 91, x + 113, y + 89);
        ctx.quadraticCurveTo(x + 114, y + 103, x + 98, y + 107);
      }
      ctx.stroke();
      label(restart ? (en ? 'Start again' : '再開始') : stamp ? (en ? 'Recorded' : '已打卡') : (en ? 'One step' : '一小步'), x + 97, y + 176, 25);
    }
    if (card.demo || card.stamps.some(stamp => stamp?.demo)) {
      label(en ? 'Demo check-ins' : '示範打卡', 540, 1570, 28);
    }
    label(handle, 540, 1700, 58);
    label("HKEX Foundation · IFEC · St. James' Settlement", 540, 1782, 25);
    return true;
  }

  function pdf(canvas) {
    const jpeg = Uint8Array.from(atob(canvas.toDataURL('image/jpeg', 0.92).split(',')[1]), char => char.charCodeAt(0));
    const contents = 'q\n540 0 0 960 0 0 cm\n/Card Do\nQ\n';
    const encoder = new TextEncoder();
    const chunks = [];
    const offsets = [0];
    let length = 0;
    const append = value => {
      const bytes = typeof value === 'string' ? encoder.encode(value) : value;
      chunks.push(bytes);
      length += bytes.length;
    };
    const object = (...parts) => {
      offsets.push(length);
      append(offsets.length - 1 + ' 0 obj\n');
      parts.forEach(append);
      append('\nendobj\n');
    };
    append('%PDF-1.4\n');
    object('<< /Type /Catalog /Pages 2 0 R >>');
    object('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    object('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 540 960] /Resources << /XObject << /Card 5 0 R >> >> /Contents 4 0 R >>');
    object('<< /Length ' + contents.length + ' >>\nstream\n' + contents + 'endstream');
    object('<< /Type /XObject /Subtype /Image /Width ' + canvas.width + ' /Height ' + canvas.height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpeg.length + ' >>\nstream\n', jpeg, '\nendstream');
    const xref = length;
    append('xref\n0 ' + offsets.length + '\n0000000000 65535 f \n');
    offsets.slice(1).forEach(offset => append(String(offset).padStart(10, '0') + ' 00000 n \n'));
    append('trailer\n<< /Size ' + offsets.length + ' /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
    return new Blob(chunks, { type: 'application/pdf' });
  }

  function download(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }
  return { draw, pdf, download, handle };
})();
