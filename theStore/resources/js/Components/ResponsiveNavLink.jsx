import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 text-white ${
                active
                    ? 'border-indigo-400 text-white bg-indigo-50  focus:border-indigo-700'
                    : 'border-transparent bg-white text-white hover:text-gray-300 hover:bg-gray-50 hover:border-gray-300  focus:bg-gray-50 focus:border-gary-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
