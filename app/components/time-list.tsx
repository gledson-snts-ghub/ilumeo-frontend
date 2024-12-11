import { useLoaderData } from "@remix-run/react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { LoaderPageUserId } from "../types/loader.pageUserId";
import { EmptyListWarning } from "./empty-list-warning";

export const TimeList = () => {
    const { times } = useLoaderData<LoaderPageUserId>();

    return !times.length ? (
        <EmptyListWarning />
    ) : (
        <section className="flex flex-col gap-4">
            <p className="font-bold">Registros:</p>
            <ul className="flex flex-col gap-4 overflow-scroll overflow-x-hidden custom-scrollbar scroll-padding-right">
                {times.map((time) => (
                    <li
                        key={time.id}
                        className="flex justify-between w-full bg-dark h-min px-5 py-3 rounded-lg"
                    >
                        <div className="flex justify-between items-center gap-4">
                            <FiCalendar className="text-xl" />
                            <span className="font-bold">{time.date}</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <span className="font-bold">
                                {time.hours_worked}
                            </span>
                            <FiClock className="text-xl" />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
