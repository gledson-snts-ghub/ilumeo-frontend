import { TimeTracking } from "../components/time-tracking";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blueDark to-dark">
            <TimeTracking />
        </div>
    );
}
