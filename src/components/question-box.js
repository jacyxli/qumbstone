import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Favorite from "@material-ui/icons/Favorite";
import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import IconButton from "@material-ui/core/IconButton";
import { navigate } from "gatsby";

import moment from "moment";

const QuestionRoot = styled.div`
  border: 1px solid #272727;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2rem;
  @media only screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #272727;
  color: #ffffff;
  width: 100%;
  border-radius: 5px 5px 0 0;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const QuestionBody = styled.div`
  color: #272727;
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
`;

const TrucatedQuestion = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: bold;
  margin-top: 1rem;
  white-space: break-spaces;
`;

const Question = styled.h4`
  font-weight: bold;
  margin-top: 1rem;
  white-space: break-spaces;
`;

const TrucatedAnswer = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: normal;
  font-size: 1.3rem;
  margin-top: 1rem;
  white-space: break-spaces;
`;

const Answer = styled.p`
  font-weight: normal;
  font-size: 1.3rem;
  margin-top: 1rem;
  white-space: break-spaces;
`;

const AnswerContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const TimeStamp = styled.p`
  text-align: right;
  margin-top: 15px;
  color: #717171;
`;

class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showQuestionOnly: this.props.showQuestionOnly };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.showQuestionOnly !== this.props.showQuestionOnly) {
      this.setState({ showQuestionOnly: this.props.showQuestionOnly });
    }
  }

  toggleFoldButton = () => {
    this.setState({
      showQuestionOnly: !this.state.showQuestionOnly,
    });
  };

  render() {
    const { data, showFullQuestion } = this.props;
    let questionBody, answerBody;
    if (data._highlightResult) {
      questionBody = data._highlightResult.body.value;
      answerBody = data._highlightResult.answer_body.value;
    } else {
      questionBody = data.body;
      answerBody = data.answer_body;
    }

    return (
      <QuestionRoot>
        <QuestionHeader>
          <Favorite
            style={{ color: "#FFFFFF", marginRight: "5px" }}
            fontSize="large"
          />
          <h4>{data.answer_likes_count}</h4>
          <span css={{ flex: 1 }}></span>
          {!showFullQuestion && (
            <IconButton
              onClick={this.toggleFoldButton}
              style={{ padding: "0" }}
            >
              {this.state.showQuestionOnly ? (
                <UnfoldMore style={{ color: "#FFFFFF" }} fontSize="large" />
              ) : (
                <UnfoldLess style={{ color: "#FFFFFF" }} fontSize="large" />
              )}
            </IconButton>
          )}
        </QuestionHeader>
        <QuestionBody
          css={
            !showFullQuestion
              ? css`
                  cursor: pointer;

                  &:hover {
                    color: #676767;
                  }
                `
              : ``
          }
          onClick={
            !showFullQuestion
              ? () => navigate(`/question/${data.uuid_hash}`)
              : undefined
          }
        >
          {showFullQuestion ? (
            <Question
              dangerouslySetInnerHTML={{ __html: questionBody }}
            ></Question>
          ) : (
            <TrucatedQuestion
              dangerouslySetInnerHTML={{ __html: questionBody }}
            ></TrucatedQuestion>
          )}

          {!this.state.showQuestionOnly && (
            <AnswerContainer>
              {showFullQuestion ? (
                <Answer
                  dangerouslySetInnerHTML={{ __html: answerBody }}
                ></Answer>
              ) : (
                <TrucatedAnswer
                  dangerouslySetInnerHTML={{ __html: answerBody }}
                ></TrucatedAnswer>
              )}

              <TimeStamp>
                {"Posted at " +
                  moment(data.answer_created_at).format("YYYY-MM-DD HH:mm")}
              </TimeStamp>
            </AnswerContainer>
          )}
        </QuestionBody>
      </QuestionRoot>
    );
  }
}

QuestionBox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default QuestionBox;
