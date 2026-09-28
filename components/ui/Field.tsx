export function Field({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="field"><span>{label}{required && " *"}</span><input type={type} placeholder={placeholder} required={required} /></label>;
}
