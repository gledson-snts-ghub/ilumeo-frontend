import { useLoaderData } from "@remix-run/react";
import { LoaderPageUserId } from "../types/loader.pageUserId";
import { EmptyListWarning } from "./empty-list-warning";

export const TimeList = () => {
    const { times } = useLoaderData<LoaderPageUserId>();

    return <ul>{!times.length && <EmptyListWarning />}</ul>;
};
