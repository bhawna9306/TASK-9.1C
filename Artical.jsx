import React, { useState } from "react";
import { app, db } from "./utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import "./Artical.css"

const Q_A = collection(db, "Q_A");

function Article() {
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tag, setTag] = useState('');
  
    const handleTagChange = (value) => {
      setTag(value);
    };
  
    const handlePostArticle = () => {
      console.log({ title, abstract, articleText, tag });
    };
  
    return (
      <div className="Article">
        <div className="form-field">
          <label className="label-tag" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field Title"  // Add "Title" class here
          />
        </div>
        <div className="form-field">
          <label className="label-tag" htmlFor="abstract">Abstract</label>
          <textarea
            id="abstract"
            placeholder="Enter a 1-paragraph abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            className="text-area" 
          />
        </div>
        <div className="form-field">
          <label className="label-tag" htmlFor="articleText">Article Text</label>
          <textarea
            id="articleText"
            placeholder="Enter the article text"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            className="text-area" 
          />
        </div>
        <div className="form-field">
          <label className="label-tag" htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            placeholder="Please add up to 3 tags to describe what your Article is about e.g., java"
            value={tag}
            onChange={(e) => handleTagChange(e.target.value)}
            className="input-field Tags"  // Add "Tags" class here
          />
        </div>
        <div>
          <button onClick={handlePostArticle}>POST</button>
        </div>
      </div>
    );
  }
  
  export default Article;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  