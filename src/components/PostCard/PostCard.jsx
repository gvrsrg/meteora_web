import React from "react";
import post from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";
import PostButton from "../PostButton/PostButton";

export default function Post(props) {
	const navigate = useNavigate();

	return (
		<div
			className={post.post}
			onClick={(e) => navigate("/p/" + props.postId)}
		>
			<img src={props.icon} alt="" />
			<div className={post.title}>{props.title}</div>
			<div className={post.desc}>{props.content}</div>

			<div className={post.buttons}>
				<PostButton
					icon={props.isLiked ? "like" : "unlike"}
					val={props.likes}
				/>
				<PostButton icon="comment" val={props.comments} />
			</div>
		</div>
	);
}
