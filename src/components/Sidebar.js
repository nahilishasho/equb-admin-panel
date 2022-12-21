import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';

import EqubPicture from '../assets/img/EqubImage.png';
import Image from '@material-tailwind/react/Image';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`bg-gray-200 h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://material-tailwind.com?ref=mtd"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        {/* <H6 color="gray">Material Tailwind</H6> */}
                        <div >
                            <Image src={EqubPicture}  />
                        </div>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex item-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink>
                                    <Icon name = "menu" size = "2xl"></Icon>
                                </NavLink>
                            </li> */}
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/equbs"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="group" size="2xl" />
                                    Equbs
                                </NavLink>
                            </li>
                           
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/advertisements"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="mic" size="2xl" />
                                    advertisement
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                            <NavLink
                                    to="/feedbacks"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="message" size="2xl" />
                                    feedback
                                </NavLink>
                            </li>
                            <hr className="my-3  min-w-full rounded-lg" color = "blue"/>
                            <li className="rounded-lg mb-2 text-gray-700">
                            <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="settings" size="2xl" />
                                    settings
                                </NavLink>
                            </li>
                           
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            {/* <li className="bg-gradient-to-tr from-blue-500 to-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Equb Regulations
                                </a>
                            </li> */}
                            <li className="bg-gradient-to-tr from-blue-500 to-blue-700 px-4 rounded-lg text-white mb-2">
                            <NavLink
                                    to="/equbRegulations"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Equb Regulations
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
