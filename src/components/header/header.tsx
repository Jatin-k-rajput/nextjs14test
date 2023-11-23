// Header.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image className="h-8 mr-2"
                        src="/images/logo.svg"
                        alt="Description of the image"
                        width={60}
                        height={60}
                    />
                </div>
                <nav className="flex items-center space-x-4">
                    <Link className="hover:text-gray-300" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-gray-300" href="/">
                        About
                    </Link><Link className="hover:text-gray-300" href="/">
                        Resources
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
