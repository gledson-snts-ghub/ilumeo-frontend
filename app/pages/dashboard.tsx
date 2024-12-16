import { TimeTracking } from "->components/time-tracking";

export default function Dashboard() {
    return (
        <div className="max-h-screen h-screen flex justify-center bg-gradient-to-b from-blueDark to-dark px-8">
            <TimeTracking />
        </div>
    );
}
