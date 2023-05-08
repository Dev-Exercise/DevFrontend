import Link from "next/link";

import Papa from "papaparse";
import Form from "./components/form/Form";
import JourneyListView from "./components/JourneyListView/JourneyListView";
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
https://journey-backend-7be5.onrender.com/

*/
