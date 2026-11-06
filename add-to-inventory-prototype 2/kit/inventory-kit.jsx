/* Inventory kit components copied verbatim from Tech360 UI Library components/kit/ (not in the bound bundle). Wrapped per file; imports resolved to the names below. */
const Icon = (p) => React.createElement(window.Tech360UILibrary_172398.Icon, p);

const { DividerLightMode } = (() => {
// figma node: 7:2248 Divider / Light Mode
function DividerLightMode(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 375,
      height: 1,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 375,
        height: 1,
        backgroundColor: "rgb(209,209,209)",
      }} />
    </div>
  );
}

return { DividerLightMode };
})();

const { DeviceImagesJobDetailsHigh } = (() => {
// figma node: 23:13726 Device Images / Job Details / high speed / XB6
function DeviceImagesJobDetailsHigh(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100,
      height: 75,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-6bcbbaf71c710618-cc5cfefb" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 75,
      }} />
    </div>
  );
}

return { DeviceImagesJobDetailsHigh };
})();

const { HeaderIcon } = (() => {
// figma node: 7:432 Header Icon (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon) + '|' + "color=" + __venc(p.color);

function HeaderIcon(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? "close", color: _p.color ?? "theme" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 0.748 0.059 C 0.669 -0.02 0.544 -0.02 0.465 0.059 L 0.06 0.464 C 0.022 0.502 0 0.555 0 0.609 C 0 0.664 0.022 0.716 0.06 0.755 L 8.308 9 L 0.06 17.245 C 0.022 17.284 0 17.336 0 17.391 C 0 17.445 0.022 17.498 0.06 17.536 L 0.465 17.941 C 0.544 18.02 0.669 18.02 0.748 17.941 L 9 9.692 L 17.252 17.941 C 17.331 18.02 17.456 18.02 17.535 17.941 L 17.94 17.536 C 17.978 17.498 18 17.445 18 17.391 C 18 17.336 17.978 17.284 17.94 17.245 L 9.692 9 L 17.94 0.755 C 17.978 0.716 18 0.664 18 0.609 C 18 0.555 17.978 0.502 17.94 0.464 L 17.535 0.059 C 17.456 -0.02 17.331 -0.02 17.252 0.059 L 9 8.308 L 0.748 0.059 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 0.748 0.059 C 0.669 -0.02 0.544 -0.02 0.465 0.059 L 0.06 0.464 C 0.022 0.502 0 0.555 0 0.609 C 0 0.664 0.022 0.716 0.06 0.755 L 8.308 9 L 0.06 17.245 C 0.022 17.284 0 17.336 0 17.391 C 0 17.445 0.022 17.498 0.06 17.536 L 0.465 17.941 C 0.544 18.02 0.669 18.02 0.748 17.941 L 9 9.692 L 17.252 17.941 C 17.331 18.02 17.456 18.02 17.535 17.941 L 17.94 17.536 C 17.978 17.498 18 17.445 18 17.391 C 18 17.336 17.978 17.284 17.94 17.245 L 9.692 9 L 17.94 0.755 C 17.978 0.716 18 0.664 18 0.609 C 18 0.555 17.978 0.502 17.94 0.464 L 17.535 0.059 C 17.456 -0.02 17.331 -0.02 17.252 0.059 L 9 8.308 L 0.748 0.059 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 4.435,
        top: 1.531,
        width: 11.203,
        height: 20.459,
        overflow: "hidden",
      }}>
        <svg width={11.203} height={20.459} viewBox="0 0 11.203 20.459" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 11.203,
          height: 20.459,
        }}>
          <path d={"M 10.006 0.108 C 9.81 -0.053 9.522 -0.032 9.351 0.157 L 0.123 10.341 C 0.015 10.46 -0.021 10.619 0.011 10.764 C -0.006 10.912 0.047 11.066 0.167 11.174 L 10.409 20.338 C 10.598 20.507 10.887 20.498 11.065 20.317 C 11.257 20.124 11.247 19.809 11.044 19.628 L 1.076 10.708 L 10.057 0.796 C 10.24 0.594 10.217 0.281 10.006 0.108 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 4.435,
        top: 1.531,
        width: 11.203,
        height: 20.459,
        overflow: "hidden",
      }}>
        <svg width={11.203} height={20.459} viewBox="0 0 11.203 20.459" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 11.203,
          height: 20.459,
        }}>
          <path d={"M 10.006 0.108 C 9.81 -0.053 9.522 -0.032 9.351 0.157 L 0.123 10.341 C 0.015 10.46 -0.021 10.619 0.011 10.764 C -0.006 10.912 0.047 11.066 0.167 11.174 L 10.409 20.338 C 10.598 20.507 10.887 20.498 11.065 20.317 C 11.257 20.124 11.247 19.809 11.044 19.628 L 1.076 10.708 L 10.057 0.796 C 10.24 0.594 10.217 0.281 10.006 0.108 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 2,
        width: 24,
        height: 21,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 3,
          width: 14,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 21,
          top: 3,
          width: 3,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 10,
          width: 3,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 14,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 17,
          width: 11,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 17,
          width: 6,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 14,
          top: 0,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px var(--theme), 0 0 0 0.500px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 3,
          top: 7,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px var(--theme), 0 0 0 0.500px var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 11,
          top: 14,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px var(--theme), 0 0 0 0.500px var(--theme)",
        }} />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 2,
        width: 24,
        height: 21,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 3,
          width: 14,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 21,
          top: 3,
          width: 3,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 10,
          width: 3,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 14,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 17,
          width: 11,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 17,
          width: 6,
          height: 1,
          borderRadius: 1,
          boxShadow: "inset 0 0 0 1px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 14,
          top: 0,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgb(248,248,248), 0 0 0 0.500px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 3,
          top: 7,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgb(248,248,248), 0 0 0 0.500px rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 11,
          top: 14,
          width: 7,
          height: 7,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgb(248,248,248), 0 0 0 0.500px rgb(248,248,248)",
        }} />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        overflow: "hidden",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <path d={"M 9.5 3 C 9.5 2.724 9.724 2.5 10 2.5 C 10.276 2.5 10.5 2.724 10.5 3 L 10.5 9.5 L 14.74 9.5 C 15.016 9.5 15.24 9.724 15.24 10 C 15.24 10.276 15.016 10.5 14.74 10.5 L 10 10.5 C 9.724 10.5 9.5 10.276 9.5 10 L 9.5 3 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z M 10 19 C 14.971 19 19 14.971 19 10 C 19 5.029 14.971 1 10 1 C 5.029 1 1 5.029 1 10 C 1 14.971 5.029 19 10 19 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        overflow: "hidden",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <path d={"M 9.5 3 C 9.5 2.724 9.724 2.5 10 2.5 C 10.276 2.5 10.5 2.724 10.5 3 L 10.5 9.5 L 14.74 9.5 C 15.016 9.5 15.24 9.724 15.24 10 C 15.24 10.276 15.016 10.5 14.74 10.5 L 10 10.5 C 9.724 10.5 9.5 10.276 9.5 10 L 9.5 3 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z M 10 19 C 14.971 19 19 14.971 19 10 C 19 5.029 14.971 1 10 1 C 5.029 1 1 5.029 1 10 C 1 14.971 5.029 19 10 19 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 19.297,
        height: 20,
        overflow: "hidden",
      }}>
        <svg width={19.297} height={20} viewBox="0 0 19.297 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19.297,
          height: 20,
        }}>
          <path d={"M 18.797 20 C 18.67 20 18.542 19.952 18.444 19.854 L 13.187 14.586 C 11.799 15.681 10.05 16.334 8.152 16.334 C 3.657 16.334 0 12.67 0 8.167 C 0 3.663 3.657 0 8.152 0 C 12.647 0 16.303 3.663 16.303 8.167 C 16.303 10.409 15.398 12.442 13.933 13.919 L 19.151 19.147 C 19.346 19.342 19.346 19.66 19.151 19.854 C 19.053 19.952 18.925 20 18.797 20 L 18.797 20 Z M 8.152 1 C 4.209 1 1 4.215 1 8.167 C 1 12.12 4.209 15.334 8.152 15.334 C 12.095 15.334 15.303 12.12 15.303 8.167 C 15.303 4.215 12.095 1 8.152 1 L 8.152 1 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 19.297,
        height: 20,
        overflow: "hidden",
      }}>
        <svg width={19.297} height={20} viewBox="0 0 19.297 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19.297,
          height: 20,
        }}>
          <path d={"M 18.797 20 C 18.67 20 18.542 19.952 18.444 19.854 L 13.187 14.586 C 11.799 15.681 10.05 16.334 8.152 16.334 C 3.657 16.334 0 12.67 0 8.167 C 0 3.663 3.657 0 8.152 0 C 12.647 0 16.303 3.663 16.303 8.167 C 16.303 10.409 15.398 12.442 13.933 13.919 L 19.151 19.147 C 19.346 19.342 19.346 19.66 19.151 19.854 C 19.053 19.952 18.925 20 18.797 20 L 18.797 20 Z M 8.152 1 C 4.209 1 1 4.215 1 8.167 C 1 12.12 4.209 15.334 8.152 15.334 C 12.095 15.334 15.303 12.12 15.303 8.167 C 15.303 4.215 12.095 1 8.152 1 L 8.152 1 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 6,
        width: 20,
        height: 13,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 12,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 6,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "var(--theme)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "var(--theme)",
        }} />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 6,
        width: 20,
        height: 13,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 12,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 6,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "rgb(248,248,248)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 1,
          borderRadius: 1,
          backgroundColor: "rgb(248,248,248)",
        }} />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10 1 C 5.029 1 1 5.029 1 10 C 1 14.971 5.029 19 10 19 C 14.971 19 19 14.971 19 10 C 19 5.029 14.971 1 10 1 Z M 5 8 C 6.106 8 7 8.894 7 10 C 7 11.106 6.106 12 5 12 C 3.894 12 3 11.106 3 10 C 3 8.894 3.894 8 5 8 Z M 10 8 C 11.106 8 12 8.894 12 10 C 12 11.106 11.106 12 10 12 C 8.894 12 8 11.106 8 10 C 8 8.894 8.894 8 10 8 Z M 15 8 C 16.106 8 17 8.894 17 10 C 17 11.106 16.106 12 15 12 C 13.894 12 13 11.106 13 10 C 13 8.894 13.894 8 15 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 3 10 C 3 8.894 3.894 8 5 8 C 6.106 8 7 8.894 7 10 C 7 11.106 6.106 12 5 12 C 3.894 12 3 11.106 3 10 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 8 10 C 8 8.894 8.894 8 10 8 C 11.106 8 12 8.894 12 10 C 12 11.106 11.106 12 10 12 C 8.894 12 8 11.106 8 10 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 15 8 C 13.894 8 13 8.894 13 10 C 13 11.106 13.894 12 15 12 C 16.106 12 17 11.106 17 10 C 17 8.894 16.106 8 15 8 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z M 19 10 C 19 14.971 14.971 19 10 19 C 5.029 19 1 14.971 1 10 C 1 5.029 5.029 1 10 1 C 14.971 1 19 5.029 19 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10 1 C 5.029 1 1 5.029 1 10 C 1 14.971 5.029 19 10 19 C 14.971 19 19 14.971 19 10 C 19 5.029 14.971 1 10 1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
        position: "absolute",
        left: 7.5,
        top: 9.5,
        width: 9,
        height: 6,
      }}>
        <path d={"M 8.87 0.164 C 9.056 0.368 9.041 0.684 8.836 0.87 L 3.336 5.87 C 3.139 6.05 2.835 6.042 2.646 5.854 L 0.146 3.354 C -0.049 3.158 -0.049 2.842 0.146 2.646 C 0.342 2.451 0.658 2.451 0.854 2.646 L 3.016 4.809 L 8.164 0.13 C 8.368 -0.056 8.684 -0.041 8.87 0.164 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z M 19 10 C 19 14.971 14.971 19 10 19 C 5.029 19 1 14.971 1 10 C 1 5.029 5.029 1 10 1 C 14.971 1 19 5.029 19 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
        position: "absolute",
        left: 7.5,
        top: 9.5,
        width: 9,
        height: 6,
      }}>
        <path d={"M 8.87 0.164 C 9.056 0.368 9.041 0.684 8.836 0.87 L 3.336 5.87 C 3.139 6.05 2.835 6.042 2.646 5.854 L 0.146 3.354 C -0.049 3.158 -0.049 2.842 0.146 2.646 C 0.342 2.451 0.658 2.451 0.854 2.646 L 3.016 4.809 L 8.164 0.13 C 8.368 -0.056 8.684 -0.041 8.87 0.164 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--theme)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2.716,
        top: 2.336,
        width: 20.4,
        height: 20.41,
        overflow: "hidden",
      }}>
        <svg width={19.200} height={17.980} viewBox="0 0 19.200 17.980" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19.2,
          height: 17.98,
        }}>
          <path d={"M 18.7 9.6 C 18.7 9.876 18.924 10.1 19.2 10.1 C 19.476 10.1 19.7 9.876 19.7 9.6 L 19.2 9.6 L 18.7 9.6 Z M 4.669 18.416 C 4.91 18.551 5.214 18.466 5.349 18.225 C 5.484 17.984 5.399 17.679 5.158 17.544 L 4.913 17.98 L 4.669 18.416 Z M 19.2 9.6 L 19.7 9.6 C 19.7 4.022 15.178 -0.5 9.6 -0.5 L 9.6 0 L 9.6 0.5 C 14.626 0.5 18.7 4.574 18.7 9.6 L 19.2 9.6 Z M 9.6 0 L 9.6 -0.5 C 4.022 -0.5 -0.5 4.022 -0.5 9.6 L 0 9.6 L 0.5 9.6 C 0.5 4.574 4.574 0.5 9.6 0.5 L 9.6 0 Z M 0 9.6 L -0.5 9.6 C -0.5 13.388 1.586 16.688 4.669 18.416 L 4.913 17.98 L 5.158 17.544 C 2.377 15.986 0.5 13.012 0.5 9.6 L 0 9.6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16.137} height={16.156} viewBox="0 0 16.137 16.156" fill="none" style={{
          position: "absolute",
          left: 4.263,
          top: 4.254,
          width: 16.137,
          height: 16.156,
        }}>
          <path d={"M 6.089 9.659 L 10.876 14.459 C 11.858 15.442 13.456 15.442 14.439 14.463 C 15.422 13.483 15.424 11.884 14.443 10.901 L 9.658 6.102 L 9.685 5.871 C 9.848 4.524 9.395 3.204 8.442 2.249 C 7.343 1.145 5.777 0.722 4.3 1.09 L 6.701 3.498 C 7.127 3.925 7.361 4.494 7.36 5.099 C 7.359 5.704 7.123 6.272 6.696 6.699 C 5.811 7.581 4.375 7.578 3.493 6.694 L 1.092 4.288 C 0.722 5.763 1.14 7.33 2.241 8.434 C 3.194 9.389 4.511 9.844 5.858 9.686 L 6.089 9.659 Z M 10.196 15.137 L 5.734 10.662 C 4.174 10.779 2.668 10.221 1.561 9.112 C 0.006 7.552 -0.431 5.236 0.448 3.213 L 0.73 2.565 L 4.173 6.017 C 4.68 6.525 5.508 6.526 6.018 6.019 C 6.264 5.773 6.4 5.445 6.4 5.098 C 6.401 4.749 6.267 4.421 6.021 4.175 L 2.577 0.722 L 3.226 0.443 C 5.253 -0.432 7.568 0.012 9.123 1.571 C 10.229 2.68 10.782 4.192 10.662 5.75 L 15.124 10.223 C 16.477 11.582 16.474 13.789 15.117 15.142 C 14.438 15.819 13.549 16.156 12.66 16.156 C 11.767 16.156 10.874 15.816 10.196 15.137 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={2.627} height={2.627} viewBox="0 0 2.627 2.627" fill="none" style={{
          position: "absolute",
          left: 15.611,
          top: 15.623,
          width: 2.627,
          height: 2.627,
        }}>
          <path d={"M 1.313 0 C 0.588 0 0.001 0.587 0 1.311 C -0.001 2.036 0.587 2.626 1.311 2.627 L 1.313 2.627 C 2.038 2.627 2.626 2.039 2.627 1.315 C 2.628 0.589 2.04 0.001 1.315 0 L 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(248,248,248)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2.716,
        top: 2.336,
        width: 20.4,
        height: 20.41,
        overflow: "hidden",
      }}>
        <svg width={19.200} height={17.980} viewBox="0 0 19.200 17.980" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19.2,
          height: 17.98,
        }}>
          <path d={"M 18.7 9.6 C 18.7 9.876 18.924 10.1 19.2 10.1 C 19.476 10.1 19.7 9.876 19.7 9.6 L 19.2 9.6 L 18.7 9.6 Z M 4.669 18.416 C 4.91 18.551 5.214 18.466 5.349 18.225 C 5.484 17.984 5.399 17.679 5.158 17.544 L 4.913 17.98 L 4.669 18.416 Z M 19.2 9.6 L 19.7 9.6 C 19.7 4.022 15.178 -0.5 9.6 -0.5 L 9.6 0 L 9.6 0.5 C 14.626 0.5 18.7 4.574 18.7 9.6 L 19.2 9.6 Z M 9.6 0 L 9.6 -0.5 C 4.022 -0.5 -0.5 4.022 -0.5 9.6 L 0 9.6 L 0.5 9.6 C 0.5 4.574 4.574 0.5 9.6 0.5 L 9.6 0 Z M 0 9.6 L -0.5 9.6 C -0.5 13.388 1.586 16.688 4.669 18.416 L 4.913 17.98 L 5.158 17.544 C 2.377 15.986 0.5 13.012 0.5 9.6 L 0 9.6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16.137} height={16.156} viewBox="0 0 16.137 16.156" fill="none" style={{
          position: "absolute",
          left: 4.263,
          top: 4.254,
          width: 16.137,
          height: 16.156,
        }}>
          <path d={"M 6.089 9.659 L 10.876 14.459 C 11.858 15.442 13.456 15.442 14.439 14.463 C 15.422 13.483 15.424 11.884 14.443 10.901 L 9.658 6.102 L 9.685 5.871 C 9.848 4.524 9.395 3.204 8.442 2.249 C 7.343 1.145 5.777 0.722 4.3 1.09 L 6.701 3.498 C 7.127 3.925 7.361 4.494 7.36 5.099 C 7.359 5.704 7.123 6.272 6.696 6.699 C 5.811 7.581 4.375 7.578 3.493 6.694 L 1.092 4.288 C 0.722 5.763 1.14 7.33 2.241 8.434 C 3.194 9.389 4.511 9.844 5.858 9.686 L 6.089 9.659 Z M 10.196 15.137 L 5.734 10.662 C 4.174 10.779 2.668 10.221 1.561 9.112 C 0.006 7.552 -0.431 5.236 0.448 3.213 L 0.73 2.565 L 4.173 6.017 C 4.68 6.525 5.508 6.526 6.018 6.019 C 6.264 5.773 6.4 5.445 6.4 5.098 C 6.401 4.749 6.267 4.421 6.021 4.175 L 2.577 0.722 L 3.226 0.443 C 5.253 -0.432 7.568 0.012 9.123 1.571 C 10.229 2.68 10.782 4.192 10.662 5.75 L 15.124 10.223 C 16.477 11.582 16.474 13.789 15.117 15.142 C 14.438 15.819 13.549 16.156 12.66 16.156 C 11.767 16.156 10.874 15.816 10.196 15.137 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={2.627} height={2.627} viewBox="0 0 2.627 2.627" fill="none" style={{
          position: "absolute",
          left: 15.611,
          top: 15.623,
          width: 2.627,
          height: 2.627,
        }}>
          <path d={"M 1.313 0 C 0.588 0 0.001 0.587 0 1.311 C -0.001 2.036 0.587 2.626 1.311 2.627 L 1.313 2.627 C 2.038 2.627 2.626 2.039 2.627 1.315 C 2.628 0.589 2.04 0.001 1.315 0 L 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Icon=Close, Color=Theme
    "icon=close|color=theme": __body0,
    // figma: Icon=Close, Color=White
    "icon=close|color=white": __body1,
    // figma: Icon=Back, Color=Theme
    "icon=back|color=theme": __body2,
    // figma: Icon=Back, Color=White
    "icon=back|color=white": __body3,
    // figma: Icon=Filter, Color=Theme
    "icon=filter|color=theme": __body4,
    // figma: Icon=Filter, Color=White
    "icon=filter|color=white": __body5,
    // figma: Icon=Estimated Time of Completion, Color=Theme
    "icon=estimated time of completion|color=theme": __body6,
    // figma: Icon=Estimated Time of Completion, Color=White
    "icon=estimated time of completion|color=white": __body7,
    // figma: Icon=Search, Color=Theme
    "icon=search|color=theme": __body8,
    // figma: Icon=Search, Color=White
    "icon=search|color=white": __body9,
    // figma: Icon=Hamburger, Color=Theme
    "icon=hamburger|color=theme": __body10,
    // figma: Icon=Hamburger, Color=White
    "icon=hamburger|color=white": __body11,
    // figma: Icon=Contextual Menu, Color=Theme
    "icon=contextual menu|color=theme": __body12,
    // figma: Icon=Contextual Menu, Color=White
    "icon=contextual menu|color=white": __body13,
    // figma: Icon=Check, Color=Theme
    "icon=check|color=theme": __body14,
    // figma: Icon=Check, Color=White
    "icon=check|color=white": __body15,
    // figma: Icon=Wrench, Color=Theme
    "icon=wrench|color=theme": __body16,
    // figma: Icon=Wrench, Color=White
    "icon=wrench|color=white": __body17,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

return { HeaderIcon };
})();

