export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="px-4 z-10">
        <div className="text-left max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-2xl opacity-80">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
