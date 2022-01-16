import Map from "../components/map";

const map = dynamic(() => import("../components/map"), {
  loading: () => "Loading...",
  ssr: false,
});
