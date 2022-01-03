export const Details = ({ title, className = '', isOpen = false, children }) =>
  isOpen ? (
    <details className={className} open>
      <summary className="text-slate-800 font-bold">{title}</summary>
      <div className="details-content">{children}</div>
    </details>
  ) : (
    <details className={className}>
      <summary className="text-slate-800 font-bold">{title}</summary>
      <div className="details-content">{children}</div>
    </details>
  );
