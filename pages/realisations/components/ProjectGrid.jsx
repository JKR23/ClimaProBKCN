import Image from 'next/image';

export default function ProjectGrid({ projets }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projets.map((projet, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            style={{ aspectRatio: '5 / 3' }}
          >
            <Image
              src={projet.image}
              alt={projet.titre}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold">{projet.titre}</h3>
                <p className="mt-2">{projet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
