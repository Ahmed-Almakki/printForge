import Image from "next/image";
import { LiaSadTearSolid } from "react-icons/lia";

export default function EmptyPage() {
    return(
        <div className="flex flex-col items-center justify-center h-full w-full rounded-lg">
            <h2 className="text-2xl font-bold mb-4">No Models Found</h2>
            <LiaSadTearSolid  className="text-9xl"/>
        </div>
    );
}