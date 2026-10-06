export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-paper px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            Gunturu Harish Varma
          </p>
          <p className="text-sm text-muted">Video Editor &amp; VFX Artist</p>
        </div>
        <div className="flex flex-col items-start gap-1 text-sm text-muted sm:items-end">
          <a
            href="mailto:harishvarmagunturu@gmail.com"
            data-cursor="hover"
            className="transition-colors hover:text-ink"
          >
            harishvarmagunturu@gmail.com
          </a>
          <p>© {year} — Crafted frame by frame.</p>
        </div>
      </div>
    </footer>
  );
}
