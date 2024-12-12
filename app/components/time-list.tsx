import { useLoaderData } from "@remix-run/react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { LoaderPageUserId } from "../types/loader.pageUserId";
import { EmptyListWarning } from "./empty-list-warning";

export const TimeList = () => {
    const { times } = useLoaderData<LoaderPageUserId>();

    return !times.length ? (
        <EmptyListWarning />
    ) : (
        <main className="flex flex-col gap-4 overflow-y-scroll">
            <p className="font-bold">Registros:</p>
            <ul className="flex flex-col gap-4">
                {times.map((time) => (
                    <li
                        key={time.id}
                        className="flex justify-between w-full bg-dark h-min px-5 py-3 rounded-lg flex-wrap"
                    >
                        <div className="flex justify-between items-center gap-4 flex-wrap">
                            <FiCalendar className="text-xl" />
                            <span className="font-bold">{time.date}</span>
                        </div>
                        <div className="flex justify-between items-center gap-4 flex-wrap">
                            <span className="font-bold">
                                {time.hours_worked}
                            </span>
                            <FiClock className="text-xl" />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};
