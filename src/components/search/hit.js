import React from "react";
import QuestionBox from "../question-box";

export default function Hit({ hit, showQuestionOnly }) {
  return (
    <article>
      <QuestionBox showQuestionOnly={showQuestionOnly} data={hit}></QuestionBox>
    </article>
  );
}
