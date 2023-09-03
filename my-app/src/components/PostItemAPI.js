import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const { id, user, type, tags, webformatURL } = post
            return <div className={css.SearchItem} key={id}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt="random"/>
                <p>{description}</p>
            </div>
            }
        )
    )
}

export default PostItem