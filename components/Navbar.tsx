// import Image from 'next/image'
// import Link from 'next/link'
// import Searchbar from './Searchbar'

// const navIcons = [
  
//   { src: '/assets/icons/black-heart.svg', alt: 'heart' },
//   { src: '/assets/icons/user.svg', alt: 'user' },
// ]

// const Navbar = () => {
//   return (
//     <header className="w-full">
//       <nav className="nav">
//         <Link href={Searchbar} className="flex items-center gap-1">
//           <Image 
//             src="/assets/icons/logo.svg"
//             width={27}
//             height={27}
//             alt="logo" //pricewise ka logo 
//           />

//           <p className="nav-logo">
//             Price<span className='text-primary'>Hunt</span>
//           </p>
//         </Link>

//         <div className="flex items-center gap-5">
//           <Link href="/" >
//             <Image
//             src= "/assets/icons/search.svg"
//             width={28}
//             height={28}
//             alt= 'search' 
//             />
//           </Link>

//           {navIcons.map((icon) => (
//             <Image 
//               key={icon.alt}
//               src={icon.src}
//               alt={icon.alt}

//               width={28}
//               height={28}
//               className="object-contain"
//             />
//           ))}
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar

"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './Searchbar';

const navIcons = [
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const Navbar = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);

  const toggleSearchbar = () => {
    setShowSearchbar((prev) => !prev);
  };

  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="PriceHunt logo"
          />
          <p className="nav-logo">
            Deal<span className="text-primary">Zap</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <div onClick={toggleSearchbar} style={{ cursor: 'pointer' }}>
            <Image
              src="/assets/icons/search.svg"
              width={28}
              height={28}
              alt="search"
            />
          </div>

          {/* Other Icons */}
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>

      {/* Conditionally Render Searchbar */}
      {showSearchbar && <Searchbar />}
    </header>
  );
};

export default Navbar;