const { FooterIcon } = (() => {
// figma node: 45:14740 Footer Icon (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon) + '|' + "mode=" + __venc(p.mode);

function FooterIcon(_p = {}) {
  const props = { ..._p, notification: _p.notification ?? true, icon: _p.icon ?? "home", mode: _p.mode ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(43,156,216)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2.399,
        width: 21,
        height: 18.601,
        overflow: "hidden",
      }}>
        <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 21,
          height: 18.601,
        }}>
          <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 L 21 6.601 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--text-fill-neutral-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.5,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.247,
        }} />
        <div style={{
          position: "absolute",
          left: 1.5,
          top: 2.399,
          width: 21,
          height: 18.601,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Fill 3</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(43,156,216)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.904,
        top: 2.225,
        width: 22.269,
        height: 20.413,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 22.269,
          height: 20.413,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 22.269,
            height: 20.413,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Combined Shape</div>
        </div>
      </div>
      {props.notification && (
      <div style={{
        position: "absolute",
        left: 15,
        top: -3,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "rgb(251,84,63)",
      }} />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--text-fill-neutral-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.904,
        top: 2.225,
        width: 22.269,
        height: 20.413,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 22.269,
          height: 20.413,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 22.269,
            height: 20.413,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Combined Shape</div>
        </div>
        <div style={{
          position: "absolute",
          left: 2.036,
          top: 3.711,
          width: 9.06,
          height: 1,
          backgroundColor: "rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 2.036,
          top: 6.567,
          width: 7.243,
          height: 1,
          backgroundColor: "rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 2.036,
          top: 9.567,
          width: 7.99,
          height: 1,
          backgroundColor: "rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 2.036,
          top: 12.567,
          width: 7.243,
          height: 1,
          backgroundColor: "rgb(255,255,255)",
        }} />
      </div>
      {props.notification && (
      <div style={{
        position: "absolute",
        left: 15,
        top: -3,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "rgb(251,84,63)",
        boxShadow: "inset 0 0 0 1px var(--text-fill-neutral-primary)",
      }} />
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(43,156,216)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.489,
        top: 1.898,
        width: 21.264,
        height: 19.864,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 5.458,
          top: 4.039,
          width: 15.806,
          height: 15.826,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Fill </div>
        <svg width={21.024} height={18.207} viewBox="0 0 21.024 18.207" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 21.024,
          height: 18.207,
        }}>
          <path d={"M 10.514 16.44 C 6.468 16.44 3.176 13.149 3.176 9.104 C 3.176 5.058 6.468 1.766 10.514 1.766 L 10.515 1.766 C 12.473 1.766 14.315 2.529 15.7 3.915 C 17.085 5.301 17.849 7.144 17.849 9.104 C 17.849 9.466 17.814 9.82 17.763 10.169 L 19.438 11.849 L 21.024 9.103 L 15.769 0 L 5.256 0 L 0 9.103 L 5.256 18.207 L 13.424 18.207 L 11.576 16.354 C 11.228 16.405 10.876 16.44 10.514 16.44 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--text-fill-neutral-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.489,
        top: 1.896,
        width: 21.761,
        height: 20.364,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 4.952,
          top: 3.534,
          width: 16.809,
          height: 16.829,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Fill </div>
        <svg width={2.736} height={2.736} viewBox="0 0 2.736 2.736" fill="none" style={{
          position: "absolute",
          left: 16.773,
          top: 15.377,
          width: 2.736,
          height: 2.736,
        }}>
          <path d={"M 1.368 0 C 0.613 0 0.001 0.611 0 1.366 C -0.001 2.121 0.611 2.735 1.366 2.736 L 1.368 2.736 C 2.123 2.736 2.735 2.124 2.736 1.37 C 2.737 0.614 2.125 0.001 1.37 0 L 1.368 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={21.023} height={18.208} viewBox="0 0 21.023 18.208" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 21.023,
          height: 18.208,
        }}>
          <path d={"M 5.833 17.208 L 1.154 9.104 L 5.833 1 L 15.19 1 L 19.869 9.104 L 18.836 10.893 L 19.568 11.627 L 21.023 9.104 L 15.769 0 L 5.256 0 L 0 9.104 L 5.256 18.208 L 13.07 18.208 L 12.073 17.208 L 5.833 17.208 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.5,
        top: 1.5,
        width: 22,
        height: 21,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18.5,
          height: 21,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 10.5,
            top: 4.5,
            width: 8,
            height: 8,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Subtract</div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16.5,
            height: 21,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Subtract</div>
        </div>
        <div style={{
          position: "absolute",
          left: 17.5,
          top: 4.5,
          width: 4.5,
          height: 11.999,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Subtract</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--text-fill-neutral-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 2,
        width: 22,
        height: 20,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 10,
          top: 4,
          width: 10,
          height: 10,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px var(--text-fill-neutral-primary)",
        }} />
        <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
          position: "absolute",
          left: 18,
          top: 13,
          width: 4,
          height: 4,
          borderRadius: 100,
        }}>
          <path d={"M 0.134 0.135 C 0.317 -0.047 0.615 -0.044 0.796 0.136 L 3.865 3.204 C 4.047 3.387 4.043 3.688 3.866 3.865 C 3.683 4.047 3.385 4.044 3.204 3.864 L 0.135 0.796 C -0.047 0.613 -0.043 0.312 0.134 0.135 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={20} viewBox="0 0 16 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 20,
        }}>
          <path d={"M 16 1.905 L 16 0 L 0 0 L 0 20 L 16 20 L 16 17.143 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={5} height={2} viewBox="0 0 5 2" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 7,
          width: 5,
          height: 2,
        }}>
          <path d={"M 0 1 L 5 1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={10} height={2} viewBox="0 0 10 2" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 16,
          width: 10,
          height: 2,
        }}>
          <path d={"M 0 1 L 10 1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={5} height={2} viewBox="0 0 5 2" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 10,
          width: 5,
          height: 2,
        }}>
          <path d={"M 0 1 L 5 1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={7} height={2} viewBox="0 0 7 2" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 13,
          width: 7,
          height: 2,
        }}>
          <path d={"M 0 1 L 7 1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 3,
          top: 2,
          width: 7,
          height: 4,
          boxShadow: "inset 0 0 0 1px var(--text-fill-neutral-primary)",
        }} />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(43,156,216)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.247,
        }} />
        <div style={{
          position: "absolute",
          left: 3,
          top: 3,
          width: 18,
          height: 19,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Combined Shape</div>
        <svg width={10} height={4.500} viewBox="0 0 10 4.500" fill="none" style={{
          position: "absolute",
          left: 7,
          top: 0.5,
          width: 10,
          height: 4.5,
        }}>
          <path d={"M 2.888 1.5 C 3.205 1.5 3.488 1.299 3.595 1 C 3.808 0.402 4.373 0 5 0 C 5.627 0 6.192 0.402 6.405 1 C 6.512 1.3 6.795 1.5 7.112 1.5 L 9.25 1.5 C 9.664 1.5 10 1.836 10 2.25 L 10 4.5 L 0 4.5 L 0 2.25 C 0 1.836 0.336 1.5 0.75 1.5 L 2.888 1.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--text-fill-neutral-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.247,
        }} />
        <svg width={18} height={19} viewBox="0 0 18 19" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 3,
          width: 18,
          height: 19,
        }}>
          <path d={"M 14 0 L 16.991 0 C 17.548 0 18 0.433 18 0.942 L 18 18.058 C 18 18.578 17.555 19 17.007 19 L 0.993 19 C 0.445 19 0 18.567 0 18.058 L 0 0.942 L 0 0.942 C 0 0.422 0.443 0 1.009 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={10.214} height={7.155} viewBox="0 0 10.214 7.155" fill="none" style={{
          position: "absolute",
          left: 7,
          top: 9,
          width: 10.214,
          height: 7.155,
        }}>
          <path d={"M 10.067 0.146 C 9.872 -0.049 9.555 -0.049 9.36 0.146 L 3.907 5.599 L 3.765 5.741 L 3.623 5.599 L 0.854 2.83 C 0.658 2.635 0.342 2.635 0.146 2.83 C -0.049 3.025 -0.049 3.342 0.146 3.537 L 2.915 6.306 L 3.411 6.802 L 3.765 7.155 L 4.118 6.802 L 4.614 6.306 L 10.067 0.853 C 10.262 0.658 10.262 0.341 10.067 0.146 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={12} height={5.500} viewBox="0 0 12 5.500" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 0.5,
          width: 12,
          height: 5.5,
        }}>
          <path d={"M 3.888 1.5 C 4.205 1.5 4.488 1.299 4.595 1 C 4.808 0.402 5.373 0 6 0 C 6.627 0 7.192 0.402 7.405 1 C 7.512 1.3 7.796 1.5 8.112 1.5 L 11.25 1.5 C 11.664 1.5 12 1.836 12 2.25 L 12 5.5 L 0 5.5 L 0 2.25 C 0 1.836 0.336 1.5 0.75 1.5 L 3.888 1.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Icon=Home, Mode=Selected
    "icon=home|mode=selected": __body0,
    // figma: Icon=Home, Mode=Default
    "icon=home|mode=default": __body1,
    // figma: Icon=Inventory, Mode=Selected
    "icon=inventory|mode=selected": __body2,
    // figma: Icon=Inventory, Mode=Default
    "icon=inventory|mode=default": __body3,
    // figma: Icon=Job, Mode=Selected
    "icon=job|mode=selected": __body4,
    // figma: Icon=Job, Mode=Default
    "icon=job|mode=default": __body5,
    // figma: Icon=Search, Mode=Selected
    "icon=search|mode=selected": __body6,
    // figma: Icon=Search, Mode=Default
    "icon=search|mode=default": __body7,
    // figma: Icon=Tasking, Mode=Selected
    "icon=tasking|mode=selected": __body8,
    // figma: Icon=Tasking, Mode=Default
    "icon=tasking|mode=default": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

return { FooterIcon };
})();

