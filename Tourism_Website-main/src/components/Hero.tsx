import { MapPin, Plane } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-3 mb-6 animate-fade-in">
          <Plane className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Wanderlust
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 font-light leading-relaxed">
          Discover breathtaking destinations around the globe
        </p>

        <button className="group flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <MapPin className="w-5 h-5 group-hover:animate-bounce" />
          Explore Destinations
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}
