/**
 * BizzLoop Interactive Workflow & Canvas Engine (js/workflow-engine.js)
 * High-performance ambient mesh & interactive connected workflow visualization
 */

const BizzLoopWorkflowEngine = (() => {
  'use strict';

  // Workflow steps for the Connected Customer Journey
  const workflowSteps = [
    { id: 'web', name: 'Website', icon: 'ti ti-browser', color: '#1451D8', desc: 'High-speed online presence' },
    { id: 'lead', name: 'Lead Capture', icon: 'ti ti-magnet', color: '#04A5C2', desc: 'Smart intake & booking forms' },
    { id: 'crm', name: 'CRM Pipeline', icon: 'ti ti-users', color: '#10B981', desc: 'Deal stages & contact logs' },
    { id: 'followup', name: 'Auto Follow-Up', icon: 'ti ti-clock-play', color: '#F59E0B', desc: 'Instant WhatsApp & email' },
    { id: 'marketing', name: 'Marketing', icon: 'ti ti-chart-arrows', color: '#8B5CF6', desc: 'Nurture & re-engagement' },
    { id: 'sales', name: 'Sales & Quote', icon: 'ti ti-file-dollar', color: '#1451D8', desc: 'HMRC-ready VAT quotes' },
    { id: 'customer', name: 'Customer Hub', icon: 'ti ti-user-check', color: '#04A5C2', desc: '360° client history' },
    { id: 'operations', name: 'Operations & ERP', icon: 'ti ti-building-warehouse', color: '#10B981', desc: 'Invoices, stock & tasks' },
    { id: 'growth', name: 'Retention & Growth', icon: 'ti ti-repeat', color: '#F59E0B', desc: 'Review collection & renewals' }
  ];

  // Initialize Ambient Background Canvas
  function initAmbientBackground() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = window.innerWidth < 768 ? 20 : 35;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2.5 + 1,
          color: Math.random() > 0.5 ? 'rgba(20, 81, 216, ' : 'rgba(4, 165, 194, '
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.08)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(20, 81, 216, ' + (0.04 * (1 - dist / 130)) + ')';
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    animate();
  }

  // Initialize Interactive Department Flow Network
  function initWorkflowCanvas() {
    const container = document.getElementById('dept-nodes-container');
    const canvas = document.getElementById('interlink-canvas');
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, centerX, centerY;
    let nodeCoords = {};
    let packets = [];

    const departments = [
      { id: 'leads', name: 'Lead Enquiries', icon: 'ti ti-magnet', color: '#1451D8', metric: '98% Response' },
      { id: 'crm', name: 'Customer Records', icon: 'ti ti-users', color: '#04A5C2', metric: '2,845 Contacts' },
      { id: 'erp', name: 'Operations & Stock', icon: 'ti ti-building-warehouse', color: '#10B981', metric: '140h Saved' },
      { id: 'finance', name: 'VAT & Invoicing', icon: 'ti ti-receipt', color: '#1451D8', metric: 'HMRC Ready' },
      { id: 'hr', name: 'Team & Staff', icon: 'ti ti-users-group', color: '#04A5C2', metric: 'Staff Synced' },
      { id: 'marketing', name: 'Marketing & SEO', icon: 'ti ti-chart-arrows', color: '#10B981', metric: '85% Growth' }
    ];

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      centerX = width / 2;
      centerY = height / 2;
      renderNodes();
    }

    function renderNodes() {
      container.innerHTML = '';
      nodeCoords = {};

      // Central Hub Node
      const coreDiv = document.createElement('div');
      coreDiv.className = 'absolute z-30 w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 via-cyan-500 to-emerald-500 p-1 shadow-2xl flex items-center justify-center animate-float';
      coreDiv.style.left = `calc(50% - 48px)`;
      coreDiv.style.top = `calc(50% - 48px)`;
      coreDiv.innerHTML = `
        <div class="w-full h-full rounded-full bg-slate-900 text-white flex flex-col items-center justify-center p-2 text-center border border-white/20">
          <i class="ti ti-cpu text-2xl text-cyan-400"></i>
          <span class="text-[10px] font-black tracking-tight text-white mt-1 leading-none">BizzLoop</span>
          <span class="text-[7px] text-emerald-400 font-mono mt-0.5 font-bold">CORE SYSTEM</span>
        </div>
      `;
      container.appendChild(coreDiv);
      nodeCoords['core'] = { x: centerX, y: centerY };

      // Surrounding Department Nodes
      const count = departments.length;
      const radiusX = Math.min(centerX - 70, 240);
      const radiusY = Math.min(centerY - 50, 140);

      departments.forEach((dept, i) => {
        const angle = (i * (2 * Math.PI / count)) - (Math.PI / 2);
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        nodeCoords[dept.id] = { x, y };

        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'dept-node absolute z-30 w-32 sm:w-36 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-slate-200 shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:border-brand-500';
        nodeDiv.style.left = `${x - (window.innerWidth < 640 ? 60 : 72)}px`;
        nodeDiv.style.top = `${y - 28}px`;
        nodeDiv.dataset.deptId = dept.id;

        nodeDiv.innerHTML = `
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm" style="background:${dept.color}">
              <i class="${dept.icon} text-xs"></i>
            </div>
            <div class="truncate">
              <h4 class="text-[11px] font-bold text-slate-900 truncate leading-tight">${dept.name}</h4>
              <span class="text-[8px] text-slate-400 block truncate font-semibold">${dept.metric}</span>
            </div>
          </div>
        `;

        nodeDiv.addEventListener('mouseenter', () => spawnPacket(dept.id, 'core', dept.color));
        nodeDiv.addEventListener('click', () => spawnPacket(dept.id, 'core', dept.color));
        container.appendChild(nodeDiv);
      });
    }

    function spawnPacket(fromId, toId, color) {
      const start = nodeCoords[fromId] || nodeCoords['core'];
      const end = nodeCoords[toId] || nodeCoords['core'];
      if (start && end) {
        packets.push({
          startX: start.x,
          startY: start.y,
          endX: end.x,
          endY: end.y,
          x: start.x,
          y: start.y,
          progress: 0,
          speed: 0.015 + Math.random() * 0.01,
          color: color || '#1451D8'
        });
      }
    }

    function animateNetwork() {
      ctx.clearRect(0, 0, width, height);

      // Draw dashed connector lines
      departments.forEach(dept => {
        const p = nodeCoords[dept.id];
        if (p && nodeCoords['core']) {
          ctx.beginPath();
          ctx.moveTo(nodeCoords['core'].x, nodeCoords['core'].y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = 'rgba(20, 81, 216, 0.12)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // Animate moving data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i];
        pkt.progress += pkt.speed;
        pkt.x = pkt.startX + (pkt.endX - pkt.startX) * pkt.progress;
        pkt.y = pkt.startY + (pkt.endY - pkt.startY) * pkt.progress;

        ctx.beginPath();
        ctx.arc(pkt.x, pkt.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (pkt.progress >= 1) {
          packets.splice(i, 1);
        }
      }

      requestAnimationFrame(animateNetwork);
    }

    // Spawn automatic periodic packets
    let deptIdx = 0;
    setInterval(() => {
      if (departments.length > 0) {
        const dept = departments[deptIdx];
        spawnPacket(dept.id, 'core', dept.color);
        deptIdx = (deptIdx + 1) % departments.length;
      }
    }, 2000);

    window.addEventListener('resize', resizeCanvas, { passive: true });
    setTimeout(resizeCanvas, 150);
    animateNetwork();
  }

  return {
    init: () => {
      initAmbientBackground();
      initWorkflowCanvas();
    },
    workflowSteps
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopWorkflowEngine;
}
