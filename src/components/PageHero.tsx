import Link from "next/link";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-4 text-sm text-white/60">
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        {description && (
          <p className="mt-3 text-lg text-white/80 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
