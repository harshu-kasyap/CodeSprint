import React from 'react';
import styled from 'styled-components';

const JudgesSection = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const JudgesHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color:#EDE7F6
  margin-bottom: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const JudgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-radius: 10px;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JudgeCard = styled.div`
  max-width: 280px;
  width: 100%;
  background: linear-gradient(135deg, #6A1B9A, #4A148C);
  color:#EDE7F6;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    width: 90%; 
    align-self: center; 
  }
`;

const JudgeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const JudgeInfo = styled.div`
  padding: 16px;
`;

const JudgeName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
`;

const JudgeTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #da4ea2;
`;

const JudgeDescription = styled.p`
  font-size: 0.9rem;
  color: #EDE7F6;
  line-height: 1.4;
  margin-bottom: 16px;
`;

const JudgeActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const JudgeButton = styled.a`
  background: linear-gradient(135deg, #F06292, #D81B60);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2438f;
  }
`;

const judges = [
  {
    name: "Mrs. Debmitra Ghosh",
    title: "Assistant Professor",
    image: "/img/j2.jpg",
    description: "Mrs. Debmitra Ghosh is an Assistant Professor in the Department of CSE at JIS University.. Specializing in AI/ML, she focuses on research and teaching in advanced algorithms and data-driven technologies.",
  },
  {
    name: "Dr. Radhakrishna Jana",
    title: "Assistant Professor",
    image: "/img/j4.jpg",
    description: "Dr. Radhakrishna Jana is an Assistant Professor in the Department of CSE at JIS University, with a specialization in AI and ML. His research and teaching center around advanced algorithms and data-driven techniques.",
  },
  {
    name: "Dr. Tanaya Das",
    title: "Assistant Professor",
    image: "/img/j5.jpg",
    description: "Dr. Tanaya Das is an Assistant Professor int the Department of CSE at JIS University, Kolkata, Specializing in Data Analytics, she focuses on research and teaching in advanced algorithms.",
  },
  {
    name: "Dr. Sonali Bhowmik",
    title: "Assistant Professor",
    image: "/img/j6.jpg",
    description: "Dr. Sonali Bhowmik is an Assistant Professor in the Department of CSE at JIS University, Kolkata,she has contributed to several innovative projects in IoT and Embedded Systems.",
  }
];

const Judges = () => {
  return (
    <JudgesSection>
      <JudgesHeading>Our Esteemed Judges</JudgesHeading>
      <JudgesContainer>
        {judges.map((judge, index) => (
          <JudgeCard key={index}>
            <JudgeImage src={judge.image} alt={judge.name} />
            <JudgeInfo>
              <JudgeName>{judge.name}</JudgeName>
              <JudgeTitle>{judge.title}</JudgeTitle>
              <JudgeDescription>{judge.description}</JudgeDescription>
              <JudgeActions>
              </JudgeActions>
            </JudgeInfo>
          </JudgeCard>
        ))}
      </JudgesContainer>
    </JudgesSection>
  );
};

export default Judges;
