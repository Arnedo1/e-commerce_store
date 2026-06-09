import { MdDone } from "react-icons/md";

const InfoHeader = () => {
    return (
        <div className='w-full sticky top-0 h-11 flex justify-center z-50 bg-blue-950'>
            <div className="w-314 px-11 flex gap-2 items-center">
                <MdDone className="text-green-600 size-6"/>
                <p className="text-white">Veilig online betalen of achteraf op factuur</p>
                <MdDone className="text-green-600 size-6"/>
                <p className="text-white">Gratis retourneren</p>
                <MdDone className="text-green-600 size-6"/>
                <p className="text-white">14 dagen bedenktijd</p>
            </div>
        </div>
    );
};

export default InfoHeader;