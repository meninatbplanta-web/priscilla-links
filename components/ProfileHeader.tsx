import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-8 px-4 pt-10">
      <div className="relative mb-4 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="https://priscilla-moreira.com/imagens/priscilla-pdv-3.webp" 
            alt="Priscilla Moreira"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Verification Badge */}
        <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Verificado">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.751zM11 8a1 1 0 00-2 0v4a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414l-1.414-1.414V8z" clipRule="evenodd" />
             <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Priscilla Moreira</h1>
      <span className="text-sm font-semibold text-red-600 tracking-wide uppercase mb-3">Psicoterapeuta & Analista Corporal</span>
      
      <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
        Especialista em entender como as emoções moldam o corpo físico. 
        Transformando traços de caráter em ferramentas de cura e autoconhecimento.
      </p>
    </div>
  );
};

export default ProfileHeader;