// import { AnalyticsProps, SendEvent } from "./types";

// export function track(props?: AnalyticsProps | undefined): void | undefined {
//   if (typeof window === "undefined") {
//     return;
//   }

//   let beacon = {
//     before: (props?.before ? props.before : (event) => event) as SendEvent,
//   };

//   window.beacon = beacon;

//   if (window.beacon.before({ pathname: window.location.pathname })) {
//     return;
//   }

//   const scriptSrc = "https://withbeacon.vercel.app/track.js";

//   if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
//     return;
//   }

//   const script = document.createElement("script");
//   script.src = "https://withbeacon.vercel.app/track.js";
//   script.defer = true;

//   document.head.appendChild(script);
// }

// export * from "./types";


import { SendEvent, AnalyticsProps } from "./types";

export function track(props?: AnalyticsProps | undefined): void | undefined {
  if (typeof window === "undefined") {
    return;
  }

  const beacon: { before: SendEvent } = {
    before: props && props.before ? props.before : ((event) => event),
  };


  window.beacon = beacon;

  if (window.beacon && window.beacon.before && window.beacon.before({ pathname: window.location.pathname })) {
    return;
  }

  const scriptSrc = "https://withbeacon.vercel.app/track.js";

  if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.src = scriptSrc;
  script.defer = true;

  document.head.appendChild(script);
}

export * from "./types";
