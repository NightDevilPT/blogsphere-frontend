import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/dark.png";
import shortHeaderLogo from "../../assets/small-dark.png";

interface IProps {
	change: boolean;
}

const HeaderLogo = () => {
	const [logoSrc, setLogoSrc] = useState<StaticImageData>(headerLogo);

	useEffect(() => {
		const handleResize = () => {
		  const newLogoSrc = window.innerWidth <= 648 ? shortHeaderLogo : headerLogo;
		  setLogoSrc(newLogoSrc);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, []);

	return (
		<div className={`w-32 max-sm:w-8 h-14 max-sm:h-8 flex justify-center items-center`}>
			<Image src={logoSrc} alt="headerLogo" />
		</div>
	);
};

export default HeaderLogo;
