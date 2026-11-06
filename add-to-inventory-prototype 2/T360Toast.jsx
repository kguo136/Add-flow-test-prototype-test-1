/* Toast — copied from Tech360 UI Library components/feedback/Toast.jsx
   (Toaster.fig "Toast" set: Default 3:147 / Loading 3:154 / Error 3:161 / Warning 3:168). Values verbatim.
   Local copy because the bound bundle still ships the older toast.
   Only additions: width 100% (fits the 351px camera inset), and an optional second ghost action
   (secondaryActionLabel/onSecondaryAction) — when present, both actions sit under the message so text isn't squeezed. */
const TT_VARIANTS = {
  default: { bg: 'rgb(5,80,121)', shadow: '0px 4px 8px -4px rgba(6,6,7,0.51)', text: 'rgb(255,255,255)', action: 'rgb(246,246,249)', close: 'rgb(255,255,255)' },
  loading: { bg: 'rgb(5,80,121)', shadow: '0px 12px 12px -8px rgba(6,6,7,0.51)', text: 'rgb(255,255,255)', action: 'rgb(246,246,249)', close: 'rgb(255,255,255)' },
  error:   { bg: 'rgb(242,217,225)', shadow: '0px 4px 8px -4px rgba(95,80,83,0.51)', text: 'rgb(201,3,24)', action: 'rgb(20,20,23)', close: 'rgb(20,20,23)' },
  warning: { bg: 'rgb(242,225,217)', shadow: '0px 4px 8px -4px rgba(95,80,83,0.51)', text: 'rgb(0,0,0)', action: 'rgb(20,20,23)', close: 'rgb(20,20,23)' },
};
const ttBox = { position: 'relative', width: 24, height: 24, flexShrink: 0 };
const ttAbs = (s) => ({ position: 'absolute', ...s });

function TTIcon({ variant }) {
  if (variant === 'default') return (
    <span aria-hidden="true" style={ttBox}>
      <svg width="20" height="17" viewBox="0 0 20 17" style={ttAbs({ left: 2, top: 3.5 })}>
        <path d="M 8.42 0 L 11.58 0 C 13.813 0 15.955 0.887 17.534 2.466 C 19.113 4.045 20 6.187 20 8.42 L 20 8.58 C 20 10.813 19.113 12.955 17.534 14.534 C 15.955 16.113 13.813 17 11.58 17 L 8.42 17 C 6.187 17 4.045 16.113 2.466 14.534 C 0.887 12.955 0 10.813 0 8.58 L 0 8.42 C 0 3.77 3.77 0 8.42 0 Z" fill="var(--t360-success)" />
        <path d="M 4.88 8.75 L 8.53 12.4 L 15.11 5.81 L 13.7 4.4 L 8.53 9.57 L 6.3 7.34 L 4.88 8.75 Z" fill="rgb(255,255,255)" />
      </svg>
    </span>
  );
  if (variant === 'loading') return (
    <span aria-hidden="true" style={ttBox}>
      <style>{'@keyframes t360-toast-spin{to{transform:rotate(360deg)}}'}</style>
      <svg width="18" height="18" viewBox="0 0 18 18" style={ttAbs({ left: 3, top: 3, animation: 't360-toast-spin 1s linear infinite' })}>
        <path d="M 16.5 9 C 16.5 13.142 13.142 16.5 9 16.5 C 4.858 16.5 1.5 13.142 1.5 9 C 1.5 4.858 4.858 1.5 9 1.5 L 9 0 C 4.029 0 0 4.029 0 9 C 0 13.971 4.029 18 9 18 C 13.971 18 18 13.971 18 9 L 16.5 9 Z" fill="rgb(255,255,255)" />
      </svg>
    </span>
  );
  if (variant === 'error') return (
    <span aria-hidden="true" style={ttBox}>
      <svg width="20" height="17" viewBox="0 0 20 17" style={ttAbs({ left: 2, top: 3.5 })}>
        <path d="M 11.58 0 L 8.42 0 C 3.77 0 0 3.77 0 8.42 L 0 8.58 C 0 10.813 0.887 12.955 2.466 14.534 C 4.045 16.113 6.187 17 8.42 17 L 11.58 17 C 13.813 17 15.955 16.113 17.534 14.534 C 19.113 12.955 20 10.813 20 8.58 L 20 8.42 C 20 6.187 19.113 4.045 17.534 2.466 C 15.955 0.887 13.813 0 11.58 0 Z" fill="var(--t360-error)" />
        <path d="M 9 4 L 11 4 L 11 10.07 L 9 10.07 L 9 4 Z M 9.16 13.17 C 9.633 13.612 10.367 13.612 10.84 13.17 C 11.065 12.948 11.191 12.646 11.191 12.33 C 11.191 12.014 11.065 11.712 10.84 11.49 C 10.367 11.048 9.633 11.048 9.16 11.49 C 8.935 11.712 8.809 12.014 8.809 12.33 C 8.809 12.646 8.935 12.948 9.16 13.17 Z" fill="rgb(255,255,255)" />
      </svg>
    </span>
  );
  return (
    <span aria-hidden="true" style={{ ...ttBox, overflow: 'hidden' }}>
      <span style={ttAbs({ left: 0.8, top: 0, width: 22.281, height: 22.4 })}>
        <svg width="20" height="19.124" viewBox="0 0 20 19.124" style={ttAbs({ left: 2.281, top: 2.147 })}>
          <path d="M 8.811 0.809 C 9.35 -0.27 10.65 -0.27 11.189 0.809 L 19.912 16.627 C 20.249 17.893 19.599 19.124 18.326 19.124 L 1.674 19.124 C 0.401 19.124 -0.249 17.893 0.088 16.627 L 8.811 0.809 Z" fill="rgb(255,167,0)" fillRule="evenodd" />
        </svg>
        <svg width="2.163" height="10.89" viewBox="0 0 2.163 10.890" style={ttAbs({ left: 11.2, top: 7.493 })}>
          <path d="M 2.163 0 L 2.163 2.071 L 1.758 7.11 L 0.418 7.11 L 0 2.071 L 0 0 L 2.163 0 Z M 2.162 8.503 L 2.162 10.89 L 0.014 10.89 L 0.014 8.503 L 2.162 8.503 Z" fill="rgb(255,255,255)" fillRule="evenodd" />
        </svg>
      </span>
    </span>
  );
}

