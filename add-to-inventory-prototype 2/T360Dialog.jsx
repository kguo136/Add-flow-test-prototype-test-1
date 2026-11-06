/* Dialog — synced with library Dialog.jsx + ButtonsDialog.jsx (button bar: top rule + centre separator only; 12px top bar only, tone-tinted icon, close at 23/12, body 12/24/24, no min height). Copied from Tech360 UI Library components/feedback/Dialog.jsx (+ ButtonsDialog.jsx, Checkbox.jsx).
   Local copy because the bound bundle still ships the older Dialog without checkboxes / two-button bar.
   Icon comes from the bundle (Tech360UILibrary_172398.Icon). */
const D_TONES = {
  informational: { c: 'var(--t360-blue, #0272B6)', icon: 'Icon2VariantInfo' },
  alert: { c: 'var(--t360-error, #C90318)', icon: 'Icon2VariantRestricted' },
  warning: { c: 'var(--t360-warning, #FFA700)', icon: 'Icon2VariantWarning' },
  success: { c: 'var(--t360-success, #058040)', icon: 'Icon2VariantSuccess' },
};
const D_LINE = '1px solid #D1D1D1';
const dBtn = (bold, radius) => ({
  flex: '1 1 0', minWidth: 0, boxSizing: 'border-box', padding: '12px 10px', border: 'none', borderTop: D_LINE, borderRadius: radius,
  background: 'transparent', cursor: 'pointer', fontFamily: "var(--font-ui, 'DM Sans', Arial, sans-serif)", fontSize: 16, lineHeight: '24px',
  color: '#000000', fontWeight: bold ? 700 : 400, letterSpacing: bold ? '0.010em' : 0, whiteSpace: 'nowrap',
});
function DCheckbox({ checked, onChange }) {
  const box = checked ? { background: '#0272B6', boxShadow: 'none' } : { background: 'rgb(241,242,242)', boxShadow: 'inset 0 0 0 1px #D1D1D1' };
  return (
    <span style={{ display: 'inline-flex' }}>
      <input type="checkbox" checked={!!checked} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 24, height: 24, borderRadius: 2, flexShrink: 0, position: 'relative', ...box }}>
        {checked && (
          <svg width="14" height="11" viewBox="0 0 13.846 10.154" fill="#FFFFFF" style={{ position: 'absolute', left: 5, top: 7 }}>
            <path d="M 4.632 10.154 C 4.42 10.154 4.217 10.068 4.064 9.917 L 0.234 6.038 C -0.078 5.722 -0.078 5.208 0.234 4.891 C 0.547 4.575 1.054 4.575 1.367 4.891 L 4.628 8.196 L 12.479 0.237 C 12.792 -0.079 13.298 -0.079 13.612 0.237 C 13.924 0.554 13.924 1.068 13.612 1.384 L 5.195 9.917 C 5.048 10.068 4.845 10.154 4.632 10.154" fillRule="evenodd" />
          </svg>
        )}
      </span>
    </span>
  );
}
function T360Dialog({ tone = 'informational', headline, children, onClose, showIcon = true, checkboxes, primaryLabel, secondaryLabel, onPrimary, onSecondary }) {
  const t = D_TONES[tone] || D_TONES.informational;
  const Icon = window.Tech360UILibrary_172398 && window.Tech360UILibrary_172398.Icon;
  const two = primaryLabel && secondaryLabel;
  return (
    <div role="dialog" aria-modal="true" style={{ width: 343, maxWidth: '100%', boxSizing: 'border-box', borderRadius: 8, overflow: 'hidden', background: '#FFFFFF', border: 'none', borderTop: `12px solid ${t.c}`, boxShadow: '0px 12px 12px -8px rgba(95,95,95,0.51)', display: 'flex', flexDirection: 'column', gap: 32, position: 'relative' }}>
      {onClose && (
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', right: 23, top: 12, width: 24, height: 24, border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '12px 24px 24px 24px', boxSizing: 'border-box', justifyContent: 'flex-end' }}>
        {showIcon && Icon && <span style={{ display: 'flex', width: 40, height: 40, color: t.c }}><Icon name={t.icon} size={40} style={{ color: t.c }} /></span>}
        {headline && <span style={{ fontFamily: "var(--font-brand, 'Xfinity Brown', 'DM Sans', Arial, sans-serif)", fontWeight: 700, fontSize: 24, lineHeight: '32px', letterSpacing: '-0.020px', color: '#000000' }}>{headline}</span>}
        {children && <div style={{ fontFamily: "var(--font-ui, 'DM Sans', Arial, sans-serif)", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#000000', whiteSpace: 'pre-line' }}>{children}</div>}
        {checkboxes && checkboxes.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {checkboxes.map((cb, i) => (
              <label key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', minHeight: 24, cursor: 'pointer', position: 'relative' }}>
                <DCheckbox checked={!!cb.checked} onChange={cb.onChange || (() => {})} />
                <span style={{ flex: 1, fontFamily: "var(--font-ui, 'DM Sans', Arial, sans-serif)", fontSize: 16, lineHeight: '24px', color: '#000000' }}>{cb.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      {(primaryLabel || secondaryLabel) && (
        <div style={{ display: 'flex', height: 48, alignSelf: 'stretch' }}>
          {secondaryLabel && <button style={dBtn(false, two ? '0 0 0 8px' : '0 0 8px 8px')} onClick={onSecondary}>{secondaryLabel}</button>}
          {two && <span aria-hidden="true" style={{ width: 1, alignSelf: 'stretch', background: '#D1D1D1' }} />}
          {primaryLabel && <button style={dBtn(true, two ? '0 0 8px 0' : '0 0 8px 8px')} onClick={onPrimary}>{primaryLabel}</button>}
        </div>
      )}
    </div>
  );
}
window.T360Dialog = T360Dialog;
if (typeof module !== "undefined") module.exports = { T360Dialog };
