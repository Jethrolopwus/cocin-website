import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#2563EB] font-semibold text-xs tracking-widest uppercase mb-3 block">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Life at COCIN
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Moments of worship, fellowship, and service from our communities
            across Nigeria and beyond.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Row 1 — Large image spanning 2 cols */}
          <div
            className="col-span-2 row-span-1 relative overflow-hidden"
            style={{ borderRadius: 18, height: 515 }}
          >
            <Image
              src="/gallery3.png"
              alt="Worship at COCIN"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 687px"
            />
          </div>

          {/* Row 1 — Right smaller image */}
          <div
            className="col-span-1 row-span-1 relative overflow-hidden bg-[#EDE8DF]"
            style={{ borderRadius: 18, height: 515 }}
          >
            <Image
              src="/sermon3.png"
              alt="COCIN Conference Hall"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 337px"
            />
          </div>

          {/* Row 2 — Three images */}
          <div
            className="col-span-1 row-span-1 relative overflow-hidden"
            style={{ borderRadius: 18, height: 337 }}
          >
            <Image
              src="/Container.png"
              alt="Music & Worship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 337px"
            />
          </div>

          <div
            className="col-span-1 row-span-1 relative overflow-hidden"
            style={{ borderRadius: 18, height: 337 }}
          >
            <Image
              src="/gallery4.png"
              alt="Community Fellowship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 337px"
            />
          </div>

          <div
            className="col-span-1 row-span-1 relative overflow-hidden"
            style={{ borderRadius: 18, height: 337 }}
          >
            <Image
              src="/gallery1.png"
              alt="COCIN Building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 337px"
            />
          </div>

          {/* Row 3 — Single image bottom left */}
          <div
            className="col-span-1 row-span-1 relative overflow-hidden"
            style={{ borderRadius: 18, height: 337 }}
          >
            <Image
              src="/gallery2.png"
              alt="COCIN Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 337px"
            />
          </div>
        </div>

        {/* View full gallery link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="text-[#2563EB] hover:text-[#1d4ed8] font-medium text-sm transition-colors"
          >
            View full gallery ›
          </a>
        </div>
      </div>
    </section>
  );
}
