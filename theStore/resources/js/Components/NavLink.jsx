import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? ' text-gray-200 focus:border-indigo-700 '
                    : 'border-transparent text-white hover:text-gray-200 hover:border-gray-300 focus:text-gray-700  ') +
                className
            }
        >
            {children}
        </Link>
    );
}
