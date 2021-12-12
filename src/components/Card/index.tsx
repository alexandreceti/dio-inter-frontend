import { CardContainer } from "./styles"

interface CardProps {
  width?: string;
  heigth?: string;
  noShadow?: boolean;
  children?: React.ReactNode;
}

export const Card = ({
  children,
  width="100%",
  heigth="auto",
  noShadow=false,
}:CardProps) => {
  return (
    <CardContainer width={width} heigth={heigth} noShadow={noShadow}>
      {children}
    </CardContainer>
  )
}

export default Card