interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)]">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 text-[var(--color-text-light)]">{subtitle}</p>
      )}
      <div
        className={`mt-3 h-1 w-16 bg-[var(--color-accent)] rounded-full ${center ? "mx-auto" : ""}`}
      />
    </div>
  );
}
