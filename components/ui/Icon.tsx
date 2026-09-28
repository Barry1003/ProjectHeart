import { ReactNode } from "react";

export type IconName =
  | "heart"
  | "menu"
  | "close"
  | "arrow"
  | "education"
  | "assessment"
  | "referral"
  | "tracking"
  | "check"
  | "phone"
  | "map"
  | "clock";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        <path d="M5.5 12h3l1.3-3 2.3 6 1.6-3H18" />
      </>
    ),
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    education: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" /><path d="M8 8h8M8 12h6" /></>,
    assessment: <><path d="M4 12h3l2-5 4 10 2.2-5H20" /><path d="M20 6V4h-2M4 18v2h2" /></>,
    referral: <><path d="M14 3h7v7M21 3l-9 9" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    tracking: <><circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2M12 2v2M12 20v2" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    phone: <><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M10 17h4" /></>,
    map: <><path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" /><circle cx="12" cy="9" r="2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };
  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
