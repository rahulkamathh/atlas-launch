import { AtlasLogo } from "@/components/ui/AtlasLogo";

export function Footer() {
  return (
    <footer className="border-t border-atlas-border bg-white">
      <div className="container-atlas py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <AtlasLogo iconSize={22} showWordmark={true} />
          <span className="text-atlas-muted text-sm">© 2025</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-atlas-muted">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" className="hover:text-atlas-charcoal transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-xs text-atlas-muted text-center md:text-right max-w-xs">
          SEBI-compliant execution infrastructure. Capital stays in your account.
        </p>
      </div>
    </footer>
  );
}
