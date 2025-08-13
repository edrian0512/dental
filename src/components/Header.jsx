import { Hospital, Menu, PhoneCall, X } from 'lucide-react';
import { useState } from 'react';

const navlist = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#tips', label: 'Tips' },
    { href: '#book', label: 'Book' },
    { href: '#testimonials', label: 'Testimonials' },
];

const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    // Smooth scroll with offset for sticky header
    const smoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        const headerOffset = 80; // Adjust to match your header height
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        setisMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <header className='scroll-mt-20 bg-white shadow-md sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-4 lg:px-8'>
                <div className='flex items-center space-x-2'>
                    <Hospital className='w-8 h-8 text-sky-600' />
                    <span className='text-xl font-bold text-sky-600'>Dental Clinic</span>
                </div>

                {/* Desktop Menu */}
                <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
                    {navlist.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            onClick={(e) => smoothScroll(e, link.href)}
                            className='hover:text-sky-600 transition'
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Book Appointment Button */}
                <div className='hidden md:flex items-center space-x-2'>
                    <PhoneCall className='text-sky-600' />
                    <a
                        href='#book'
                        onClick={(e) => smoothScroll(e, '#book')}
                        className='bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm'
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden'>
                    <button onClick={() => setisMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className='text-gray-700' /> : <Menu className='text-gray-700' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-x-3 text-gray-700 font-medium'>
                    {navlist.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            onClick={(e) => smoothScroll(e, link.href)}
                            className='block hover:text-sky-600 transition'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
