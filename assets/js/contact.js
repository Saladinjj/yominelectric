/* ═══════════════════════════════════════════════════
   YOMIN ELECTRIC — CONTACT.JS
   Form validation, submission, success state
   ═══════════════════════════════════════════════════ */

'use strict';

// ─── VALIDATION RULES ───
const VALIDATORS = {
  name:    { required: true, minLen: 2, label: 'Full name' },
  email:   { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, label: 'Email address' },
  company: { required: false, label: 'Company name' },
  country: { required: true, label: 'Country' },
  subject: { required: false, label: 'Subject' },
  message: { required: true, minLen: 20, label: 'Message' }
};

function validateField(name, value) {
  const rule = VALIDATORS[name];
  if (!rule) return null;
  if (rule.required && !value.trim()) return `${rule.label} is required.`;
  if (value.trim() && rule.minLen && value.trim().length < rule.minLen)
    return `${rule.label} must be at least ${rule.minLen} characters.`;
  if (value.trim() && rule.pattern && !rule.pattern.test(value))
    return `Please enter a valid ${rule.label.toLowerCase()}.`;
  return null;
}

function showFieldError(field, msg) {
  field.classList.add('error');
  const errEl = field.parentElement.querySelector('.form-error-msg');
  if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
}

function clearFieldError(field) {
  field.classList.remove('error');
  const errEl = field.parentElement.querySelector('.form-error-msg');
  if (errEl) errEl.classList.remove('show');
}

function validateForm(form) {
  let valid = true;
  const inputs = form.querySelectorAll('[data-field]');
  inputs.forEach(input => {
    const err = validateField(input.dataset.field, input.value);
    if (err) { showFieldError(input, err); valid = false; }
    else clearFieldError(input);
  });
  return valid;
}

// ─── REALTIME VALIDATION ───
function initRealtimeValidation(form) {
  form.querySelectorAll('[data-field]').forEach(input => {
    input.addEventListener('blur', () => {
      const err = validateField(input.dataset.field, input.value);
      if (err) showFieldError(input, err);
      else clearFieldError(input);
    });

    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        const err = validateField(input.dataset.field, input.value);
        if (!err) clearFieldError(input);
      }
    });
  });
}

// ─── SUBMIT ───
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  if (!validateForm(form)) return;

  const submitBtn = form.querySelector('.form-submit');
  const formSuccess = document.getElementById('form-success');
  const formFields = document.getElementById('form-fields');

  // Loading state
  submitBtn.classList.add('loading');
  submitBtn.innerHTML = '<span>Sending…</span>';

  const data = {
    name:    form.querySelector('[data-field="name"]')?.value.trim(),
    email:   form.querySelector('[data-field="email"]')?.value.trim(),
    company: form.querySelector('[data-field="company"]')?.value.trim(),
    country: form.querySelector('[data-field="country"]')?.value,
    subject: form.querySelector('[data-field="subject"]')?.value,
    message: form.querySelector('[data-field="message"]')?.value.trim()
  };

  try {
    await window.API.contact.submit(data);
    // Show success
    if (formFields) formFields.style.display = 'none';
    if (formSuccess) formSuccess.classList.add('show');

    // Launch fireworks and celebration message
    const subjectVal = form.querySelector('[data-field="subject"]')?.value || '';
    launchFireworks();
    setTimeout(() => showCelebrationMessage(subjectVal), 1000);
  } catch (err) {
    console.error('Submit error:', err);
    // Show error but keep form visible
    submitBtn.classList.remove('loading');
    submitBtn.innerHTML = '<span>Send Message</span><span class="submit-icon">→</span>';
    showFormError('Failed to send message. Please try emailing us directly.');
  }
}

function showFormError(msg) {
  let errBanner = document.getElementById('form-error-banner');
  if (!errBanner) {
    errBanner = document.createElement('div');
    errBanner.id = 'form-error-banner';
    errBanner.style.cssText = 'background:rgba(220,80,80,.1);border:1px solid rgba(220,80,80,.3);border-radius:10px;padding:14px 18px;font-size:13px;color:#e06060;margin-bottom:20px;';
    const form = document.getElementById('contact-form');
    if (form) form.prepend(errBanner);
  }
  errBanner.textContent = msg;
}

// ─── COUNTRY SELECT POPULATION ───
const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria','Bangladesh',
  'Belgium','Brazil','Cambodia','Canada','Chile','China','Colombia','Croatia','Czech Republic',
  'Denmark','Ecuador','Egypt','Ethiopia','Finland','France','Germany','Ghana','Greece',
  'Hungary','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Japan','Jordan',
  'Kenya','South Korea','Kuwait','Lebanon','Libya','Malaysia','Mexico','Morocco','Myanmar',
  'Netherlands','New Zealand','Nigeria','Norway','Pakistan','Peru','Philippines','Poland',
  'Portugal','Qatar','Romania','Russia','Saudi Arabia','Senegal','Serbia','Singapore',
  'South Africa','Spain','Sri Lanka','Sudan','Sweden','Switzerland','Syria','Taiwan',
  'Tanzania','Thailand','Tunisia','Turkey','Uganda','Ukraine','United Arab Emirates',
  'United Kingdom','United States','Uruguay','Venezuela','Vietnam','Yemen','Zimbabwe'
];

