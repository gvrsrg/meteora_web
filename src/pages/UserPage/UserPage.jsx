import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
    const { userId } = useParams();
    
    return (
        <div>{userId}</div>
    )
}