const { FooterItem } = (() => {

// figma node: 45:14843 Footer Item (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "version=" + __venc(p.version);

function FooterItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", version: _p.version ?? "< ios 26" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <FooterIcon icon={"home"} mode={"default"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 44,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
          color: "var(--text-fill-neutral-primary)",
        }}>{props.icon1 ?? <FooterIcon icon={"home"} mode={"default"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--text-fill-neutral-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 44,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <FooterIcon icon={"home"} mode={"selected"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "rgb(43,156,216)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default, Version=< iOS 26
    "state=default|version=< ios 26": __body0,
    // figma: State=Default, Version=iOS 26
    "state=default|version=ios 26": __body1,
    // figma: State=Selected, Version=All
    "state=selected|version=all": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

return { FooterItem };
})();

const { IconsSearchBarcode } = (() => {
// figma node: 23:13710 Icons / Search / Barcode — vertical barcode bars (24×20).
function IconsSearchBarcode(_p = {}) {
  const props = _p;
  const bars = [[0,2],[3,1],[5,2],[8,1],[10,1],[12,2],[15,1],[17,2],[20,1],[22,2]];
  return (
    <div className={props.className} style={{ width: 24, height: 24, position: "relative", color: "rgb(2,114,182)", ...props.style }}>
      <svg viewBox="0 0 24 20" fill="none" aria-hidden="true" style={{ position: "absolute", left: 0, top: 2, width: 24, height: 20 }}>
        {bars.map(([x, w], i) => <rect key={i} x={x} y={0} width={w} height={20} fill="currentColor" />)}
      </svg>
    </div>
  );
}

return { IconsSearchBarcode };
})();

const { IconsCustomerCardRefresh } = (() => {

// figma node: 7:786 Icons / Customer card / Refresh — 24×24 blue rounded tile with the design-system refresh glyph (ContextualNavigationIconRefresh) in white.
function IconsCustomerCardRefresh(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(2,114,182)",
      color: "rgb(255,255,255)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...props.style,
    }}>
      <Icon name="ContextualNavigationIconRefresh" size={18} style={{ color: "inherit" }} />
    </div>
  );
}

