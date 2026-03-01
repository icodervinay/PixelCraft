const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png"
];

const TrustLogos = () => {
  return (
    <div className="py-12 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {logos.map((src, idx) => (
          <img key={idx} src={src} alt="Client logo" className="max-h-12 mx-auto" />
        ))}
      </div>
    </div>
  );
};

export default TrustLogos;