import { Icon } from "./Icon";

export function PhotoFrame({ label, src, credit, tall = false, dark = false }: { label: string; src?: string; credit?: string; tall?: boolean; dark?: boolean }) {
  return (
    <figure className={`photo-frame ${tall ? "photo-frame--tall" : ""} ${dark ? "photo-frame--dark" : ""}`} role="img" aria-label={`Documentary photography placeholder: ${label}`}>
      {src ? <img src={src} alt={label} loading="lazy" /> : <div className="photo-frame__mark"><Icon name="heart" size={28} /></div>}
      <figcaption><span>{label}</span>{credit && <small>{credit}</small>}</figcaption>
    </figure>
  );
}
