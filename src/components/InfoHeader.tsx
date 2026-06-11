import { MdDone } from "react-icons/md";

const InfoHeader = () => {
    return (
        <div className='w-full sticky top-0 h-11 flex justify-center z-50 bg-blue-950'>
            <div className="w-full max-w-7xl px-4 flex gap-2 items-center overflow-hidden">
                <MdDone className="text-green-600 size-5 shrink-0"/>
                <p className="text-white text-xs md:text-sm truncate">Veilig online betalen</p>
                <MdDone className="text-green-600 size-5 shrink-0 hidden sm:block"/>
                <p className="text-white text-xs md:text-sm hidden sm:block truncate">Gratis retourneren</p>
                <MdDone className="text-green-600 size-5 shrink-0 hidden md:block"/>
                <p className="text-white text-xs md:text-sm hidden md:block truncate">14 dagen bedenktijd</p>
            </div>
        </div>
    );
};

export default InfoHeader;