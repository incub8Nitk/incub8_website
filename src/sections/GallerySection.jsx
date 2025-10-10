import CircularGallery from "../components/CircularGallery";

export default function GallerySection() {
  const items = [
    { image: "/Gallery/DSC03049.jpg",  },
    { image: "/Gallery/Incub8_Main.jpg" },
    { image: "/Gallery/opening.jpg"},
    { image: "/Gallery/speakers.jpg"},
    { image: "/Gallery/audience.jpg" },
    { image: "/Gallery/iplAuction.jpg" },
    { image: "/Gallery/striver_1.jpg" },
    { image: "/Gallery/striver_2.jpg" },
    { image: "/Gallery/grover.jpg" },
    { image: "/Gallery/grover_2.jpg" },
    { image: "/Gallery/Nova_1.jpg" },
    { image: "/Gallery/Nova_2.jpg" },
    { image: "/Gallery/speakers.jpg" },
  ];

  return (
    <section className="w-full">
      <div className="h-64 sm:h-80 md:h-96 lg:h-[450px] relative">
        <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} items={items} />
      </div>
    </section>
  );
}


