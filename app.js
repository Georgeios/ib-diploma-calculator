document.getElementById('calc-btn').addEventListener('click', () => {
  const hl1 = parseInt(document.getElementById('hl1').value) || 0;
  const hl2 = parseInt(document.getElementById('hl2').value) || 0;
  const hl3 = parseInt(document.getElementById('hl3').value) || 0;
  const sl1 = parseInt(document.getElementById('sl1').value) || 0;
  const sl2 = parseInt(document.getElementById('sl2').value) || 0;
  const sl3 = parseInt(document.getElementById('sl3').value) || 0;
  const tok = document.getElementById('tok').value;
  const ee = document.getElementById('ee').value;

  const subjectsSum = hl1 + hl2 + hl3 + sl1 + sl2 + sl3;
  const hlSum = hl1 + hl2 + hl3;
  const slSum = sl1 + sl2 + sl3;

  // IB Core Matrix lookup
  let corePoints = 0;
  if ((tok === 'A' && ee === 'A') || (tok === 'A' && ee === 'B') || (tok === 'B' && ee === 'A')) corePoints = 3;
  else if ((tok === 'B' && ee === 'B') || (tok === 'A' && ee === 'C') || (tok === 'C' && ee === 'A')) corePoints = 2;
  else if ((tok === 'B' && ee === 'C') || (tok === 'C' && ee === 'B') || (tok === 'C' && ee === 'C')) corePoints = 1;
  else if (tok === 'E' || ee === 'E') corePoints = 0;

  const totalPoints = subjectsSum + corePoints;
  const passed = (totalPoints >= 24) && (hlSum >= 12) && (slSum >= 9) && (tok !== 'E') && (ee !== 'E');

  const res = document.getElementById('results');
  res.style.display = 'block';
  res.innerHTML = `<h3>Total Projected Points: <span style="color:#6fffe9">${totalPoints} / 45</span></h3>
    <p>Subjects Total: ${subjectsSum} | TOK/EE Bonus Points: ${corePoints}</p>
    <p>HL Total: ${hlSum}/21 (Min: 12) | SL Total: ${slSum}/21 (Min: 9)</p>
    <p style="font-weight:bold; margin-top:0.5rem; color:${passed ? '#38bdf8' : '#ef4444'}">
      Status: ${passed ? 'DIPLOMA REQUIREMENTS SATISFIED' : 'CONDITIONS NOT MET'}
    </p>`;
});