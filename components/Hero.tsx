import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-[84px] overflow-hidden bg-cream px-6 pt-16 pb-20 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 md:px-14 md:pt-20 md:pb-[110px]"
    >
      <div className="pointer-events-none absolute -top-[60px] -right-[60px] h-[260px] w-[260px] rounded-full bg-yellow/35" />
      <div className="pointer-events-none absolute bottom-[20px] left-[40%] h-[90px] w-[90px] rounded-full bg-teal/25" />

      <div className="relative z-10">
        <span className="mb-[22px] inline-block rounded-full bg-teal px-4 py-1.5 text-[13px] font-extrabold tracking-[0.05em] text-cream uppercase">
          London, Ontario &amp; Area
        </span>
        <h1 className="mb-[22px] max-w-[560px] font-display text-[38px] leading-[1.1] font-bold text-charcoal md:text-[56px] md:leading-[1.06]">
          Bringing Magic &amp; Color to Your Event with Crafty Q Facepainting
        </h1>
        <p className="mb-[34px] max-w-[520px] text-[19px] leading-[1.6] text-body-warm">
          Hand-painted smiles for birthday parties, festivals, and corporate
          events — safe, vibrant, and unforgettable.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-pink px-[38px] py-[18px] text-lg font-bold text-cream shadow-[0_6px_0_#B7304F]"
        >
          Book Your Event
        </a>
      </div>

      <div className="relative z-10 mt-12 flex justify-center md:mt-0">
        <div className="relative aspect-[520/480] w-full max-w-[520px] overflow-hidden rounded-[26px] border-[6px] border-cream shadow-[0_16px_40px_rgba(43,35,32,0.18)]">
          <Image
            src="/facepaint1.jpg"
            alt="Happy child with heart and butterfly face paint"
            fill
            priority
            sizes="(min-width: 768px) 520px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
