"use client"

import Image from "next/image"

export function GallerySection({ menuItems }) {
  return (
    <section
      id="gallery"
      className="px-6 py-32 sm:px-8 lg:px-12"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2
            id="gallery-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            แกลเลอรี่เมนู
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            สำรวจเมนูหลากหลายของเรา ทุกจานปรุงด้วยความใส่ใจ
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {menuItems.map((item, index) => (
            <div
              key={`gallery-${item.name}-${index}`}
              className="group relative aspect-square overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-base font-medium mb-1">{item.name}</h3>
                    <p className="text-sm font-light">{item.price}</p>
                  </div>
                  {item.spicy && (
                    <span className="text-xs px-2 py-1 bg-destructive/40 backdrop-blur-sm rounded text-destructive-foreground">
                      เผ็ด
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
