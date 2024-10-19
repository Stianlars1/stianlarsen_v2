import Image from "next/image";

export const Navbar = () => {
  return (
    <div>
      <Image
        src="/stian/STIAN-BITMOJI.png"
        alt="Logo"
        width={50}
        height={50}
        priority
        fetchPriority="high"
        quality={100}
      />
      <nav></nav>
    </div>
  );
};
