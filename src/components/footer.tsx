import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="flex flex-col justify-around">

                <div className="flex justify-center mb-6">
                    <p className="text-sm text-center">
                        © 2024 Jefferson Max. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex justify-center gap-6">

                    <Link href="https://www.tiktok.com/@devjef" passHref target="_blank">
                        <div className="w-12 h-8">
                            <Image
                                src="/icons-redes-sociales/icon-tiktok.png" // Cambia la ruta según tus íconos
                                alt="tiktok"
                                width={100}
                                height={100}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </Link>

                    <Link href="https://www.youtube.com/@JeffDevCode" passHref target="_blank">
                        <div className="w-12 h-8">
                            <Image
                                src="/icons-redes-sociales/icon-youtube.png" // Cambia la ruta según tus íconos
                                alt="youtube"
                                width={100}
                                height={100}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                    <Link href="https://github.com/jefri1234" passHref target="_blank">
                        <div className="w-12 h-8">
                            <Image
                                src="/icons/githab.png" // Cambia la ruta según tus íconos
                                alt="youtube"
                                width={100}
                                height={100}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </Link>

                    <Link href="https://www.linkedin.com/in/jefferson-obregon-mejia-2245842b0/" passHref target="_blank">
                        <div className="w-12 h-8">
                            <Image
                                src="/icons-redes-sociales/icon-linkeding.png" // Cambia la ruta según tus íconos
                                alt="linkedin"
                                width={100}
                                height={100}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                </div>

            </div>
        </footer>
    );
}
