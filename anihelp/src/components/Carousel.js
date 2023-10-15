import React, { useState, useEffect } from 'react';
import News from './News';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <News
      key={1}
      url="https://timesofindia.indiatimes.com/city/mangaluru/new-viral-disease-in-Asian-sea-bass-detected-by-fisheries-college-in-Mangaluru"
      title="New viral disease in Asian sea bass detected by fisheries college in Mangaluru"
      summery="The department of Aquatic Animal Health Management (AAHM) in the College of Fisheries, Mangaluru has detected a new viral disease in Asian sea bass, hitherto unknown in Indian waters."
      imgSrc="https://cdn.discordapp.com/attachments/1151109613933052029/1162837285709037719/72494556.png?ex=653d639d&is=652aee9d&hm=033096c1da0f9e9bd47100654931a51feb1f77d99de0b74427820e6c05f9f408&"
    />,
    <News
      key={2}
      url="https://timesofindia.indiatimes.com/world/us/deadly-bird-flu-reappears-in-US-commercial-poultry-flocks-in-Utah-and-South-Dakota"
      title="Deadly bird flu reappears in US commercial poultry flocks in Utah and South Dakota"
      summery="Highly pathogenic bird flu has reappeared in commercial poultry flocks in the US. Two turkey farms in South Dakota and Utah have been affected. This is the first reported outbreak since April when two turkey farms in the Dakotas were hit."
      imgSrc="https://cdn.discordapp.com/attachments/1151109613933052029/1162837079013732462/104326491.png?ex=653d636c&is=652aee6c&hm=cc0cce8a261684f4c77ce1c73a0122c928fea2f6f20c58c98e1fbdc5b98a97ef&"
    />,
    <News
      key={3}
      url="https://www.thesprucepets.com/do-pets-get-seasonal-affective-disorder-7100566"
      title="Can Pets Get Seasonal Affective Disorder?"
      summery='Most of us have heard of seasonal affective disorder, a condition sometimes called the "winter blues." But can this condition affect dogs, cats, and other pets? You may have noticed your pet acting differently during winter months.'
      imgSrc="https://cdn.discordapp.com/attachments/1151109613933052029/1162837587044610068/GettyImages-1422718847-1c53bc6c20254c449e4738b12d40f12d.png?ex=653d63e5&is=652aeee5&hm=e35951f43c27d199b7ef2fe51373c6c833ef4acf38af8180b10bd297db353b27&"
    />,
  ];

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    const interval = setInterval(() => {
      setCurrentSlide(nextSlide);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length, currentSlide]);

  return (
    <div className="relative w-full">
      <div className="relative h-96 overflow-hidden rounded-lg">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-2xl p-4 bg-white px-2">
            {slides[currentSlide]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
