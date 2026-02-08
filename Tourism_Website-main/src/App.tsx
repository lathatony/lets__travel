import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import ImageGallery from './components/ImageGallery';
import VideoTour from './components/VideoTour';
import { Globe, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const destinations = [
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    description: 'Experience the iconic white-washed buildings and stunning sunsets over the Aegean Sea. A paradise for romance and photography.',
    highlights: ['Sunset Views', 'Beach Paradise', 'Historic Sites']
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    description: 'Discover ancient temples, lush rice terraces, and pristine beaches. A spiritual journey combined with natural beauty.',
    highlights: ['Temple Tours', 'Surfing', 'Wellness Retreats']
  },
  {
    name: 'Machu Picchu',
    country: 'Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    description: 'Walk among the ancient Incan ruins high in the Andes Mountains. An unforgettable adventure through history.',
    highlights: ['Historic Wonder', 'Hiking Trails', 'Mountain Views']
  },
  {
    name: 'Maldives',
    country: 'Indian Ocean',
    image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5.0,
    description: 'Escape to crystal-clear waters, overwater bungalows, and vibrant coral reefs. The ultimate tropical paradise.',
    highlights: ['Luxury Resorts', 'Diving & Snorkeling', 'Private Islands']
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    description: 'Immerse yourself in the perfect blend of traditional culture and cutting-edge technology in this vibrant metropolis.',
    highlights: ['City Culture', 'Modern Tech', 'Cherry Blossoms']
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    description: 'Marvel at majestic peaks, pristine lakes, and charming alpine villages. A year-round destination for adventure seekers.',
    highlights: ['Skiing', 'Mountain Hiking', 'Scenic Railways']
  }
];

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Northern Lights in Iceland'
  },
  {
    url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Tropical Paradise Beach'
  },
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Ancient Temple Architecture'
  },
  {
    url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920',
    caption: 'Mountain Lake Reflection'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of the world's most stunning travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery of Dreams
            </h2>
            <p className="text-xl text-gray-600">
              Explore breathtaking views from around the world
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Virtual Tours
          </h2>
          <p className="text-xl text-gray-600">
            Experience destinations from the comfort of your home
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VideoTour
            title="Explore Paris in 8K"
            videoId="GzvL_25s2ss"
            description="Take a stunning virtual walk through the City of Light, from the Eiffel Tower to the charming streets of Montmartre."
          />
          <VideoTour
            title="Discover Iceland's Wonders"
            videoId="JHbJLNSa6iA"
            description="Journey through Iceland's dramatic landscapes, from cascading waterfalls to the mesmerizing Northern Lights."
          />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Wanderlust</h3>
              </div>
              <p className="text-gray-400">
                Your gateway to discovering the world's most amazing destinations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
