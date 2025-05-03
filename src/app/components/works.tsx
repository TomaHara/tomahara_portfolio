'use client';

import { useState } from 'react';
import Image from 'next/image';
import CardDetail from './work/CardDetail';
import { Work } from '@/types';

type CardProps = {
  work: Work;
  onClick: () => void;
};

const Card = ({ work, onClick }: CardProps) => {
  const { tags, title, description, imageUrls } = work;

  return (
    <article
      className="flex flex-col items-center justify-start aspect-5/6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full mb-6 aspect-[5/3] rounded-lg overflow-hidden">
        <Image
          src={imageUrls[0]}
          alt={title}
          fill={true}
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <p className="self-start mb-2 text-[#3FABB9] text-sm font-medium">
        {tags.map((tag) => `#${tag}`).join('　')}
      </p>
      <h2 className="w-full mb-2 font-semibold text-xl sm:text-2xl text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 sm:line-clamp-4 lg:line-clamp-6">
        {description}
      </p>
    </article>
  );
};

export default function Works({ works }: { works: Work[] }) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleCardClick = (work: Work) => {
    setSelectedWork(work);
  };

  const handleCloseDetail = () => {
    setSelectedWork(null);
  };

  return (
    <section
      id="works"
      className="mt-20 flex flex-col items-center justify-center gap-6 sm:gap-12 text-left p-5"
    >
      <h1 className="w-full font-bold text-3xl sm:text-4xl underline-offset-3 underline decoration-2">
        Works
      </h1>
      <div className="w-full flex flex-col sm:grid grid-cols-2 gap-12">
        {works.map((work, index) => (
          <Card key={index} work={work} onClick={() => handleCardClick(work)} />
        ))}
      </div>

      {selectedWork && (
        <CardDetail {...selectedWork} onClose={handleCloseDetail} />
      )}
    </section>
  );
}
