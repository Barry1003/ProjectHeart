"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { Icon } from "../ui/Icon";
import { T } from "../LanguageProvider";

const PHCS = [
  {
    id: "igando",
    name: "Igando General Hospital PHC Unit",
    nameYo: "Ile-iwosan Igando PHC Unit",
    address: "Igando Road, Ikotun-Igando, Lagos State",
    addressYo: "Igando Road, Ikotun-Igando, Lagos State",
    phone: "+234 809 000 0002",
    hours: "Mon-Sat: 8am–6pm",
    lat: 6.5492,
    lon: 3.2435,
  },
  {
    id: "iba",
    name: "Iba Primary Health Centre",
    nameYo: "Ile-iwosan Iba",
    address: "Iba LCDA Secretariat, Iba Town, Lagos State",
    addressYo: "Iba LCDA Secretariat, Iba Town, Lagos State",
    phone: "+234 809 000 0003",
    hours: "Mon-Sat: 8am–6pm",
    lat: 6.4862,
    lon: 3.2057,
  },
  {
    id: "ajangbadi",
    name: "Ajangbadi Primary Health Centre",
    nameYo: "Ile-iwosan Ajangbadi",
    address: "Ajangbadi, Lagos State",
    addressYo: "Ajangbadi, Lagos State",
    phone: "+234 809 000 0004",
    hours: "Mon-Sat: 8am–6pm",
    lat: 6.4638,
    lon: 3.1678,
  }
];

export function PhcMap() {
  const [selectedId, setSelectedId] = useState(PHCS[0].id);
  const selectedPhc = PHCS.find(p => p.id === selectedId)!;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedPhc.lon - 0.01}%2C${selectedPhc.lat - 0.01}%2C${selectedPhc.lon + 0.01}%2C${selectedPhc.lat + 0.01}&layer=mapnik&marker=${selectedPhc.lat}%2C${selectedPhc.lon}`;
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedPhc.lat},${selectedPhc.lon}`;

  return (
    <section className="section phc-map-section" id="find-phc">
      <div className="container">
        <div className="phc-map-grid">
          <div className="phc-map-content">
            <Reveal>
              <span className="eyebrow flex items-center gap-2">
                <Icon name="heart" size={14} className="text-[var(--red)]" /> 
                <T en="FIND CARE NEAR YOU" yo="WA ITỌJU TI O SUNMỌ Ọ" />
              </span>
              <h2 className="mt-2 mb-4 font-bold tracking-tight font-heading text-[clamp(2.4rem,4vw,3.2rem)]">
                <T en="PHC Centres in Iba LCDA" yo="Awọn Ile-iwosan PHC ni Iba LCDA" />
              </h2>
              <p className="text-muted text-lg mb-8">
                <T en="Select a health centre to see its address and get directions." yo="Yan ile-iwosan kan lati ri adirẹsi rẹ ki o le gba itọnisọna." />
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="phc-select-wrapper mb-6">
                <label className="phc-select-label">
                  <T en="CHOOSE A HEALTH CENTRE" yo="YAN ILE-IWOSAN KAN" />
                </label>
                <div className="phc-select-input">
                  <select 
                    value={selectedId} 
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="phc-select"
                  >
                    {PHCS.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <div className="phc-select-arrow-wrapper">
                    <Icon name="arrow" size={16} className="phc-select-arrow" />
                  </div>
                </div>
              </div>

              <div className="phc-details-card">
                <div className="phc-details-header">
                  <div className="phc-details-icon">
                    <Icon name="map" size={20} />
                  </div>
                  <div>
                    <h3>{selectedPhc.name}</h3>
                    <p>{selectedPhc.address}</p>
                  </div>
                </div>
                
                <div className="phc-details-meta">
                  <span className="meta-item">
                    <Icon name="clock" size={16} /> {selectedPhc.hours}
                  </span>
                  <span className="meta-item meta-phone">
                    <Icon name="phone" size={16} /> {selectedPhc.phone}
                  </span>
                </div>

                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="button button--secondary phc-directions-btn">
                  <Icon name="map" size={16} />
                  <T en="Get Directions" yo="Gba Itọnisọna" />
                </a>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} className="phc-map-visual">
            <div className="phc-map-embed">
              <iframe 
                src={mapUrl}
                width="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="PHC Map"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
