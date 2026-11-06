/* Copied verbatim from Tech360 UI Library components/navigation/Tabs.jsx (the bound bundle ships an older fixed-width Tab). Only change: exposed as globals. */

/* Tab Button / Large — Figma 58:21766 (State=Selected) / 58:21763 (State=Default), page "Tabs" 58:21774.
   58px tall, white, padding 0 12, gap 4, DM Sans 16/24 nowrap.
   Selected: 4px rgb(2,114,182) bottom stroke only, blue label. Default: no border, black label.
   Optional caret = Icons / Accordians / Expand (16×16, blue ▼).
   Tabs (Quantity=Two…Five): 58px row, backdrop blur 27.183, shadow 0 3 3 rgba(0,0,0,0.13).
   2–4 tabs share the width equally; 5+ tabs are 112px each and the row scrolls. */

const BLUE = 'rgb(2,114,182)';

function Caret() {
  return (
    <span aria-hidden="true" style={{ position: 'relative', width: 16, height: 16, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M 0 0 L 10 0 L 5 6 L 0 0 Z" fill={BLUE} /></svg>
    </span>
  );
}

function Tab({ children, selected = false, onClick, caret = false, width, style, ...rest }) {
  return (
    <button type="button" onClick={onClick} role="tab" aria-selected={selected} style={{
      position: 'relative', height: 58, minHeight: 58, boxSizing: 'border-box',
      flex: width ? `0 0 ${typeof width === 'number' ? width + 'px' : width}` : '1 1 0', minWidth: 0,
      display: 'flex', flexDirection: 'row', gap: 4,
      justifyContent: 'center', alignItems: 'center', padding: '0px 12px 0px 12px',
      backgroundColor: 'rgb(255,255,255)', cursor: 'pointer', margin: 0,
      border: 'none',
      borderBottom: selected ? `4px solid ${BLUE}` : 'none',
      fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 400, fontSize: 16, lineHeight: '24px', textAlign: 'center', whiteSpace: 'nowrap',
      color: selected ? BLUE : 'rgb(0,0,0)',
      ...style,
    }} {...rest}>
      <span style={{ position: 'relative', flexShrink: 0 }}>{children}</span>
      {caret && <Caret />}
    </button>
  );
}

function Tabs({ children, style, ...rest }) {
  const items = React.Children.toArray(children).filter(Boolean);
  const scroll = items.length >= 5;
  return (
    <div role="tablist" style={{
      position: 'relative', height: 58, width: '100%',
      backdropFilter: 'blur(27.183px)', WebkitBackdropFilter: 'blur(27.183px)',
      boxShadow: '0px 3px 3px 0px rgba(0,0,0,0.13)', backgroundColor: 'rgb(255,255,255)',
      display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'nowrap',
      overflowX: scroll ? 'auto' : 'hidden', overflowY: 'hidden', scrollbarWidth: 'none',
      ...style,
    }} {...rest}>
      {scroll ? items.map((c) => React.isValidElement(c) && c.props.width === undefined ? React.cloneElement(c, { width: 112 }) : c) : items}
    </div>
  );
}

window.T360Tabs = Tabs;
window.T360Tab = Tab;
