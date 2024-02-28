import styled from "styled-components";

export const CommitSquare = ({ color }: { color: string }) => {
  return <StyledCommitSquare color={color} />;
};
interface StyledCommitSquareProps {
  color?: string;
}

const StyledCommitSquare = styled.div<StyledCommitSquareProps>`
  height: 0.75em;
  width: 0.75em;
  border-radius: 1px;
  margin: 2px;
  background-color: ${(props) => props.color || "inherit"};
`;

export default StyledCommitSquare;
