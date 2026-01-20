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
      <div>
        <h2>Hear from Wonderlanders!</h2>
        <h4>
          Get all the inside scoop from loyal-thrill seekers who are spilling
          the tea.
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {wonderLandersMedia.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black"
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={item.video}
              className="w-full h-full object-cover"
              playsInline
            />

            {/* ✅ Play button ONLY hidden for active video */}
            {activeIndex !== index && (
              <button
                onClick={() => handlePlay(index)}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <FaPlay className="text-blue-600 ml-1" size={20} />
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
