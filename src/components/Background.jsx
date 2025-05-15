import { useEffect, useState } from "react";
import { PiLegoLight, PiLegoSmiley } from "react-icons/pi";

export const Background = () => {
  const [legos, setlegos] = useState([]);
  const icons = [PiLegoSmiley, PiLegoLight];

  useEffect(() => {
    generatelegos();

    const handleResize = () => {
      generatelegos();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatelegos = () => {
    const numberOflegos = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newlegos = [];

    for (let i = 0; i < numberOflegos; i++) {
      newlegos.push({
        id: i,
        size: Math.random() * 70 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: Math.random() * 4 + 2,
        Icon: icons[Math.floor(Math.random() * icons.length)],
      });
    }

    setlegos(newlegos);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {legos.map((lego) => (
        <div
          key={lego.id}
          className="absolute animate-float"
          style={{
            width: `${lego.size}px`,
            height: `${lego.size}px`,
            left: `${lego.x}%`,
            top: `${lego.y}%`,
            opacity: .2,
            animationDuration: `${lego.animationDuration}s`,
          }}
        >
          <lego.Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};