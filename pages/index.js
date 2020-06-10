import Head from "next/head";
import TreeView from "../components/TreeView";
import members from "../components/members";

export default function Home() {
  return <TreeView branches={members} />;
}
