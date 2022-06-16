import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import Favorite from "@material-ui/icons/Favorite";
import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import IconButton from "@material-ui/core/IconButton";

import moment from "moment";

const QuestionRoot = styled.div`
  border: 1px solid #272727;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
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

const Question = styled.h4`
  font-weight: bold;
`;

const Answer = styled.p`
  font-weight: normal;
  font-size: 1.3rem;
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
    this.state = { folded: false };
  }

  toggleFoldButton = () => {
    this.setState({
      folded: !this.state.folded,
    });
  };

  render() {
    const { data } = this.props;
    return (
      <QuestionRoot>
        <QuestionHeader>
          <Favorite
            style={{ color: "#FFFFFF", marginRight: "5px" }}
            fontSize="large"
          />
          <h4>{data.answer_likes_count}</h4>
          <span css={{ flex: 1 }}></span>
          <IconButton onClick={this.toggleFoldButton} style={{ padding: "0" }}>
            {this.state.folded ? (
              <UnfoldMore style={{ color: "#FFFFFF" }} fontSize="large" />
            ) : (
              <UnfoldLess style={{ color: "#FFFFFF" }} fontSize="large" />
            )}
          </IconButton>
        </QuestionHeader>
        <QuestionBody>
          <Question>{data.body}</Question>
          {!this.state.folded && (
            <AnswerContainer>
              <Answer>{data.answer_body}</Answer>
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
