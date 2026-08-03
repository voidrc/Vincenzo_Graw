const factionEl = document.getElementById('faction');
const agentNameEl = document.getElementById('agent-name');
const rankEl = document.getElementById('agent-rank');
const avatarEl = document.getElementById('avatar');
const avatarRankEl = document.getElementById('avatar-rank');
const agentMetaEl = document.getElementById('agent-meta');
const statsEl = document.getElementById('stats');
const tabsEl = document.getElementById('tabs');
const tabContentEl = document.getElementById('tab-content');

const tabs = [
  { id: 'info', label: 'Info' },
  { id: 'skills', label: 'Skills' },
  { id: 'wEngines', label: 'W-Engines' },
  { id: 'driveDiscs', label: 'W-Discs' },
  { id: 'gallery', label: 'Highlights' }
];

let currentTab = 'info';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rankClass(rank) {
  return `rank-${String(rank).toLowerCase()}`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function showError(message) {
  document.body.insertAdjacentHTML('afterbegin', `<p class="error container">${escapeHtml(message)}</p>`);
}

function renderAgent(agent) {
  factionEl.textContent = agent.faction;
  agentNameEl.textContent = agent.name;
  rankEl.textContent = agent.rank;
  rankEl.className = `rank ${rankClass(agent.rank)}`;
  avatarEl.textContent = initials(agent.name);
  avatarRankEl.textContent = agent.rank;
  avatarRankEl.className = `rank avatar-rank ${rankClass(agent.rank)}`;
  agentMetaEl.innerHTML = `
    <dt>Code Name</dt><dd>${escapeHtml(agent.codename)}</dd>
    <dt>Level</dt><dd>${agent.level}</dd>
    <dt>Rank</dt><dd>${agent.rank}</dd>
    <dt>Attribute</dt><dd>${escapeHtml(agent.attribute)}</dd>
    <dt>Specialty</dt><dd>${escapeHtml(agent.specialty)}</dd>
  `;
}

function renderStats(stats) {
  statsEl.innerHTML = stats.map(stat => `
    <div class="stat-row">
      <span>${escapeHtml(stat.label)}</span>
      <span>${stat.value}/${stat.max}</span>
      <div class="stat-bar">
        <div class="stat-fill" style="width:${(stat.value / stat.max * 100)}%"></div>
      </div>
    </div>
  `).join('');
}

function renderInfo(bio) {
  return `<div class="card"><h2>Agent Profile</h2><p>${escapeHtml(bio)}</p></div>`;
}

function renderSkills(skills) {
  return `<div class="skill-grid">${skills.map(skill => `
    <div class="skill-card">
      <div class="skill-type">${escapeHtml(skill.type)}</div>
      <div class="skill-name">${escapeHtml(skill.name)}</div>
      <div class="skill-desc">${escapeHtml(skill.desc)}</div>
    </div>
  `).join('')}</div>`;
}

function renderWEngines(engines) {
  return `<div class="engine-list">${engines.map(engine => `
    <div class="engine-card">
      <span class="rank engine-rank ${rankClass(engine.rank)}">${engine.rank}</span>
      <div class="engine-name">${escapeHtml(engine.name)}</div>
      <div class="engine-base">${escapeHtml(engine.baseStat)}</div>
      <div class="engine-effect">${escapeHtml(engine.effect)}</div>
    </div>
  `).join('')}</div>`;
}

function renderDriveDiscs(driveDiscs) {
  const piecesHtml = driveDiscs.pieces.map(piece => `
    <div class="disc">
      <div class="disc-bg"></div>
      <div class="disc-slot">${escapeHtml(piece.slot)}</div>
      <div class="disc-name">${escapeHtml(piece.name)}</div>
      <div class="disc-main">${escapeHtml(piece.main)}</div>
      <div class="disc-subs">${piece.subs.map(escapeHtml).join('<br>')}</div>
    </div>
  `).join('');
  return `
    <div>
      <div class="disc-grid">${piecesHtml}</div>
      <div class="card set-bonus">
        <div class="set-name">${escapeHtml(driveDiscs.setName)} Set Bonus</div>
        <div class="bonus">2-Piece: ${escapeHtml(driveDiscs.setBonus2)}</div>
        <div class="bonus">4-Piece: ${escapeHtml(driveDiscs.setBonus4)}</div>
      </div>
    </div>
  `;
}

function renderGallery(gallery) {
  if (!gallery || gallery.length === 0) {
    return `<div class="placeholder">Gallery placeholder — upload highlights here later.</div>`;
  }
  return `<div class="gallery-grid">${gallery.map(src => `<img src="${escapeHtml(src)}" alt="highlight">`).join('')}</div>`;
}

function renderTabs() {
  tabsEl.innerHTML = tabs.map(tab => `
    <button class="tab ${tab.id === currentTab ? 'active' : ''}" data-tab="${tab.id}">${tab.label}</button>
  `).join('');
  tabsEl.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      currentTab = button.dataset.tab;
      renderTabs();
      document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === currentTab);
      });
    });
  });
}

function renderPanels(data) {
  const contentMap = {
    info: renderInfo(data.agent.bio),
    skills: renderSkills(data.skills),
    wEngines: renderWEngines(data.wEngines),
    driveDiscs: renderDriveDiscs(data.driveDiscs),
    gallery: renderGallery(data.gallery)
  };
  tabContentEl.innerHTML = tabs.map(tab => `
    <div class="panel ${tab.id === currentTab ? 'active' : ''}" data-panel="${tab.id}">${contentMap[tab.id]}</div>
  `).join('');
}

fetch('data.json')
  .then(res => {
    if (!res.ok) throw new Error('Could not load data.json');
    return res.json();
  })
  .then(data => {
    renderAgent(data.agent);
    renderStats(data.stats);
    renderTabs();
    renderPanels(data);
  })
  .catch(err => showError(`Failed to load portfolio data: ${err.message}`));