return { IconsCustomerCardRefresh };
})();

const { InventoryListOfDevicesHeader } = (() => {

// figma node: 23:13728 Inventory / list of devices / Header
function InventoryListOfDevicesHeader(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 86,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 85,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 260,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "8px 16px 8px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "rgb(70,70,70)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Make"}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "rgb(118,118,118)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Model Number"}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "rgb(118,118,118)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "Device Type"}</span>
          </div>
        </div>
        <DeviceImagesJobDetailsHigh style={{
            position: "relative",
            width: 100,
            height: 75,
            flexShrink: 0,
          }} />
      </div>
      <DividerLightMode style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
}

return { InventoryListOfDevicesHeader };
})();

const { InventoryListOfDevicesAll } = (() => {

// figma node: 23:13738 Inventory / list of devices / all attributes
function InventoryListOfDevicesAll(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 24px 0px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 260,
            display: "flex",
            flexDirection: "row",
            padding: "12px 16px 6px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 60,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(70,70,70)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text1 ?? "SN:"}</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "EMAC:"}</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text3 ?? "Status:"}</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
                whiteSpace: "nowrap",
              }}>{props.text4 ?? "Issued:"}</span>
            </div>
            <div style={{
              position: "relative",
              width: 178,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(70,70,70)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>PAVT360XF3020</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>C7:09:5D:CC:B0:22</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Available</span>
              <span style={{
                position: "relative",
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "100%",
                color: "rgb(118,118,118)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>211 Days Ago</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            padding: "0px 16px 10px 16px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 126,
              height: 15,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 126,
                height: 15,
                fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(118,118,118)",
              }}>15 Days left to reconcile</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"XFINITY Standard TT\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(118,118,118)",
              flexShrink: 0,
            }}>Not in inventory billing</span>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(2,114,182)",
          flexShrink: 0,
        }}>Select</span>
      </div>
      <DividerLightMode style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
}

