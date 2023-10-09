import React, { useState } from "react";
import { db } from "./utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";

import "./Question.css";

const Q_A = collection(db, "Q_A");

function Question() {
    const [title, setTitle] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [tag, setTag] = useState('');
  
    const handleTagChange = (value) => {
      setTag(value);
    };
  
    const handlePostArticle = () => {
      console.log({ title,  questionText, tag });
    };
  
    return (
      <div className="Question">
        <div className="form-field">
          <label className="label-tag Class" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Start your question with how, what, why, etc."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field Title"
          />
        </div>
        <div className="form-field">
          <label className="label-tag Class" htmlFor="abstract">
            Description
          </label>
          <textarea
            id="questionText"
            placeholder="Describe your problem"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="text-area Description" // Change the class to "Description"
          />
        </div>
        <div className="form-field">
          <label className="label-tag Class" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            placeholder="Please add up to 3 tags to describe what your Question is about e.g., java"
            value={tag}
            onChange={(e) => handleTagChange(e.target.value)}
            className="input-field Tags"
          />
        </div>
        <div>
          <button className="post" onClick={handlePostArticle}>
            POST
          </button>
        </div>
      </div>
    );
  }
  
  export default Question;
  