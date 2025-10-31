"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-4/3 relative w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
              alt="บรรยากาศร้านอาหาร"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              เรื่องราวของเรา
            </h2>
            <div className="space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                เริ่มต้นจากความรักในอาหารไทยแท้ของครอบครัวเรา
                ร้านอาหารไทยแท้เปิดให้บริการมายาวนานกว่า 20 ปี
                ด้วยปรัชญาที่เรียบง่าย: &ldquo;อาหารที่ดีต้องเริ่มจากวัตถุดิบที่ดี&rdquo;
              </p>
              <p>
                เราเลือกสรรวัตถุดิบด้วยตนเองทุกวัน จากแหล่งผลิตที่เชื่อถือได้
                ผักสดจากท้องตลาด เครื่องเทศที่บดสดใหม่ทุกเช้า
                และเนื้อสัตว์คุณภาพพรีเมียม ทุกจานปรุงด้วยสูตรลับเฉพาะ
                ที่สืบทอดกันมาหลายชั่วอายุคน ผ่านการปรับแต่งให้เข้ากับยุคสมัย
                แต่ยังคงรักษาเอกลักษณ์และรสชาติแบบไทยแท้ไว้
              </p>
              <p>
                เชฟของเราผ่านการฝึกฝนและมีประสบการณ์มาหลายปี
                ทุกจานถูกปรุงด้วยใจและความใส่ใจในรายละเอียด
                เพราะเราเชื่อว่าอาหารไม่ใช่แค่การเติมท้อง
                แต่เป็นการสร้างประสบการณ์ที่ทำให้คุณรู้สึกอบอุ่นและเป็นสุข
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
