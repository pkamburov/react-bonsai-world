// 'use client'

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LoginButton } from './LoginButton'

const navigation = {
    pages: [
        { name: 'Bonsai care', href: '/bonsai-care' },
        { name: 'Bonsai styling', href: '/bonsai-styling' },
        { name: 'Tree species', href: '/tree-species' },
    ],
}

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="navigation z-50">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Links */}

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <Link to="/login" className="-m-2 block px-2 py-4 font-medium text-gray-900 text-[0.82em]">
                                    Login
                                </Link>
                            </div>
                            <div className="flow-root">
                                <a href="/register" className="-m-2 block p-2 font-medium text-white bg-emerald-600">
                                    Register
                                </a>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="header-menu z-50 mt-10 relative">
                <nav aria-label="Top" className="bg-white rounded top-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-md">
                    <div className="p-2">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <span className="sr-only">Bonsai World</span>
                                    <img
                                        alt=""
                                        src="../src/assets/bonsai-world-white.png"
                                        className="h-12 w-auto"
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="font-body flex items-center font-semibold text-[1em] tracking-[0.444px] text-light-gray hover:text-gray-800 border-b-2 border-transparent focus:border-green-500"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {isAuthenticated
                                        ? (
                                            <div id="guest" className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                                <Link to='/create' className='font-body px-4 py-2 text-[0.92em] font-semibold bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase'>
                                                    Create guide
                                                </Link>
                                                <Link to='/logout' className='px-4 py-2 text-[0.92em] font-semibold border-2 border-slate-300 text-gray-700 hover:bg-gray-100 rounded-lg uppercase'>
                                                    Logout
                                                </Link>
                                            </div>
                                        )
                                        : (
                                            <>
                                                <LoginButton />
                                                <div id="user" className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                                    <Link to="/register" className="font-body px-4 py-2 text-[0.92em] font-semibold bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase">
                                                        Register
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
