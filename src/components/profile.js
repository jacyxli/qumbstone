import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const ProfileRoot = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ProfileImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 1rem;
`;

const ProfileText = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
export default function Profile(props) {
  return (
    <ProfileRoot>
      <ProfileImageContainer>
        <StaticImage
          src="../images/paddy_joy_profile.png"
          alt="paddy_joy profile picture"
          placeholder="blurred"
          layout="fixed"
          width={60}
          height={60}
        />
        <ProfileNameContainer>
          <h3>中田</h3>
          <h4>paddy_joy</h4>
        </ProfileNameContainer>
      </ProfileImageContainer>
      <ProfileText>
        <h5>
          サラリーマン。一児の父。金融周りのメモと育児関連のつぶやきと読んだ本の感想とマンションの情報収集のツイートが多めです。たまに映画ネタ。
        </h5>
      </ProfileText>
    </ProfileRoot>
  );
}
