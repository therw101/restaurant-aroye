export function RestaurantStructuredData() {
  // Static data - no need to recreate on every render
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "AROYÉ",
    description:
      "AROYÉ ร้านอาหารไทยแท้ที่เสิร์ฟอาหารอร่อย วัตถุดิบสดใหม่ทุกวัน พร้อมบริการที่เป็นมิตร",
    image: "https://restaurant.example.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 ถนนสุขุมวิท",
      addressLocality: "กรุงเทพมหานคร",
      postalCode: "10110",
      addressCountry: "TH",
    },
    telephone: "+6621234567",
    email: "info@restaurant.com",
    servesCuisine: "Thai",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    menu: "https://restaurant.example.com/menu",
    acceptsReservations: "True",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
