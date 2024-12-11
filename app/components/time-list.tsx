import { useLoaderData } from "@remix-run/react";
import { LoaderPageUserId } from "../types/loader.pageUserId";
import { EmptyListWarning } from "./empty-list-warning";

export const TimeList = () => {
    const { times } = useLoaderData<LoaderPageUserId>();

    return (
        <ul className="h-32 lg:h-60 sm:h-48 flex justify-center items-center">
            {!times.length && <EmptyListWarning />}
        </ul>
    );
};
