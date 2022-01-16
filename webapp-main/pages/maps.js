import Map from "../components/map";

const Map= dynamic(() => import("../components/map"), {
    loading: () => "Loading...",
    ssr:false
});