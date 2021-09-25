import styled from 'styled-components'

const Title = styled.h1`
  font-size: 36px;
  bekcolor: ${({ theme }) => theme.colors.primary};
`
const Image = styled.img`
max-width: 64px;
border-radius: 100%;
margin-right: 16px;
`
const Container = styled.div`
display: flex;
align-items: center;
padding-top: 16px;
padding-bottom: 16px;
margin-bottom: 32px;
`

export default function Home() {
  return ( 
    <Container>
      <Image src="https://avatars.githubusercontent.com/u/88067039?v=4" /> 
      <Title>José Garcia </Title>
    </Container>
     )
  
}
