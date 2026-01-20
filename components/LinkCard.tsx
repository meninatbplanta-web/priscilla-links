import React from 'react';
import { LinkItemProps } from '../types';

const LinkCard: React.FC<LinkItemProps> = ({
  title,
  description,
  details,
  url,
  price,
  isHighlight,
  tag,
  buttonText = "Saiba Mais",
  variant = 'default',
  image
}) => {
  const isDark = variant === 'dark';

  const containerClasses = isDark
    ? 'bg-gray-900 border-gray-700 shadow-xl'
    : isHighlight
      ? 'bg-white border-2 border-red-500 shadow-red-100'
      : 'bg-white border border-gray-200 shadow-sm hover:border-gray-300';

  const titleClasses = isDark ? 'text-white' : (isHighlight ? 'text-red-600' : 'text-gray-800');
  const descClasses = isDark ? 'text-gray-300' : 'text-gray-600';
  const detailListClasses = isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-500';
  const priceLabelClasses = isDark ? 'text-gray-400' : 'text-gray-400';
  const priceValueClasses = isDark ? 'text-white' : 'text-gray-900';

  const buttonClasses = isDark
    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-md'
    : isHighlight
      ? 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-200'
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative block w-full mb-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
        ${containerClasses}
      `}
    >
      {tag && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          {tag}
        </span>
      )}

      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-5">
        <h3 className={`text-lg font-bold mb-2 text-center ${titleClasses}`}>
          {title}
        </h3>

        {description && (
          <p className={`${descClasses} text-sm mb-3 text-center leading-relaxed`}>
            {description}
          </p>
        )}

        {details && details.length > 0 && (
          <ul className={`text-xs mb-4 space-y-1 p-3 rounded-lg mx-auto max-w-xs ${detailListClasses}`}>
            {details.map((detail, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                {detail}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col items-center justify-center mt-2 space-y-3">
          {price && (
            <div className="text-center">
              <span className={`block text-xs ${priceLabelClasses}`}>Investimento</span>
              <span className={`text-lg font-bold ${priceValueClasses}`}>{price}</span>
            </div>
          )}

          <div className={`
            w-full py-3 px-6 rounded-xl font-bold text-center text-sm transition-colors
            ${buttonClasses}
          `}>
            {buttonText}
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;