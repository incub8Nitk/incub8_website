import CircularGallery from "../components/CircularGallery";

export default function GallerySection() {
  const items = [
    { image: "/Gallery/DSC03049.JPG",  },
    { image: "/Gallery/Incub8_Main.JPG" },
    { image: "/Gallery/opening.JPG"},
    { image: "/Gallery/speakers.JPG"},
    { image: "/Gallery/audience.JPG" },
    { image: "/Gallery/iplAuction.JPG" },
    { image: "/Gallery/striver_1.JPG" },
    { image: "/Gallery/striver_2.JPG" },
    { image: "/Gallery/grover.JPG" },
    { image: "/Gallery/grover_2.JPG" },
    { image: "/Gallery/Nova_1.JPG" },
    { image: "/Gallery/Nova_2.JPG" },
    { image: "/Gallery/speakers.JPG" },
  ];

  return (
    <section style={{ width: "100%"}}>
      <div style={{ height: "450px", position: "relative" }}>
        <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} items={items} />
      </div>
    </section>
  );
}


