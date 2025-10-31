"use client"

export function FeaturesSection({ features }) {
  return (
    <section className="px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            ความแตกต่างที่คุณสัมผัสได้ตั้งแต่คำแรก
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={`feature-${feature.title}-${index}`}
              className="text-center space-y-4"
            >
              <h3 className="text-xl font-normal tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
