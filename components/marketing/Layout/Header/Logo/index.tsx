import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "300px", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
