// src/index.ts
function track(props) {
  if (typeof window === "undefined") {
    return;
  }
  let beacon = {
    before: (props == null ? void 0 : props.before) ? props.before : (event) => event
  };
  window.beacon = beacon;
  if (window.beacon.before({ pathname: window.location.pathname })) {
    return;
  }
  const scriptSrc = "https://withbeacon.vercel.app/track.js";
  if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
    return;
  }
  const script = document.createElement("script");
  script.src = "https://withbeacon.vercel.app/track.js";
  script.defer = true;
  document.head.appendChild(script);
}
export {
  track
};
//# sourceMappingURL=index.mjs.map