return { InventoryListOfDevicesAll };
})();

const { TitleBarIOS26 } = (() => {

// figma node: 45:15928 Title Bar
function TitleBarIOS26(_p = {}) {
  const props = { ..._p, time: _p.time ?? "7:30" };
  return (
    <div className={props.className} style={{
      width: 375,
      height: 114,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 21,
        minHeight: 21,
        maxWidth: null,
        maxHeight: 21,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={24.500} height={9.975} viewBox="0 0 24.500 9.975" fill="none" style={{
          position: "absolute",
          left: 326,
          top: 4,
          width: 24.5,
          height: 9.975,
          color: "var(--text-fill-neutral-primary)",
        }}>
          <path d={"M 21 0 C 21.828 0 22.5 0.672 22.5 1.5 L 22.5 8.475 C 22.5 9.303 21.828 9.975 21 9.975 L 1.5 9.975 C 0.672 9.975 0 9.303 0 8.475 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 21 0 Z M 1.5 0.525 C 0.948 0.525 0.5 0.973 0.5 1.525 L 0.5 8.45 C 0.5 9.002 0.948 9.45 1.5 9.45 L 21 9.45 C 21.552 9.45 22 9.002 22 8.45 L 22 1.525 C 22 0.973 21.552 0.525 21 0.525 L 1.5 0.525 Z M 21 1.05 C 21.276 1.05 21.5 1.274 21.5 1.55 L 21.5 8.425 C 21.5 8.701 21.276 8.925 21 8.925 L 1.5 8.925 C 1.224 8.925 1 8.701 1 8.425 L 1 1.55 C 1 1.274 1.224 1.05 1.5 1.05 L 21 1.05 Z M 23.5 3.15 C 24.052 3.15 24.5 3.598 24.5 4.15 L 24.5 5.825 C 24.5 6.377 24.052 6.825 23.5 6.825 L 23 6.825 L 23 3.15 L 23.5 3.15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={11.631} viewBox="0 0 16 11.631" fill="none" style={{
          position: "absolute",
          left: 302,
          top: 4,
          width: 16,
          height: 11.631,
          color: "var(--text-fill-neutral-primary)",
        }}>
          <path d={"M 7.984 7.714 C 9.049 7.714 10.002 8.2 10.64 8.967 L 8.027 11.631 L 5.366 8.924 C 6.003 8.182 6.94 7.714 7.984 7.714 Z M 7.984 3.856 C 10.094 3.856 11.994 4.771 13.321 6.23 L 11.981 7.598 C 10.998 6.485 9.571 5.785 7.984 5.785 C 6.417 5.785 5.005 6.469 4.023 7.559 L 2.682 6.193 C 4.008 4.755 5.893 3.857 7.984 3.856 Z M 7.984 0 C 11.139 0 13.985 1.343 16 3.498 L 14.661 4.864 C 12.99 3.057 10.616 1.929 7.984 1.929 C 5.37 1.929 3.01 3.042 1.341 4.829 L 0 3.466 C 2.013 1.33 4.846 0 7.984 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "absolute",
          left: 24,
          top: 0,
          width: 40,
          height: 16,
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.100px",
          color: "var(--text-fill-neutral-primary)",
        }}>{props.time}</span>
        <div style={{
          position: "absolute",
          left: 277,
          top: 3,
          width: 17,
          height: 12.6,
        }}>
          <div style={{
            position: "absolute",
            left: 0.5,
            top: 0,
            width: 17,
            height: 12.6,
          }}>
            <svg width={16.500} height={12.600} viewBox="0 0 16.500 12.600" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 16.5,
              height: 12.6,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 2.25 6.93 C 2.664 6.93 3 7.266 3 7.68 L 3 11.85 C 3 12.264 2.664 12.6 2.25 12.6 L 0.75 12.6 C 0.336 12.6 0 12.264 0 11.85 L 0 7.68 C 0 7.266 0.336 6.93 0.75 6.93 L 2.25 6.93 Z M 6.75 5.04 C 7.164 5.04 7.5 5.376 7.5 5.79 L 7.5 11.85 C 7.5 12.264 7.164 12.6 6.75 12.6 L 5.25 12.6 C 4.836 12.6 4.5 12.264 4.5 11.85 L 4.5 5.79 C 4.5 5.376 4.836 5.04 5.25 5.04 L 6.75 5.04 Z M 11.25 2.52 C 11.664 2.52 12 2.856 12 3.27 L 12 11.85 C 12 12.264 11.664 12.6 11.25 12.6 L 9.75 12.6 C 9.336 12.6 9 12.264 9 11.85 L 9 3.27 C 9 2.856 9.336 2.52 9.75 2.52 L 11.25 2.52 Z M 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 11.85 C 16.5 12.264 16.164 12.6 15.75 12.6 L 14.25 12.6 C 13.836 12.6 13.5 12.264 13.5 11.85 L 13.5 0.75 C 13.5 0.336 13.836 0 14.25 0 L 15.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 20,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "8px 8px 8px 8px",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 20,
                  height: 13,
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 12,
                    width: 20,
                    height: 1,
                    borderRadius: 1,
                    backgroundColor: "rgb(0,0,0)",
                    boxShadow: "none",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 6,
                    width: 20,
                    height: 1,
                    borderRadius: 1,
                    backgroundColor: "rgb(0,0,0)",
                    boxShadow: "none",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 20,
                    height: 1,
                    borderRadius: 1,
                    backgroundColor: "rgb(0,0,0)",
                    boxShadow: "none",
                  }} />
                </div>
              </div>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 19.297,
                  height: 20,
                  overflow: "hidden",
                }}>
                  <svg width={19.297} height={20} viewBox="0 0 19.297 20" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 19.297,
                    height: 20,
                    color: "rgb(0,0,0)",
                  }}>
                    <path d={"M 18.797 20 C 18.67 20 18.542 19.952 18.444 19.854 L 13.187 14.586 C 11.799 15.681 10.05 16.334 8.152 16.334 C 3.657 16.334 0 12.67 0 8.167 C 0 3.663 3.657 0 8.152 0 C 12.647 0 16.303 3.663 16.303 8.167 C 16.303 10.409 15.398 12.442 13.933 13.919 L 19.151 19.147 C 19.346 19.342 19.346 19.66 19.151 19.854 C 19.053 19.952 18.925 20 18.797 20 L 18.797 20 Z M 8.152 1 C 4.209 1 1 4.215 1 8.167 C 1 12.12 4.209 15.334 8.152 15.334 C 12.095 15.334 15.303 12.12 15.303 8.167 C 15.303 4.215 12.095 1 8.152 1 L 8.152 1 Z"} fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 20,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 20,
                backgroundColor: "var(--background-neutral-primary)",
                boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "8px 8px 8px 8px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2.716,
                    top: 2.336,
                    width: 20.4,
                    height: 20.41,
                    overflow: "hidden",
                  }}>
                    <svg width={19.200} height={17.980} viewBox="0 0 19.200 17.980" fill="none" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 19.2,
                      height: 17.98,
                      color: "rgb(0,0,0)",
                    }}>
                      <path d={"M 18.7 9.6 C 18.7 9.876 18.924 10.1 19.2 10.1 C 19.476 10.1 19.7 9.876 19.7 9.6 L 19.2 9.6 L 18.7 9.6 Z M 4.669 18.416 C 4.91 18.551 5.214 18.466 5.349 18.225 C 5.484 17.984 5.399 17.679 5.158 17.544 L 4.913 17.98 L 4.669 18.416 Z M 19.2 9.6 L 19.7 9.6 C 19.7 4.022 15.178 -0.5 9.6 -0.5 L 9.6 0 L 9.6 0.5 C 14.626 0.5 18.7 4.574 18.7 9.6 L 19.2 9.6 Z M 9.6 0 L 9.6 -0.5 C 4.022 -0.5 -0.5 4.022 -0.5 9.6 L 0 9.6 L 0.5 9.6 C 0.5 4.574 4.574 0.5 9.6 0.5 L 9.6 0 Z M 0 9.6 L -0.5 9.6 C -0.5 13.388 1.586 16.688 4.669 18.416 L 4.913 17.98 L 5.158 17.544 C 2.377 15.986 0.5 13.012 0.5 9.6 L 0 9.6 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <div style={{
                      position: "absolute",
                      left: 4.263,
                      top: 4.254,
                      width: 16.137,
                      height: 16.156,
                      overflow: "hidden",
                    }}>
                      <svg width={16.137} height={16.156} viewBox="0 0 16.137 16.156" fill="none" style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 16.137,
                        height: 16.156,
                        color: "rgb(0,0,0)",
                      }}>
                        <path d={"M 6.089 9.659 L 10.876 14.459 C 11.858 15.442 13.456 15.442 14.439 14.463 C 15.422 13.483 15.424 11.884 14.443 10.901 L 9.658 6.102 L 9.685 5.871 C 9.848 4.524 9.395 3.204 8.442 2.249 C 7.343 1.145 5.777 0.722 4.3 1.09 L 6.701 3.498 C 7.127 3.925 7.361 4.494 7.36 5.099 C 7.359 5.704 7.123 6.272 6.696 6.699 C 5.811 7.581 4.375 7.578 3.493 6.694 L 1.092 4.288 C 0.722 5.763 1.14 7.33 2.241 8.434 C 3.194 9.389 4.511 9.844 5.858 9.686 L 6.089 9.659 Z M 10.196 15.137 L 5.734 10.662 C 4.174 10.779 2.668 10.221 1.561 9.112 C 0.006 7.552 -0.431 5.236 0.448 3.213 L 0.73 2.565 L 4.173 6.017 C 4.68 6.525 5.508 6.526 6.018 6.019 C 6.264 5.773 6.4 5.445 6.4 5.098 C 6.401 4.749 6.267 4.421 6.021 4.175 L 2.577 0.722 L 3.226 0.443 C 5.253 -0.432 7.568 0.012 9.123 1.571 C 10.229 2.68 10.782 4.192 10.662 5.75 L 15.124 10.223 C 16.477 11.582 16.474 13.789 15.117 15.142 C 14.438 15.819 13.549 16.156 12.66 16.156 C 11.767 16.156 10.874 15.816 10.196 15.137 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                      <svg width={2.627} height={2.627} viewBox="0 0 2.627 2.627" fill="none" style={{
                        position: "absolute",
                        left: 11.348,
                        top: 11.369,
                        width: 2.627,
                        height: 2.627,
                        color: "rgb(0,0,0)",
                      }}>
                        <path d={"M 1.313 0 C 0.588 0 0.001 0.587 0 1.311 C -0.001 2.036 0.587 2.626 1.311 2.627 L 1.313 2.627 C 2.038 2.627 2.626 2.039 2.627 1.315 C 2.628 0.589 2.04 0.001 1.315 0 L 1.313 0 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 20,
                backgroundColor: "var(--background-neutral-primary)",
                boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "8px 8px 8px 8px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <HeaderIcon
                  style={{
                    "--theme": "rgb(0,0,0)",
                    position: "relative",
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    color: "rgb(0,0,0)",
                  }}
                  icon={"contextual menu"}
                  color={"theme"}
                />
              </div>
            </div>
          </div>
          {props.title ? (
            <div style={{
              position: "absolute",
              left: 105,
              top: 0,
              width: 140,
              height: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <span style={{ position: "relative", fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 16, textAlign: "center", whiteSpace: "nowrap", lineHeight: "24px", color: "var(--text-fill-neutral-primary)", flexShrink: 0 }}>{props.title}</span>
              {props.subtitle ? <span style={{ position: "relative", fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 12, textAlign: "center", whiteSpace: "nowrap", lineHeight: "16px", color: "var(--text-fill-neutral-primary)", flexShrink: 0 }}>{props.subtitle}</span> : null}
            </div>
          ) : (
            <div role="img" aria-label="Tech360" className="t360-logo-full" style={{
              position: "absolute",
              left: 119,
              top: 4,
              width: 112,
              height: 32,
            }} />
          )}
        </div>
      </div>
    </div>
  );
}

return { TitleBarIOS26 };
})();

