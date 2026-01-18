import React from 'react';

const SocialFooter: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/priscillamoreira__/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.045c.636-.247 1.363-.416 2.427-.465C8.901 1.534 9.256 1.534 12.315 2zm-4.192 3.29c-2.293 0-4.153 1.86-4.153 4.153v5.114c0 2.293 1.86 4.153 4.153 4.153h5.114c2.293 0 4.153-1.86 4.153-4.153V9.443c0-2.293-1.86-4.153-4.153-4.153H8.123zm4.153 2.195a4.067 4.067 0 110 8.134 4.067 4.067 0 010-8.134zm0 2.185a1.882 1.882 0 100 3.764 1.882 1.882 0 000-3.764zM16.92 6.42a.656.656 0 110 1.312.656.656 0 010-1.312z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@priscilamoreira.oficial/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
           <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCcDR1K9WU5AniEq5jW7Ug7A',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="mt-12 pb-8 flex flex-col items-center">
      <div className="flex space-x-6 mb-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-xs text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Priscilla Moreira.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default SocialFooter;