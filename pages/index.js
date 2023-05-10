import Link from "next/link";

import Papa from "papaparse";
import Form from "./components/form/Form";
import JourneyListView from "./components/JourneyListView/JourneyListView";
import PaginationExample from "./components/test";
export default function Home() {
  return (
    <main className="">
      <JourneyListView />
      {/* <Form /> */}
    </main>
  );
}
/*
http://localhost:3001/
http://localhost:3001/

*/
