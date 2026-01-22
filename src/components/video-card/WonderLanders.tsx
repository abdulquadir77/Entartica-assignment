import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const wonderLandersMedia = [
  {
    id: 1,
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Chillcitynaveen_d8ce9bea2c.mp4",
  },
  {
    id: 2,
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Dyna_Das_94ea2f3ec9.mp4",
  },
  {
    id: 3,
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Mehaboobvlogs_86f6748925.mp4",
  },
  {
    id: 4,
    video:
      "https://d22pimhl2qmbj7.cloudfront.net/public/Traveller_Dinesh_c5249a05a1.mp4",
  },
];

const WonderLanders = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    currentVideo.play();
    setActiveIndex(index);
  };
  return (
    <div className="p-7">
      <div className="flex flex-col items-center text-center p-4">
        <h1
          className="
          font-mulish
          text-[40px]
          font-black
          uppercase
          leading-[1]
          tracking-[-0.04em]
          text-textColor
          sm:text-[44px]
          md:text-[50px]
          lg:text-[56px]
          xl:text-6xl
        "
        >
          Hear from Wonderlanders!
        </h1>

        <p
          className="
          mt-1.5
          inline-block
          font-mulish
          text-sm
          font-medium
          leading-[1.255]
          md:mt-2
          lg:text-base
          text-gray-700
        "
        >
          Get all the inside scoop from loyal-thrill seekers who are spilling
          the tea.
        </p>
      </div>

      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-4
    -mx-[15px]   
    sm:mx-0        
  "
      >
        {wonderLandersMedia.map((item, index) => (
          <div
            key={item.id}
            className="
    relative
    w-full
    h-[420px]  
    md:h-[620px]        
    sm:h-[360px]    
    lg:h-[420px]    
    rounded-[20px]
    overflow-hidden
    bg-black
  "
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={item.video}
              className="h-full w-full object-cover"
              playsInline
              preload="metadata"
            />

            {activeIndex !== index && (
              <button
                onClick={() => handlePlay(index)}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
                aria-label="Play video"
              >
                <div className="h-12 w-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                  <FaPlay className="text-[#334DCF] ml-1" size={18} />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WonderLanders;