const { Footer } = (() => {

// figma node: 45:14853 Footer (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selectedButton=" + __venc(p.selectedButton) + '|' + "iOS=" + __venc(p.iOS);

function Footer(_p = {}) {
  const props = { ..._p, selectedButton: _p.selectedButton ?? "home", iOS: _p.iOS ?? "< ios 26" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 375,
      minHeight: 72,
      maxWidth: null,
      maxHeight: 72,
      backgroundColor: "rgb(23,23,23)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "4px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 600,
        maxHeight: null,
        display: "flex",
        flexDirection: "row",
        padding: "0px 17px 0px 17px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <FooterItem state={"selected"} version={"all"} />}</div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 135,
        height: 4,
        borderRadius: 999,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 375,
      minHeight: 72,
      maxWidth: null,
      maxHeight: 72,
      backgroundColor: "rgb(23,23,23)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "4px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 600,
        maxHeight: null,
        display: "flex",
        flexDirection: "row",
        padding: "0px 17px 0px 17px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <FooterItem text1={"Home"} state={"default"} version={"< ios 26"} />}</div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconSearchModeSelected" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 135,
        height: 4,
        borderRadius: 999,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 375,
      minHeight: 72,
      maxWidth: null,
      maxHeight: 72,
      backgroundColor: "rgb(23,23,23)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "4px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 600,
        maxHeight: null,
        display: "flex",
        flexDirection: "row",
        padding: "0px 17px 0px 17px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <FooterItem text1={"Home"} state={"default"} version={"< ios 26"} />}</div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconJobModeSelected" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 135,
        height: 4,
        borderRadius: 999,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 78,
      backgroundColor: "rgb(242,242,242)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 340,
        height: 60,
        maxWidth: 600,
        maxHeight: null,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 14,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0.5,
              top: 0,
              width: 24,
              height: 24,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                opacity: 0.247,
              }} />
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 1.5,
                top: 2.399,
                width: 21,
                height: 18.601,
                color: "var(--text-fill-neutral-primary)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "absolute",
          left: 80,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "absolute",
          left: 136,
          top: 4,
          width: 66,
          overflow: "hidden",
          borderRadius: 25,
          backgroundColor: "rgb(234,234,236)",
          display: "flex",
          flexDirection: "column",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconJobModeSelected" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--theme)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "absolute",
          left: 216,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "absolute",
          left: 282,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 78,
      backgroundColor: "rgb(242,242,242)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 340,
        height: 60,
        maxWidth: 600,
        maxHeight: null,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 14,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0.5,
              top: 0,
              width: 24,
              height: 24,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                opacity: 0.247,
              }} />
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 1.5,
                top: 2.399,
                width: 21,
                height: 18.601,
                color: "var(--text-fill-neutral-primary)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "absolute",
          left: 80,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "absolute",
          left: 148,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "absolute",
          left: 208,
          top: 4,
          width: 66,
          overflow: "hidden",
          borderRadius: 25,
          backgroundColor: "rgb(234,234,236)",
          display: "flex",
          flexDirection: "column",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconInventoryModeSelected" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--theme)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "absolute",
          left: 282,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 78,
      backgroundColor: "rgb(242,242,242)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 340,
        height: 60,
        maxWidth: 600,
        maxHeight: null,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 14.5,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0.5,
              top: 0,
              width: 24,
              height: 24,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                opacity: 0.247,
              }} />
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 1.5,
                top: 2.399,
                width: 21,
                height: 18.601,
                color: "var(--text-fill-neutral-primary)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "absolute",
          left: 80.5,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "absolute",
          left: 148,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "absolute",
          left: 215.5,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "absolute",
          left: 270,
          top: 4,
          width: 66,
          overflow: "hidden",
          borderRadius: 25,
          backgroundColor: "rgb(234,234,236)",
          display: "flex",
          flexDirection: "column",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconTaskingModeSelected" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--theme)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 78,
      backgroundColor: "rgb(242,242,242)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 340,
        height: 60,
        maxWidth: 600,
        maxHeight: null,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 14,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0.5,
              top: 0,
              width: 24,
              height: 24,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                opacity: 0.247,
              }} />
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 1.5,
                top: 2.399,
                width: 21,
                height: 18.601,
                color: "var(--text-fill-neutral-primary)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "absolute",
          left: 68,
          top: 4,
          width: 66,
          overflow: "hidden",
          borderRadius: 25,
          backgroundColor: "rgb(234,234,236)",
          display: "flex",
          flexDirection: "column",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconSearchModeSelected" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--theme)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "absolute",
          left: 148,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "absolute",
          left: 216,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "absolute",
          left: 282,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 78,
      backgroundColor: "rgb(242,242,242)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 340,
        height: 60,
        maxWidth: 600,
        maxHeight: null,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 66,
          overflow: "hidden",
          borderRadius: 25,
          backgroundColor: "rgb(234,234,236)",
          display: "flex",
          flexDirection: "column",
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            backgroundColor: "rgb(234,234,236)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 2.399,
              width: 21,
              height: 18.601,
              overflow: "hidden",
            }}>
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 21,
                height: 18.601,
                color: "rgb(43,156,216)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 L 21 6.601 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--theme)",
            flexShrink: 0,
          }}>Home</span>
        </div>
        <div style={{
          position: "absolute",
          left: 80.5,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "absolute",
          left: 148,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "absolute",
          left: 215.5,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "absolute",
          left: 282,
          top: 8,
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "var(--text-fill-neutral-primary)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "var(--text-fill-neutral-primary)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 375,
      minHeight: 72,
      maxWidth: null,
      maxHeight: 72,
      backgroundColor: "rgb(23,23,23)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "4px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 600,
        maxHeight: null,
        display: "flex",
        flexDirection: "row",
        padding: "0px 17px 0px 17px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 2.399,
              width: 21,
              height: 18.601,
              overflow: "hidden",
            }}>
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 21,
                height: 18.601,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconInventoryModeSelected" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconTaskingModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 135,
        height: 4,
        borderRadius: 999,
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 375,
      minHeight: 72,
      maxWidth: null,
      maxHeight: 72,
      backgroundColor: "rgb(23,23,23)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "4px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 600,
        maxHeight: null,
        display: "flex",
        flexDirection: "row",
        padding: "0px 17px 0px 17px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 2.399,
              width: 21,
              height: 18.601,
              overflow: "hidden",
            }}>
              <svg width={21} height={18.601} viewBox="0 0 21 18.601" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 21,
                height: 18.601,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 21 6.601 L 10.5 0 L 0 6.601 L 0 7.801 L 2 7.801 L 2 18.601 L 9 18.601 L 9 11.601 L 12 11.601 L 12 18.601 L 19 18.601 L 19 7.801 L 21 7.801 L 21 6.601 Z M 13 17.601 L 13 10.601 L 8 10.601 L 8 17.601 L 3 17.601 L 3 5.916 L 10.5 1.202 L 18 5.916 L 18 17.601 L 13 17.601 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Home</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconSearchModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Search</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconJobModeDefault" size={24} style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Job</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconInventoryModeDefault" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(255,255,255)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Inventory</span>
        </div>
        <div style={{
          position: "relative",
          width: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4px 8px 4px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Icon name="FooterIconIconTaskingModeSelected" size={24} style={{ position: "relative", flexShrink: 0, overflow: "visible", color: "rgb(43,156,216)" }} />
          <span style={{
            position: "relative",
            fontFamily: "\"DM Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Tasking</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 135,
        height: 4,
        borderRadius: 999,
        backgroundColor: "var(--background-neutral-primary)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __impls = {
    // figma: Selected Button=Home, iOS=< iOS 26
    "selectedButton=home|iOS=< ios 26": __body0,
    // figma: Selected Button=Search, iOS=< iOS 26
    "selectedButton=search|iOS=< ios 26": __body1,
    // figma: Selected Button=Job, iOS=< iOS 26
    "selectedButton=job|iOS=< ios 26": __body2,
    // figma: Selected Button=Job, iOS=iOS 26
    "selectedButton=job|iOS=ios 26": __body3,
    // figma: Selected Button=Inventory, iOS=iOS 26
    "selectedButton=inventory|iOS=ios 26": __body4,
    // figma: Selected Button=Tasking, iOS=iOS 26
    "selectedButton=tasking|iOS=ios 26": __body5,
    // figma: Selected Button=Search, iOS=iOS 26
    "selectedButton=search|iOS=ios 26": __body6,
    // figma: Selected Button=Home, iOS=iOS 26
    "selectedButton=home|iOS=ios 26": __body7,
    // figma: Selected Button=Inventory, iOS=< iOS 26
    "selectedButton=inventory|iOS=< ios 26": __body8,
    // figma: Selected Button=Tasking, iOS=< iOS 26
    "selectedButton=tasking|iOS=< ios 26": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

return { Footer };
})();

window.T360Kit = { DividerLightMode, DeviceImagesJobDetailsHigh, HeaderIcon, FooterIcon, FooterItem, IconsSearchBarcode, IconsCustomerCardRefresh, InventoryListOfDevicesHeader, InventoryListOfDevicesAll, TitleBarIOS26, Footer };
