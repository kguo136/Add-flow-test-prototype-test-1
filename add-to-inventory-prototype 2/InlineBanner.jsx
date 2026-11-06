/* Inline Banner — copied from Tech360 UI Library components/feedback/InlineBanner.jsx
   (Figma 9695:1816 · Informational / Success / Warning / Alert). Values verbatim.
   Local copy because the bound bundle still ships the older expandable variant.
   Only change: width defaults to 100% so it fits inset containers (override via style). */
const IBIcon = (p) => React.createElement(window.Tech360UILibrary_172398.Icon, p);
const IB_FONT = '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const IB_BG = { informational: 'rgb(217,225,242)', success: 'rgb(217,242,234)', warning: 'rgb(242,225,217)', alert: 'rgb(242,217,225)' };

function IBBannerIcon({ tone }) {
  const box = { position: 'relative', width: 32, height: 32, overflow: 'hidden', flexShrink: 0 };
  const abs = (s) => ({ position: 'absolute', ...s });
  if (tone === 'alert') return (
    <div style={box}>
      <div style={abs({ left: 4.8, top: 4.8, width: 22.4, height: 22.4, borderRadius: '50%', backgroundColor: 'rgb(201,3,24)' })}></div>
      <div style={abs({ left: 14.8, top: 20.8, width: 2.4, height: 2.4, borderRadius: '50%', backgroundColor: 'rgb(255,255,255)' })}></div>
      <div style={abs({ left: 14.8, top: 8.8, width: 2.4, height: 10.4, borderRadius: 2, backgroundColor: 'rgb(255,255,255)' })}></div>
    </div>
  );
  if (tone === 'warning') return (
    <div style={box}>
      <div style={abs({ left: 4.8, top: 4, width: 22.281, height: 22.4, overflow: 'hidden' })}>
        <div style={abs({ left: 2.281, top: 2.147, width: 20, height: 19.124, overflow: 'hidden' })}>
          <svg width="20" height="19.124" viewBox="0 0 20 19.124" fill="none" style={abs({ left: 0, top: 0 })}>
            <path d="M 8.811 0.809 C 9.35 -0.27 10.65 -0.27 11.189 0.809 L 19.912 16.627 C 20.249 17.893 19.599 19.124 18.326 19.124 L 1.674 19.124 C 0.401 19.124 -0.249 17.893 0.088 16.627 L 8.811 0.809 Z" fill="rgb(255,167,0)" fillRule="evenodd" />
          </svg>
          <svg width="2.163" height="10.89" viewBox="0 0 2.163 10.890" fill="none" style={abs({ left: 8.919, top: 5.346 })}>
            <path d="M 2.163 0 L 2.163 2.071 L 1.758 7.11 L 0.418 7.11 L 0 2.071 L 0 0 L 2.163 0 Z M 2.162 8.503 L 2.162 10.89 L 0.014 10.89 L 0.014 8.503 L 2.162 8.503 Z" fill="rgb(255,255,255)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
  if (tone === 'success') return (
    <div style={box}>
      <div style={abs({ left: 4.8, top: 4.8, width: 22.4, height: 22.4, overflow: 'hidden' })}>
        <div style={abs({ left: 0, top: 0, width: 22.4, height: 22.4, borderRadius: '50%', backgroundColor: 'rgb(5,128,64)' })}></div>
        <IBIcon name="IconsFilterCheckmarkHealth" size={15.2} style={abs({ left: 4, top: 4, color: 'rgb(255,255,255)' })} />
      </div>
    </div>
  );
  return (
    <div style={box}>
      <div style={abs({ left: 4.8, top: 4.8, width: 22.4, height: 22.4, overflow: 'hidden' })}>
        <div style={abs({ left: 0, top: 0, width: 22.4, height: 22.4, borderRadius: '50%', backgroundColor: 'rgb(2,114,182)' })}></div>
        <svg width="5.6" height="14.7" viewBox="0 0 5.600 14.700" fill="none" style={abs({ left: 8.8, top: 4 })}>
          <path d="M 5.6 1.754 C 5.6 2.238 5.429 2.65 5.087 2.99 C 4.745 3.33 4.334 3.5 3.853 3.5 C 3.373 3.5 2.959 3.33 2.615 2.99 C 2.273 2.65 2.1 2.238 2.1 1.754 C 2.1 1.271 2.273 0.858 2.615 0.516 C 2.959 0.173 3.373 0 3.853 0 C 4.334 0 4.745 0.173 5.087 0.516 C 5.429 0.858 5.6 1.271 5.6 1.754 Z M 4.77 13.141 C 5.103 13.398 4.764 13.961 4.122 14.26 C 3.566 14.521 2.879 14.7 2.398 14.7 C 1.658 14.7 1.026 14.364 0.615 14.002 C 0.204 13.64 0 13.183 0 12.628 C 0 12.412 0.014 12.191 0.045 11.966 C 0.078 11.74 0.127 11.486 0.192 11.202 L 0.959 8.5 C 1.028 8.242 1.084 7.996 1.131 7.765 C 1.176 7.534 1.202 7.321 1.202 7.131 C 1.202 6.785 1.129 6.545 0.985 6.41 C 0.842 6.274 0.572 6.206 0.17 6.206 C -0.029 6.206 -0.227 5.43 0.667 5.117 C 1.122 4.96 1.558 4.9 1.967 4.9 C 2.703 4.9 3.271 5.079 3.668 5.433 C 4.067 5.788 4.267 6.25 4.267 6.816 C 4.267 6.933 4.253 7.139 4.226 7.437 C 4.197 7.732 4.144 8.004 4.073 8.251 L 3.31 10.943 C 3.249 11.159 3.191 11.407 3.142 11.685 C 3.093 11.962 3.071 12.171 3.071 12.314 C 3.071 12.671 3.149 12.913 3.31 13.044 C 3.469 13.173 3.748 13.238 4.142 13.238 C 4.21 13.238 4.288 13.204 4.368 13.17 C 4.504 13.11 4.649 13.048 4.77 13.141 Z" fill="rgb(255,255,255)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function IBCloseGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ position: 'absolute', left: 1, top: 1 }}>
      <path d="M 13.198 0 C 12.993 0 12.788 0.078 12.632 0.235 L 7 5.867 L 1.368 0.236 C 1.055 -0.078 0.548 -0.078 0.235 0.236 C -0.078 0.549 -0.078 1.056 0.235 1.369 L 5.866 7 L 0.235 12.632 C -0.078 12.945 -0.078 13.451 0.235 13.765 C 0.391 13.921 0.597 13.999 0.802 13.999 C 1.007 13.999 1.212 13.921 1.368 13.765 L 7 8.133 L 12.632 13.765 C 12.788 13.922 12.993 14 13.198 14 C 13.403 14 13.608 13.921 13.765 13.765 C 14.078 13.452 14.078 12.946 13.765 12.632 L 8.133 7 L 13.765 1.368 C 14.078 1.055 14.078 0.549 13.765 0.235 C 13.609 0.078 13.403 0 13.198 0 Z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function InlineBanner({ tone = 'informational', header = 'Inline level banner', children = 'Enter description text', showHeader = true, buttonLabel = 'Button', showButton = true, onButtonClick, dismissible = true, onDismiss, style }) {
  const t = IB_BG[tone] ? tone : 'informational';
  const text = (w) => ({ position: 'relative', flexShrink: 0, alignSelf: 'stretch', fontFamily: IB_FONT, fontWeight: w, fontSize: 14, lineHeight: '20px', color: 'rgb(0,0,0)' });
  const content = (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 4, justifyContent: 'center', alignItems: 'flex-start', flexGrow: 1, alignSelf: 'stretch', minWidth: 0 }}>
      {showHeader && <span style={text(700)}>{header}</span>}
      <span style={text(400)}>{children}</span>
      {showButton && (
        <button type="button" onClick={(e) => { e.stopPropagation(); onButtonClick && onButtonClick(e); }} style={{ position: 'relative', height: 24, display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', flexShrink: 0, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <span style={{ fontFamily: IB_FONT, fontWeight: 700, fontSize: 16, lineHeight: '24px', letterSpacing: '0.010em', color: 'rgb(0,0,0)', whiteSpace: 'nowrap' }}>{buttonLabel}</span>
          <span style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
            <svg width="6.222" height="12.444" viewBox="0 0 6.222 12.444" fill="none" style={{ position: 'absolute', left: 8.889, top: 5.778 }}>
              <path d="M 6.222 6.222 L 6.576 6.576 L 6.929 6.222 L 6.576 5.869 L 6.222 6.222 Z M -0.354 0.354 L 5.869 6.576 L 6.576 5.869 L 0.354 -0.354 L -0.354 0.354 Z M 5.869 5.869 L -0.354 12.091 L 0.354 12.798 L 6.576 6.576 L 5.869 5.869 Z" fill="rgb(0,0,0)" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
  const close = dismissible && (
    <button type="button" aria-label="Dismiss" onClick={onDismiss} style={{ position: 'relative', width: 16, height: 16, flexShrink: 0, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgb(0,0,0)' }}><IBCloseGlyph /></button>
  );
  const shell = { position: 'relative', width: '100%', borderRadius: 4, backgroundColor: IB_BG[t], display: 'flex', flexDirection: 'row', alignItems: 'center', boxSizing: 'border-box', ...style };
  const pad = { gap: 8, padding: '8px 16px 8px 4px' };
  if (t === 'informational') return (
    <div role="status" style={{ ...shell, ...pad }}><IBBannerIcon tone={t} />{content}{close}</div>
  );
  return (
    <div role="status" style={shell}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 14, padding: pad.padding, alignItems: 'center', boxSizing: 'border-box', flexGrow: 1, alignSelf: 'stretch', minWidth: 0 }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', flexGrow: 1, alignSelf: 'stretch', minWidth: 0 }}><IBBannerIcon tone={t} />{content}</div>
        {close}
      </div>
    </div>
  );
}
window.T360InlineBanner = InlineBanner;
