import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions
            .filter((question) => question.isExtra === false)
            .map(({ question, answer }, index) => (
              <S.Question key={index}>
                <Heading lineBottom>{question}</Heading>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </S.Question>
            ))}
        </S.Questions>

        <S.ExtraQuestion>
          {questions
            .filter((question) => question.isExtra === true)
            .map(({ question, answer }, index) => (
              <S.Question key={index}>
                <Heading lineBottom>{question}</Heading>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </S.Question>
            ))}
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
