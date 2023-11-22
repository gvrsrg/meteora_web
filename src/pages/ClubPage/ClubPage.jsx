import React from "react";
import club from "./ClubPage.module.css";
import { useParams } from "react-router-dom";

export default function ClubPage() {
	const { clubId } = useParams();

	return <div>{clubId}</div>;
}
