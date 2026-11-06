/* Secondary Tabs — copied from Tech360 UI Library components/navigation/SecondaryTabs.jsx
   (Secondary Tab.fig · Tabs / Inventory 0:19/0:25/0:30 · Secondary Tab 0:13 Default / 0:15 Activated). Values verbatim.
   Local copy because the bound bundle doesn't ship it yet. Only change: row width 100% (was 375) to fit inset drawers. */
const ST_FONT = '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

function SecondaryTab({ children, activated = false, onClick, style }) {
  return (
    <button type="button" role="tab" aria-selected={activated} onClick={onClick} style={{
      position: 'relative', flex: '1 1 0', minWidth: 0, alignSelf: 'stretch', display: 'flex', flexDirection: 'row',
      alignItems: 'flex-start', padding: '5px 4px', boxSizing: 'border-box', border: 'none', margin: 0, cursor: 'pointer',
      borderRadius: activated ? 6 : 4,
      backgroundColor: activated ? 'rgb(2,114,182)' : 'transparent',
      boxShadow: activated ? '1px 1px 4px 0px rgba(0,0,0,0.25)' : 'none',
      ...style,
    }}>
      <span style={{ flexGrow: 1, alignSelf: 'stretch', fontFamily: ST_FONT, fontWeight: activated ? 700 : 400, fontSize: 12, lineHeight: '16px', textAlign: 'center', color: activated ? 'rgb(255,255,255)' : 'rgb(2,114,182)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>
    </button>
  );
}

function SecondaryTabs({ tabs = ['Available Devices', 'Devices at Risk', 'Devices to Return'], selected = 0, onChange, style }) {
  const items = [];
  tabs.forEach((label, i) => {
    if (i > 0 && i - 1 !== selected && i !== selected) items.push(<span key={'d' + i} aria-hidden="true" style={{ width: 1, height: 18, flexShrink: 0, backgroundColor: 'rgb(209,209,209)' }}></span>);
    items.push(<SecondaryTab key={i} activated={i === selected} onClick={(e) => { if (e && e.stopPropagation) e.stopPropagation(); onChange && onChange(i); }}>{label}</SecondaryTab>);
  });
  return (
    <div style={{ position: 'relative', width: '100%', height: 46, display: 'flex', flexDirection: 'row', padding: '8px 0', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', ...style }}>
      <div role="tablist" style={{ position: 'relative', width: '100%', alignSelf: 'stretch', borderRadius: 8, backgroundColor: 'rgb(242,242,242)', boxShadow: 'inset 0 0 0 1px rgb(2,114,182)', display: 'flex', flexDirection: 'row', gap: 3, padding: 2, justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>{items}</div>
    </div>
  );
}
window.T360SecondaryTabs = SecondaryTabs;
