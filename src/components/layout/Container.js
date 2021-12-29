const Container = ({ children, className = '' }) => (
  <div className={className}>
    <section className="py-10 md:py-20 max-w-5xl px-4 sm:px-8 lg:px-0 mx-auto">
      {children}
    </section>
  </div>
);

export default Container;
