import { EmptyListWarning } from "../empty-list-warning";

export const List = () => {
    return !times.length && <EmptyListWarning />;
};
