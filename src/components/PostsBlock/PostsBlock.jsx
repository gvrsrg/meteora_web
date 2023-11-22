import React from "react";
import Post from "../PostCard/PostCard";
import { get_posts } from "../../js/api";
import grid from "./PostsBlock.module.css";
import { useEffect, useState } from "react";
import preloader from "../../assets/preloader.svg";

export default function PostsBlock({ title }) {
	const [start, setStart] = useState(0);
	const [posts, setPosts] = useState(false);

	useEffect(() => {
		get_posts(start).then((posts) => setPosts(posts));
	}, [start]);

	return (
		<div className={grid.block}>
			<div className={grid.title}>{title}</div>
			<div className={grid.list}>
				{!posts ? (
					<img alt="" src={preloader} className={grid.preloader} />
				) : typeof posts === "string" ? (
					<div className={grid.placeholder}> {posts} </div>
				) : (
					posts.map((post) => <Post key={post.postId} {...post} />)
				)}

				<div className="observer">...</div>
			</div>
		</div>
	);
}
