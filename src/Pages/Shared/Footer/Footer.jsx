import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogo, PiYoutubeLogoLight } from "react-icons/pi";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0B0C14]">
                <div className="mx-auto max-w-screen-2xl px-5 py-24 sm:px-6 lg:px-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="">
                            <div className="text-white font-bold text-xl flex gap-2 ">
                                <div className='border border-[#EAECF0 bg-[#EAECF0] p-5 rounded-full'>
                                </div>
                                <div>
                                    <h2 className="mt-1.5 text-[#FCFCFD]">ASK-Ai</h2>
                                </div>
                            </div>
                            <div>
                                <p className="text-white py-4">Copyright © 2024 www.askai.ai | All Rights Reserved.</p>
                            </div>
                        </div>

                        <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                            <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Facebook</span>

                                <PiFacebookLogo className="w-6 h-6 text-white" />
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Twitter</span>

                                <CiTwitter className="w-6 h-6 text-white"/>
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>

                                <FaInstagram className="w-6 h-6 text-white" />
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Linkedin</span>

                                <CiLinkedin className="w-6 h-6 text-white" />
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75"
                            >
                                <span className="sr-only">Youtube</span>

                                <PiYoutubeLogoLight className="w-6 h-6 text-white" />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
