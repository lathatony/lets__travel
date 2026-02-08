import { Play } from 'lucide-react';

interface VideoTourProps {
  title: string;
  videoId: string;
  description: string;
}

export default function VideoTour({ title, videoId, description }: VideoTourProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative aspect-video bg-gray-900">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-white p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