function T360Toast({ variant = 'default', children = 'A thing happened', showIcon = true, actionLabel, onAction, secondaryActionLabel, onSecondaryAction, onClose, style }) {
  const v = TT_VARIANTS[variant] || TT_VARIANTS.default;
  const two = !!(secondaryActionLabel && onSecondaryAction);
  const act = (label, fn) => (
    <button type="button" onClick={fn} style={{ height: 24, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 4, fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, lineHeight: '24px', letterSpacing: '-0.2px', color: v.action, whiteSpace: 'nowrap' }}>{label}</button>
  );
  const hasPrimary = !!(actionLabel && onAction);
  const close = onClose && (
    <button type="button" onClick={onClose} aria-label="Dismiss" style={{ position: 'relative', width: 24, height: 24, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', flexShrink: 0 }}>
      <svg width="14" height="14" viewBox="0 0 14 14" style={ttAbs({ left: 4.98, top: 4.98 })}>
        <path d="M 14 1.06 L 12.95 0 L 7 5.95 L 1.05 0 L 0 1.06 L 5.95 7 L 0 12.95 L 1.05 14 L 7 8.06 L 12.95 14 L 14 12.95 L 8.05 7 L 14 1.06 L 14 1.06 Z" fill={v.close} />
      </svg>
    </button>
  );
  return (
    <div role={variant === 'error' ? 'alert' : 'status'} style={{ position: 'relative', width: '100%', minHeight: 56, borderRadius: 8, overflow: variant === 'loading' ? 'hidden' : undefined, backgroundColor: v.bg, boxShadow: v.shadow, display: 'flex', flexDirection: 'row', gap: 16, padding: 16, alignItems: 'flex-start', boxSizing: 'border-box', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start', flexGrow: 1, minWidth: 0 }}>
        {(showIcon || variant !== 'default') && <TTIcon variant={variant} />}
        <div style={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: v.text }}>{children}</span>
          {two && <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' }}>{hasPrimary && act(actionLabel, onAction)}{act(secondaryActionLabel, onSecondaryAction)}</div>}
        </div>
      </div>
      {((!two && hasPrimary) || onClose) && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 16, justifyContent: 'flex-end', alignItems: 'center', flexShrink: 0, height: 24 }}>
          {!two && hasPrimary && act(actionLabel, onAction)}
          {close}
        </div>
      )}
    </div>
  );
}
window.T360Toast = T360Toast;