function populateCountrySelect() {
  const sel = document.querySelector('select[data-field="country"]');
  if (!sel) return;
  COUNTRIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
}

// ─── QUOTE MODAL (product-details page) ───
function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const openBtns = document.querySelectorAll('[data-open-quote]');
  const closeBtn = document.getElementById('close-quote');
  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.dataset.productName || '';
      const subject = modal.querySelector('[data-field="subject"]');
      if (subject) subject.value = `Quote Request: ${prodName}`;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      setTimeout(() => modal.classList.add('op'), 10);
    });
  });

  function closeModal() {
    modal.classList.remove('op');
    setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 300);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}



// ─── FIREWORKS CANVAS EFFECT ───
function launchFireworks() {
  const canvas = document.createElement('canvas');
  canvas.id = 'fireworks-container';
  canvas.style.cssText = 'position:fixed;inset:0;z-index:9998;pointer-events:none;width:100%;height:100%;';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const particles = [];
  const colors = ['#c8a96e','#ffd700','#ff6b6b','#4ecdc4','#45b7d1','#f7b731','#a29bfe','#fd79a8','#00b894','#e17055'];
  function createBurst(x, y) {
    for (let i = 0; i < 60; i++) {
      const angle = (Math.PI * 2 / 60) * i;
      const speed = 2 + Math.random() * 5;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1, size: 2 + Math.random() * 3, decay: 0.015 + Math.random() * 0.01
      });
    }
  }
  let burstCount = 0;
  const burstInterval = setInterval(() => {
    createBurst(Math.random() * canvas.width, Math.random() * canvas.height * 0.7);
    burstCount++;
    if (burstCount >= 6) clearInterval(burstInterval);
  }, 300);
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += 0.08;
      p.alpha -= p.decay;
      if (p.alpha <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (particles.length > 0 || burstCount < 6) requestAnimationFrame(animate);
    else { setTimeout(() => canvas.remove(), 500); }
  }
  animate();
  return canvas;
}

function showCelebrationMessage(subject) {
  const topic = subject || 'electrical metering solutions';
  
  // Fade out fireworks
  const fireworksContainer = document.getElementById('fireworks-container');
  if (fireworksContainer) {
    const fireworks = fireworksContainer.querySelectorAll('img');
    fireworks.forEach((fw, i) => {
      setTimeout(() => {
        fw.style.opacity = '0';
        fw.style.transform = 'scale(0.5)';
      }, i * 30);
    });
    setTimeout(() => {
      fireworksContainer.remove();
    }, 500);
  }

  const overlay = document.createElement('div');
  overlay.id = 'celebration-msg';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);opacity:0;transition:opacity 0.5s;';
  overlay.innerHTML = `
    <div style="background:var(--bgc,#181818);border:2px solid var(--ac,#c8a96e);border-radius:24px;padding:48px;max-width:520px;text-align:center;transform:scale(0.8);transition:transform 0.5s;animation:celebPop 0.5s 0.2s forwards;">
      <div style="font-size:48px;margin-bottom:16px;">&#127881;&#127882;&#127878;</div>
      <h2 style="font-family:'DM Serif Display',serif;font-size:28px;color:#f0ede8;margin-bottom:12px;">Congratulations!</h2>
      <p style="font-size:16px;color:#c8a96e;line-height:1.8;margin-bottom:8px;">You have reached the <strong>best company</strong> for</p>
      <p style="font-size:22px;font-family:'DM Serif Display',serif;color:#f0ede8;margin-bottom:16px;"><em>${topic}</em></p>
      <p style="font-size:14px;color:#888;line-height:1.7;">in the world! Our team will get back to you shortly.</p>
      <button onclick="this.closest('#celebration-msg').remove()" style="margin-top:24px;background:#c8a96e;color:#000;border:none;padding:12px 32px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">Thank You! &#10024;</button>
    </div>
  `;
  document.body.appendChild(overlay);
  // Add animation keyframe
  if (!document.getElementById('celeb-style')) {
    const style = document.createElement('style');
    style.id = 'celeb-style';
    style.textContent = '@keyframes celebPop{to{transform:scale(1)}}';
    document.head.appendChild(style);
  }
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  });
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  populateCountrySelect();

  const form = document.getElementById('contact-form');
  if (form) {
    initRealtimeValidation(form);
    form.addEventListener('submit', handleSubmit);
  }

  initQuoteModal();
});
