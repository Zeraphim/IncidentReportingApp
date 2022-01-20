import Map from "../components/map";

const Maps = dynamic(() => import("../components/map"), {
  loading: () => "Loading...",
  ssr: false,
});
